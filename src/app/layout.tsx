import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import ToastProvider from "@/components/ToastProvider";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wobli - Think It. We Print It. | 3D Printing Cute Stuffs",
  description:
    "From adorable desk buddies and gaming minis to custom 3D figurines made directly from your everyday photos. Hand-inspected, safely packed, and delivered to your doorstep.",
  icons: {
    icon: "/images/wobli-hero-w.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-surface text-on-surface">
        <ReactQueryClientProvider>
          <ToastProvider />
          {children}
          <WhatsAppWidget />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
