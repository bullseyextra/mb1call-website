import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home-page/shop",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/home-page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/shop/marking-paint",
        destination: "/marking-paint",
        permanent: true,
      },
      {
        source: "/shop/pin-flags",
        destination: "/pin-flags",
        permanent: true,
      },
      {
        source: "/shop/survey-stakes",
        destination: "/survey-stakes",
        permanent: true,
      },
      {
        source: "/price-list/Soppec-retail-prices-2026-June-1.pdf",
        destination: "/docs/Soppec-retail-prices-2026-June-1.pdf",
        permanent: true,
      },
      {
        source: "/cart",
        destination: "/shop",
        permanent: false,
      },
      {
        source: "/checkout",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
