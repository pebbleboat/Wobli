"use client";

import Link from "next/link";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import Chip from "@/shared/Chip";
import { HiSparkles, HiPhoto } from "react-icons/hi2";

export default function CustomGeneratorBanner() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 my-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-fixed via-surface-container-high to-secondary-fixed p-6 lg:p-10 shadow-[0_12px_32px_rgba(182,0,88,0.08)] border border-primary-fixed/40">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <Chip
              variant="glass-primary"
              size="xs"
              icon={<HiSparkles className="text-[14px]" />}
              title="Custom 3D Generator"
            />
            <Text
              as="h2"
              font="display"
              size="3xl"
              type="bold"
              className="tracking-tight text-on-surface"
            >
              Looking for something custom?
            </Text>
            <Text size="base" type="normal" variant="secondary" className="leading-relaxed">
              Turn your photos into a one-of-a-kind miniature! Upload any pet, character sketch, or portrait, and our 3D sculptors craft a photorealistic miniature within 48 hours.
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link href="#photo-to-miniature">
              <Button
                variant="primary"
                size="md"
                font="display"
                icon={<HiPhoto className="text-[18px]" />}
                btnName="Upload Your Photo"
              />
            </Link>
            <Link href="#how-it-works">
              <Button
                variant="white"
                size="md"
                font="display"
                btnName="How It Works"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
