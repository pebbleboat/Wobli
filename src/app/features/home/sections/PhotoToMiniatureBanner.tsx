"use client";

import Link from "next/link";
import Text from "@/shared/heading/Text";
import Button from "@/shared/buttons/Button";
import CardWrapper from "@/shared/cards/CardWrapper";
import Chip from "@/shared/Chip";
import { HiSparkles, HiCheck, HiArrowsRightLeft } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";

export default function PhotoToMiniatureBanner() {
  return (
    <section id="photo-to-miniature" className="py-12 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary via-primary-container to-tertiary rounded-3xl p-6 lg:p-12 text-on-primary shadow-2xl overflow-hidden group">
          {/* Decorative Ambient Rings with Gentle Pulsing */}
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-surface-container-lowest/10 blur-2xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Banner Text */}
            <div className="lg:col-span-6 space-y-4">
              <Chip
                variant="glass-primary"
                size="xs"
                icon={<HiSparkles className="text-[14px]" />}
                title="Wobli Studio AI + Hand Artisan Polish"
              />

              <Text
                as="h2"
                font="display"
                size="4xl"
                type="bold"
                className="text-on-primary leading-tight"
              >
                Turn Any Photo on Your Camera Roll Into a Cherished 3D Miniature!
              </Text>

              <Text size="base" type="normal" variant="white-muted" className="leading-relaxed">
                Got a goofy picture of your corgi, a selfie with your soulmate, or your kid&apos;s original crayon drawing? Upload it, and our team sculpts and 3D prints it into an heirloom desk figurine.
              </Text>

              {/* Feature Bullet List */}
              <ul className="space-y-2.5 font-sans text-sm text-on-primary/95 pt-2">
                <li className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-surface-container-lowest/30 flex items-center justify-center text-on-primary shrink-0">
                    <HiCheck className="text-[14px]" />
                  </span>
                  <span>Free 3D digital preview sent to your email before we print</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-surface-container-lowest/30 flex items-center justify-center text-on-primary shrink-0">
                    <HiCheck className="text-[14px]" />
                  </span>
                  <span>Unlimited free revisions until you say &quot;It&apos;s perfect!&quot;</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-surface-container-lowest/30 flex items-center justify-center text-on-primary shrink-0">
                    <HiCheck className="text-[14px]" />
                  </span>
                  <span>Includes weighted wooden display base &amp; custom engraved name tag</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link href="/photo-to-miniature">
                  <Button
                    variant="secondary"
                    size="lg"
                    font="display"
                    btnName="Try Photo to Miniature →"
                  />
                </Link>
                <Text size="xs" variant="white-muted">
                  No commitment required for preview
                </Text>
              </div>
            </div>

            {/* Right: Visual Before / After Split Demonstration with Floating Hover */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <CardWrapper variant="default" className="w-full max-w-lg p-4 sm:p-5 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="grid grid-cols-2 gap-3 items-center relative">
                  {/* "Before" Photo */}
                  <div className="space-y-1.5 group/before">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low shadow-inner">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0VYLVKUFcI3uz6uEqp6XnVshE6yF2vXAtVoaO7cCfSEyWtX-zl9LIaGiMJHvV8vsUulcy31UkUbwbC3f3I5W0UliVX_8aljcX7bKXteZ9Tjp_zbYVwrfWQGVID3PQkP05eI2DxeRCvOy5_c4GHTcVtttUJMvVFYZRiErB1WPbjJzEW723UP-wG-zuZ1MczaHRdmHprcxdpTQEtGIVP0QmUHW6xGFYMJZ4PELGRdkVBUw2yaJ72kfPpA"
                        alt="Real life smartphone snapshot of cat"
                        className="w-full h-full object-cover group-hover/before:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                        <Chip variant="glass" size="xs" title="1. Your Photo" />
                      </div>
                    </div>
                    <Text size="xxs" font="display" type="bold" variant="secondary" className="text-center uppercase tracking-wider">
                      Normal Camera Shot
                    </Text>
                  </div>

                  {/* Magical Transform Arrow in center with subtle float animation */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-secondary-container text-on-secondary-container shadow-xl flex items-center justify-center z-20 text-lg animate-float-slow">
                    <HiArrowsRightLeft />
                  </div>

                  {/* "After" 3D Miniature */}
                  <div className="space-y-1.5 group/after">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low shadow-inner">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoFhskoxcSCce9ssByaBLsZYUk-hYcPpxAnqtUaq_mWVZIPEM6FoEKCMpZti6HId2lp2f89shNU-M0tECMg_APReRTYZvewJXVIuSnNG-xHvIxQPMvpvKdK9nAXh7yHheBVKLJp4mREsgbkcqsYshJxtPA2AHNlaDhOjZQ5tTfx4FXBeqOCAOVVuNCVavj_ILY85xnTVwvlYdZfJJhFS0iJyQB-P_4XdCvqYCNAYosemb1z3SdmJMwXA"
                        alt="Stylized 3D resin printed figurine"
                        className="w-full h-full object-cover group-hover/after:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2">
                        <Chip variant="primary" size="xs" title="2. 3D Wobli Print!" />
                      </div>
                    </div>
                    <Text size="xxs" font="display" type="bold" variant="brand" className="text-center uppercase tracking-wider">
                      Tangible Resin Magic
                    </Text>
                  </div>
                </div>

                {/* Customer Tagline below preview */}
                <div className="mt-4 pt-2 flex items-center justify-between text-on-surface-variant font-sans text-xs border-t border-surface-container-low">
                  <span className="flex items-center gap-1.5">
                    <MdVerified className="text-[17px] text-primary" />
                    &quot;Looks identical to Milo! Absolutely obsessed.&quot;
                  </span>
                  <Text as="span" font="display" size="xxs" type="bold" className="uppercase text-on-surface">
                    Elena G.
                  </Text>
                </div>
              </CardWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
