import { MetadataRoute } from "next";

/**
 * REQUIRED for `output: "export"`
 * Marks this sitemap as build-time static
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://autumnplazaapartments.com";
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    { path: "/", priority: 1.0 },
    { path: "/autumn-plaza", priority: 0.9 },
    { path: "/floorplans", priority: 0.9 },
    { path: "/amenities", priority: 0.85 },
    { path: "/gallery", priority: 0.85 },
    { path: "/aboutus", priority: 0.8 },
    { path: "/bookvisit", priority: 0.8 },
    { path: "/contactus", priority: 0.8 },
  ];

  const pages = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    priority: page.priority,
  }));

  // Floor plan detail pages
  const floorPlans = [
    "luxury-2-bedroom",
    "standard-2-bedroom",
    "cozy-2-bedroom",
    "luxury-1-bedroom",
    "cozy-1-bedroom",
  ].map((slug) => ({
    url: `${baseUrl}/floorplans/${slug}`,
    lastModified,
    priority: 0.85,
  }));

  return [...pages, ...floorPlans];
}
