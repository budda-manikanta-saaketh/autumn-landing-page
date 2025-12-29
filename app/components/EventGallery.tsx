"use client";

import Image from "next/image";
import { EVENT_IMAGES, EventKey } from "../data/eventImage";

type Props = {
  eventKey: EventKey;
};

export default function EventGallery({ eventKey }: Props) {
  const images = EVENT_IMAGES[eventKey];

  if (!images || images.length === 0) {
    return (
      <p className="text-center text-[#666]">
        No images available for this event.
      </p>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative w-full overflow-hidden rounded-[22px] group"
        >
          <Image
            src={src}
            alt={eventKey}
            width={600}
            height={800}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
