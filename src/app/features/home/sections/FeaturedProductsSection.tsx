"use client";

import Link from "next/link";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { HiFire, HiShoppingBag, HiArrowUpTray, HiArrowRight } from "react-icons/hi2";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";
import { ProductItem } from "../useHook";

interface FeaturedProductsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProducts: ProductItem[];
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  handleAddToCart: (product: ProductItem) => void;
}

export default function FeaturedProductsSection({
  selectedCategory,
  setSelectedCategory,
  filteredProducts,
  wishlist,
  toggleWishlist,
  handleAddToCart,
}: FeaturedProductsProps) {
  const categories = [
    { id: "all", label: "All Minis" },
    { id: "desk-buddies", label: "Desk Buddies" },
    { id: "gaming-figures", label: "Gaming Figures" },
    { id: "custom-photo", label: "Custom Photo" },
  ];

  const getChipVariant = (type?: string) => {
    switch (type) {
      case "staff":
        return "secondary";
      case "trending":
        return "primary";
      case "custom":
        return "tertiary";
      case "glow":
        return "surface-variant";
      default:
        return "surface";
    }
  };

  return (
    <section id="shop" className="py-16 px-4 sm:px-6 lg:px-12 w-full scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Title & Filter Chips */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <HiFire className="text-primary text-[20px]" />
              <Text as="span" font="display" size="xxs" type="bold" className="text-primary uppercase tracking-widest">
                Community Bestsellers
              </Text>
            </div>
            <Text as="h2" font="display" size="4xl" type="bold" className="text-on-surface">
              Meet the Wobli Desk Companions
            </Text>
          </div>

          {/* Quick Filter Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1.5 px-0.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <Button
                  key={cat.id}
                  variant={isSelected ? "primary" : "pastel-surface"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="transition-all duration-200"
                  btnName={cat.label}
                />
              );
            })}
          </div>
        </div>

        {/* 4-Column Product Grid with Staggered Slide Animation on Tab Switch */}
        <div
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                className="animate-card-slide"
                style={{ animationDelay: `${index * 65}ms` }}
              >
                <CardWrapper
                  variant="interactive"
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-low mb-3">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      />

                      {/* Wishlist Button */}
                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer text-sm active:scale-90 ${
                          isWishlisted ? "text-primary scale-110" : "text-outline hover:text-primary hover:scale-105"
                        }`}
                        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                      >
                        {isWishlisted ? <FaHeart className="animate-in zoom-in-50 duration-200" /> : <FaRegHeart />}
                      </button>

                      {/* Tag Badge */}
                      {product.tag && (
                        <div className="absolute top-2.5 left-2.5">
                          <Chip
                            variant={getChipVariant(product.tagType)}
                            size="xs"
                            title={product.tag}
                          />
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 text-[#feb700] mb-1">
                      <FaStar className="text-[14px]" />
                      <Text size="xs" type="bold" className="text-on-surface">
                        {product.rating.toFixed(1)}
                      </Text>
                      <Text size="xs" type="normal" variant="secondary">
                        ({product.reviewCount} reviews)
                      </Text>
                    </div>

                    {/* Title & Description */}
                    <Text as="h3" font="display" size="sm" type="bold" className="text-on-surface mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </Text>
                    <Text size="xs" type="normal" variant="secondary" className="line-clamp-2 mb-4 leading-relaxed">
                      {product.description}
                    </Text>
                  </div>

                  {/* Price and Action Button */}
                  <div className="pt-2 flex items-center justify-between border-t border-surface-container-low">
                    <div>
                      {product.originalPrice && (
                        <Text as="span" font="display" size="xxs" variant="secondary" className="line-through block">
                          ${product.originalPrice.toFixed(2)}
                        </Text>
                      )}
                      {product.isCustomUpload && (
                        <Text as="span" font="display" size="xxs" variant="secondary" className="block">
                          From
                        </Text>
                      )}
                      <Text as="div" font="display" size="base" type="bold" className="text-primary">
                        ${product.price.toFixed(2)}
                      </Text>
                    </div>

                    {product.isCustomUpload ? (
                      <Link href="/photo-to-miniature">
                        <Button
                          variant="secondary"
                          size="sm"
                          icon={<HiArrowUpTray className="text-[16px]" />}
                          btnName="Upload"
                        />
                      </Link>
                    ) : (
                      <Button
                        variant="pastel-primary"
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                        icon={<HiShoppingBag className="text-[16px]" />}
                        btnName="Add"
                      />
                    )}
                  </div>
                </CardWrapper>
              </div>
            );
          })}
        </div>

        {/* Bottom View All Button */}
        <div className="mt-12 text-center">
          <Link href="/shop-miniatures">
            <Button
              variant="ghost"
              size="lg"
              font="display"
              secondaryIcon={<HiArrowRight className="text-[18px]" />}
              btnName="Explore All 120+ Miniatures"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
