"use client";

import Text from "@/shared/heading/Text";
import CardWrapper from "@/shared/cards/CardWrapper";
import { MdPayments } from "react-icons/md";
import { HiShieldCheck, HiLockClosed } from "react-icons/hi2";

export default function GuaranteeSection() {
  const guarantees = [
    {
      icon: <HiShieldCheck className="text-[26px]" />,
      iconBg: "bg-primary-fixed text-primary",
      title: "Zero Breakage Guarantee",
      desc: "If your miniature arrives damaged in any way, we will reprint and dispatch a fresh replacement completely free.",
    },
    {
      icon: <HiLockClosed className="text-[24px]" />,
      iconBg: "bg-secondary-fixed text-on-secondary-fixed",
      title: "Razorpay Secure Checkout",
      desc: "Bank-grade 256-bit encrypted transactions supporting all major Credit/Debit Cards, UPI, Netbanking, and Wallets.",
    },
    {
      icon: <MdPayments className="text-[26px]" />,
      iconBg: "bg-tertiary-fixed text-on-tertiary-fixed",
      title: "Pay Cash on Delivery",
      desc: "Prefer checking the package first? Select COD at checkout and pay cash or UPI directly when your mini reaches you.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <CardWrapper variant="default" className="p-8 lg:p-12 border border-surface-container-high/40">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Text
              as="h3"
              font="display"
              size="2xl"
              type="bold"
              className="text-on-surface mb-2"
            >
              The Wobli Collector&apos;s Guarantee
            </Text>
            <Text size="sm" type="normal" variant="secondary">
              We treat every 3D piece like a miniature work of art.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((item, index) => (
              <CardWrapper
                key={index}
                variant="flat"
                className="flex items-start gap-4 p-5 hover:bg-surface-container/60 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-sm`}
                >
                  {item.icon}
                </div>
                <div>
                  <Text as="h4" font="display" size="sm" type="bold" className="text-on-surface mb-1">
                    {item.title}
                  </Text>
                  <Text size="xs" type="normal" variant="secondary" className="leading-relaxed">
                    {item.desc}
                  </Text>
                </div>
              </CardWrapper>
            ))}
          </div>
        </CardWrapper>
      </div>
    </section>
  );
}
