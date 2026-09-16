import type { MetadataRoute } from "next";
import { PAGE_INFO, SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Do not use build time as a content-edit date. Add lastModified only when
  // there is a maintained record of significant changes to that page.
  return Object.values(PAGE_INFO).map(({ path }) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
