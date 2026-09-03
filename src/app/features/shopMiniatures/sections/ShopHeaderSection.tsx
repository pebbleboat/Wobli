"use client";

import Text from "@/shared/heading/Text";
import Chip from "@/shared/Chip";
import { HiSparkles } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";

export default function ShopHeaderSection() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low/80 via-surface to-surface pb-6 sm:pb-8">
      <div className="absolute top-0 right-10 w-96 h-96 bg-primary-fixed/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 -left-20 w-80 h-80 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 pb-4 sm:pb-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <Chip
              variant="primary"
              size="xs"
              icon={<HiSparkles className="text-[14px]" />}
              title="Hand-Cured Precision Drops"
            />
            <Text
              as="h1"
              font="display"
              size="4xl"
              type="bold"
              className="tracking-tight text-on-surface"
            >
              Our Adorable 3D Miniature Collection
            </Text>
            <Text size="base" type="normal" variant="secondary" className="max-w-2xl leading-relaxed">
              High-quality, durable resin figurines, cute desk buddies, and ready-to-paint models crafted with smooth plant-based polymers and ultra-fine cure resolution.
            </Text>
          </div>

          <div className="flex items-center gap-3 bg-surface-container-lowest px-5 py-3 rounded-2xl shadow-sm border border-surface-container-high/40 shrink-0">
            <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-on-secondary-container text-xl">
              <MdVerified />
            </div>
            <div>
              <Text as="span" font="display" size="sm" type="semibold" className="block text-on-surface leading-none mb-1">
                100% Guaranteed
              </Text>
              <Text size="xs" type="normal" variant="secondary">
                Break-free delivery or free replacement
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
