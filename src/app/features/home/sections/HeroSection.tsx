"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { FaStar, FaVolumeHigh, FaVolumeXmark, FaWandMagicSparkles } from "react-icons/fa6";
import { MdStorefront, MdPhotoCamera, MdLocalShipping, MdCreditCard, MdPayments } from "react-icons/md";
import { HiMiniFire, HiSparkles } from "react-icons/hi2";

export default function HeroSection() {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 3D Card Tilt State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((-(y - centerY) / centerY) * 8);
    setRotateY(((x - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12">
      {/* ========================================================================= */}
      {/* Soft Light Pastel Ambient Background Layers (Cross-fading 1 by 1)        */}
      {/* ========================================================================= */}
      {/* 1. Soft Light Pastel Candy Glow (Peach Blossom & Warm Rose) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#ffd1dc]/45 via-[#fef3c7]/40 to-[#fed7aa]/45 blur-3xl -z-10 rounded-full pointer-events-none animate-[crossfade-1_15s_ease-in-out_infinite]" />

      {/* 2. Soft Light Pastel Mint & Sage Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#d1fae5]/45 via-[#a7f3d0]/40 to-[#ccfbf1]/45 blur-3xl -z-10 rounded-full pointer-events-none animate-[crossfade-2_15s_ease-in-out_infinite]" />

      {/* 3. Soft Light Pastel Lavender & Baby Cyan Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#e0e7ff]/45 via-[#ede9fe]/40 to-[#fae8ff]/45 blur-3xl -z-10 rounded-full pointer-events-none animate-[crossfade-3_15s_ease-in-out_infinite]" />

      {/* Floating Magical Stardust Sparkles */}
      <div className="absolute top-12 left-1/4 pointer-events-none text-secondary-container/60 animate-bounce text-lg hidden sm:block">
        ✨
      </div>
      <div className="absolute top-1/2 left-8 pointer-events-none text-primary/40 animate-pulse text-base hidden sm:block">
        🪄
      </div>
      <div className="absolute bottom-16 right-1/3 pointer-events-none text-tertiary/50 animate-bounce text-sm hidden sm:block">
        ⭐
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-3.5 sm:gap-4.5">
          {/* Social Proof Micro Badge with Collector Avatars */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-surface-container-high/60 hover:shadow-md transition-shadow">
            {/* Collector Mini Avatars Stack */}
            <div className="flex items-center -space-x-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border border-white flex items-center justify-center text-[10px] shadow-xs">
                🐱
              </span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border border-white flex items-center justify-center text-[10px] shadow-xs">
                🧙
              </span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 border border-white flex items-center justify-center text-[10px] shadow-xs">
                🦖
              </span>
            </div>

            <div className="h-3 w-px bg-surface-container-high mx-0.5" />

            <span className="flex items-center text-[#feb700] gap-0.5 text-xs sm:text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <Text as="span" size="xs" type="bold" className="text-on-surface">
              4.9/5
            </Text>
            <Text as="span" size="xxs" variant="secondary" className="font-medium hidden sm:inline">
              (2,500+ happy collectors)
            </Text>
          </div>

          {/* Main Title - Scaled responsively */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-[1.18] sm:leading-tight">
            Bring Your Favorite{" "}
            <span className="relative inline-block text-primary underline decoration-secondary-fixed-dim decoration-wavy decoration-3 sm:decoration-4">
              Ideas &amp; Photos
            </span>{" "}
            to Life in 3D!
          </h1>

          {/* Subheading */}
          <p className="font-sans text-xs sm:text-base lg:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            From adorable desk buddies and gaming minis to custom 3D figurines made directly from your everyday photos. Hand-inspected, safely packed, and delivered to your doorstep.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto">
            <Link href="/shop-miniatures" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                font="display"
                fullWidth
                icon={<MdStorefront className="text-[18px] sm:text-[20px]" />}
                btnName="Shop Cute Miniatures"
              />
            </Link>
            <Link href="/photo-to-miniature" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="md"
                font="display"
                fullWidth
                icon={<MdPhotoCamera className="text-[18px] sm:text-[20px]" />}
                btnName="Turn a Photo Into Miniature"
              />
            </Link>
          </div>

          {/* Trust Signals Bar */}
          <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-3 w-full">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5 bg-surface-container-low/70 px-2 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-surface-container-high/40 shadow-2xs hover:bg-surface-container-low transition-colors">
              <MdLocalShipping className="text-primary text-[18px] sm:text-[20px] shrink-0" />
              <Text size="xxs" type="semibold" className="text-on-surface leading-tight text-[10.5px] sm:text-xs">
                Free over $35
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5 bg-surface-container-low/70 px-2 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-surface-container-high/40 shadow-2xs hover:bg-surface-container-low transition-colors">
              <MdCreditCard className="text-secondary text-[18px] sm:text-[20px] shrink-0" />
              <Text size="xxs" type="semibold" className="text-on-surface leading-tight text-[10.5px] sm:text-xs">
                Razorpay Pay
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5 bg-surface-container-low/70 px-2 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-surface-container-high/40 shadow-2xs hover:bg-surface-container-low transition-colors">
              <MdPayments className="text-tertiary text-[18px] sm:text-[20px] shrink-0" />
              <Text size="xxs" type="semibold" className="text-on-surface leading-tight text-[10.5px] sm:text-xs">
                Pay with COD
              </Text>
            </div>
          </div>
        </div>

        {/* Right Visual Feature Showcase with 3D Interactive Tilt & Soft Pastel Aura */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0 perspective-1000">
          <motion.div
            className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* 3 Light Pastel Cross-Fading Glow Aura Layers */}
            {/* Layer 1: Soft Pastel Rose & Peach Blossom (#ffc0cb -> #fed7aa -> #fef08a) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffc0cb]/65 via-[#fed7aa]/60 to-[#fef08a]/50 rounded-3xl transform rotate-2 scale-105 filter blur-md pointer-events-none animate-[crossfade-1_15s_ease-in-out_infinite]" />

            {/* Layer 2: Light Pastel Mint & Sage (#bbf7d0 -> #a7f3d0 -> #99f6e4) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#bbf7d0]/65 via-[#a7f3d0]/60 to-[#99f6e4]/50 rounded-3xl transform rotate-2 scale-105 filter blur-md pointer-events-none animate-[crossfade-2_15s_ease-in-out_infinite]" />

            {/* Layer 3: Soft Lavender & Baby Sky Blue (#bae6fd -> #c7d2fe -> #f3e8ff) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#bae6fd]/65 via-[#c7d2fe]/60 to-[#f3e8ff]/50 rounded-3xl transform rotate-2 scale-105 filter blur-md pointer-events-none animate-[crossfade-3_15s_ease-in-out_infinite]" />

            {/* Main Showcase Visual Card */}
            <CardWrapper variant="default" className="relative p-3.5 sm:p-4 flex flex-col items-center shadow-2xl group border-2 border-white/80">
              {/* Top Live Studio Badge */}
              <div className="w-full flex items-center justify-between pb-2 px-1 text-xs">
                <div className="flex items-center gap-1.5 font-display font-bold text-primary text-[11px]">
                  <HiMiniFire className="text-sm text-secondary-container animate-pulse" />
                  <span>Trending Miniature</span>
                </div>
                <div className="flex items-center gap-1.5 text-on-surface-variant text-[10px] font-medium bg-surface-container-low px-2 py-0.5 rounded-full border border-surface-container-high/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Now Printing Live</span>
                </div>
              </div>

              {/* Video Player Box with Ambient Depth */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden relative shadow-inner bg-surface-container-low flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/harry.mp4"
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Glassmorphic Audio Toggle Button */}
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={isVideoMuted ? "Unmute video sound" : "Mute video sound"}
                  className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md text-[11px] font-display font-semibold transition-all cursor-pointer border border-white/20 active:scale-95 shadow-md"
                >
                  {isVideoMuted ? (
                    <>
                      <FaVolumeXmark className="text-xs text-rose-300" />
                      <span>Sound Off</span>
                    </>
                  ) : (
                    <>
                      <FaVolumeHigh className="text-xs text-emerald-300 animate-pulse" />
                      <span>Sound On</span>
                    </>
                  )}
                </button>

                {/* Floating Glass Chips */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <Chip
                    variant="glass"
                    size="xs"
                    icon={<span className="w-2 h-2 rounded-full bg-primary animate-ping" />}
                    title="Wizard Figurine"
                  />
                </div>

                <div className="absolute top-3 right-3 z-10 pointer-events-none">
                  <Chip
                    variant="glass"
                    size="xs"
                    icon={<FaWandMagicSparkles className="text-[11px] text-secondary-container" />}
                    title="8K Ultra-Res"
                  />
                </div>
              </div>

              {/* Showcase Detail Row */}
              <div className="w-full mt-3.5 pt-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-display font-bold text-sm sm:text-base shadow-xs group-hover:rotate-12 transition-transform duration-300">
                    🧙‍♂️
                  </span>
                  <div>
                    <Text as="h4" font="display" size="xs" type="bold" className="text-on-surface">
                      Harry Flying Miniature
                    </Text>
                    <Text size="xxs" variant="secondary">
                      Limited Edition #01
                    </Text>
                  </div>
                </div>
                <div className="text-right">
                  <Text as="div" font="display" size="base" type="bold" className="text-primary">
                    $19.99
                  </Text>
                  <Text as="p" font="display" size="xxs" type="bold" variant="secondary" className="uppercase tracking-wider text-[9px]">
                    In High Demand
                  </Text>
                </div>
              </div>

              {/* Soft Pastel Aura Status Indicator */}
              <div className="w-full mt-3 pt-2.5 border-t border-surface-container-high/40 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-wider">
                  <HiSparkles className="text-secondary-container text-xs animate-spin-slow" />
                  <span>Pastel Aura:</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-display font-bold bg-surface-container-low text-on-surface border border-surface-container-high/60 shadow-xs">
                    <span className="w-2 h-2 rounded-full animate-[dot-fade_15s_ease-in-out_infinite]" />
                    <span>Soft Light Flow</span>
                  </span>
                </div>
              </div>
            </CardWrapper>

            {/* Floating Cute Sticky Note Badge */}
            <div className="absolute -bottom-4 -left-4 bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl rotate-[-6deg] hidden sm:flex items-center gap-2 border border-secondary-fixed-dim/40 animate-float-slow z-20">
              <span className="text-lg">✨</span>
              <div className="leading-tight">
                <Text as="span" font="display" size="xs" type="bold" className="block text-on-secondary-fixed">
                  100% Kawaii
                </Text>
                <Text as="span" size="xxs" className="text-on-secondary-fixed font-medium">
                  Zero rough print lines!
                </Text>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Discrete Light Pastel Fade-In -> Stay -> Fade-Out Keyframes (15s cycle: 5s per pastel color) */}
      <style jsx global>{`
        /* Layer 1: Soft Pastel Rose & Peach Blossom - Active at 0s - 5s */
        @keyframes crossfade-1 {
          0% {
            opacity: 0.65;
          }
          26% {
            opacity: 0.65;
          }
          33.33% {
            opacity: 0;
          }
          93.33% {
            opacity: 0;
          }
          100% {
            opacity: 0.65;
          }
        }

        /* Layer 2: Light Pastel Mint & Sage - Active at 5s - 10s */
        @keyframes crossfade-2 {
          0% {
            opacity: 0;
          }
          26.66% {
            opacity: 0;
          }
          33.33% {
            opacity: 0.65;
          }
          59.99% {
            opacity: 0.65;
          }
          66.66% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        /* Layer 3: Soft Lavender & Baby Sky Blue - Active at 10s - 15s */
        @keyframes crossfade-3 {
          0% {
            opacity: 0;
          }
          59.99% {
            opacity: 0;
          }
          66.66% {
            opacity: 0.65;
          }
          93.33% {
            opacity: 0.65;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes dot-fade {
          0%, 28%, 100% { background-color: #ffc0cb; }
          33%, 62% { background-color: #a7f3d0; }
          66%, 95% { background-color: #c7d2fe; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
