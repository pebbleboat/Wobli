"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useCheckoutHook } from "./useHook";
import CheckoutBreadcrumbSection from "./sections/CheckoutBreadcrumbSection";
import ContactInfoSection from "./sections/ContactInfoSection";
import DeliveryAddressSection from "./sections/DeliveryAddressSection";
import PaymentSelectionSection from "./sections/PaymentSelectionSection";
import CheckoutSummarySidebar from "./sections/CheckoutSummarySidebar";

export default function Checkout() {
  const {
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
  } = useCheckoutHook();

  return (
    <div className="bg-surface font-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Global Top Navbar */}
      <Navbar cartCount={totalQuantity} />

      {/* Main Content Area with Page Entrance Fade-In Animation */}
      <main className="w-full bg-surface flex-1 pt-[104px] animate-page-enter">
        <div className="flex flex-col w-full">
          {/* Progress Stepper / Breadcrumbs */}
          <CheckoutBreadcrumbSection />

          {/* Main Checkout Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT COLUMN: Forms & Payment (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <ContactInfoSection
                  email={email}
                  setEmail={setEmail}
                  phone={phone}
                  setPhone={setPhone}
                />

                <DeliveryAddressSection
                  firstName={firstName}
                  setFirstName={setFirstName}
                  lastName={lastName}
                  setLastName={setLastName}
                  street={street}
                  setStreet={setStreet}
                  city={city}
                  setCity={setCity}
                  state={state}
                  setState={setState}
                  postal={postal}
                  setPostal={setPostal}
                  shippingMethod={shippingMethod}
                  setShippingMethod={setShippingMethod}
                  giftNote={giftNote}
                  setGiftNote={setGiftNote}
                />

                <PaymentSelectionSection
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                />
              </div>

              {/* RIGHT COLUMN: Order Summary & CTA (5 Cols) */}
              <div className="lg:col-span-5">
                <CheckoutSummarySidebar
                  items={items}
                  subtotal={subtotal}
                  shippingCost={shippingCost}
                  onlinePerkDiscount={onlinePerkDiscount}
                  promoDiscount={promoDiscount}
                  total={total}
                  totalQuantity={totalQuantity}
                  promoCode={promoCode}
                  setPromoCode={setPromoCode}
                  isPromoApplied={isPromoApplied}
                  paymentMethod={paymentMethod}
                  handleQuantityChange={handleQuantityChange}
                  handleRemoveItem={handleRemoveItem}
                  handleApplyPromo={handleApplyPromo}
                  handlePlaceOrder={handlePlaceOrder}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
