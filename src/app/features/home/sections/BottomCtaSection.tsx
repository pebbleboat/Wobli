"use client";

import Link from "next/link";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";

export default function BottomCtaSection() {
  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <CardWrapper
          variant="default"
          className="bg-surface-container p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-surface-container-high/60"
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <Text
              as="h3"
              font="display"
              size="2xl"
              type="bold"
              className="text-on-surface"
            >
              Ready to brighten up your desk space?
            </Text>
            <Text size="sm" type="normal" variant="secondary">
              Explore the full collection or start your own custom creation in minutes.
            </Text>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <Link href="/shop-miniatures">
              <Button
                variant="primary"
                size="md"
                font="display"
                btnName="Shop Store"
              />
            </Link>
            <Link href="#photo-to-miniature">
              <Button
                variant="white"
                size="md"
                font="display"
                btnName="Upload Photo"
              />
            </Link>
          </div>
        </CardWrapper>
      </div>
    </section>
  );
}
