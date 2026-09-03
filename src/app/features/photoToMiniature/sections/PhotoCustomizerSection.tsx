"use client";

import { useRef } from "react";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import {
  HiCloudArrowUp,
  HiCheckCircle,
  HiPhoto,
  HiTrash,
  HiPaintBrush,
} from "react-icons/hi2";
import { FaPalette, FaKey, FaDesktop, FaAward, FaRegCircle } from "react-icons/fa6";
import { MdEditNote } from "react-icons/md";
import {
  FigurineFinish,
  FigurineSize,
  FigurineStyle,
  UploadedPhoto,
} from "../useHook";

interface PhotoCustomizerProps {
  photos: UploadedPhoto[];
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemovePhoto: (id: string) => void;
  selectedStyle: FigurineStyle;
  setSelectedStyle: (style: FigurineStyle) => void;
  selectedSize: FigurineSize;
  setSelectedSize: (size: FigurineSize) => void;
  selectedFinish: FigurineFinish;
  setSelectedFinish: (finish: FigurineFinish) => void;
  plinthText: string;
  setPlinthText: (text: string) => void;
  sizePrices: Record<FigurineSize, { price: number; name: string; height: string }>;
}

export default function PhotoCustomizerSection({
  photos,
  handleFileUpload,
  handleRemovePhoto,
  selectedStyle,
  setSelectedStyle,
  selectedSize,
  setSelectedSize,
  selectedFinish,
  setSelectedFinish,
  plinthText,
  setPlinthText,
  sizePrices,
}: PhotoCustomizerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const styleItems = [
    {
      id: "chibi" as FigurineStyle,
      title: "Chibi Cute Style",
      desc: "Big cheerful eyes, expressive head, squishy playful proportions.",
      badge: "Most Popular ⭐",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaJh77arpp3V8nxhZ0RZAwpKsRPHFJjb84NtQbEfgZiUpVKaPnj18dm0rjNCIPKsmEPP2wJkzCKYGIYKq5lAha6eJpce-L50SZ9eTrmMzz9g0yVrt6Ggwp0Z4Z1l2sFnZtH3Lo1I7baBQ1ZIk2ZACiXxOfdO2CyuLZ8_ZnYn4mjV9LD7huBuCtfYiatqgBQwtQCc64laErGbJbKxkwoDh9ASmBaX8tZBlGhvgqY1wHNYPtXk0bKNelwg",
      alt: "Chibi style figurine render",
    },
    {
      id: "realistic" as FigurineStyle,
      title: "Realistic Miniature",
      desc: "Faithful anatomy, true-to-life posture, delicate facial contours.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqz0Zor6102Y9a2r4JiwXcANULSnwnVidbIdLHanJ1HGLURN6xgX5Dqi7XZwjzN7ZbQcM3DHOShS3zP2KceWn54Muk1OrxfCkLYQpxNtCAh2ByNxGjXFYRsOiPT0j7MwVaFoLUi3iKLs73-TpAJsN_0rNAln6DBgIBGr42N19C-P3W37QBhvCzsYf4qiQ2GXLnad2AdLRYQlb1daMD4Jx2ztqfbFium9I3-x14TehGGnKjkCLviPLslQ",
      alt: "Realistic style miniature render",
    },
    {
      id: "bobblehead" as FigurineStyle,
      title: "Cartoon Bobblehead",
      desc: "Mounted on a resilient mini steel spring. Bobs with every desk bump!",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAJwxO_H26n7r31nI42cjLp4DP1pkOKBOaUpEgeSTHCqox-tsPf-X0eK-_wX4UohH3Ock0g77SyCB811O53wpdIEhZ83HfaJhGJwe4LzYWJNsQAZbBSuEi9wIGly0L2mjj70_76qtackBn_m2Chr2vWazpfh0Ehwra9aRSobhdSADk82PtBEuhbxezhUTMisLdK-ce7ALo4T-RBN9A-A8AYUwwZz3JplVDWcrXv_2zx7NWONdvPizsNg",
      alt: "Cartoon bobblehead style render",
    },
  ];

  const sizeItems = [
    {
      id: "pocket" as FigurineSize,
      title: sizePrices.pocket.name,
      price: sizePrices.pocket.price,
      height: sizePrices.pocket.height,
      icon: <FaKey className="text-[14px]" />,
      hint: "Great for keychains & cars",
    },
    {
      id: "desk" as FigurineSize,
      title: sizePrices.desk.name,
      price: sizePrices.desk.price,
      height: sizePrices.desk.height,
      badge: "Sweet Spot",
      icon: <FaDesktop className="text-[14px]" />,
      hint: "Ideal workspace mascot",
    },
    {
      id: "collector" as FigurineSize,
      title: sizePrices.collector.name,
      price: sizePrices.collector.price,
      height: sizePrices.collector.height,
      icon: <FaAward className="text-[14px]" />,
      hint: "Maximum sculpted fidelity",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* STEP 1: Photo Upload */}
      <CardWrapper variant="default" className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-display text-sm font-bold flex items-center justify-center shadow-sm shrink-0">
              1
            </span>
            <div>
              <Text as="h2" font="display" size="lg" type="bold" className="text-on-surface">
                Upload Your Reference Photo(s)
              </Text>
              <Text size="xs" variant="secondary">
                Pet portrait, selfie, couple pose, or baby photo (Front &amp; angles welcome)
              </Text>
            </div>
          </div>
          <Chip
            variant="surface"
            size="xs"
            title="Max 3 Files"
            className="hidden sm:inline-flex"
          />
        </div>

        {/* Drag and Drop Dropzone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="group relative cursor-pointer rounded-2xl bg-surface-container-low/70 hover:bg-surface-container-low transition-all duration-300 p-6 sm:p-8 text-center flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/60 hover:border-primary/50"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
            <HiCloudArrowUp className="text-[28px] sm:text-[32px]" />
          </div>
          <Text as="p" font="display" size="sm" type="bold" className="text-on-surface mb-1">
            Drag &amp; drop photos here, or <span className="text-primary underline">Click to Browse</span>
          </Text>
          <Text size="xs" variant="secondary">
            Supports JPG, PNG, WEBP (Up to 15MB each). Natural lighting produces best results!
          </Text>
        </div>

        {/* Upload Previews List */}
        {photos.length > 0 && (
          <div className="mt-5 pt-4 space-y-3 border-t border-surface-container-low animate-in fade-in duration-300">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-2xl bg-surface-container-low/50 border border-surface-container-high/40 hover:bg-surface-container-low transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-surface-container shrink-0 shadow-sm group/img">
                    <img
                      src={photo.previewUrl}
                      alt={photo.name}
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Text as="span" font="sans" size="xs" type="bold" className="text-on-surface">
                        {photo.name}
                      </Text>
                      <HiCheckCircle className="text-primary text-[16px]" />
                    </div>
                    <Text size="xs" type="semibold" variant="brand">
                      Photo verified &amp; ready ✅
                    </Text>
                    <Text as="span" font="display" size="xxs" variant="secondary">
                      {photo.size} • High resolution
                    </Text>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(photo.id)}
                    className="p-2 rounded-full text-outline hover:text-red-600 hover:bg-red-50 active:scale-90 transition-all cursor-pointer"
                    title="Remove Photo"
                  >
                    <HiTrash className="text-[16px]" />
                  </button>
                </div>
              </div>
            ))}

            {photos.length < 3 && (
              <div className="pt-2 flex justify-end">
                <Button
                  variant="pastel-surface"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  icon={<HiPhoto className="text-[16px]" />}
                  btnName="+ Add Angle (Optional)"
                />
              </div>
            )}
          </div>
        )}
      </CardWrapper>

      {/* STEP 2: Figurine Style & Size */}
      <CardWrapper variant="default" className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-display text-sm font-bold flex items-center justify-center shadow-sm shrink-0">
            2
          </span>
          <div>
            <Text as="h2" font="display" size="lg" type="bold" className="text-on-surface">
              Choose Figurine Style &amp; Size
            </Text>
            <Text size="xs" variant="secondary">
              Select the aesthetic interpretation and physical stature
            </Text>
          </div>
        </div>

        {/* Style Selection Cards */}
        <div>
          <Text
            as="label"
            font="display"
            size="xxs"
            type="bold"
            variant="secondary"
            className="uppercase tracking-wider block mb-3"
          >
            1. Select Artistic Style
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {styleItems.map((style) => {
              const isSelected = selectedStyle === style.id;
              return (
                <div
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`cursor-pointer rounded-2xl p-3.5 transition-colors duration-200 relative flex flex-col justify-between border ${
                    isSelected
                      ? "bg-primary-fixed/20 border-primary"
                      : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/60"
                  }`}
                >
                  {style.badge && (
                    <div className="absolute top-2.5 right-2.5">
                      <Chip
                        variant="secondary"
                        size="xs"
                        title={style.badge}
                      />
                    </div>
                  )}
                  <div className="w-full h-32 rounded-xl overflow-hidden mb-3 bg-surface-container-high">
                    <img
                      src={style.img}
                      alt={style.alt}
                      className="w-full h-full object-cover hover:scale-108 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Text as="h3" font="display" size="xs" type="bold" className="text-on-surface">
                        {style.title}
                      </Text>
                      {isSelected ? (
                        <HiCheckCircle className="text-primary text-[20px] animate-in zoom-in-75 duration-200" />
                      ) : (
                        <FaRegCircle className="text-outline text-[16px]" />
                      )}
                    </div>
                    <Text size="xs" variant="secondary" className="leading-relaxed">
                      {style.desc}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Size Selection Grid */}
        <div>
          <Text
            as="label"
            font="display"
            size="xxs"
            type="bold"
            variant="secondary"
            className="uppercase tracking-wider block mb-3"
          >
            2. Select Physical Height
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sizeItems.map((size) => {
              const isSelected = selectedSize === size.id;
              return (
                <div
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`cursor-pointer rounded-2xl p-4 transition-colors duration-200 relative border ${
                    isSelected
                      ? "bg-primary-fixed/20 border-primary"
                      : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/60"
                  }`}
                >
                  {size.badge && (
                    <span className="absolute -top-2.5 right-3 px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-display text-[10px] font-bold uppercase shadow-2xs">
                      {size.badge}
                    </span>
                  )}
                  <div className="flex items-baseline justify-between mb-1">
                    <Text as="span" font="display" size="sm" type="bold" className="text-on-surface">
                      {size.title}
                    </Text>
                    <Text as="span" font="display" size="base" type="bold" className="text-primary">
                      ${size.price.toFixed(2)}
                    </Text>
                  </div>
                  <Text size="xs" variant="secondary">
                    {size.height}
                  </Text>
                  <div className="mt-3 flex items-center gap-1.5 text-on-surface-variant font-display text-[11px] font-semibold">
                    {size.icon}
                    <span>{size.hint}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardWrapper>

      {/* STEP 3: Finish, Colors & Plinth Note */}
      <CardWrapper variant="default" className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-display text-sm font-bold flex items-center justify-center shadow-sm shrink-0">
            3
          </span>
          <div>
            <Text as="h2" font="display" size="lg" type="bold" className="text-on-surface">
              Finish &amp; Custom Engraving
            </Text>
            <Text size="xs" variant="secondary">
              Hand-painted ready to unbox, or DIY artist kit
            </Text>
          </div>
        </div>

        {/* Finish Selection Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Finish 1: Hand-painted */}
          <div
            onClick={() => setSelectedFinish("painted")}
            className={`cursor-pointer rounded-2xl p-4 flex items-start gap-4 transition-colors duration-200 border ${
              selectedFinish === "painted"
                ? "bg-primary-fixed/20 border-primary"
                : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/60"
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm text-lg">
              <FaPalette />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <Text as="h4" font="display" size="xs" type="bold" className="text-on-surface">
                  Full Color Hand-Painted
                </Text>
                {selectedFinish === "painted" ? (
                  <HiCheckCircle className="text-primary text-[20px] animate-in zoom-in-75 duration-200" />
                ) : (
                  <FaRegCircle className="text-outline text-[16px]" />
                )}
              </div>
              <Text size="xs" variant="secondary" className="mt-1 leading-relaxed">
                Multi-layer UV sealed acrylic colors applied meticulously by our studio painters.
              </Text>
              <Text as="span" font="display" size="xxs" type="bold" variant="brand" className="inline-block mt-2 uppercase">
                Included
              </Text>
            </div>
          </div>

          {/* Finish 2: DIY Kit */}
          <div
            onClick={() => setSelectedFinish("diy")}
            className={`cursor-pointer rounded-2xl p-4 flex items-start gap-4 transition-colors duration-200 border ${
              selectedFinish === "diy"
                ? "bg-primary-fixed/20 border-primary"
                : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/60"
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 shadow-sm text-lg">
              <HiPaintBrush />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <Text as="h4" font="display" size="xs" type="bold" className="text-on-surface">
                  DIY Paint Kit (Pastel Resin)
                </Text>
                {selectedFinish === "diy" ? (
                  <HiCheckCircle className="text-primary text-[20px] animate-in zoom-in-75 duration-200" />
                ) : (
                  <FaRegCircle className="text-outline text-[16px]" />
                )}
              </div>
              <Text size="xs" variant="secondary" className="mt-1 leading-relaxed">
                Clean cured primer finish + includes 6 acrylic tubs, precision brush &amp; guide.
              </Text>
              <Text as="span" font="display" size="xxs" type="bold" variant="amber" className="inline-block mt-2 uppercase">
                Save $5.00
              </Text>
            </div>
          </div>
        </div>

        {/* Base Plate / Plinth Custom Note */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="plinthText"
              className="font-sans text-xs font-bold text-on-surface flex items-center gap-1.5"
            >
              <MdEditNote className="text-[20px] text-primary" />
              <span>Personalized Name Plinth / Base Note (Free)</span>
            </label>
            <Text as="span" font="display" size="xxs" variant="secondary">
              {plinthText.length} / 35 characters
            </Text>
          </div>
          <input
            id="plinthText"
            type="text"
            maxLength={35}
            value={plinthText}
            onChange={(e) => setPlinthText(e.target.value)}
            placeholder="e.g., 'Barnaby 2024' or 'Forever Friends' with heart icon"
            className="w-full h-12 px-4 rounded-full bg-surface-container-low text-on-surface placeholder:text-outline font-sans text-sm focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 border border-surface-container-high/60"
          />
          <Text size="xs" variant="secondary" className="mt-1.5 pl-2">
            Our 3D artists will engrave this onto the bottom pedestal base plate.
          </Text>
        </div>
      </CardWrapper>
    </div>
  );
}
