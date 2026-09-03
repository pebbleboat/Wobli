"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import { IBreadCrumbs } from "@/utils/types";
import {
  HiSparkles,
  HiMagnifyingGlass,
  HiShoppingBag,
  HiPaintBrush,
  HiBars3,
  HiXMark,
  HiHome,
  HiPhoto,
  HiStar,
  HiArrowRight,
} from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";
import { MdLocalShipping, MdOutlineSupportAgent, MdStorefront, MdAutoFixHigh } from "react-icons/md";

export interface NavbarProps {
  cartCount?: number;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  activeRoute?: "home" | "shop-miniatures" | "photo-to-miniature" | "how-it-works" | "reviews";
  hidePromoBar?: boolean;
  breadCrumbs?: IBreadCrumbs[];
}

export default function Navbar({
  cartCount = 2,
  searchQuery = "",
  setSearchQuery = () => {},
  activeRoute = "home",
  hidePromoBar = false,
  breadCrumbs,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", key: "home", icon: <HiHome className="text-[20px]" /> },
    {
      href: "/shop-miniatures",
      label: "Shop Miniatures",
      key: "shop-miniatures",
      icon: <MdStorefront className="text-[20px]" />,
    },
    {
      href: "/photo-to-miniature",
      label: "Photo to Miniature",
      key: "photo-to-miniature",
      icon: <HiPhoto className="text-[20px]" />,
    },
    {
      href: "/#how-it-works",
      label: "How It Works",
      key: "how-it-works",
      icon: <MdAutoFixHigh className="text-[20px]" />,
    },
    {
      href: "/#reviews",
      label: "Reviews",
      key: "reviews",
      icon: <HiStar className="text-[20px]" />,
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-40 bg-white/95 backdrop-blur-md shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
        {/* Top Promo Notification Bar */}
        {!hidePromoBar && (
          <div className="bg-primary text-on-primary text-center py-2 px-4 flex items-center justify-center gap-2 text-xs font-medium tracking-wide">
            <HiSparkles className="text-[14px]" />
            <span className="truncate">Free Shipping on orders over $35 | Razorpay &amp; COD Available | 100% Happiness Guarantee</span>
            <FaHeart className="text-[12px] shrink-0" />
          </div>
        )}

        {/* Optional Breadcrumbs Bar */}
        {breadCrumbs && breadCrumbs.length > 0 && (
          <div className="bg-surface-container-low px-4 sm:px-6 py-1.5 border-b border-surface-container-high/40 flex items-center gap-2 text-xs">
            {breadCrumbs.map((crumb, idx) => (
              <span key={crumb.label || idx} className="flex items-center gap-1.5">
                {crumb.path ? (
                  <Link href={crumb.path} className="text-on-surface-variant hover:text-primary font-medium">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-on-surface font-semibold">{crumb.label}</span>
                )}
                {idx < breadCrumbs.length - 1 && <span className="text-outline-variant">/</span>}
              </span>
            ))}
          </div>
        )}

        {/* Main Navbar Container with Balanced 3-Column Centering */}
        <div className="h-18 w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Left Column: Brand Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
              <div className="w-13 h-13 sm:w-15 sm:h-15 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/wobli-hero-w.png"
                  alt="Wobli"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-on-surface leading-none tracking-tight flex items-center gap-1.5">
                  Wobli
                  <span className="w-2 h-2 rounded-full bg-secondary-container inline-block animate-pulse" />
                </div>
                <Text
                  as="p"
                  size="xxs"
                  type="bold"
                  className="text-on-surface-variant uppercase tracking-wider font-display text-[9.5px] sm:text-[10px] mt-1"
                >
                  Think it. We print it.
                </Text>
              </div>
            </Link>
          </div>

          {/* Center Column: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center justify-center gap-1 lg:gap-2 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeRoute === link.key;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 font-display text-xs xl:text-sm font-semibold whitespace-nowrap ${
                    isActive
                      ? "bg-primary-fixed text-on-primary-fixed-variant"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Column: Actions */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-3 shrink-0">
            {/* Desktop Search Box */}
            <div className="hidden lg:flex items-center bg-surface-container-low rounded-full px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary/20 transition-all border border-surface-container-high/40">
              <HiMagnifyingGlass className="text-outline mr-1.5 text-[16px]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cute prints..."
                className="bg-transparent border-none outline-none font-sans text-xs text-on-surface placeholder:text-outline w-28 xl:w-36 focus:w-44 transition-all"
              />
            </div>

            {/* Track Order Link */}
            <Link
              href="#track-order"
              className="hidden md:flex items-center gap-1.5 text-on-surface-variant hover:text-primary font-sans text-xs font-semibold px-2 py-1.5 transition-colors whitespace-nowrap"
            >
              <MdLocalShipping className="text-[17px]" />
              <span>Track Order</span>
            </Link>

            {/* Cart Icon with badge */}
            <Link
              href="/checkout"
              className="relative p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all text-xl"
              title="Shopping Bag"
            >
              <HiShoppingBag />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-secondary-container text-on-secondary-container font-display text-[10px] flex items-center justify-center font-bold shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Start Custom Order CTA (Hidden on mobile) */}
            <Link
              href="/photo-to-miniature"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary font-display text-xs xl:text-sm font-semibold shadow-[0_3px_10px_rgba(182,0,88,0.2)] hover:bg-primary-container hover:shadow-[0_4px_14px_rgba(182,0,88,0.25)] transition-all active:translate-y-0.5 whitespace-nowrap"
            >
              <HiPaintBrush className="text-[15px]" />
              <span>Start Custom Order</span>
            </Link>

            {/* Mobile & Tablet Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="xl:hidden p-2.5 rounded-2xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors cursor-pointer text-2xl flex items-center justify-center border border-surface-container-high/60 active:scale-95"
            >
              <HiBars3 />
            </button>
          </div>
        </div>
      </header>

      {/* Standalone Mobile & Tablet Slide-over Drawer Menu with Smooth In & Out Animation */}
      <div
        className={`fixed inset-0 z-[100] xl:hidden flex justify-end transition-all duration-300 ${
          isMobileMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        {/* Dimmed backdrop overlay with smooth fade in/out */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Solid White Slide-over Drawer with smooth slide in/out */}
        <div
          className={`relative w-full max-w-sm sm:max-w-md h-full bg-white z-[101] shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 border-b border-surface-container-low bg-surface-container-lowest flex items-center justify-between sticky top-0 z-10 shadow-xs">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3.5"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 shrink-0">
                  <Image
                    src="/images/wobli-hero-w.png"
                    alt="Wobli"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-on-surface leading-none flex items-center gap-1.5">
                    Wobli
                    <span className="w-2 h-2 rounded-full bg-secondary-container inline-block" />
                  </div>
                  <Text size="xxs" variant="secondary" className="font-display uppercase tracking-wider text-[9.5px] sm:text-[10px] mt-1">
                    Think it. We print it.
                  </Text>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors cursor-pointer text-2xl border border-surface-container-high/60 active:scale-95"
              >
                <HiXMark />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-5 sm:p-6 flex-1 space-y-6">
              {/* Search Bar */}
              <div className="flex items-center bg-surface-container-low rounded-2xl px-4 py-3 border border-surface-container-high/60 focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-inner">
                <HiMagnifyingGlass className="text-outline mr-2 text-[20px] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search cute 3D miniatures..."
                  className="bg-transparent border-none outline-none font-sans text-xs sm:text-sm text-on-surface placeholder:text-outline w-full"
                />
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                <Text
                  as="span"
                  font="display"
                  size="xxs"
                  type="bold"
                  variant="secondary"
                  className="uppercase tracking-widest px-2 block"
                >
                  Explore Wobli
                </Text>
                <nav className="space-y-1.5">
                  {navLinks.map((link) => {
                    const isActive = activeRoute === link.key;
                    return (
                      <Link
                        key={link.key}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-display text-sm font-bold transition-all ${
                          isActive
                            ? "bg-primary-fixed text-primary shadow-xs"
                            : "text-on-surface hover:bg-surface-container-low"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={isActive ? "text-primary" : "text-on-surface-variant"}>
                            {link.icon}
                          </span>
                          <span>{link.label}</span>
                        </div>
                        <HiArrowRight className={`text-[14px] ${isActive ? "text-primary" : "text-outline"}`} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Custom Order Highlight Card */}
              <div className="p-4 rounded-3xl bg-gradient-to-r from-primary-fixed/50 via-surface-container-high to-secondary-fixed/50 border border-primary-fixed/60 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <Text as="span" font="display" size="xxs" type="bold" className="uppercase text-primary">
                    Custom 3D Generator
                  </Text>
                </div>
                <Text as="h4" font="display" size="sm" type="bold" className="text-on-surface leading-snug">
                  Turn Your Everyday Photos Into Tangible 3D Magic!
                </Text>
                <Text size="xs" variant="secondary">
                  Pets, portraits, couple gifts, and wedding minis.
                </Text>
                <Link
                  href="/photo-to-miniature"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block pt-1"
                >
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    font="display"
                    icon={<HiPaintBrush className="text-[16px]" />}
                    btnName="Upload Photo &amp; Sculpt"
                  />
                </Link>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 sm:p-6 border-t border-surface-container-low bg-surface-container-low/40 space-y-3">
              <Link
                href="/checkout"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block"
              >
                <Button
                  variant="pastel-primary"
                  size="md"
                  font="display"
                  fullWidth
                  icon={<HiShoppingBag className="text-[18px]" />}
                  btnName={`View My Bag (${cartCount} ${cartCount === 1 ? "item" : "items"})`}
                />
              </Link>

              <div className="pt-2 flex items-center justify-between text-on-surface-variant font-sans text-xs">
                <Link
                  href="#track-order"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 hover:text-primary transition-colors font-semibold"
                >
                  <MdLocalShipping className="text-[17px] text-primary" />
                  <span>Track Live Order</span>
                </Link>

                <a
                  href="https://wa.me/918840944840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors font-semibold text-primary"
                >
                  <MdOutlineSupportAgent className="text-[17px]" />
                  <span>24/7 Studio Help</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
