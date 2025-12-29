export type EventKey = "grand-opening" | "greets-and-eats";

export const EVENTS: Record<
  EventKey,
  {
    title: string;
    description: string;
    date?: string;
  }
> = {
  "grand-opening": {
    title: "Grand Opening",
    description: "A joyful celebration marking the opening of Autumn Towne.",
    date: "March 2024",
  },

  "greets-and-eats": {
    title: "Greets & Eats",
    description: "A warm social dining experience with residents and families.",
    date: "April 2024",
  },
};
