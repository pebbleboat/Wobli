"use client";

import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import { HiChevronDown, HiCheck } from "react-icons/hi2";

interface ShopFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  inStockOnly: boolean;
  setInStockOnly: (val: boolean) => void;
  codOnly: boolean;
  setCodOnly: (val: boolean) => void;
  shownCount: number;
}

export default function ShopFiltersSection({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  inStockOnly,
  setInStockOnly,
  codOnly,
  setCodOnly,
  shownCount,
}: ShopFiltersProps) {
  const categories = [
    { id: "all", label: "All (48)" },
    { id: "animals-pets", label: "Cute Animals & Pets (16)" },
    { id: "fantasy-gaming", label: "Fantasy & Gaming (14)" },
    { id: "desk-buddies", label: "Desk Buddies (10)" },
    { id: "custom-blanks", label: "Custom Figurine Blanks (8)" },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-3">
      <div className="bg-surface-container-lowest rounded-3xl p-4 sm:p-5 shadow-sm space-y-4 border border-surface-container-high/40">
        {/* Top: Category Pills with Smooth Horizontal Scroll on Mobile & Wrap on Desktop */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 px-0.5 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <Button
                key={cat.id}
                variant={isSelected ? "primary" : "pastel-surface"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className="whitespace-nowrap shrink-0 transition-all duration-200"
                btnName={cat.label}
              />
            );
          })}
        </div>

        {/* Bottom Controls Bar: Checkbox Toggles & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-surface-container-low">
          {/* Quick Filter Checkbox Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {/* In Stock Toggle */}
            <label
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer select-none transition-all duration-200 border ${
                inStockOnly
                  ? "bg-primary-fixed/30 border-primary/40 shadow-2xs"
                  : "bg-surface-container-low/80 hover:bg-surface-container border-surface-container-high/60"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-md flex items-center justify-center transition-all duration-200 border ${
                  inStockOnly
                    ? "bg-primary border-primary text-white"
                    : "bg-surface-container border-outline-variant/60"
                }`}
              >
                {inStockOnly && <HiCheck className="text-[12px] stroke-2" />}
              </div>
              <Text as="span" size="xs" type="semibold" className={inStockOnly ? "text-primary" : "text-on-surface"}>
                In Stock Ready to Ship
              </Text>
            </label>

            {/* COD Available Toggle */}
            <label
              onClick={() => setCodOnly(!codOnly)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer select-none transition-all duration-200 border ${
                codOnly
                  ? "bg-secondary-fixed/40 border-secondary-fixed-dim/60 shadow-2xs"
                  : "bg-surface-container-low/80 hover:bg-surface-container border-surface-container-high/60"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-md flex items-center justify-center transition-all duration-200 border ${
                  codOnly
                    ? "bg-secondary-container border-secondary-container text-on-secondary-container"
                    : "bg-surface-container border-outline-variant/60"
                }`}
              >
                {codOnly && <HiCheck className="text-[12px] stroke-2 text-on-secondary-container" />}
              </div>
              <Text as="span" size="xs" type="semibold" className={codOnly ? "text-secondary" : "text-on-surface"}>
                COD Available
              </Text>
            </label>
          </div>

          {/* Sort Dropdown & Product Counter */}
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse" />
              <Text as="span" size="xxs" variant="secondary" className="whitespace-nowrap font-medium">
                {shownCount} of 48 items
              </Text>
            </div>

            <div className="flex items-center gap-1.5">
              <Text as="span" size="xs" type="semibold" variant="secondary" className="whitespace-nowrap hidden md:inline">
                Sort:
              </Text>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-surface-container-low text-on-surface font-sans text-xs font-semibold py-1.5 pl-3.5 pr-8 rounded-full cursor-pointer outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all border border-surface-container-high/60"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                </select>
                <HiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[15px] text-outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
