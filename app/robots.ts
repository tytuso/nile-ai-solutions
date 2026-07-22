import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://nileai.solutions/sitemap.xml",
    host: "https://nileai.solutions",
  };
}