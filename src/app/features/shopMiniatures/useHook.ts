"use client";

import { useState } from "react";
import { showToast } from "@/shared/ToastMessage";

export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  tag: string;
  tagType: "primary" | "secondary" | "tertiary";
  imageUrl: string;
  category: "animals-pets" | "fantasy-gaming" | "desk-buddies" | "custom-blanks";
  inStock: boolean;
  codAvailable: boolean;
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "matcha-frog",
    name: "Matcha Frog with Tiny Lilypad",
    description: "Hand-finished smooth resin, 5cm tall. Ideal for monitor tops, keyboards, or mini zen desk gardens.",
    price: 12.99,
    rating: 4.9,
    reviewCount: 84,
    tag: "Desk Buddy",
    tagType: "primary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgRIysKPGhwj3FlIVY6NNrwah9GB0_vH3Z_kprzw8OtcfbvO9P6gG-gxyiD58D7yPlW533NSmCMKKiTKW542P66GXVo1V7J1i8sEdpzlBZ2yg53tSOcvOOvcjg5lykG7qskuWjNoMKDN-R4Ktpzhy5XQ3yG1kCa9IFaowpypX2RrfvBNIkNnlMndRTAXb06ak3u7lGZ5LzrsWchz9EG-pXrKVpDOQnHOBBUkbjIqMof7OKsu7DzgTBvA",
    category: "desk-buddies",
    inStock: true,
    codAvailable: true,
  },
  {
    id: "sleepy-corgi",
    name: "Sleepy Corgi Pen Holder",
    description: "Weighted eco-resin base with anti-slip pads. Snugly holds 2-3 pens or your favourite stylus.",
    price: 16.5,
    rating: 5.0,
    reviewCount: 142,
    tag: "Pet Series",
    tagType: "tertiary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDB3vbOsqdOhJXWKpGFqwLzHecQG23LY55vWZSML9GXAFEkd2yZbNE07QXUOhZbULIc5Sd4J5DVW_VQqICndBqd_Pg6SQSaYoVgn8jiIN5xLduRLH4Pt8CQyHdUMnYrGkH7jpCK3fUlQrhUslFe7qljZYAxgEqzBzDpSbq6oGhgjN38o5uadeP5lWO96W7b3kNP1QGRdK_j8fySOcEEKrtDzyIlXixdLQRRCYv8QYTL-44PyEfEZgQNCg",
    category: "animals-pets",
    inStock: true,
    codAvailable: true,
  },
  {
    id: "wizard-owlet",
    name: "Little Wizard Owlet",
    description: "Ultra-fine 8K detail resolution, 6cm miniature figure. Includes detachable star crystal wand.",
    price: 14.25,
    rating: 4.8,
    reviewCount: 62,
    tag: "Fantasy",
    tagType: "secondary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcAP6-PwB6Eq631JE-3nCEx_s0oOqGoVD5LBO1tgZa5sCDpmNIFtHSMwq07Wsd0K55-0F_UmfMKPDzCRDVuPnNDz1YO3Fk1OsqfqHZn7qaLXlQnJ4W5B0KTkEv9jvtR1D3Go4tffEuyoyMQiBRCq3OQcuar_gqnr6RNfjyzaZoLb7bjmGljq532pedNUzhDHMOe3A35Gtb-N9_lhrZq5CzkQHWJWi3ETguM3k5knjQdJLO0TqpUZCo7g",
    category: "fantasy-gaming",
    inStock: true,
    codAvailable: true,
  },
  {
    id: "chibi-knight",
    name: "Chibi Knight with Wooden Shield",
    description: "Ready-to-play tabletop companion, 28mm standard scale compatible. Pre-primed finish.",
    price: 13.5,
    rating: 4.9,
    reviewCount: 95,
    tag: "Tabletop Cutie",
    tagType: "primary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLOU8B7FN0nDreHIlQQNn-z0VEvwkNVA94JSSCmAAdcUUupFjlG21-C6Xh4QSLFIAYKiukLLYSPvrU2ihkT9gUpN9Oa2u2JAUVevdGejSBzPbT9ic8g_fAPKYz6eNx5T3hjyE5roqawxzXlrw-fAab11RtbKqNQgKqc60j74UpuDZhta7vU_9po4-03aL6tjRe9f5xMxyhWl7JqiwfOh2kgEMX1Lk80JaFCyPBJ3hdkLyxE3ZKIzcoTg",
    category: "fantasy-gaming",
    inStock: true,
    codAvailable: true,
  },
  {
    id: "galaxy-axolotl",
    name: "Galaxy Axolotl Figure",
    description: "Crafted with pearlescent silk polymer, featuring semi-translucent frills. 7cm length.",
    price: 15.5,
    rating: 5.0,
    reviewCount: 118,
    tag: "Desk Buddy",
    tagType: "tertiary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtMHAAiyuIDvlXUQUovRRxtF_f8A-Qx-TZtmhi4UKwZbnaQR07wG-jQB6V_5Vyl34vTjk3OSgGn7-rSMpMlQqmL4xfYBXJCNwT_oKKMiKTfsOB6ocM8JAgeUjdaWsrcgqjJT25sh9XORe-9mTub0mBh3jP-xECAlQnxq6IxiWDZzgbaHQoFnuq8JNRmmyn9zEf6tlKDjUD8KAHotqT_wCEiK9FK1imHtBJxQCwckXgTMYr0yaAYOpqgA",
    category: "desk-buddies",
    inStock: true,
    codAvailable: true,
  },
  {
    id: "teacup-kitten",
    name: "Tea Cup Kitten Mini",
    description: "Delicate two-part resin assembly, 4.5cm height. Cute desk mascot guaranteed to bring smiles.",
    price: 13.99,
    rating: 4.9,
    reviewCount: 79,
    tag: "Pet Series",
    tagType: "secondary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArrethNLQC29vax0p18ACyE-ZOmt_HzKX_8kzQMenUJd96XXFwHCkqTp2cuDRlgr6RCJcJFI_2LtdbQwfWwgIWolYWWCfAsX3HpmeaosMwtQ3K-O-g6FE37jdXOBLsXvQ6VgBf-Q8AzjGttW_7H0hO4Bis0eUInAepk8qBygi3lA0TxCnOZsILjGmsOs7kioIqsX5T5UUFa5AYcJj_wilVMM3-k0KQ24At2XqLOiEIr4o9wsTYxZbQxg",
    category: "animals-pets",
    inStock: true,
    codAvailable: true,
  },
  {
    id: "boba-bear",
    name: "Boba Bear Figurine",
    description: "Solid cured resin toy, 5.5cm tall. Features high-gloss faux tapioca bubbles inside a clear cup.",
    price: 14.99,
    rating: 4.9,
    reviewCount: 110,
    tag: "Desk Buddy",
    tagType: "primary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB37dwotAmj8md9IeqD10HDxIfzA7i6ZxuS6Rdme9lOvJAzufaQDQ4jTK7q2WGda0cV0U1WkgmeXa3i6mt67N-Vi8s0cfE6W-87fMoahYgTMVUnatOH6HFW94E2ESYpoDugF8E11rqWJwsdnFOOqCSNYCrqn_WX2ZwfO5mFLmlKeEb5gTZquQedXW5hs09I-c-ANSSTgpNR41zpTBcgZBwUGNIWWz7ip1NLmbW9d-8zNUgksiEQcU3U2g",
    category: "desk-buddies",
    inStock: true,
    codAvailable: true,
  },
  {
    id: "pocket-dragon",
    name: "Pocket Dragon Hatchling",
    description: "Detailed scales and flexible jointed mini wings. Hand-finished 6.5cm collector edition.",
    price: 19.0,
    rating: 5.0,
    reviewCount: 168,
    tag: "Fantasy",
    tagType: "tertiary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLJTiBr2f-20DtsQbA5idAKm4qzyOi1Mm2IkM-Qu68L0F_dQ8N9MAlbRM2iw6geULBJ-9-jsEjy0QdQdHwcEMqWLiOvONTqeU92i8A-rUX6TUh2D-Ddz20kC_gtC7x2DTksnCsVLWn6v_EdGvSZALHIfGiH77fvL1bEw51LO4EWgDqqr6kf_S524MR5_Fo-zc7TvHBaWPK6AsfBQufgCseMQJNrsls0GOJVBVLHiXootipVPueC2H7iA",
    category: "fantasy-gaming",
    inStock: true,
    codAvailable: true,
  },
];

export function useShopMiniaturesHook() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [inStockOnly, setInStockOnly] = useState<boolean>(true);
  const [codOnly, setCodOnly] = useState<boolean>(true);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [cartCount, setCartCount] = useState<number>(2);

  const getQuantity = (id: string) => quantities[id] || 1;

  const incrementQty = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.min((prev[id] || 1) + 1, 99),
    }));
  };

  const decrementQty = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast({ type: "info", title: "Removed from wishlist" });
        return prev.filter((item) => item !== id);
      } else {
        showToast({ type: "success", title: "Added to wishlist! ❤️" });
        return [...prev, id];
      }
    });
  };

  const handleAddToCart = (product: ShopProduct) => {
    const qty = getQuantity(product.id);
    setCartCount((prev) => prev + qty);
    showToast({ type: "success", title: `Added ${qty}x "${product.name}" to your bag! 🛍️` });
  };

  const filteredProducts = SHOP_PRODUCTS.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    if (inStockOnly && !product.inStock) {
      return false;
    }
    if (codOnly && !product.codAvailable) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
    return 0; // Default popularity
  });

  return {
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
    cartCount,
    handleAddToCart,
    filteredProducts,
    totalCount: SHOP_PRODUCTS.length,
  };
}
