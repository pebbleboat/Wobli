"use client";

import Text from "@/shared/heading/Text";
import CardWrapper from "@/shared/cards/CardWrapper";
import { MdLocalShipping, MdHomeFilled, MdCardGiftcard } from "react-icons/md";
import { ShippingSpeed } from "../useHook";

interface DeliveryAddressProps {
  firstName: string;
  setFirstName: (val: string) => void;
  lastName: string;
  setLastName: (val: string) => void;
  street: string;
  setStreet: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
  state: string;
  setState: (val: string) => void;
  postal: string;
  setPostal: (val: string) => void;
  shippingMethod: ShippingSpeed;
  setShippingMethod: (val: ShippingSpeed) => void;
  giftNote: string;
  setGiftNote: (val: string) => void;
}

export default function DeliveryAddressSection({
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
  giftNote,
  setGiftNote,
}: DeliveryAddressProps) {
  return (
    <CardWrapper variant="default" className="p-6 sm:p-8 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center text-lg shrink-0">
            <MdLocalShipping />
          </span>
          <Text as="h2" font="display" size="lg" type="bold" className="text-on-surface">
            2. Delivery Address
          </Text>
        </div>
        <div className="flex items-center gap-1.5 text-secondary font-sans text-xs font-bold">
          <MdHomeFilled className="text-[17px]" />
          <span>All India Pin Codes</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="fname" className="block font-sans text-xs font-bold text-on-surface">
              First Name
            </label>
            <input
              id="fname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-surface-container-low px-4 py-3 rounded-2xl font-sans text-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 border border-surface-container-high/60 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lname" className="block font-sans text-xs font-bold text-on-surface">
              Last Name
            </label>
            <input
              id="lname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-surface-container-low px-4 py-3 rounded-2xl font-sans text-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 border border-surface-container-high/60 transition-all"
            />
          </div>
        </div>

        {/* Street Address */}
        <div className="space-y-1.5">
          <label htmlFor="street" className="block font-sans text-xs font-bold text-on-surface">
            Street Address
          </label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="House/Flat No., Road or Colony Name"
            className="w-full bg-surface-container-low px-4 py-3 rounded-2xl font-sans text-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 border border-surface-container-high/60 transition-all"
          />
        </div>

        {/* City, State, Postal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="city" className="block font-sans text-xs font-bold text-on-surface">
              City / Town
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-surface-container-low px-4 py-3 rounded-2xl font-sans text-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 border border-surface-container-high/60 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="state" className="block font-sans text-xs font-bold text-on-surface">
              State
            </label>
            <input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full bg-surface-container-low px-4 py-3 rounded-2xl font-sans text-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 border border-surface-container-high/60 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="postal" className="block font-sans text-xs font-bold text-on-surface">
              Postal / Pin Code
            </label>
            <input
              id="postal"
              type="text"
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              className="w-full bg-surface-container-low px-4 py-3 rounded-2xl font-sans text-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 border border-surface-container-high/60 transition-all"
            />
          </div>
        </div>

        {/* Packaging & Shipping Speed Options */}
        <div className="pt-2 space-y-2">
          <Text as="label" font="display" size="xs" type="bold" className="text-on-surface block">
            Select Packaging &amp; Shipping Speed
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Standard Free */}
            <label
              onClick={() => setShippingMethod("standard")}
              className={`relative flex items-start gap-3 p-4 rounded-2xl cursor-pointer transition-colors duration-200 border ${
                shippingMethod === "standard"
                  ? "bg-primary-fixed/20 border-primary"
                  : "bg-surface-container-low hover:bg-surface-container border border-surface-container-high/60"
              }`}
            >
              <input
                type="radio"
                name="shipping_method"
                checked={shippingMethod === "standard"}
                onChange={() => setShippingMethod("standard")}
                className="mt-1 accent-primary w-4 h-4 cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
                    Standard Cute
                  </Text>
                  <Text as="span" font="display" size="xs" type="bold" className="text-primary">
                    FREE
                  </Text>
                </div>
                <Text size="xs" variant="secondary" className="mt-0.5">
                  3-5 business days. Bubble wrapped in our sugar-box.
                </Text>
              </div>
            </label>

            {/* Express Safe */}
            <label
              onClick={() => setShippingMethod("express")}
              className={`relative flex items-start gap-3 p-4 rounded-2xl cursor-pointer transition-colors duration-200 border ${
                shippingMethod === "express"
                  ? "bg-primary-fixed/20 border-primary"
                  : "bg-surface-container-low hover:bg-surface-container border border-surface-container-high/60"
              }`}
            >
              <input
                type="radio"
                name="shipping_method"
                checked={shippingMethod === "express"}
                onChange={() => setShippingMethod("express")}
                className="mt-1 accent-primary w-4 h-4 cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <Text as="span" font="display" size="xs" type="bold" className="text-on-surface">
                    Express Gift Box
                  </Text>
                  <Text as="span" font="display" size="xs" type="bold" className="text-secondary">
                    +$4.99
                  </Text>
                </div>
                <Text size="xs" variant="secondary" className="mt-0.5">
                  1-2 business days with padded velvet base &amp; priority queue.
                </Text>
              </div>
            </label>
          </div>
        </div>

        {/* Optional Gift Message */}
        <div className="pt-2 space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="giftnote"
              className="font-sans text-xs font-bold text-on-surface flex items-center gap-1.5"
            >
              <MdCardGiftcard className="text-[18px] text-tertiary" />
              <span>Gift Card Note (Optional &amp; Free)</span>
            </label>
            <Text as="span" font="display" size="xxs" variant="secondary">
              Max 150 chars
            </Text>
          </div>
          <textarea
            id="giftnote"
            maxLength={150}
            rows={2}
            value={giftNote}
            onChange={(e) => setGiftNote(e.target.value)}
            placeholder="Write a sweet message to be handwritten inside your miniature's unboxing card..."
            className="w-full bg-surface-container-low p-3.5 rounded-2xl font-sans text-xs text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all resize-none border border-surface-container-high/60"
          />
        </div>
      </div>
    </CardWrapper>
  );
}
