"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TransformationsSection from "@/shared/sections/TransformationsSection";
import FaqSection from "@/shared/sections/FaqSection";
import PhotoHeroSection from "./sections/PhotoHeroSection";
import PhotoCustomizerSection from "./sections/PhotoCustomizerSection";
import OrderSummarySidebar from "./sections/OrderSummarySidebar";
import { usePhotoToMiniatureHook } from "./useHook";

export default function PhotoToMiniature() {
  const {
    photos,
    handleFileUpload,
    handleRemovePhoto,
    selectedStyle,
    setSelectedStyle,
    selectedSize,
    setSelectedSize,
    selectedFinish,
    setSelectedFinish,
    plinthText,
    setPlinthText,
    cartCount,
    sizePrices,
    styleNames,
    finishNames,
    totalPrice,
    handleOrderCustomMiniature,
  } = usePhotoToMiniatureHook();

  return (
    <div className="bg-surface font-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Global Top Navbar */}
      <Navbar
        cartCount={cartCount}
        activeRoute="photo-to-miniature"
      />

      {/* Main Content Area with Page Entrance Fade-In Animation */}
      <main className="w-full bg-surface flex-1 pt-[104px] animate-page-enter">
        <div className="flex flex-col w-full">
          {/* Hero Header */}
          <PhotoHeroSection />

          {/* Interactive Customizer & Sidebar Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 Columns: Step Customizer */}
              <div className="lg:col-span-7">
                <PhotoCustomizerSection
                  photos={photos}
                  handleFileUpload={handleFileUpload}
                  handleRemovePhoto={handleRemovePhoto}
                  selectedStyle={selectedStyle}
                  setSelectedStyle={setSelectedStyle}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  selectedFinish={selectedFinish}
                  setSelectedFinish={setSelectedFinish}
                  plinthText={plinthText}
                  setPlinthText={setPlinthText}
                  sizePrices={sizePrices}
                />
              </div>

              {/* Right 5 Columns: Sticky Order Summary */}
              <div className="lg:col-span-5">
                <OrderSummarySidebar
                  selectedStyle={selectedStyle}
                  selectedSize={selectedSize}
                  selectedFinish={selectedFinish}
                  plinthText={plinthText}
                  totalPrice={totalPrice}
                  styleNames={styleNames}
                  sizePrices={sizePrices}
                  finishNames={finishNames}
                  handleOrderCustomMiniature={handleOrderCustomMiniature}
                />
              </div>
            </div>
          </section>

          {/* Shared Reusable Transformations Section */}
          <TransformationsSection />

          {/* Shared Reusable FAQ Accordion */}
          <FaqSection
            title="Custom Photo 3D Prints FAQ"
            subtitle="Everything you need to know about uploading photos, 3D proofing, and hand-finished resin curing."
          />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
