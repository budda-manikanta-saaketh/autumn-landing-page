"use client";

import Image from "next/image";
import { useState } from "react";

const CATEGORIES = {
  all: "All",
  life: "Daily Life",
  events: "Events",
  wellness: "Wellness",
  community: "Community",
};

const IMAGES = [
  { src: "/images/events/coffee.jpeg", category: "life" },
  { src: "/images/events/social.jpeg", category: "community" },
  { src: "/images/events/birthday.jpeg", category: "events" },
  { src: "/images/events/bingo.jpeg", category: "events" },
  { src: "/images/events/wellness.jpeg", category: "wellness" },
  { src: "/images/Community.jpeg", category: "community" },
  { src: "/images/Hero1.jpeg", category: "life" },
  { src: "/images/Community2.jpeg", category: "community" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<keyof typeof CATEGORIES>("all");

  const filtered =
    active === "all" ? IMAGES : IMAGES.filter((img) => img.category === active);

  return (
    <section className="pt-[140px] pb-24">
      <div className="max-w-[1320px] mx-auto px-6 space-y-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[3rem] font-bold text-[#5B2C1A] leading-tight">
              Life at Autumn Towne
            </h1>
            <p className="mt-5 text-[#666] text-[1.1rem] max-w-[520px]">
              A warm, active, and connected community where every day brings
              comfort, companionship, and meaningful moments.
            </p>
          </div>

          <div className="relative h-[380px] rounded-[28px] overflow-hidden shadow-xl">
            <Image
              src="/images/Amenities.jpeg"
              alt="Autumn Towne Community"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {Object.entries(CATEGORIES).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActive(key as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all
                ${
                  active === key
                    ? "bg-[#E95522] text-white border-[#E95522]"
                    : "bg-white text-[#5B2C1A] border-[#ddd] hover:border-[#E95522]"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden rounded-[22px] group"
            >
              <Image
                src={img.src}
                alt="Autumn Towne Gallery"
                width={600}
                height={800}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Vibrant Community",
              desc: "Engaging activities and shared experiences every day.",
            },
            {
              title: "Wellness & Care",
              desc: "Physical, mental, and emotional well-being supported.",
            },
            {
              title: "Comfort Living",
              desc: "Spaces designed for peace, safety, and elegance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[26px] border border-[#eee] shadow-sm"
            >
              <h3 className="font-bold text-[#5B2C1A] text-[1.25rem]">
                {item.title}
              </h3>
              <p className="text-[#666] mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
