"use client";

import Text from "@/shared/heading/Text";
import Chip from "@/shared/Chip";
import CardWrapper from "@/shared/cards/CardWrapper";
import { HiCheck, HiCursorArrowRays } from "react-icons/hi2";
import { MdPrecisionManufacturing, MdOutlineInventory2 } from "react-icons/md";
import { FaPalette } from "react-icons/fa6";

interface HowItWorksProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  candyColors: Array<{ id: string; name: string; bg: string; text: string }>;
}

export default function HowItWorksSection({
  selectedColor,
  setSelectedColor,
  candyColors,
}: HowItWorksProps) {
  const steps = [
    {
      number: "1",
      numberBg: "bg-primary-fixed text-primary",
      title: "Pick or Upload",
      tag: "Select or Upload",
      tagIcon: <HiCursorArrowRays className="text-[14px] text-primary" />,
      tagVariant: "glass-primary" as const,
      desc: "Browse our curated gallery of ready-to-ship cute desk buddies, or snap and upload any real-life photo of your pet, bestie, or couple snapshot.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn6qVF4PL3RaBsN_gKv2T4hqAUqorsxRFuc-Jvt3fE8jC4lTZVyRLnInQKD3FFRwM7F6hw2vh7Pcuh-YdV0d528E4u-z9uJpU4QpgPiqVhUuDuxBpNmE6DWalmJwmK-n3GoKHzCmX5csBNEBVC3TDU5H2n9d61GdEfDpSwfGQ1DCj65_9XafAezAszjzM9h40CSjvXKA53d9s3K6F3YHWiqeFVm9Du8dPkPGskp2JoySuaZF5g3ZPSZw",
      imgAlt: "Picking a miniature on smartphone screen",
    },
    {
      number: "2",
      numberBg: "bg-secondary-fixed text-on-secondary-fixed",
      title: "Printed & Hand-Smoothed",
      tag: "50-Micron Precision",
      tagIcon: <MdPrecisionManufacturing className="text-[14px] text-secondary" />,
      tagVariant: "glass-secondary" as const,
      desc: "Our workshop 3D prints your miniature using dental-grade, ultra-smooth resin. We hand-inspect, cure, polish, and lovingly coat every single curve.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTnZZLtSmCYlFfZWDBgXX1Gmia3s3fwH362t1qP-PICzvhg9rEXn1TiuFVgO6HR1cdsSGwXVjIpWaMBcSAPuZeK3F2RLLdY7ICnj1DaDMPvkEp5XP7Sh1wUecBogAA0cLJMF2viIqGtKd90VTf3QYuFawzd4Q9uISKfOXP2ANvEYXnOAa1n-W8ivyW9Hijk0dJfTyD0zyXK4bCiU5lIsGrXiqiF34BaQTXiN-dwiK9z0ZCCRc3JIC0jA",
      imgAlt: "High precision 3D resin printer workshop",
    },
    {
      number: "3",
      numberBg: "bg-tertiary-fixed text-on-tertiary-fixed",
      title: "Delivered to Your Door",
      tag: "Bubble-Armor Pack",
      tagIcon: <MdOutlineInventory2 className="text-[14px] text-tertiary" />,
      tagVariant: "glass-tertiary" as const,
      desc: "Arrives packed in shock-proof custom foam. Pay easily via Razorpay card/UPI or select Cash on Delivery right when the courier knocks!",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0pEo-M67SFus5mb9kl2LxWbmesPzV3dNntXE33AHRv42ofhvS_EGoZLR3HBHuRahsOdME72IIaR0oSXauYRw81E57-B6jO66HxhZrUkb5kB9Ebv06gAyR0vEQDpPwlqYYWkZRqB7gTrFwIYeiyvUSmrHeDB74Wj4vtPM9QC2Eqlx64eTDEb2nZgRUIthMLob3belhChky6r4F3i1TPPpmfGr00ZQODZINXswAvM7HbjeRPqUKkXvEZA",
      imgAlt: "Unboxing cute pastel box with bubble wrap",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-surface-container-low/70 scroll-mt-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl space-y-3 mb-12">
          <Chip
            variant="brand-badge"
            size="xs"
            title="Magical & Frictionless"
          />
          <Text
            as="h2"
            font="display"
            size="4xl"
            type="bold"
            className="text-on-surface"
          >
            How Wobli Brings Magic to Your Desk
          </Text>
          <Text size="base" type="normal" variant="secondary">
            We turned complicated industrial 3D printing into an effortless, delightful 3-step experience.
          </Text>
        </div>

        {/* 3 Steps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step) => (
            <CardWrapper
              key={step.number}
              variant="interactive"
              className="flex flex-col items-start"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${step.numberBg} flex items-center justify-center font-display text-2xl font-bold mb-4 shadow-sm`}
              >
                {step.number}
              </div>
              <div className="w-full h-36 rounded-2xl bg-surface-container-low overflow-hidden mb-4 flex items-center justify-center relative">
                <img
                  src={step.img}
                  alt={step.imgAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <Chip
                    variant={step.tagVariant}
                    size="xs"
                    icon={step.tagIcon}
                    title={step.tag}
                  />
                </div>
              </div>
              <Text as="h3" font="display" size="lg" type="bold" className="text-on-surface mb-2">
                {step.title}
              </Text>
              <Text size="sm" type="normal" variant="secondary" className="leading-relaxed">
                {step.desc}
              </Text>
            </CardWrapper>
          ))}
        </div>

        {/* Quick Interactive Filament Color Palette Preview */}
        <CardWrapper
          variant="default"
          className="mt-10 w-full max-w-4xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary text-xl">
              <FaPalette />
            </div>
            <div>
              <Text as="h4" font="display" size="sm" type="semibold" className="text-on-surface">
                Available In 8+ Candy Finishes
              </Text>
              <Text size="xs" variant="secondary">
                Choose matte pastel, pearl silk, or glowing night-light resin for any order.
              </Text>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {candyColors.map((color) => (
              <button
                key={color.id}
                type="button"
                onClick={() => setSelectedColor(color.id)}
                className={`w-9 h-9 rounded-full shadow-md flex items-center justify-center font-display text-[10px] cursor-pointer hover:scale-110 transition-all ${
                  selectedColor === color.id
                    ? "ring-4 ring-primary/30 scale-110 shadow-lg"
                    : ""
                }`}
                style={{ backgroundColor: color.bg }}
                title={color.name}
              >
                {selectedColor === color.id && (
                  <HiCheck className="text-[16px] text-white stroke-2" />
                )}
              </button>
            ))}
          </div>
        </CardWrapper>
      </div>
    </section>
  );
}
