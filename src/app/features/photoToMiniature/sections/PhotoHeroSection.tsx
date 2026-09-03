"use client";

import Text from "@/shared/heading/Text";
import Chip from "@/shared/Chip";
import { HiSparkles, HiCheckCircle } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";

export default function PhotoHeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Decorative Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary-fixed/45 via-secondary-fixed/55 to-tertiary-fixed/35 blur-3xl -z-10 pointer-events-none rounded-full" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 pb-6 sm:pb-10 text-center relative">
        <div className="mb-3">
          <Chip
            variant="surface-variant"
            size="xs"
            icon={<HiSparkles className="text-[13px] text-primary" />}
            title="Handcrafted 3D Artisanship • 100% Custom Made"
          />
        </div>

        <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-on-surface max-w-4xl mx-auto mb-2.5 tracking-tight leading-[1.18] sm:leading-tight">
          Turn Any Photo into an Adorable 3D Miniature! 📸 ➔ 🎨
        </h1>

        <p className="font-sans text-xs sm:text-base lg:text-lg text-on-surface-variant max-w-2xl mx-auto mb-5 sm:mb-8 leading-relaxed">
          Just upload a clear photo of your pet, yourself, or a loved one. Our 3D artists sculpt it into a cute keepsake figurine and deliver it right to your home.
        </p>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 lg:gap-8 font-sans text-[11px] sm:text-sm font-semibold text-on-surface-variant">
          <div className="flex items-center gap-1.5 bg-surface-container-low/70 px-2.5 py-1 rounded-full sm:bg-transparent sm:p-0">
            <HiCheckCircle className="text-[16px] text-primary shrink-0" />
            <span>3D Digital Preview</span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-low/70 px-2.5 py-1 rounded-full sm:bg-transparent sm:p-0">
            <FaStar className="text-[14px] text-[#feb700] shrink-0" />
            <span>4.9/5 Rating (2,400+ Minis)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-low/70 px-2.5 py-1 rounded-full sm:bg-transparent sm:p-0">
            <MdLocalShipping className="text-[16px] text-tertiary shrink-0" />
            <span>Free Express Delivery</span>
          </div>
        </div>
      </section>
    </div>
  );
}
