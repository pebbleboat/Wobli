"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Frame =
  | { kind: "bitmap"; img: ImageBitmap }
  | { kind: "element"; img: HTMLImageElement; url: string };

async function decodeBlob(blob: Blob): Promise<Frame> {
  try {
    const img = await createImageBitmap(blob);
    return { kind: "bitmap", img };
  } catch {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.decoding = "async";
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("img decode failed"));
      img.src = url;
    });
    return { kind: "element", img, url };
  }
}

function releaseFrame(f: Frame) {
  if (f.kind === "bitmap") {
    try {
      f.img.close();
    } catch {
      // ignore
    }
  } else {
    URL.revokeObjectURL(f.url);
  }
}

export function useFrameSequence(name: string) {
  const blobs = useRef<(Blob | null)[]>([]);
  const frames = useRef<Map<number, Frame>>(new Map());
  const decoding = useRef<Set<number>>(new Set());
  const countRef = useRef(0);
  const lastProgress = useRef(0);
  const activeCanvas = useRef<HTMLCanvasElement | null>(null);
  const [ready, setReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [renderTrigger, setRenderTrigger] = useState(0);

  const drawFrame = useCallback((canvas: HTMLCanvasElement | null, frame: Frame | null) => {
    if (!canvas || !frame) return;
    const src = frame.img;
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    const cw = Math.round(canvas.clientWidth * dpr) || 400;
    const ch = Math.round(canvas.clientHeight * dpr) || 400;

    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, cw, ch);
    const s = Math.min(cw / src.width, ch / src.height);
    const w = src.width * s;
    const h = src.height * s;
    ctx.drawImage(src, (cw - w) / 2, (ch - h) / 2, w, h);
  }, []);

  const decode = useCallback((i: number) => {
    if (
      frames.current.has(i) ||
      decoding.current.has(i) ||
      !blobs.current[i]
    ) {
      return;
    }
    decoding.current.add(i);
    decodeBlob(blobs.current[i]!)
      .then((f) => {
        frames.current.set(i, f);
        // If this decoded frame is close to current progress, draw it immediately
        const currentTarget = Math.round(lastProgress.current * (countRef.current - 1));
        if (Math.abs(currentTarget - i) <= 2 && activeCanvas.current) {
          drawFrame(activeCanvas.current, f);
        }
      })
      .catch(() => {})
      .finally(() => decoding.current.delete(i));
  }, [drawFrame]);

  const manageWindow = useCallback(
    (center: number) => {
      const AHEAD = 20;
      const KEEP = 40;
      for (let d = 0; d <= AHEAD; d++) {
        const a = center + d;
        const b = center - d;
        if (a < countRef.current) decode(a);
        if (b >= 0) decode(b);
      }
      if (frames.current.size > KEEP * 2) {
        for (const [idx, f] of frames.current) {
          if (Math.abs(idx - center) > KEEP) {
            releaseFrame(f);
            frames.current.delete(idx);
          }
        }
      }
    },
    [decode]
  );

  const nearestDecoded = useCallback((i: number): Frame | null => {
    if (frames.current.has(i)) return frames.current.get(i)!;
    for (let d = 1; d < countRef.current; d++) {
      if (frames.current.has(i - d)) return frames.current.get(i - d)!;
      if (frames.current.has(i + d)) return frames.current.get(i + d)!;
    }
    return null;
  }, []);

  const draw = useCallback(
    (canvas: HTMLCanvasElement | null, progress: number) => {
      if (!canvas) return;
      activeCanvas.current = canvas;
      if (countRef.current === 0) return;

      lastProgress.current = progress;
      const normalized = Math.min(1, Math.max(0, progress));
      const i = Math.round(normalized * (countRef.current - 1));
      manageWindow(i);
      const frame = nearestDecoded(i);
      if (frame) {
        drawFrame(canvas, frame);
      }
    },
    [manageWindow, nearestDecoded, drawFrame]
  );

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const manifestRes = await fetch(`/frames/${name}/manifest.json`);
        if (!manifestRes.ok) throw new Error("Manifest not found");
        const m = await manifestRes.json();
        if (!alive) return;

        countRef.current = m.count;
        blobs.current = new Array(m.count).fill(null);
        const url = (i: number) =>
          `/${m.pattern.replace("%03d", String(i + 1).padStart(3, "0"))}`;

        // Fetch first frame immediately for instant first render
        try {
          const firstBlob = await fetch(url(0)).then((r) => r.blob());
          if (alive) {
            blobs.current[0] = firstBlob;
            const f0 = await decodeBlob(firstBlob);
            if (alive) {
              frames.current.set(0, f0);
              setReady(true);
              if (activeCanvas.current) {
                drawFrame(activeCanvas.current, f0);
              }
            }
          }
        } catch (e) {
          console.error("Failed to load initial frame", e);
        }

        // Fetch rest of frames in batches
        const batchSize = 10;
        for (let i = 0; i < m.count; i += batchSize) {
          if (!alive) return;
          const batch = Array.from(
            { length: Math.min(batchSize, m.count - i) },
            (_, idx) => i + idx
          );

          await Promise.all(
            batch.map(async (frameIndex) => {
              if (frameIndex === 0 && blobs.current[0]) return;
              try {
                const b = await fetch(url(frameIndex)).then((r) => r.blob());
                if (alive) blobs.current[frameIndex] = b;
              } catch {
                // Retry later if scrubbed
              }
            })
          );

          if (alive) {
            setLoadedCount((prev) => Math.min(m.count, prev + batch.length));
          }
        }

        if (alive) {
          setReady(true);
          setRenderTrigger((p) => p + 1);
        }
      } catch (err) {
        console.error("Frame sequence load error:", err);
      }
    })();

    return () => {
      alive = false;
      frames.current.forEach(releaseFrame);
      frames.current.clear();
    };
  }, [name, drawFrame]);

  return { ready, draw, lastProgress, frameCount: countRef.current, loadedCount, renderTrigger };
}
