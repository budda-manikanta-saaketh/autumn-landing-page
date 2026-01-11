"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    title: "Mailboxes Located Inside Lobby",
  },
  // {
  //   src: "/images/dailylife/dl5.webp",
  //   category: "life",
  //   title: "Gourmet Coffee Bar",
  // },
  {
    src: "/images/dailylife/dl6.webp",
    category: "life",
    title: "Community Laundry Room",
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
    title: "Neighborly Connections",
  },
  {
    src: "/images/community/c3.webp",
    category: "community",
    title: "Moments of Togetherness",
    rotate: "rotate-180",
  },
];
const HERO_CAROUSEL_IMAGES = IMAGES.slice(0, 5);

export default function GalleryPage() {
  const [active, setActive] = useState<keyof typeof CATEGORIES>("all");

  const filtered =
    active === "all" ? IMAGES : IMAGES.filter((img) => img.category === active);

  return (
    <section className="pt-[140px] pb-24">
      <div className="max-w-[1320px] mx-auto px-6 space-y-24">
        <GalleryHeroCarousel images={IMAGES.slice(0, 6)} />

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
                {/* IMAGE LAYER (ROTATED) */}
                <div
                  className={`transition-transform duration-700
      ${img.rotate ?? ""}
      group-hover:rotate-0
    `}
                >
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
                </div>

                {/* TEXT OVERLAY (NOT ROTATED) */}
                <div className="absolute inset-x-0 bottom-0 pointer-events-none">
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
function GalleryHeroCarousel({
  images,
}: {
  images: { src: string; title: string }[];
}) {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);

    return () => clearInterval(id);
  }, [images.length]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full h-[60vh] min-h-[420px] overflow-hidden group bg-black">
      {/* SLIDES */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 transition-all duration-[1200ms] ease-in-out
            ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        >
          <Image
            src={img.src}
            alt={img.title}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />

          {/* Warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/20" />
        </div>
      ))}

      {/* TITLE */}
      <div className="absolute bottom-24 left-0 right-0 z-20 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl transition-all duration-700">
          {images[index]?.title}
        </h2>
      </div>

      {/* ARROWS */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="
          absolute left-6 top-1/2 -translate-y-1/2 z-30
          w-14 h-14 rounded-full
          bg-white/10 backdrop-blur-md border border-white/20
          flex items-center justify-center
          text-3xl text-white
          shadow-2xl
          opacity-0 group-hover:opacity-100
          hover:bg-white/20 hover:scale-110
          transition-all duration-300
        "
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="
          absolute right-6 top-1/2 -translate-y-1/2 z-30
          w-14 h-14 rounded-full
          bg-white/10 backdrop-blur-md border border-white/20
          flex items-center justify-center
          text-3xl text-white
          shadow-2xl
          opacity-0 group-hover:opacity-100
          hover:bg-white/20 hover:scale-110
          transition-all duration-300
        "
      >
        ›
      </button>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              h-1.5 rounded-full transition-all duration-500
              ${
                i === index
                  ? "w-10 bg-white shadow-lg"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          className="h-full bg-[#E95522] transition-all duration-500"
          style={{
            width: `${((index + 1) / images.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
