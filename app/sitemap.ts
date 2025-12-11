import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://autumnplazaapartments.com";

  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/floorplans", priority: 0.9 },
    { url: "/amenities", priority: 0.85 },
    { url: "/aboutus", priority: 0.8 },
    { url: "/contactus", priority: 0.8 },
    { url: "/book-visit", priority: 0.8 },
  ].map((p) => ({
    url: `${baseUrl}${p.url}`,
    lastModified: new Date(),
    priority: p.priority,
  }));

  const floorplanImages = [
    "/floorplans/luxury2.png",
    "/floorplans/standard2.png",
    "/floorplans/cozy2.png",
    "/floorplans/luxury1.png",
    "/floorplans/cozy1.png",
  ].map((img) => ({
    url: `${baseUrl}${img}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...pages, ...floorplanImages];
}
