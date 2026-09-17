import type { Metadata } from "next";
import { media, site } from "@/lib/site";

export const defaultTitle = {
  default: `${site.shortName} | Marking paint, pin flags & survey stakes`,
  template: `%s | ${site.shortName}`,
};

export const defaultOgImage = {
  url: media.logo,
  width: 1200,
  height: 568,
  alt: "MB1Call marking supplies logo with Soppec paint cans",
};

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  index?: boolean;
};

export function canonicalUrl(path: string) {
  if (path === "/") return site.url;
  return new URL(path, site.url).toString();
}

export function pageMeta({
  title,
  description,
  path,
  image,
  index = true,
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);
  const ogImage = image
    ? [
        {
          url: image.url,
          alt: image.alt,
          width: image.width ?? 1200,
          height: image.height ?? 630,
        },
      ]
    : [defaultOgImage];
  const brandedTitle = `${title} | ${site.shortName}`;

  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_CA",
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [
        {
          url: ogImage[0].url,
          alt: ogImage[0].alt,
          width: ogImage[0].width,
          height: ogImage[0].height,
        },
      ],
    },
  };
}

export const pageSeo = {
  home: {
    title: "Marking paint, pin flags & survey stakes",
    description:
      "Winnipeg marking supplies for contractors, surveyors, and utility crews. Soppec paint with the patented TP safety cap, pin flags, and survey stakes. Inquire or order—no online checkout.",
    path: "/",
    image: defaultOgImage,
  },
  shop: {
    title: "Shop marking supplies",
    description:
      "Catalog of MB1Call marking paint, pin flags, and survey stakes. Browse product lines, then inquire or send an order request. Prices are on the current retail PDF.",
    path: "/shop",
    image: {
      url: media.allCans,
      alt: "Soppec marking paint cans stocked by MB1Call",
    },
  },
  markingPaint: {
    title: "Soppec marking paint",
    description:
      "Fluo TP, Pro Marker, and Ideal Spray 360 from Soppec—fluorescent and standard marking paints with the patented TP safety cap. Product sheets and order requests from MB1Call in Winnipeg.",
    path: "/marking-paint",
    image: {
      url: media.allCans,
      alt: "Soppec Fluo TP, Pro Marker, and Ideal Spray cans",
    },
  },
  pinFlags: {
    title: "Pin flags for professional marking",
    description:
      "Responsibly sourced pin flags in six colours. 21-inch stake with a 4 × 5-inch flag, bundles of 100, from MB1Call in Winnipeg.",
    path: "/pin-flags",
    image: {
      url: media.flagOrange,
      alt: "Orange survey pin flag",
    },
  },
  surveyStakes: {
    title: "Wooden survey stakes",
    description:
      "Wooden lath survey stakes in 24-inch and 48-inch lengths, unpainted or pink-dipped, bundles of 50. Marking supplies from MB1Call in Winnipeg.",
    path: "/survey-stakes",
    image: {
      url: media.stakesSelection,
      alt: "Wooden survey stakes with pink-dipped ends",
    },
  },
  about: {
    title: "About MB1Call",
    description:
      "A no-nonsense Winnipeg crew supplying Soppec marking paint, pin flags, and survey stakes. Safe, sustainable, superior marking supplies without the corporate markup.",
    path: "/about",
    image: defaultOgImage,
  },
  contact: {
    title: "Contact or order",
    description: `Call ${site.phoneDisplay}, email ${site.email}, or send an information or order request. MB1Call, 7 Valde Avenue, Winnipeg. Monday–Friday, 8am–4pm.`,
    path: "/contact",
    image: defaultOgImage,
  },
  privacy: {
    title: "Privacy policy",
    description: `How ${site.legalName} collects and uses personal information through mb1call.ca.`,
    path: "/privacy",
  },
  priceList: {
    title: "Price list",
    description:
      "Download the June 1, 2026 MB1Call marking-supplies retail price sheet. Product pages do not list prices; the PDF is the source of truth.",
    path: "/price-list",
  },
} as const satisfies Record<string, PageMetaInput>;
