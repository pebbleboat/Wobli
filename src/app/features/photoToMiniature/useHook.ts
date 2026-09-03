"use client";

import { useState } from "react";
import { showToast } from "@/shared/ToastMessage";

export interface UploadedPhoto {
  id: string;
  name: string;
  size: string;
  previewUrl: string;
}

export type FigurineStyle = "chibi" | "realistic" | "bobblehead";
export type FigurineSize = "pocket" | "desk" | "collector";
export type FigurineFinish = "painted" | "diy";

export function usePhotoToMiniatureHook() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([
    {
      id: "1",
      name: "golden_boy_mochi.jpg",
      size: "3.4 MB",
      previewUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCyuvIXGiCWaadcF-lP54RJnv3yHLIj3BpdXia-hvuiZoTbaT8hgvda5wvW5x3i-D_fdFmJHSsi5q8L55A1brUzFzmwb2IRgESA1dtUynrjvZRk230wK1W4Uwnh1l7VdIO7Kv0wphh6LduiZwKOXhVXksjlM9WsiSpCwKkrPcGXXonPi5NhEdwfpsSjkEtnH5wO1IFld5MICq6B3GEXGBrj8_KYp6l8sUs4hoE_-FSVM6oeU4dP7ZXqQ",
    },
  ]);

  const [selectedStyle, setSelectedStyle] = useState<FigurineStyle>("chibi");
  const [selectedSize, setSelectedSize] = useState<FigurineSize>("desk");
  const [selectedFinish, setSelectedFinish] = useState<FigurineFinish>("painted");
  const [plinthText, setPlinthText] = useState<string>("Mochi • Goodest Boy");
  const [cartCount, setCartCount] = useState<number>(2);

  // Price map
  const sizePrices: Record<FigurineSize, { price: number; name: string; height: string }> = {
    pocket: { price: 29.99, name: "Pocket Size", height: "6 cm / 2.5 inches" },
    desk: { price: 44.99, name: "Desk Size", height: "10 cm / 4.0 inches" },
    collector: { price: 69.99, name: "Collector Size", height: "15 cm / 6.0 inches" },
  };

  const styleNames: Record<FigurineStyle, string> = {
    chibi: "Chibi Cute Style",
    realistic: "Realistic Miniature",
    bobblehead: "Cartoon Bobblehead",
  };

  const finishNames: Record<FigurineFinish, { name: string; adjustment: number }> = {
    painted: { name: "Full Hand-Painted", adjustment: 0 },
    diy: { name: "DIY Paint Kit (Pastel Resin)", adjustment: -5 },
  };

  const basePrice = sizePrices[selectedSize].price;
  const finishAdjustment = finishNames[selectedFinish].adjustment;
  const totalPrice = Math.max(15, basePrice + finishAdjustment);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (photos.length >= 3) {
      showToast({ type: "warning", title: "Maximum 3 reference photos allowed per figurine!" });
      return;
    }

    const newPhoto: UploadedPhoto = {
      id: String(Date.now()),
      name: files[0].name,
      size: `${(files[0].size / (1024 * 1024)).toFixed(1)} MB`,
      previewUrl: URL.createObjectURL(files[0]),
    };

    setPhotos((prev) => [...prev, newPhoto]);
    showToast({ type: "success", title: `Uploaded ${newPhoto.name}! 📸` });
  };

  const handleRemovePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    showToast({ type: "info", title: "Photo removed" });
  };

  const handleOrderCustomMiniature = () => {
    if (photos.length === 0) {
      showToast({ type: "error", title: "Please upload at least 1 reference photo first!" });
      return;
    }

    setCartCount((c) => c + 1);
    showToast({
      type: "success",
      title: `Custom ${styleNames[selectedStyle]} added to bag! ($${totalPrice.toFixed(2)}) 🛍️`,
    });
  };

  return {
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
  };
}
