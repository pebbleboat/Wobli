"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/shared/heading/Text";
import {
  MdVerified,
  MdCreditCard,
  MdPayments,
  MdOutlineInventory2,
  MdPublishedWithChanges,
} from "react-icons/md";

interface FooterProps {
  newsletterEmail?: string;
  setNewsletterEmail?: (email: string) => void;
  handleSubscribe?: (e: React.FormEvent) => void;
}

export default function Footer({
  newsletterEmail = "",
  setNewsletterEmail = () => {},
  handleSubscribe = (e) => e.preventDefault(),
}: FooterProps) {
  return (
    <footer className="w-full bg-surface-container-low mt-16 shadow-[0_-1px_12px_rgba(0,0,0,0.02)] border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5 shrink-0">
              <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0">
                <Image
                  src="/images/wobli-hero-w.png"
                  alt="Wobli"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-on-surface leading-tight">
                  Wobli
                </div>
                <Text
                  as="p"
                  size="xxs"
                  type="bold"
                  className="text-on-surface-variant uppercase tracking-wider font-display text-[10px] sm:text-[11px] mt-0.5"
                >
                  Think it. We print it.
                </Text>
              </div>
            </div>

            <Text size="xs" type="normal" variant="secondary" className="leading-relaxed">
              Crafting delightful bespoke figurines, cute desk buddies, and personalized miniatures with vibrant precision cured resin and plant-based biopolymers.
            </Text>

            <div className="flex items-center gap-1.5 text-primary pt-1">
              <MdVerified className="text-[18px]" />
              <Text
                as="span"
                size="xxs"
                type="bold"
                className="text-on-surface-variant uppercase tracking-wide font-display"
              >
                Over 15,000+ Happy Prints Delivered
              </Text>
            </div>
          </div>

          {/* Col 2: Shop Categories */}
          <div className="space-y-3">
            <Text as="h4" font="display" size="sm" type="bold" className="text-on-surface">
              Shop Categories
            </Text>
            <ul className="space-y-2 font-sans text-xs text-on-surface-variant">
              <li>
                <Link href="/shop-miniatures" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim" />
                  Cute Figures
                </Link>
              </li>
              <li>
                <Link href="/shop-miniatures" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim" />
                  Desk Buddies
                </Link>
              </li>
              <li>
                <Link href="/#photo-to-miniature" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim" />
                  Custom Avatars
                </Link>
              </li>
              <li>
                <Link href="/#photo-to-miniature" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed" />
                  Pet Miniatures
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-3">
            <Text as="h4" font="display" size="sm" type="bold" className="text-on-surface">
              Customer Care
            </Text>
            <ul className="space-y-2 font-sans text-xs text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MdCreditCard className="text-[16px] text-primary" />
                <span>Razorpay Online Pay</span>
              </li>
              <li className="flex items-center gap-2">
                <MdPayments className="text-[16px] text-secondary-container" />
                <span>Cash on Delivery (COD)</span>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineInventory2 className="text-[16px] text-tertiary" />
                <span>Safe Bubble Wrapping</span>
              </li>
              <li className="flex items-center gap-2">
                <MdPublishedWithChanges className="text-[16px] text-primary-container" />
                <span>Easy Replacements</span>
              </li>
              <li className="pt-1">
                <Link href="#track-order" className="text-primary font-sans text-xs font-bold hover:underline inline-block">
                  Track Your Shipment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <Text as="h4" font="display" size="sm" type="bold" className="text-on-surface">
              Get Sweet Perks
            </Text>
            <Text size="xs" type="normal" variant="secondary" className="leading-relaxed">
              Subscribe for playful monthly releases, early custom drops, and $5 off your first mini.
            </Text>
            <form onSubmit={handleSubscribe} className="flex items-center bg-surface-container-lowest rounded-full p-1 shadow-sm border border-surface-container-high/60">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your sweet email..."
                className="bg-transparent border-none outline-none font-sans text-xs px-3 text-on-surface placeholder:text-outline w-full"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-primary text-on-primary font-display text-xs font-bold hover:bg-primary-container transition-all shrink-0 cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-on-surface-variant border-t border-surface-container-high/60">
          <div>
            <span>© 2025 Wobli 3D Studios. Designed with joy &amp; sugar.</span>
          </div>
          <div className="flex items-center gap-6 font-semibold">
            <Link href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#community" className="hover:text-primary transition-colors">
              Community Hub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
