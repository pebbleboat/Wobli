import { useState } from "react";
import { showToast } from "@/shared/ToastMessage";

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  tag?: string;
  tagType?: "staff" | "trending" | "custom" | "glow";
  imageUrl: string;
  category: "desk-buddies" | "gaming-figures" | "custom-photo";
  isCustomUpload?: boolean;
}

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "boba-dino",
    name: "Boba Dino Desk Companion",
    description:
      "A pocket-sized green dinosaur clutching a tiny brown sugar boba cup. Guaranteed to boost work happiness.",
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.9,
    reviewCount: 128,
    tag: "Staff Pick",
    tagType: "staff",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIrBXa72JjUz9PHO74S_W0LQd22VzBcgIcfu7Q96OIppJFN4bEka5wm8TXiYndX_sr8iXoLw0JACDYzc0l9VWy4WUYrF2WqvPN5l4p0_2g77feT6oW735gTiSdnxmWzX9BsCy3r_Z5Od42yy2IS6s5i9GWw8HCHvF4rU9-ll98NO0TY1_qNomi11nUbxy3kQJUe8uHPbqht0h6sKzF0WW6l8TLooCwk1_5u4SbXqm_by3t9F9HPc2lAA",
    category: "desk-buddies",
  },
  {
    id: "cozy-fox",
    name: "Cozy Reading Fox Miniature",
    description:
      "A serene little fox miniature equipped with miniature round spectacles, nested on tiny hardcover pages.",
    price: 18.5,
    rating: 5.0,
    reviewCount: 94,
    tag: "Trending",
    tagType: "trending",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDr12D3qYC21nGISc9Y9aeYconxCR2E3B4n_bWGtf8KxonDDxCXH7of2IKf0z7H9VXPo5_gUOkCPy5jalAjIr33ygXYjg-SAJ-MAz79-jTZ3uLEmZHefx9NrmqIOL5JIy1QceWB5X5AFjjDxMhkYbU7LAHWHTVpYptwr0rLsf0TYQkghgmC3tmLdUF3NLq3gFWQ-BYejY8w2GrWg23Je-e8iNF0flzVyAgTWovllJMfIS6O_bY2mTVURQ",
    category: "desk-buddies",
  },
  {
    id: "custom-pet",
    name: "Custom Chibi Pet Figurine",
    description:
      "Upload a snapshot of your dog, cat, or parrot. We model their playful personality into a lasting 3D keepsake.",
    price: 29.0,
    rating: 4.9,
    reviewCount: 310,
    tag: "Custom Made",
    tagType: "custom",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaUY912n12JFIbc6e7QnmWJVGmYQRMTZxKEXXCk24gwJ1VnH9Sj7SZfzdKzdT6rFWwEmfuJCmnSzVmyY9quJUMkLPHnrVgC2bQuRVhWm9bqiwI5qM0EG1ReUtebtq_Ti1YTc1CI4uDm3eQAHHy6plvILRoyVQOqHQxj8IAbmccj50Hp7ucrWaNichLfUXIrROA7fECI4V9jRqfbxqad7ZttwxXfk-MYIfEM0qI71Go9uBsg37J8y_OKg",
    category: "custom-photo",
    isCustomUpload: true,
  },
  {
    id: "space-explorer",
    name: "Tiny Space Explorer",
    description:
      "A playful round cosmonaut resting on a glittery resin asteroid. Emits a gentle cyan glow in low light.",
    price: 16.5,
    originalPrice: 22.0,
    rating: 4.8,
    reviewCount: 86,
    tag: "Glows in Dark",
    tagType: "glow",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1LsQnfTr7tATCc8JlKDt0nQN1zirhxqxVd3Et55fhf7dfCw35OX6qhRkSiJewwy2SJO2kDxR3FejiiaGzMrTZ5ZCgLo8htaPBvQjrE31FaIdcRWcQjnLSQ542rXmw2rG8U1pmctaHW7zH3wLzjByCTxQFptKrBX8lQgZJf4IJvWX3qDfw7s9rz4JafRgr9CWGMAacrUsex4KpneF25d4I5F_WmHqYnpfXnJpu0N69YGSG6m-woM4otg",
    category: "gaming-figures",
  },
];

export const CANDY_COLORS = [
  { id: "berry", name: "Berry Pop", bg: "#e11170", text: "Berry Pop Finish" },
  { id: "honey", name: "Sunny Honey", bg: "#feb700", text: "Sunny Amber Finish" },
  { id: "violet", name: "Cosmic Violet", bg: "#8f47ff", text: "Cosmic Violet Finish" },
  { id: "aqua", name: "Baby Aqua", bg: "#38bdf8", text: "Baby Aqua Finish" },
  { id: "cloud", name: "Cloud White", bg: "#f1f5f9", text: "Cloud White Pearl Finish" },
];

export function useHomeHook() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("berry");
  const [cartCount, setCartCount] = useState<number>(2);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleWishlist = (productId: string) => {
    const isCurrentlyInWishlist = wishlist.includes(productId);
    if (isCurrentlyInWishlist) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showToast({ type: "info", title: "Removed from wishlist" });
    } else {
      setWishlist((prev) => [...prev, productId]);
      showToast({ type: "success", title: "Added to wishlist! ❤️" });
    }
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartCount((c) => c + 1);
    showToast({ type: "success", title: `Added ${product.name} to bag! 🛍️` });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      showToast({ type: "error", title: "Please enter a valid email address" });
      return;
    }
    showToast({ type: "success", title: "Welcome to the Wobli Club! Check your inbox for $5 off. 🎁" });
    setNewsletterEmail("");
  };

  const filteredProducts =
    selectedCategory === "all"
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => {
          if (selectedCategory === "desk-buddies") return p.category === "desk-buddies";
          if (selectedCategory === "gaming-figures") return p.category === "gaming-figures";
          if (selectedCategory === "custom-photo") return p.category === "custom-photo";
          return true;
        });

  return {
    selectedCategory,
    setSelectedCategory,
    wishlist,
    toggleWishlist,
    selectedColor,
    setSelectedColor,
    cartCount,
    handleAddToCart,
    newsletterEmail,
    setNewsletterEmail,
    handleSubscribe,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    candyColors: CANDY_COLORS,
  };
}
