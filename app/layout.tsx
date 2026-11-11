

import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/component/navbar";
import{ Footer } from "@/component/footer";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Athiyan Food Machines | Food Processing & Commercial Kitchen Machinery, Coimbatore",
  description:
    "Athiyan Food Machines, Coimbatore — ISO certified manufacturer of food processing machines and commercial kitchen equipment in SS 304 stainless steel. Roasters, grinders, blenders, steamers and more.",
  openGraph: {
    title: "Athiyan Food Machines, Coimbatore",
    description: "Complete food processing & commercial kitchen solutions. Enquire directly on WhatsApp.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <Providers>
          <Navbar />
          {/* Spacer for the floating glass navbar */}
          <div className="" aria-hidden />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}