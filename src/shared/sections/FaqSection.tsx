"use client";

import { useState } from "react";
import Text from "@/shared/heading/Text";
import CardWrapper from "@/shared/cards/CardWrapper";
import { HiChevronDown } from "react-icons/hi2";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: "photo-types",
    question: "What kind of photo gives the best 3D print result?",
    answer:
      "Any well-lit smartphone photo works great! Front angles with visible eyes and hair texture allow our digital sculptors to translate every cute detail accurately. If you have extra side-profile photos or reference shots, you can upload up to 3 images during Step 1.",
  },
  {
    id: "preview-approval",
    question: "Do I get to review and approve the model before it prints?",
    answer:
      "Yes, 100%! Within 48 hours of placing your order, our artists send an interactive 360° digital turnaround render directly to your email. You can request unlimited facial and pose tweaks until you are completely thrilled before we initiate resin curing.",
  },
  {
    id: "materials-durability",
    question: "What material do you use, and how fragile is it?",
    answer:
      "We use high-impact, eco-friendly tough photopolymer resin cured at 50-micron layer resolution. Finished models are sealed with an anti-scratch matte UV protective coat. While they endure everyday handling and desk bumps effortlessly, they should be treated like collectible ceramics.",
  },
  {
    id: "timeline-shipping",
    question: "What is the turnaround and shipping timeline?",
    answer:
      "Digital 3D sculpting takes 1-2 days. Once you approve your proof, precision printing and hand-painting take 2-3 days. Standard courier delivery takes 3-5 days with live SMS tracking updates. Rush 48h print-and-dispatch upgrades are also available upon request!",
  },
];

export default function FaqSection({
  faqs = defaultFaqs,
  title = "Everything You Need to Know",
  subtitle = "Clear details on photos, our approval flow, and custom printing craft.",
  badge = "Got Questions?",
}: {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-16 w-full scroll-mt-28">
      <div className="text-center mb-10 space-y-2">
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

      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <CardWrapper
              key={faq.id}
              variant="default"
              className={`p-5 cursor-pointer select-none transition-all duration-300 ${
                isOpen
                  ? "border-primary/40 shadow-md bg-surface-container-lowest"
                  : "hover:border-primary/20 hover:bg-surface-container-low/40"
              }`}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="flex items-center justify-between gap-4">
                <Text
                  as="h3"
                  font="display"
                  size="sm"
                  type="bold"
                  className={`transition-colors duration-200 ${
                    isOpen ? "text-primary" : "text-on-surface"
                  }`}
                >
                  {faq.question}
                </Text>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 text-primary bg-primary-fixed shadow-xs"
                      : "text-outline bg-surface-container-low"
                  }`}
                >
                  <HiChevronDown className="text-[18px]" />
                </div>
              </div>

              {/* Smooth Grid-Height Expand / Collapse Accordion */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-surface-container-low"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <Text
                    size="sm"
                    type="normal"
                    variant="secondary"
                    className="leading-relaxed"
                  >
                    {faq.answer}
                  </Text>
                </div>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}
