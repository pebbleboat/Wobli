"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useFrameSequence } from "@/hooks/useFrameSequence";

export default function HarryScrollFlyer() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { ready, draw } = useFrameSequence("harry-potter");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const maxFlightScroll = docHeight > 100 ? docHeight : 3000;
      const rawProgress = scrollY / maxFlightScroll;
      const clamped = Math.min(1, Math.max(0, rawProgress));
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Redraw canvas with the current frame matching scroll position
  useEffect(() => {
    if (canvasRef.current) {
      draw(canvasRef.current, scrollProgress);
    }
  }, [ready, scrollProgress, draw]);

  if (!mounted) return null;

  // Start from a tiny dot (0.05x) in the corner at scroll 0, expanding into flight as you scroll
  let introScale = 1;
  let introOpacity = 1;
  if (scrollProgress < 0.12) {
    const p = scrollProgress / 0.12; // 0 -> 1
    introScale = 0.05 + p * 0.95; // 0.05x (tiny dot) -> 1.0x (full flight size)
    introOpacity = 0.4 + p * 0.6;
  }

  // Calculate clean fade out at the very end as he zooms past the camera
  let endOpacity = 1;
  if (scrollProgress > 0.92) {
    endOpacity = Math.max(0, 1 - (scrollProgress - 0.92) / 0.08);
  }

  const combinedOpacity = introOpacity * endOpacity;

  return createPortal(
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden flex items-center justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        opacity: combinedOpacity,
        visibility: combinedOpacity > 0.01 ? "visible" : "hidden",
      }}
    >
      {/* Tiny magical twinkle when at rest as a dot */}
      {scrollProgress < 0.06 && (
        <div
          className="absolute pointer-events-none w-3 h-3 bg-secondary-container rounded-full blur-xs animate-ping"
          style={{
            top: "20%",
            left: "15%",
            opacity: 1 - scrollProgress / 0.06,
          }}
        />
      )}

      {/* Full-Viewport Cinematic Flight Canvas with Dynamic Dot-to-Flight Scaling */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none transition-transform duration-75 filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
        style={{
          transformOrigin: "15% 20%",
          transform: `scale(${introScale})`,
        }}
      />
    </div>,
    document.body
  );
}
