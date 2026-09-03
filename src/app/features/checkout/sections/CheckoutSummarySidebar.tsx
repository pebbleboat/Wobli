"use client";

import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import {
  HiLockClosed,
  HiXMark,
  HiMinus,
  HiPlus,
  HiCheckCircle,
  HiShieldCheck,
  HiArrowPath,
} from "react-icons/hi2";
import { MdVerified, MdSupportAgent, MdInfoOutline } from "react-icons/md";
import { CheckoutItem, PaymentMethod } from "../useHook";

interface CheckoutSummaryProps {
  items: CheckoutItem[];
  subtotal: number;
  shippingCost: number;
  onlinePerkDiscount: number;
  promoDiscount: number;
  total: number;
  totalQuantity: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  isPromoApplied: boolean;
  paymentMethod: PaymentMethod;
  handleQuantityChange: (id: string, delta: number) => void;
  handleRemoveItem: (id: string) => void;
  handleApplyPromo: () => void;
  handlePlaceOrder: () => void;
}

export default function CheckoutSummarySidebar({
  items,
  subtotal,
  shippingCost,
  onlinePerkDiscount,
  promoDiscount,
  total,
  totalQuantity,
  promoCode,
  setPromoCode,
  isPromoApplied,
  paymentMethod,
  handleQuantityChange,
  handleRemoveItem,
  handleApplyPromo,
  handlePlaceOrder,
}: CheckoutSummaryProps) {
  return (
    <aside className="sticky top-28 space-y-4">
      <CardWrapper variant="default" className="p-6 sm:p-7 shadow-lg space-y-5 border border-surface-container-high/60">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-surface-container-low">
          <Text as="h3" font="display" size="lg" type="bold" className="text-on-surface">
            Order Summary
          </Text>
          <Chip
            variant="primary"
            size="xs"
            title={`${totalQuantity} Custom ${totalQuantity === 1 ? "Mini" : "Minis"}`}
          />
        </div>

        {/* Items List */}
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-center bg-surface-container-low/70 p-3 rounded-2xl border border-surface-container-high/40"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container shrink-0 shadow-sm relative">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-1">
                  <Text as="h4" font="display" size="xs" type="bold" className="text-on-surface truncate">
                    {item.name}
                  </Text>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-outline hover:text-red-600 transition-colors p-1 cursor-pointer"
                    title="Remove item"
                  >
                    <HiXMark className="text-[16px]" />
                  </button>
                </div>
                <Text size="xxs" variant="secondary">
                  {item.subtitle}
                </Text>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center bg-surface-container-lowest rounded-full px-2 py-0.5 shadow-inner border border-surface-container-high/60">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-5 h-5 flex items-center justify-center text-xs font-bold text-on-surface hover:text-primary cursor-pointer"
                    >
                      <HiMinus className="text-[11px]" />
                    </button>
                    <Text as="span" size="xs" type="bold" className="w-6 text-center text-on-surface">
                      {item.quantity}
                    </Text>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-5 h-5 flex items-center justify-center text-xs font-bold text-on-surface hover:text-primary cursor-pointer"
                    >
                      <HiPlus className="text-[11px]" />
                    </button>
                  </div>
                  <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Coupon Box */}
        <div className="pt-1">
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter coupon (e.g. WOBLIJOY)"
              className="w-full bg-surface-container-low uppercase px-4 py-2.5 rounded-full font-sans text-xs text-on-surface outline-none placeholder:normal-case placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 border border-surface-container-high/60 transition-all"
            />
            <Button
              variant="pastel-surface"
              size="sm"
              onClick={handleApplyPromo}
              btnName="Apply"
            />
          </div>
          {isPromoApplied && (
            <div className="text-secondary font-sans text-xs font-bold mt-2 flex items-center gap-1">
              <HiCheckCircle className="text-[15px]" />
              <span>Coupon applied successfully! (-${promoDiscount.toFixed(2)})</span>
            </div>
          )}
        </div>

        {/* Cost Breakdown Table */}
        <div className="space-y-2.5 pt-2 font-sans text-xs text-on-surface-variant border-t border-surface-container-low">
          <div className="flex justify-between items-center">
            <span>Items Subtotal</span>
            <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
              ${subtotal.toFixed(2)}
            </Text>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              Shipping
              <MdInfoOutline className="text-[14px] text-outline" title="Free on standard items" />
            </span>
            <Text
              as="span"
              font="display"
              size="xs"
              type="bold"
              className={shippingCost === 0 ? "text-primary" : "text-on-surface"}
            >
              {shippingCost === 0 ? "FREE" : `+$${shippingCost.toFixed(2)}`}
            </Text>
          </div>

          {paymentMethod === "razorpay" && (
            <div className="flex justify-between items-center text-secondary font-bold">
              <span>Razorpay Online Perk (5%)</span>
              <Text as="span" font="display" size="xs" type="bold" variant="amber">
                -${onlinePerkDiscount.toFixed(2)}
              </Text>
            </div>
          )}

          {promoDiscount > 0 && (
            <div className="flex justify-between items-center text-secondary font-bold">
              <span>Coupon Discount</span>
              <Text as="span" font="display" size="xs" type="bold" variant="amber">
                -${promoDiscount.toFixed(2)}
              </Text>
            </div>
          )}

          <div className="pt-2 flex justify-between items-baseline text-on-surface border-t border-surface-container-low">
            <Text as="span" font="display" size="sm" type="bold">
              Total Due
            </Text>
            <div className="text-right">
              <Text as="span" font="display" size="3xl" type="bold" className="text-primary leading-none">
                ${total.toFixed(2)}
              </Text>
              <Text as="span" font="display" size="xxs" variant="secondary" className="block mt-0.5">
                Includes GST &amp; Bio-safe Materials
              </Text>
            </div>
          </div>
        </div>

        {/* Primary Squishy CTA Button */}
        <div className="pt-1">
          <Button
            variant="primary"
            size="lg"
            font="display"
            fullWidth
            onClick={handlePlaceOrder}
            icon={<HiLockClosed className="text-[18px]" />}
            btnName={
              paymentMethod === "razorpay"
                ? `Pay with Razorpay ($${total.toFixed(2)})`
                : `Place Order with COD ($${total.toFixed(2)})`
            }
          />
          <Text size="xxs" variant="secondary" className="text-center mt-2">
            By placing your order you agree to Wobli&apos;s customized terms.
          </Text>
        </div>

        {/* Trust Badges */}
        <div className="pt-2 grid grid-cols-3 gap-2 text-center text-on-surface-variant">
          <div className="bg-surface-container-low p-2.5 rounded-2xl flex flex-col items-center justify-center border border-surface-container-high/40">
            <HiShieldCheck className="text-primary text-[20px] mb-1" />
            <Text as="span" font="display" size="xxs" type="bold" className="leading-tight">
              256-BIT SSL
            </Text>
          </div>
          <div className="bg-surface-container-low p-2.5 rounded-2xl flex flex-col items-center justify-center border border-surface-container-high/40">
            <MdVerified className="text-secondary text-[20px] mb-1" />
            <Text as="span" font="display" size="xxs" type="bold" className="leading-tight">
              BUBBLE-SAFE
            </Text>
          </div>
          <div className="bg-surface-container-low p-2.5 rounded-2xl flex flex-col items-center justify-center border border-surface-container-high/40">
            <HiArrowPath className="text-tertiary text-[20px] mb-1" />
            <Text as="span" font="display" size="xxs" type="bold" className="leading-tight">
              FREE REPRINTS
            </Text>
          </div>
        </div>
      </CardWrapper>

      {/* Customer Help Box */}
      <CardWrapper variant="flat" className="p-4 flex items-center justify-between bg-surface-container-high/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary text-xl shrink-0">
            <MdSupportAgent />
          </div>
          <div>
            <Text as="h5" font="display" size="xs" type="bold" className="text-on-surface leading-tight">
              Need instant help with custom scale?
            </Text>
            <Text size="xxs" variant="secondary">
              WhatsApp our 3D Print Studio 24/7
            </Text>
          </div>
        </div>
        <a
          href="https://wa.me/918840944840"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs font-bold text-primary hover:underline shrink-0"
        >
          +91 9988-WOBLI
        </a>
      </CardWrapper>
    </aside>
  );
}
