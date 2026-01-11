"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const data = [
  {
    slug: "luxury-2-bedroom",
    price: "$1,995",
    title: "Luxury 2 Bedroom",
    beds: 2,
    baths: 2,
    sqft: 1327,
    img: "/images/Bed2.webp",
  },
  {
    slug: "standard-2-bedroom",
    price: "$1,895",
    title: "Standard 2 Bedroom",
    beds: 2,
    baths: 2,
    sqft: 1092,
    img: "/images/Bed2_2.webp",
  },
  {
    slug: "cozy-2-bedroom",
    price: "$1,795",
    title: "Spacious 2 Bedroom",
    beds: 2,
    baths: 2,
    sqft: 1039,
    img: "/images/Bed2Cozy.webp",
  },
  {
    slug: "luxury-1-bedroom",
    price: "$1,750",
    title: "Luxury 1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 930,
    img: "/images/Bed1_2.webp",
  },
  {
    slug: "cozy-1-bedroom",
    price: "$1,495",
    title: "Standard 1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 649,
    img: "/images/Bed1.webp",
  },
];

export default function Properties() {
  const [filter, setFilter] = useState("all");

  const filtered = data.filter((p) =>
    filter === "all" ? true : p.beds.toString() === filter
  );

  return (
    <section id="properties" className="py-6 md:py-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-12 gap-6">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-tight font-bold text-[#5B2C1A] text-center md:text-left">
            Discover Properties <br className="hidden md:block" />
            Tailored to You
          </h2>

          <div className="bg-[#eee] p-1 rounded-full flex self-center md:self-end">
            {[
              { key: "all", label: "All" },
              { key: "1", label: "1 Bed" },
              { key: "2", label: "2 Bed" },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setFilter(option.key)}
                className={`
                  px-5 py-2 rounded-full font-semibold text-sm transition
                  ${
                    filter === option.key
                      ? "bg-white shadow-md text-[#5B2C1A]"
                      : "text-[#666]"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((p, i) => (
            <Link
              key={i}
              href={`/floorplans/${p.slug}`}
              className="block group"
            >
              <div
                className="
          bg-white rounded-[28px] md:rounded-[32px]
          overflow-hidden border border-[#f0f0f0]
          transition-all duration-300
          group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          group-hover:-translate-y-1
        "
              >
                {/* IMAGE */}
                <div className="relative h-[220px] md:h-[250px] p-2">
                  <div className="relative w-full h-full">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      priority={i === 0} // only first card is priority
                      loading={i === 0 ? "eager" : "lazy"}
                      sizes="
    (max-width: 640px) 90vw,
    (max-width: 1024px) 45vw,
    400px
  "
                      quality={65}
                      className="object-cover rounded-[20px]"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-5 md:px-6 pb-8 pt-3">
                  <h3 className="text-[1.9rem] md:text-[2.1rem] font-bold text-[#E95522]">
                    {p.sqft} sqft
                  </h3>

                  <p className="text-[#5B2C1A] font-semibold mt-1">
                    {p.price}
                    <span className="text-sm text-[#7A5D4A] font-normal">
                      {" "}
                      /month
                    </span>
                  </p>
                  <p className="text-xs text-[#7A5D4A] mt-1">
                    Plus fixed-rate utilities
                  </p>

                  <h4 className="text-lg md:text-xl font-bold text-[#5B2C1A] mt-2">
                    {p.title}
                  </h4>

                  <p className="text-[#7A5D4A] text-sm mb-4">
                    Autumn Towne Way
                  </p>

                  <div className="flex flex-wrap gap-3 text-sm text-[#5B2C1A] mb-6">
                    <span className="flex items-center gap-1">
                      <FaBed className="text-[#E95522]" />
                      {p.beds} {p.beds === 1 ? "Bed" : "Beds"}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaBath className="text-[#E95522]" />
                      {p.baths} {p.baths === 1 ? "Bath" : "Baths"}
                    </span>
                  </div>

                  {/* FOOTER */}
                  <div className="flex justify-between items-center pt-4 border-t border-[#f5f5f5]">
                    <span className="text-sm font-medium text-[#5B2C1A]">
                      View 3D Tour & Details
                    </span>

                    {/* Arrow is visual only */}
                    <div
                      className="
                w-10 h-10 rounded-full
                bg-[#E95522] text-white
                flex items-center justify-center
                transition
                group-hover:rotate-[-20deg]
                group-hover:scale-110
              "
                    >
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
