"use client";

import { useState } from "react";
import { showToast } from "@/shared/ToastMessage";

export interface CheckoutItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export type ShippingSpeed = "standard" | "express";
export type PaymentMethod = "razorpay" | "cod";

export function useCheckoutHook() {
  const [items, setItems] = useState<CheckoutItem[]>([
    {
      id: "item-1",
      name: "Boba Dino Companion",
      subtitle: "Filament: Pastel Mint • 7cm Mini",
      price: 14.99,
      quantity: 1,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC7W6pfWUp3nhpbkcb-XeBfd5sWbGUO8JSH5Lgz-qd68SIEbwnCnkombTSJ7dJ97pjcvRLLp7nAMHghO3rx3gmOmHSz_H3D-Ll1hU3PGymbHeTSX8l5NG1O1t12mH9g1IiTX7ACI0LFxUmcjszYaV3Xe9VdMve0pLja7_J6PenQqhaE-k9Rm4Dd__gkGNxGN4MrMU7MFdn-NntlFOgAB6IAOLFdgTJ6hU68Gl5MJqmNxdCrOgWaZ3F6vA",
    },
    {
      id: "item-2",
      name: "Pet Mini - Golden Retriever",
      subtitle: "Custom Photo Model • 10cm Desk Base",
      price: 44.99,
      quantity: 1,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjEA1yj04enpBtiJ4MWVnaXeN75XE4maI61w3zv2iwar5sMFVphF_xTFr_slrpu8Wj5foh-c-JEAtyiGd0C7KD5GdMiwA3IC2htnG3nYp-R9eo5XnJr7tMii1stcHXWxWMD0CDq7O0FclgkVXuAb8TXfjgdiOxdcYtuAkrAqvTBJApY52vsu6e3yNX1jp_UMyI6DBqZucsLn7a4SThV-J_RXqZdyAjqrWnQJ8-bb36IX8Qz2BPyWW9tQ",
    },
  ]);

  // Form State
  const [email, setEmail] = useState("alex.crafts@gmail.com");
  const [phone, setPhone] = useState("98765 43210");
  const [firstName, setFirstName] = useState("Alex");
  const [lastName, setLastName] = useState("Rivers");
  const [street, setStreet] = useState("Flat 402, Blossom Orchards, 12th Main Road");
  const [city, setCity] = useState("Bengaluru");
  const [state, setState] = useState("Karnataka");
  const [postal, setPostal] = useState("560034");

  // Shipping & Payment Choices
  const [shippingMethod, setShippingMethod] = useState<ShippingSpeed>("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("razorpay");
  const [giftNote, setGiftNote] = useState("");

  // Promo Code
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = shippingMethod === "express" ? 4.99 : 0.0;
  const onlinePerkDiscount = paymentMethod === "razorpay" ? 3.0 : 0.0;
  const total = Math.max(0, subtotal + shippingCost - onlinePerkDiscount - promoDiscount);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  // Handlers
  const handleQuantityChange = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    showToast({ type: "info", title: "Item removed from order" });
  };

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      showToast({ type: "warning", title: "Please enter a promo code" });
      return;
    }

    if (promoCode.trim().toUpperCase() === "WOBLIJOY" || promoCode.trim().toUpperCase() === "WOBLI5") {
      setIsPromoApplied(true);
      setPromoDiscount(5.0);
      showToast({ type: "success", title: "Coupon applied! $5.00 discount added 🎉" });
    } else {
      setIsPromoApplied(true);
      setPromoDiscount(3.0);
      showToast({ type: "success", title: `Coupon ${promoCode.toUpperCase()} applied! 🎉` });
    }
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      showToast({ type: "error", title: "Your cart is empty!" });
      return;
    }
    if (!email || !phone || !street || !city) {
      showToast({ type: "error", title: "Please fill in all required shipping fields" });
      return;
    }

    if (paymentMethod === "razorpay") {
      showToast({ type: "success", title: `Redirecting to Razorpay Gateway ($${total.toFixed(2)})... 🚀` });
    } else {
      showToast({ type: "success", title: `Order placed with Cash on Delivery ($${total.toFixed(2)})! 📦` });
    }
  };

  return {
    items,
    email,
    setEmail,
    phone,
    setPhone,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    postal,
    setPostal,
    shippingMethod,
    setShippingMethod,
    paymentMethod,
    setPaymentMethod,
    giftNote,
    setGiftNote,
    promoCode,
    setPromoCode,
    isPromoApplied,
    promoDiscount,
    subtotal,
    shippingCost,
    onlinePerkDiscount,
    total,
    totalQuantity,
    handleQuantityChange,
    handleRemoveItem,
    handleApplyPromo,
    handlePlaceOrder,
  };
}
