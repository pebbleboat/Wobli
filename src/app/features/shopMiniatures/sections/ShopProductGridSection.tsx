"use client";

import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa6";
import { HiMinus, HiPlus, HiShoppingBag } from "react-icons/hi2";
import { ShopProduct } from "../useHook";

interface ShopProductGridProps {
  products: ShopProduct[];
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  getQuantity: (id: string) => number;
  incrementQty: (id: string) => void;
  decrementQty: (id: string) => void;
  handleAddToCart: (product: ShopProduct) => void;
}

export default function ShopProductGridSection({
  products,
  wishlist,
  toggleWishlist,
  getQuantity,
  incrementQty,
  decrementQty,
  handleAddToCart,
}: ShopProductGridProps) {
  const getChipVariant = (type: "primary" | "secondary" | "tertiary") => {
    switch (type) {
      case "primary":
        return "glass-primary";
      case "secondary":
        return "glass-secondary";
      case "tertiary":
        return "glass-tertiary";
      default:
        return "glass";
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-8">
      <div
        key={products.map((p) => p.id).join("-")}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {products.map((product, index) => {
          const isWishlisted = wishlist.includes(product.id);
          const qty = getQuantity(product.id);

          return (
            <div
              key={product.id}
              className="animate-card-slide"
              style={{ animationDelay: `${(index % 12) * 55}ms` }}
            >
              <CardWrapper
                variant="interactive"
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Product Image Box */}
                  <div className="relative w-full aspect-square bg-surface-container-low rounded-2xl overflow-hidden flex items-center justify-center mb-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <Chip
                        variant={getChipVariant(product.tagType)}
                        size="xs"
                        title={product.tag}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Add to wishlist"
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer text-sm active:scale-90 ${
                        isWishlisted ? "text-primary scale-110" : "text-outline hover:text-primary hover:scale-105"
                      }`}
                    >
                      {isWishlisted ? <FaHeart className="animate-in zoom-in-50 duration-200" /> : <FaRegHeart />}
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 text-[#feb700] mb-1">
                    <FaStar className="text-[14px]" />
                    <Text size="xs" type="bold" className="text-on-surface font-sans">
                      {product.rating.toFixed(1)}
                    </Text>
                    <Text size="xs" type="normal" variant="secondary">
                      ({product.reviewCount} reviews)
                    </Text>
                  </div>

                  {/* Title & Description */}
                  <Text
                    as="h3"
                    font="display"
                    size="sm"
                    type="bold"
                    className="line-clamp-1 mb-1 group-hover:text-primary transition-colors duration-200"
                  >
                    {product.name}
                  </Text>
                  <Text
                    size="xs"
                    type="normal"
                    variant="secondary"
                    className="line-clamp-2 mb-4 leading-relaxed"
                  >
                    {product.description}
                  </Text>
                </div>

                {/* Price & Interactive Stepper + Add Button */}
                <div className="pt-2 space-y-3 border-t border-surface-container-low">
                  <div className="flex items-baseline justify-between">
                    <Text
                      as="span"
                      font="display"
                      size="xxs"
                      type="bold"
                      variant="secondary"
                      className="uppercase tracking-wider"
                    >
                      Price
                    </Text>
                    <Text
                      as="div"
                      font="display"
                      size="base"
                      type="bold"
                      className="text-on-surface"
                    >
                      ${product.price.toFixed(2)}
                    </Text>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Quantity Stepper */}
                    <div className="inline-flex items-center bg-surface-container-low rounded-full p-1 shadow-inner shrink-0 border border-surface-container-high/40">
                      <Button
                        variant="stepper"
                        onClick={() => decrementQty(product.id)}
                        icon={<HiMinus className="text-[14px]" />}
                      />
                      <Text
                        as="span"
                        size="xs"
                        type="bold"
                        className="w-7 text-center text-on-surface"
                      >
                        {qty}
                      </Text>
                      <Button
                        variant="stepper"
                        onClick={() => incrementQty(product.id)}
                        icon={<HiPlus className="text-[14px]" />}
                      />
                    </div>

                    {/* Add Button */}
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      onClick={() => handleAddToCart(product)}
                      icon={<HiShoppingBag className="text-[16px]" />}
                      btnName="Add"
                    />
                  </div>
                </div>
              </CardWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
}
