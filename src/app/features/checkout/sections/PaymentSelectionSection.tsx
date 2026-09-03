"use client";

import Text from "@/shared/heading/Text";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { MdOutlinePayments, MdVerified } from "react-icons/md";
import { HiBolt } from "react-icons/hi2";
import { PaymentMethod } from "../useHook";

interface PaymentSelectionProps {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
}

export default function PaymentSelectionSection({
  paymentMethod,
  setPaymentMethod,
}: PaymentSelectionProps) {
  return (
    <CardWrapper variant="default" className="p-6 sm:p-8 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center text-lg shrink-0">
            <MdOutlinePayments />
          </span>
          <Text as="h2" font="display" size="lg" type="bold" className="text-on-surface">
            3. Payment Selection
          </Text>
        </div>
        <Chip
          variant="secondary"
          size="xs"
          title="Instant Discount Available"
          className="hidden sm:inline-flex"
        />
      </div>

      <div className="space-y-4">
        {/* Option 1: Razorpay (Recommended) */}
        <div
          onClick={() => setPaymentMethod("razorpay")}
          className={`rounded-2xl p-5 transition-colors duration-200 cursor-pointer border ${
            paymentMethod === "razorpay"
              ? "bg-primary-fixed/20 border-primary"
              : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/60"
          }`}
        >
          <div className="flex items-start gap-3">
            <input
              type="radio"
              name="payment_choice"
              checked={paymentMethod === "razorpay"}
              onChange={() => setPaymentMethod("razorpay")}
              className="mt-1 accent-primary w-4 h-4 cursor-pointer"
            />
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
                    Razorpay Secure Online Checkout
                  </Text>
                  <Chip variant="primary" size="xs" title="RECOMMENDED" />
                </div>

                {/* Badges for Razorpay methods */}
                <div className="flex items-center gap-1.5 bg-surface-container-highest px-3 py-1 rounded-full font-display text-[10px] font-bold text-on-surface">
                  <span className="text-[#0c2340]">UPI</span>
                  <span>•</span>
                  <span>Cards</span>
                  <span>•</span>
                  <span>NetBanking</span>
                </div>
              </div>

              <Text size="xs" variant="secondary" className="leading-relaxed">
                Instant &amp; 100% secure payment via Razorpay. Supports Credit/Debit Cards, Google Pay, PhonePe, Paytm, and all Indian banks.
              </Text>

              {/* 5% Discount highlight callout with animated entrance */}
              {paymentMethod === "razorpay" && (
                <div className="bg-secondary-fixed/40 p-3 rounded-xl flex items-center gap-2 text-on-secondary-container font-sans text-xs font-semibold mt-2 border border-secondary-fixed-dim/40 animate-in fade-in-50 duration-300">
                  <HiBolt className="text-[18px] text-secondary shrink-0 animate-bounce" />
                  <span>
                    <strong>5% Instant Savings (-$3.00)</strong> automatically applied for paying online!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Option 2: Cash on Delivery (COD) */}
        <div
          onClick={() => setPaymentMethod("cod")}
          className={`rounded-2xl p-5 transition-colors duration-200 cursor-pointer border ${
            paymentMethod === "cod"
              ? "bg-primary-fixed/20 border-primary"
              : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/60"
          }`}
        >
          <div className="flex items-start gap-3">
            <input
              type="radio"
              name="payment_choice"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="mt-1 accent-primary w-4 h-4 cursor-pointer"
            />
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
                    Cash on Delivery (COD)
                  </Text>
                  <Chip variant="surface" size="xs" title="DOORSTEP" />
                </div>
                <Text as="span" font="display" size="xxs" variant="secondary">
                  Zero Advance Payment
                </Text>
              </div>

              <Text size="xs" variant="secondary" className="leading-relaxed">
                Pay with physical cash or scan the courier partner&apos;s UPI QR code right at your doorstep upon arrival.
              </Text>

              {paymentMethod === "cod" && (
                <div className="flex items-start gap-2 text-on-surface-variant font-sans text-xs bg-surface-container-high/50 p-2.5 rounded-xl border border-surface-container-high/60 animate-in fade-in-50 duration-300">
                  <MdVerified className="text-[16px] shrink-0 text-primary mt-0.5" />
                  <span>
                    An automated SMS OTP verification code will be sent to your phone number prior to printing and shipping.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
