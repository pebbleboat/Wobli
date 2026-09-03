"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ShopHeaderSection from "./sections/ShopHeaderSection";
import ShopFiltersSection from "./sections/ShopFiltersSection";
import ShopProductGridSection from "./sections/ShopProductGridSection";
import CustomGeneratorBanner from "./sections/CustomGeneratorBanner";
import { useShopMiniaturesHook } from "./useHook";

export default function ShopMiniatures() {
  const {
    cartCount,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    inStockOnly,
    setInStockOnly,
    codOnly,
    setCodOnly,
    wishlist,
    toggleWishlist,
    getQuantity,
    incrementQty,
    decrementQty,
    handleAddToCart,
    filteredProducts,
  } = useShopMiniaturesHook();

  return (
    <div className="bg-surface font-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* App Navbar */}
      <Navbar
        cartCount={cartCount}
        activeRoute="shop-miniatures"
      />

      {/* Main Content Area with Page Entrance Fade-In Animation */}
      <main className="w-full pt-[104px] bg-surface flex-1 animate-page-enter">
        <div className="flex flex-col w-full">
          <ShopHeaderSection />

          <ShopFiltersSection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            codOnly={codOnly}
            setCodOnly={setCodOnly}
            shownCount={filteredProducts.length}
          />

          <ShopProductGridSection
            products={filteredProducts}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            getQuantity={getQuantity}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
            handleAddToCart={handleAddToCart}
          />

          <CustomGeneratorBanner />
        </div>
      </main>

      {/* App Footer */}
      <Footer />
    </div>
  );
}
