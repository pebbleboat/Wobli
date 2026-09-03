"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Sparkles, EyeOff, Eye } from "lucide-react";

export default function HangingRopeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isHarryVisible, setIsHarryVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tapMessage, setTapMessage] = useState<string | null>(null);
  const pullControls = useAnimation();

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("wobli_harry_visible");
    if (saved !== null) {
      const isVis = saved === "true";
      setIsHarryVisible(isVis);
      window.dispatchEvent(
        new CustomEvent("wobli:toggle-harry", { detail: { visible: isVis } })
      );
    }
  }, []);

  const handlePull = async () => {
    // 1. Realistic pull-cord spring physics
    pullControls.start({
      y: [0, 24, -4, 2, 0],
      scaleY: [1, 1.22, 0.94, 1.02, 1],
      scaleX: [1, 0.92, 1.03, 0.99, 1],
      transition: {
        duration: 0.62,
        ease: [0.34, 1.56, 0.64, 1],
        times: [0, 0.25, 0.6, 0.8, 1],
      },
    });

    // 2. Toggle state
    const nextState = !isHarryVisible;
    setIsHarryVisible(nextState);
    localStorage.setItem("wobli_harry_visible", String(nextState));

    window.dispatchEvent(
      new CustomEvent("wobli:toggle-harry", { detail: { visible: nextState } })
    );

    // 3. Show instant feedback tooltip on tap
    setTapMessage(nextState ? "Harry is Flying! ✨" : "Harry Hidden 🧹");
    setTimeout(() => {
      setTapMessage(null);
    }, 2400);
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed top-0 right-[112px] sm:right-28 lg:right-40 z-[10000] pointer-events-auto select-none"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Swaying Pendulum Motion Container */}
      <motion.div
        className="origin-top"
        animate={{ rotate: [-2.8, 2.8, -2.8] }}
        transition={{
          repeat: Infinity,
          duration: 4.2,
          ease: "easeInOut",
        }}
      >
        {/* Physical Stretch & Recoil Pull-Cord Container */}
        <motion.div
          animate={pullControls}
          className="flex flex-col items-center origin-top cursor-pointer"
          onClick={handlePull}
        >
          {/* Ceiling Mount Ring */}
          <div className="w-3.5 h-1.5 bg-secondary rounded-b-md shadow-xs border border-secondary/40" />

          {/* Rope Cord with braided texture */}
          <div className="w-1.5 h-12 sm:h-20 bg-gradient-to-b from-[#b88c53] via-[#d4a76a] to-[#9c723e] rounded-full shadow-xs relative">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]" />
          </div>

          {/* Wooden Bead Connector */}
          <div className="w-3 h-3 rounded-full bg-secondary-container border border-secondary shadow-xs -my-0.5 z-10" />

          {/* Dangling Blue/Purple Wobli Creature Button */}
          <div
            className="group relative flex flex-col items-center transform hover:scale-108 active:scale-95 transition-transform"
            aria-label={isHarryVisible ? "Pull to hide Harry Potter" : "Pull to show Harry Potter"}
          >
            {/* Cute Creature Body */}
            <div className="relative w-11 h-12 sm:w-12 sm:h-13 bg-gradient-to-b from-[#8f47ff] via-[#7620e7] to-[#5b0cb8] rounded-[22px] shadow-[0_6px_20px_rgba(118,32,231,0.38)] border-2 border-white/60 flex items-center justify-center overflow-hidden">
              {/* Creature Ears / Horns */}
              <div className="absolute -top-1 left-1.5 w-3 h-3 bg-[#7620e7] rounded-tl-full rotate-[-15deg] border-t border-l border-white/40" />
              <div className="absolute -top-1 right-1.5 w-3 h-3 bg-[#7620e7] rounded-tr-full rotate-[15deg] border-t border-r border-white/40" />

              {/* Glossy Body Highlight */}
              <div className="absolute top-1 left-2 w-4 h-2 bg-white/35 rounded-full blur-[0.5px] transform -rotate-15" />

              {/* Creature Eyes */}
              <div className="flex items-center gap-2.5 mt-0.5 z-10">
                {isHarryVisible ? (
                  <>
                    {/* Happy Awake Big Eyes */}
                    <div className="w-2.5 h-3 bg-[#111c2d] rounded-full relative flex items-start justify-end p-0.5 shadow-inner">
                      <div className="w-1.2 h-1.2 bg-white rounded-full" />
                    </div>
                    <div className="w-2.5 h-3 bg-[#111c2d] rounded-full relative flex items-start justify-end p-0.5 shadow-inner">
                      <div className="w-1.2 h-1.2 bg-white rounded-full" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Cute Sleeping Closed Eyes (^_^) */}
                    <span className="text-[11px] font-bold text-white leading-none">^</span>
                    <span className="text-[11px] font-bold text-white leading-none">^</span>
                  </>
                )}
              </div>

              {/* Rosy Cheeks */}
              <div className="absolute bottom-3 left-1.5 w-2 h-1 bg-[#ff73a7]/70 rounded-full blur-[0.5px]" />
              <div className="absolute bottom-3 right-1.5 w-2 h-1 bg-[#ff73a7]/70 rounded-full blur-[0.5px]" />

              {/* Tiny Cute Smile */}
              <div className="absolute bottom-2.5 w-2 h-1 border-b-2 border-[#ffb1c4] rounded-full" />

              {/* Clinging Little Paws at the top */}
              <div className="absolute top-0 left-3 w-1.5 h-2 bg-[#ffb1c4] rounded-b-full shadow-xs" />
              <div className="absolute top-0 right-3 w-1.5 h-2 bg-[#ffb1c4] rounded-b-full shadow-xs" />
            </div>

            {/* Bottom Tassel / Pull Ring */}
            <div className="flex flex-col items-center -mt-0.5">
              <div className="w-1 h-3 bg-[#d4a76a]" />
              <div className="w-3.5 h-3.5 rounded-full bg-primary-fixed border border-primary flex items-center justify-center text-[9px] shadow-sm text-primary font-bold">
                {isHarryVisible ? <EyeOff className="w-2.5 h-2.5" /> : <Eye className="w-2.5 h-2.5" />}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hover / Tap Floating Tooltip (Visible on hover on desktop & automatically upon tap on mobile) */}
        <AnimatePresence>
          {(showTooltip || tapMessage) && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full right-1/2 translate-x-1/2 mt-1.5 px-3 py-1.5 bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl shadow-xl border border-surface-container-high text-center whitespace-nowrap pointer-events-none z-50"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-display font-bold text-on-surface">
                <Sparkles className="w-3 h-3 text-secondary-container shrink-0" />
                <span>
                  {tapMessage ||
                    (isHarryVisible ? "Pull to Hide Harry 🧹" : "Pull to Wake Harry! ✨")}
                </span>
              </div>
              <span className="block text-[9px] font-sans text-on-surface-variant">
                {isHarryVisible ? "Tap to pause mascot" : "Tap to fly again"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
