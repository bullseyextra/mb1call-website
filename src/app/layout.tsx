import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCallBar } from "@/components/MobileCallBar";
import { SkipLink } from "@/components/SkipLink";
import { defaultOgImage, defaultTitle } from "@/lib/seo";
import { media, site } from "@/lib/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: defaultTitle,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  icons: {
    icon: [
      { url: media.icon, type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: media.appleIcon,
  },
  keywords: [
    "marking paint",
    "Soppec",
    "Fluo TP",
    "pin flags",
    "survey stakes",
    "Winnipeg marking supplies",
    "MB1Call",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.shortName} | ${site.tagline}`,
    description: site.description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | ${site.tagline}`,
    description: site.description,
    images: [defaultOgImage],
  },
  category: "wholesale",
};

export const viewport: Viewport = {
  themeColor: "#e85d04",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA">
      <body
        className={`${barlow.variable} ${display.variable} min-h-screen bg-paper pb-20 font-sans text-ink antialiased lg:pb-0`}
      >
        <SkipLink />
        <JsonLd />
        <Header />
        <div id="content">{children}</div>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
