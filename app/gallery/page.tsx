"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = {
  all: "All",
  life: "Daily Life",
  events: "Events",
  community: "Community",
};

const IMAGES = [
  // EVENTS
  {
    src: "/images/events/Grand_Opening/go1.webp",
    category: "events",
    title: "Grand Opening Celebration",
    slug: "grand-opening",
  },
  {
    src: "/images/events/Greets_And_Eats/gae1.webp",
    category: "events",
    title: "Greets & Eats Social",
    slug: "greets-and-eats",
  },

  // DAILY LIFE
  {
    src: "/images/dailylife/dl1.webp",
    category: "life",
    title: "Fitness Center",
  },
  {
    src: "/images/dailylife/dl2.webp",
    category: "life",
    title: "Resident Coffee Lounge",
  },
  {
    src: "/images/dailylife/dl3.webp",
    category: "life",
    title: "Pet-Friendly Dog Park",
  },
  {
    src: "/images/dailylife/dl4.webp",
    category: "life",
    title: "Secure Storage Lockers",
  },
  {
    src: "/images/dailylife/dl5.webp",
    category: "life",
    title: "Outdoor Pet Area",
  },
  {
    src: "/images/dailylife/dl6.webp",
    category: "life",
    title: "Modern Laundry Lounge",
  },
  {
    src: "/images/dailylife/dl7.webp",
    category: "life",
    title: "Elevator Access",
  },
  {
    src: "/images/dailylife/dl8.webp",
    category: "life",
    title: "Resident Club Room",
  },

  // COMMUNITY
  {
    src: "/images/community/c1.webp",
    category: "community",
    title: "Community Social Events",
  },
  {
    src: "/images/community/c2.webp",
    category: "community",
    title: "Neighbourly Connections",
  },
  {
    src: "/images/community/c3.webp",
    category: "community",
    title: "Moments of Togetherness",
  },
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
              src="/images/Amenities.webp"
              alt="Autumn Towne Community"
              fill
              priority
              sizes="
    (max-width: 768px) 90vw,
    (max-width: 1024px) 45vw,
    600px
  "
              quality={70}
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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filtered.map((img, i) => {
            const isEvent = img.category === "events" && img.slug;

            const content = (
              <div className="relative w-full overflow-hidden rounded-[22px] group cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.title}
                  width={600}
                  height={800}
                  loading="lazy"
                  sizes="
    (max-width: 640px) 90vw,
    (max-width: 1024px) 45vw,
    400px
  "
                  quality={65}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* ALWAYS VISIBLE TITLE BAR */}
                <div className="absolute inset-x-0 bottom-0">
                  {/* Gradient for readability */}
                  <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent px-5 pt-10 pb-5 transition-all duration-300 group-hover:from-black/80">
                    <h3 className="text-white text-lg font-semibold leading-snug">
                      {img.title}
                    </h3>

                    {isEvent && (
                      <p className="text-white/80 text-sm mt-1 opacity-80 group-hover:opacity-100 transition">
                        View Event →
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );

            return isEvent ? (
              <Link
                key={i}
                href={`/events/${img.slug}`}
                className="block break-inside-avoid mb-6"
              >
                {content}
              </Link>
            ) : (
              <div key={i} className="block break-inside-avoid mb-6">
                {content}
              </div>
            );
          })}
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
