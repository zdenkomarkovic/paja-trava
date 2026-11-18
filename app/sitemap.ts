import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Dodaj sve staticke stranice i dinamicki generisi za blog/proizvode
// Ažurirati kad se sadržaj sajta menja
const LAST_MODIFIED = new Date("2026-11-19");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 1,
    },
    { url: `${SITE_URL}/usluge`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/zalivni-sistemi`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    // Primer za dinamicke stranice (blog, proizvodi):
    // ...posts.map((post) => ({
    //   url: `${SITE_URL}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.8,
    // })),
  ];
}
