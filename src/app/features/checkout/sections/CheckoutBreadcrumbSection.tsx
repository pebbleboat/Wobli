"use client";

import Link from "next/link";
import Text from "@/shared/heading/Text";
import { HiCheck } from "react-icons/hi2";
import { MdVerifiedUser } from "react-icons/md";

export default function CheckoutBreadcrumbSection() {
  return (
    <div className="w-full bg-surface-container-low py-4 border-b border-surface-container-high/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Stepper */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-sans">
          <Link
            href="#cart"
            className="flex items-center gap-1.5 text-primary font-bold hover:underline"
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-display text-xs">
              <HiCheck className="text-[12px] sm:text-[14px]" />
            </span>
            <span className="font-display">1. Cart</span>
          </Link>

          <span className="text-outline-variant font-bold">/</span>

          <div className="flex items-center gap-1.5 text-on-surface font-bold">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-display text-xs shadow-sm">
              2
            </span>
            <span className="font-display">Shipping &amp; Delivery</span>
          </div>

          <span className="text-outline-variant font-bold">/</span>

          <div className="flex items-center gap-1.5 text-outline font-medium">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-display text-xs">
              3
            </span>
            <span className="hidden sm:inline font-display">Review &amp; Pay</span>
          </div>
        </div>

        {/* Right: Security Guarantee */}
        <div className="hidden md:flex items-center gap-2 text-on-surface-variant font-sans text-xs font-semibold">
          <MdVerifiedUser className="text-primary text-[18px]" />
          <span>Secure 256-bit Encrypted Checkout</span>
        </div>
      </div>
    </div>
  );
}
