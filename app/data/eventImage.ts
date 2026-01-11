export type EventKey = "grand-opening" | "greets-and-eats";
export type EventImage = {
  src: string;
  rotate?: string;
};

export const EVENT_IMAGES: Record<EventKey, EventImage[]> = {
  "grand-opening": [
    { src: "/images/events/Grand_Opening/go1.webp" },
    { src: "/images/events/Grand_Opening/go2.webp" },
    { src: "/images/events/Grand_Opening/go3.webp", rotate: "rotate-90" },
    { src: "/images/events/Grand_Opening/go4.webp", rotate: "rotate-90" },
    { src: "/images/events/Grand_Opening/go5.webp" },
    { src: "/images/events/Grand_Opening/go6.webp" },
    { src: "/images/events/Grand_Opening/go7.webp" },
    { src: "/images/events/Grand_Opening/go8.webp" },
  ],

  "greets-and-eats": [
    { src: "/images/events/Greets_And_Eats/gae1.webp" },
    { src: "/images/events/Greets_And_Eats/gae2.webp" },
    { src: "/images/events/Greets_And_Eats/gae3.webp" },
    { src: "/images/events/Greets_And_Eats/gae4.webp" },
    { src: "/images/events/Greets_And_Eats/gae5.webp" },
  ],
};
