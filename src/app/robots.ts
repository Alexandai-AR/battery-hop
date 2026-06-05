import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // TODO: replace with the live domain once confirmed
    sitemap: "https://batteryhop.com.au/sitemap.xml",
  };
}
