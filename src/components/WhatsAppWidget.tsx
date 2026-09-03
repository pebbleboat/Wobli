"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppWidget({
  phoneNumber = "918840944840",
  defaultMessage = "Hi Wobli! I'd like to know more about your 3D miniatures and custom orders.",
}: WhatsAppWidgetProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Floating Chat Bubble Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white text-on-surface px-4 py-2.5 rounded-2xl shadow-xl border border-surface-container-high/60 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <div className="leading-tight">
            <p className="font-display font-bold text-xs text-on-surface">
              Need help? Chat with us!
            </p>
            <p className="text-[10px] text-on-surface-variant font-medium">
              3D Artist Studio • Online
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Close tooltip"
            className="text-outline hover:text-on-surface p-0.5 rounded-full hover:bg-surface-container-low transition-colors ml-1 cursor-pointer"
          >
            <IoClose size={14} />
          </button>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Wobli Studio"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
      >
        <FaWhatsapp className="text-[32px] group-hover:rotate-6 transition-transform duration-300" />
        
        {/* Pulsing Online Green Status Ring */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E] border-2 border-white" />
        </span>
      </a>
    </div>
  );
}
