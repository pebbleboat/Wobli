"use client";

import Text from "@/shared/heading/Text";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { MdOutlineContactMail } from "react-icons/md";

interface ContactInfoProps {
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
}

export default function ContactInfoSection({
  email,
  setEmail,
  phone,
  setPhone,
}: ContactInfoProps) {
  return (
    <CardWrapper variant="default" className="p-6 sm:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center text-lg shrink-0">
            <MdOutlineContactMail />
          </span>
          <Text as="h2" font="display" size="lg" type="bold" className="text-on-surface">
            1. Contact Information
          </Text>
        </div>
        <Chip
          variant="surface"
          size="xs"
          title="Required for Dispatch"
          className="hidden sm:inline-flex"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email Address */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block font-sans text-xs font-bold text-on-surface">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="w-full bg-surface-container-low px-4 py-3 rounded-2xl font-sans text-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 border border-surface-container-high/60 transition-all"
          />
          <Text size="xxs" variant="secondary">
            We&apos;ll send your print progress photo previews here.
          </Text>
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block font-sans text-xs font-bold text-on-surface">
            Phone Number (for SMS &amp; COD OTP)
          </label>
          <div className="flex bg-surface-container-low rounded-2xl border border-surface-container-high/60 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary/20 transition-all overflow-hidden">
            <span className="px-3.5 py-3 font-sans text-xs font-bold text-on-surface-variant bg-surface-container-high/60 flex items-center select-none border-r border-surface-container-high/60">
              +91
            </span>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98765 43210"
              className="w-full bg-transparent px-3.5 py-3 font-sans text-sm text-on-surface outline-none"
            />
          </div>
          <Text size="xxs" variant="secondary">
            For dispatch updates and doorstep OTP verification.
          </Text>
        </div>
      </div>
    </CardWrapper>
  );
}
