"use client";

import Text from "@/shared/heading/Text";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Maya S.",
      location: "Verified Buyer • Seattle, WA",
      initial: "M",
      initialBg: "bg-primary-fixed text-primary",
      comment:
        '"I bought the Boba Dino for my programmer boyfriend\'s mechanical keyboard desk. The detail is insane, not a single print layer line visible! Super high quality and packed like crystal."',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-cyC-mM9R0gR9Qs0OsMBm5Ygp6ZSqEbVWgGIAGEGtzwjASIgzln7I-NjAmBolqSUYNqDNisT2eq4K6tQkpKecFJse7fAD-ubL3t4BkpZfF9x9PPf3kBbadctaWltSL05YaldAM-qtejmWxapo6H7-qAFHUrpXhpTCgsB603IxTbo7I0jvOjSDSXCtK_wWzipLTdy2D37aLe5mIK9Q7JgOuJcGPU3V2nD2-r_gHSOM6wE3EAWyMMUfeg",
      alt: "Boba dino next to mechanical keyboard",
    },
    {
      name: "Karan & Tanya",
      location: "Verified Buyer • Austin, TX",
      initial: "K",
      initialBg: "bg-secondary-fixed text-on-secondary-fixed",
      comment:
        '"Turned our wedding photo into a customized couple mini cake-topper. The 3D modeler captured our silly grins so accurately. Everyone at our reception took photos with it!"',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDt41genibzqzb8ctq5ogysY-DFZnC5vwit8RHBNiwCewkLvbls_NlfjW5Qaa4o-FAdj6OifezN_j50gnoTLY-99VEmz5OC-9XA3tT993CxwD9j8Bw_PkfLnSn7dNKRnlSTik6KK9vCg1SmluS72mXuq2IejBmu9AjyqdLq25DgNlvf3X-T6z_nmKqOs5LB3oZN25qj3xqi89HiUVUipXORjinfWI_rgozMEtx48AQdoNwM-6DMNGV0Ig",
      alt: "Custom 3D printed wedding couple cake topper",
    },
    {
      name: "Rohit P.",
      location: "Verified Buyer • San Jose, CA",
      initial: "R",
      initialBg: "bg-tertiary-fixed text-on-tertiary-fixed",
      comment:
        '"Paid with Cash on Delivery which gave me so much peace of mind for my first custom print. The package arrived in double-walled bubble wrap, totally pristine. 10/10 service!"',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBa0QpAbmkia03wqujg1TDvqE2pnxTaLJGHGoZVlm11rCqVhqQKgdT9Sn7HHGD_2noyjY_3rtJMYrdv3VlB8toTIb61xEC2wR7rAVQb4V3gKH_9fg-usUunua_iplofOOJARtLIcyShkgYGHZ8CH38FIbPtCJPWhaU6_btHW14uth_FwMktDTr031JlDmVsGi0c1bbQKCu2QOVusFMtCnn07SIpkyjoDSNKHvr2NHZHWhLn0ytKUJ0B8A",
      alt: "Cute packaging and glowing space explorer",
    },
  ];

  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-12 w-full bg-surface-container-low/40 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Reviews Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Chip
            variant="brand-badge"
            size="xs"
            title="Loved by Desks Everywhere"
          />
          <Text
            as="h2"
            font="display"
            size="4xl"
            type="bold"
            className="text-on-surface"
          >
            Community Stories &amp; Shelfies
          </Text>
          <Text size="base" type="normal" variant="secondary">
            Over 15,000 miniatures shipped safely to over 40 countries.
          </Text>
        </div>

        {/* 3 Verified Buyer Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <CardWrapper
              key={i}
              variant="default"
              className="p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Review Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#feb700] gap-0.5">
                    <FaStar className="text-[15px]" />
                    <FaStar className="text-[15px]" />
                    <FaStar className="text-[15px]" />
                    <FaStar className="text-[15px]" />
                    <FaStar className="text-[15px]" />
                  </div>
                  <Text as="span" font="display" size="xxs" type="bold" variant="brand" className="flex items-center gap-1">
                    <MdVerified className="text-[15px]" /> Verified Buyer
                  </Text>
                </div>

                <Text size="sm" type="normal" className="text-on-surface leading-relaxed italic">
                  {review.comment}
                </Text>

                {/* Customer photo preview */}
                <div className="w-full h-36 rounded-2xl overflow-hidden bg-surface-container-low">
                  <img
                    src={review.image}
                    alt={review.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 mt-2 flex items-center gap-3 border-t border-surface-container-low">
                <div
                  className={`w-10 h-10 rounded-full ${review.initialBg} flex items-center justify-center font-display text-sm font-bold shadow-sm`}
                >
                  {review.initial}
                </div>
                <div>
                  <Text as="h4" font="display" size="xs" type="bold" className="text-on-surface">
                    {review.name}
                  </Text>
                  <Text size="xs" variant="secondary">
                    {review.location}
                  </Text>
                </div>
              </div>
            </CardWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
