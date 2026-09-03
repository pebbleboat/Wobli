"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "./sections/HeroSection";
import HarryScrollFlyer from "./sections/HarryScrollFlyer";
import HowItWorksSection from "./sections/HowItWorksSection";
import FeaturedProductsSection from "./sections/FeaturedProductsSection";
import PhotoToMiniatureBanner from "./sections/PhotoToMiniatureBanner";
import ReviewsSection from "./sections/ReviewsSection";
import GuaranteeSection from "./sections/GuaranteeSection";
import BottomCtaSection from "./sections/BottomCtaSection";
import { useHomeHook } from "./useHook";

export default function Home() {
  const {
    cartCount,
    searchQuery,
    setSearchQuery,
    wishlist,
    toggleWishlist,
    handleAddToCart,
    selectedCategory,
    setSelectedCategory,
    selectedColor,
    setSelectedColor,
    filteredProducts,
    candyColors,
  } = useHomeHook();

  return (
    <div className="bg-surface font-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* App Navbar */}
      <Navbar
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeRoute="home"
      />

      {/* Main Content Area with Page Entrance Fade-In Animation */}
      <main className="w-full pt-[104px] bg-surface flex-1 animate-page-enter">
        <div className="flex flex-col w-full">
          <HeroSection />

          {/* Harry Potter Dynamic Scroll Flying Mascot Overlay */}
          <HarryScrollFlyer />

          <HowItWorksSection
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            candyColors={candyColors}
          />

          <FeaturedProductsSection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            filteredProducts={filteredProducts}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            handleAddToCart={handleAddToCart}
          />

          <PhotoToMiniatureBanner />

          <ReviewsSection />

          <GuaranteeSection />

          <BottomCtaSection />
        </div>
      </main>

      {/* App Footer */}
      <Footer />
    </div>
  );
}
