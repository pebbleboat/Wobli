"use client";

import Text from "@/shared/heading/Text";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { FaStar } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

export interface TransformationItem {
  id: string;
  name: string;
  styleTag: string;
  styleTagVariant?: "primary" | "secondary" | "tertiary";
  quote: string;
  author: string;
  originalImg: string;
  originalAlt: string;
  miniatureImg: string;
  miniatureAlt: string;
}

const defaultTransformations: TransformationItem[] = [
  {
    id: "frenchie",
    name: "Waffles the Frenchie",
    styleTag: "Chibi Style",
    styleTagVariant: "secondary",
    quote:
      '"They captured his bat ears and derpy smile down to the exact white paw spots! Absolute tears of joy."',
    author: "Sophie K. • Austin, TX",
    originalImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDfEFLmRkkusxFOpCUkGX9_BJGQpM1LJCY-I9Hb9Jkb9n6Ktbn0yYgvWcFUJSdluH7ws-EEtquoT52AL9Og7hndbYO17nUlW_yteGdji4c6HbleEEm3lJvhwN1g47PYbJZpYNuHji9rVRlki0qGWFP4SNkqr08nnVvXKrArPcxjSPuADc1-wEVFz38K29k6h2YuoIHv1lElz5MD0OyT1ObtK-x3oSn8S04Bb7jQ-kdmnC4C8XXK5a9hg",
    originalAlt: "French bulldog puppy snapshot",
    miniatureImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuaq0Qi9MT6umxSaWYLRdydKHhQ5N1wEbBUhrunnByHikzbq566m2-kVEqy-8NAobKJFxeijAb1a6Rd5_nXZ11y_WpEeofTVtXH_huqTWS13SqY7s9oJ9m0fkG6c8qxWP_wmKDxntuLZAs5EgDlPNltTdOZO7ipohaMV0TiJx4XaeDOBZvA11EszZOOVleUPYEr4qrlvr4_f_LJ7HPGnZrS5wg1W-SKVhshrfnexWWxiwdUqFqAyAnzg",
    miniatureAlt: "3D printed frenchie miniature",
  },
  {
    id: "grad",
    name: "Dr. Maya's Convocation",
    styleTag: "Bobblehead",
    styleTagVariant: "primary",
    quote:
      '"Gave this to my daughter on graduation morning. The tiny eyeglasses and sash match her real gown perfectly."',
    author: "David M. • Seattle, WA",
    originalImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXhIOHfFkzQU_43YSRf4e09IFyoojarCZVKcI5Toe9mgtYTcqcVrSmIO-a7f4dSxSiogcHOpc1DMvKv4SPRf75J7_kHV9fzAAvmjEkY4gyt-NB_LQ1O4dpxXvETZAH9cWyKZSd-_-rF4ObshvoSXTXIyCDNgnlM3pJQGstQUZv88LgDtwjD5MeAjiuvQL3_Q-lEGB7JZqt6pmQjL_pPaCc9FMag2lmMrf4RZUSGdo_wIF38FUUms5TPA",
    originalAlt: "Graduation portrait snapshot",
    miniatureImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCU58keFtQVRhdkjSiHBdNNhWV2mg3_EfgyFz871mHTYf6kephG1IkPu8V7IwIa4BIktzsjJQhBD92WnL93s8Uq56pffDgVYMAMfa98gaMKfzxwRy-afY9cAiEmZRLxM1i86IKFQE9hWdjTGY0URcROpu5fGXJSLG8eqCBnb0eYaTel9UAduAz7ypNolj2_uRrgo4k01b2NG1QS_4ewfQhO8vsjEKm4Gy4gtmKZUzFZN9vIrJ6mJgjFjw",
    miniatureAlt: "3D printed graduate figurine",
  },
  {
    id: "couple",
    name: "Elena & Noah's 5th Year",
    styleTag: "Realistic Duo",
    styleTagVariant: "tertiary",
    quote:
      '"The ultimate 5th anniversary gift. Sits proudly right under our television where everyone asks about it!"',
    author: "Noah R. • London, UK",
    originalImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOO0T9XWslFmP-FtYMBBRMixg1-IXjLZtNLA_79q8ajXZ7W2vAJ1pfAWR7dQikwUzdmoVTejMq0NhF2PLrBMWHd23I4FZ9svRQ4f9dIm1gMtBS1MKJyGQaHEtgpZBzLy-Ps2A6tzMpn9eZZnVqgtKs5ibFdPvNKBxjHtQzcDafaiL_gFQ9DIUUF0jSCvgMuiIQfOH1qXM_plGHGxgM1FrNIUDR0W6kHtDbLZKoh2nEwq9NH4Kspp9O2g",
    originalAlt: "Couple selfie portrait",
    miniatureImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXsyaLwZAjlh8zIRSJ1Gu8t1sWeDhP1nQMD1HjRDeJoJ9LIDBXX5hA0Q8l5dLcrYcB4PPcGmdPj1rxdfMUt5uDSvnwvGko-ZX685SfAlScJvAqkvDxrz8WVGPxC6Al8X6k_rTOAk3q8fB1mAoC-53RVPrmvwjcPNy1DPLqJk3nHfLTe4AT0a5cvmImNGQ8FvQa6w64FqFNT0OWq4m8vRbmsVRxYFtO-hzS1P9PhrctqjTFrnz0TRucBg",
    miniatureAlt: "Couple 3D printed figurine on wooden disc",
  },
];

export default function TransformationsSection({
  items = defaultTransformations,
  title = "See Recent Happy Transformations",
  subtitle = "Real reference photos transformed into delightful, highly personalized resin keepsakes.",
  badge = "From Screen to Shelf",
}: {
  items?: TransformationItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <section className="w-full bg-surface-container-low py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <Text
            as="span"
            font="display"
            size="xxs"
            type="bold"
            className="text-primary uppercase tracking-widest block"
          >
            {badge}
          </Text>
          <Text
            as="h2"
            font="display"
            size="4xl"
            type="bold"
            className="text-on-surface"
          >
            {title}
          </Text>
          <Text size="base" type="normal" variant="secondary">
            {subtitle}
          </Text>
        </div>

        {/* 3 Side-by-side Pairs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <CardWrapper
              key={item.id}
              variant="default"
              className="p-4 flex flex-col justify-between"
            >
              <div>
                <div className="grid grid-cols-2 gap-2 relative rounded-2xl overflow-hidden mb-4 bg-surface-container">
                  {/* Left: Original Photo */}
                  <div className="relative h-48">
                    <img
                      src={item.originalImg}
                      alt={item.originalAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Chip
                        variant="glass"
                        size="xs"
                        title="Original Photo"
                      />
                    </div>
                  </div>

                  {/* Right: Wobli 3D Mini */}
                  <div className="relative h-48">
                    <img
                      src={item.miniatureImg}
                      alt={item.miniatureAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Chip
                        variant="primary"
                        size="xs"
                        title="Wobli Mini"
                      />
                    </div>
                  </div>

                  {/* Center arrow circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-md text-xs">
                    <HiArrowRight />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <Text as="h3" font="display" size="sm" type="bold" className="text-on-surface">
                    {item.name}
                  </Text>
                  <Chip
                    variant={item.styleTagVariant || "primary"}
                    size="xs"
                    title={item.styleTag}
                  />
                </div>
                <Text size="xs" type="normal" variant="secondary" className="leading-relaxed mb-4">
                  {item.quote}
                </Text>
              </div>

              <div className="pt-2 border-t border-surface-container-low flex items-center justify-between">
                <div className="flex items-center text-[#feb700] gap-0.5">
                  <FaStar className="text-[12px]" />
                  <FaStar className="text-[12px]" />
                  <FaStar className="text-[12px]" />
                  <FaStar className="text-[12px]" />
                  <FaStar className="text-[12px]" />
                </div>
                <Text size="xxs" variant="secondary">
                  {item.author}
                </Text>
              </div>
            </CardWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
