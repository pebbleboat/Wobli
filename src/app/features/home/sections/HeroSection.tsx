"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { FaStar, FaHeart } from "react-icons/fa6";
import { MdStorefront, MdPhotoCamera, MdLocalShipping, MdCreditCard, MdPayments } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12">
      {/* Ambient colorful background glows with gentle pulsing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] bg-gradient-to-r from-primary-fixed/50 via-secondary-fixed/55 to-tertiary-fixed/40 blur-3xl -z-10 rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-primary-fixed-dim/20 blur-3xl -z-10 rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-3 sm:gap-4">
          {/* Social Proof Micro Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-surface-container-lowest shadow-2xs border border-surface-container-high/40">
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
            <Text as="span" size="xxs" variant="secondary" className="font-medium">
              (2,500+ happy collectors)
            </Text>
          </div>

          {/* Main Title - Scaled responsively */}
          <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-[1.18] sm:leading-tight">
            Bring Your Favorite{" "}
            <span className="text-primary underline decoration-secondary-fixed-dim decoration-wavy decoration-3 sm:decoration-4">
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

          {/* Trust Signals Bar - Compact, clean single row on mobile and grid on larger screens */}
          <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-3 w-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 bg-surface-container-low/70 px-2 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-surface-container-high/40">
              <MdLocalShipping className="text-primary text-[18px] sm:text-[20px] shrink-0" />
              <Text size="xxs" type="semibold" className="text-on-surface leading-tight text-[10.5px] sm:text-xs">
                Free over $35
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 bg-surface-container-low/70 px-2 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-surface-container-high/40">
              <MdCreditCard className="text-secondary text-[18px] sm:text-[20px] shrink-0" />
              <Text size="xxs" type="semibold" className="text-on-surface leading-tight text-[10.5px] sm:text-xs">
                Razorpay Pay
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 bg-surface-container-low/70 px-2 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-surface-container-high/40">
              <MdPayments className="text-tertiary text-[18px] sm:text-[20px] shrink-0" />
              <Text size="xxs" type="semibold" className="text-on-surface leading-tight text-[10.5px] sm:text-xs">
                Pay with COD
              </Text>
            </div>
          </div>
        </div>

        {/* Right Visual Feature Showcase with Floating Animation */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none animate-float">
            {/* Backing Decorative Glow Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-fixed via-surface-container-high to-secondary-fixed rounded-3xl transform rotate-2 scale-105 filter blur-sm opacity-70" />

            {/* Main Showcase Visual Card */}
            <CardWrapper variant="default" className="relative p-3.5 sm:p-4 flex flex-col items-center shadow-xl group">
              <div className="w-full aspect-square rounded-2xl overflow-hidden relative shadow-inner bg-surface-container-low flex items-center justify-center p-3 sm:p-4">
                <Image
                  src="/images/wobli-hero-w.png"
                  alt="Wobli 3D Miniature Showcase"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-108 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Mini-Tag 1 */}
                <div className="absolute top-3 left-3">
                  <Chip
                    variant="glass"
                    size="xs"
                    icon={<span className="w-2 h-2 rounded-full bg-primary animate-ping" />}
                    title="8K Ultra-Res Resin"
                  />
                </div>

                {/* Floating Mini-Tag 2 */}
                <div className="absolute bottom-3 right-3">
                  <Chip
                    variant="glass"
                    size="xs"
                    icon={<FaHeart className="text-[12px] text-secondary-container" />}
                    title="Hand-Finished Colors"
                  />
                </div>
              </div>

              {/* Showcase Detail Row */}
              <div className="w-full mt-3.5 pt-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-display font-bold text-sm sm:text-base shadow-xs group-hover:rotate-12 transition-transform duration-300">
                    🦖
                  </span>
                  <div>
                    <Text as="h4" font="display" size="xs" type="bold" className="text-on-surface">
                      Boba Dino Series
                    </Text>
                    <Text size="xxs" variant="secondary">
                      Collectible Series #04
                    </Text>
                  </div>
                </div>
                <div className="text-right">
                  <Text as="div" font="display" size="base" type="bold" className="text-primary">
                    $14.99
                  </Text>
                  <Text as="p" font="display" size="xxs" type="bold" variant="secondary" className="uppercase tracking-wider text-[9px]">
                    Ready to ship
                  </Text>
                </div>
              </div>
            </CardWrapper>

            {/* Floating Cute Sticky Note Badge */}
            <div className="absolute -bottom-4 -left-4 bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-lg rotate-[-6deg] hidden sm:flex items-center gap-2 border border-secondary-fixed-dim/40 animate-float-slow">
              <span className="text-lg">✨</span>
              <div className="leading-tight">
                <Text as="span" font="display" size="xs" type="bold" className="block text-on-secondary-fixed">
                  100% Kawaii
                </Text>
                <Text as="span" size="xxs" className="text-on-secondary-fixed">
                  Zero rough print lines!
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
