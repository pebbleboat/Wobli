"use client";

import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import {
  HiShoppingBag,
  HiSparkles,
  HiLockClosed,
  HiHandThumbUp,
} from "react-icons/hi2";
import { MdOutlineTimer, MdMarkEmailRead, MdHelpOutline } from "react-icons/md";
import {
  FigurineFinish,
  FigurineSize,
  FigurineStyle,
} from "../useHook";

interface OrderSummaryProps {
  selectedStyle: FigurineStyle;
  selectedSize: FigurineSize;
  selectedFinish: FigurineFinish;
  plinthText: string;
  totalPrice: number;
  styleNames: Record<FigurineStyle, string>;
  sizePrices: Record<FigurineSize, { price: number; name: string; height: string }>;
  finishNames: Record<FigurineFinish, { name: string; adjustment: number }>;
  handleOrderCustomMiniature: () => void;
}

export default function OrderSummarySidebar({
  selectedStyle,
  selectedSize,
  selectedFinish,
  plinthText,
  totalPrice,
  styleNames,
  sizePrices,
  finishNames,
  handleOrderCustomMiniature,
}: OrderSummaryProps) {
  return (
    <aside className="sticky top-28 flex flex-col gap-4">
      <CardWrapper variant="default" className="p-6 shadow-lg border border-surface-container-high/60">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-container-low">
          <div>
            <Text as="h3" font="display" size="base" type="bold" className="text-on-surface">
              Order Summary
            </Text>
            <Text size="xs" variant="secondary">
              Bespoke 3D Figurine
            </Text>
          </div>
          <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed text-lg shadow-sm">
            <HiShoppingBag />
          </div>
        </div>

        {/* Configuration Line Items */}
        <div className="space-y-3 font-sans text-xs pb-4">
          <div className="flex items-center justify-between">
            <Text size="xs" variant="secondary">
              Selected Style:
            </Text>
            <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
              {styleNames[selectedStyle]}
            </Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size="xs" variant="secondary">
              Figurine Scale:
            </Text>
            <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
              {sizePrices[selectedSize].name} ({sizePrices[selectedSize].height.split("/")[0].trim()})
            </Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size="xs" variant="secondary">
              Coating &amp; Color:
            </Text>
            <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
              {finishNames[selectedFinish].name.split("(")[0].trim()}
            </Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size="xs" variant="secondary">
              Custom Base Plinth:
            </Text>
            <Text
              as="span"
              font="sans"
              size="xs"
              type="bold"
              variant="brand"
              className="truncate max-w-[140px]"
            >
              {plinthText.trim() ? plinthText : "None"}
            </Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size="xs" variant="secondary">
              Sculpting &amp; Modeling:
            </Text>
            <Text as="span" font="display" size="xxs" type="bold" variant="amber" className="uppercase">
              FREE ($25 Value)
            </Text>
          </div>
        </div>

        {/* Production ETA */}
        <div className="p-3 rounded-2xl bg-surface-container-low flex items-center gap-2.5 mb-4 border border-surface-container-high/40">
          <MdOutlineTimer className="text-primary text-[20px] shrink-0" />
          <div className="font-sans text-xs">
            <span className="text-on-surface font-bold">Crafting Time:</span>
            <span className="text-on-surface-variant"> 3-5 business days</span>
          </div>
        </div>

        {/* Total Price Display */}
        <div className="flex items-end justify-between pt-2 mb-5">
          <div>
            <Text
              as="span"
              font="display"
              size="xxs"
              type="bold"
              variant="secondary"
              className="uppercase tracking-wider block"
            >
              Total Estimate
            </Text>
            <Text as="span" font="display" size="xs" variant="secondary" className="line-through">
              ${(totalPrice + 15).toFixed(2)}
            </Text>
          </div>
          <div className="text-right">
            <Text
              as="span"
              font="display"
              size="4xl"
              type="bold"
              className="text-primary"
            >
              ${totalPrice.toFixed(2)}
            </Text>
          </div>
        </div>

        {/* CTA Tactile Button */}
        <Button
          variant="primary"
          size="lg"
          font="display"
          fullWidth
          onClick={handleOrderCustomMiniature}
          icon={<HiSparkles className="text-[18px]" />}
          btnName="Order Custom Miniature"
        />

        {/* Safe Guarantees & Reassurances */}
        <div className="mt-4 pt-4 border-t border-surface-container-low space-y-2.5 font-sans text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <MdMarkEmailRead className="text-primary text-[17px] shrink-0" />
            <span>3D Preview Approval sent before 3D printing</span>
          </div>
          <div className="flex items-center gap-2">
            <HiLockClosed className="text-secondary text-[17px] shrink-0" />
            <span>Razorpay • Cards • Cash on Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <HiHandThumbUp className="text-tertiary text-[17px] shrink-0" />
            <span>100% Happiness Re-sculpt Guarantee</span>
          </div>
        </div>
      </CardWrapper>

      {/* Mini Step Guide Helper */}
      <CardWrapper variant="flat" className="p-4 flex items-center gap-3.5 bg-surface-container-high/40">
        <div className="w-10 h-10 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary text-xl shrink-0">
          <MdHelpOutline />
        </div>
        <div>
          <Text as="h4" font="display" size="xs" type="bold" className="text-on-surface">
            Unsure of your photo?
          </Text>
          <Text size="xs" variant="secondary">
            Email our sculpt team at{" "}
            <span className="font-bold text-primary">art@wobli.com</span> for instant advice.
          </Text>
        </div>
      </CardWrapper>
    </aside>
  );
}
