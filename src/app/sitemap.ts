import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/shop", priority: 0.9, changeFrequency: "monthly" },
    { path: "/marking-paint", priority: 0.85, changeFrequency: "monthly" },
    { path: "/pin-flags", priority: 0.8, changeFrequency: "monthly" },
    { path: "/survey-stakes", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/price-list", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
  ];

  return entries.map((entry) => ({
    url: canonicalUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
