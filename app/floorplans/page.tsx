"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined, FaArrowRight } from "react-icons/fa";

const data = [
  {
    price: "$1,995",
    title: "Luxury 2 Bedroom",
    beds: 2,
    baths: 2,
    sqft: 1327,
    img: "/floorplans/luxury2.png",
  },
  {
    price: "$1,895",
    title: "Standard 2 Bedroom",
    beds: 2,
    baths: 1,
    sqft: 1092,
    img: "/floorplans/standard2.png",
  },
  {
    price: "$1,795",
    title: "Cozy 2 Bedroom",
    beds: 2,
    baths: 1,
    sqft: 1039,
    img: "/floorplans/cozy2.png",
  },
  {
    price: "$1,750",
    title: "Luxury 1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 930,
    img: "/floorplans/luxury1.png",
  },
  {
    price: "$1,495",
    title: "Cozy 1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 649,
    img: "/floorplans/cozy1.png",
  },
];

export default function Properties() {
  const [filter, setFilter] = useState("all");

  const filtered = data.filter((p) =>
    filter === "all" ? true : p.beds.toString() === filter
  );

  // Grouped results
  const twoBed = filtered.filter((p) => p.beds === 2);
  const oneBed = filtered.filter((p) => p.beds === 1);

  return (
    <section id="properties" className="py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-12 gap-6">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-tight font-bold text-[#5B2C1A] text-center md:text-left">
            Discover Floor Plans
          </h2>

          {/* FILTER PILLS */}
          <div className="bg-[#eee] p-1 rounded-full flex self-center md:self-end">
            {[
              { key: "all", label: "All" },
              { key: "1", label: "1 Bed" },
              { key: "2", label: "2 Bed" },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setFilter(option.key)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition
                  ${
                    filter === option.key
                      ? "bg-white shadow-md text-[#5B2C1A]"
                      : "text-[#666]"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2 BEDROOM SECTION */}
        {(filter === "all" || filter === "2") && twoBed.length > 0 && (
          <>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#5B2C1A]">
              2 Bedroom
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {twoBed.map((p, i) => (
                <PropertyCard key={i} p={p} />
              ))}
            </div>
          </>
        )}

        {/* 1 BEDROOM SECTION */}
        {(filter === "all" || filter === "1") && oneBed.length > 0 && (
          <>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#5B2C1A]">
              1 Bedroom
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {oneBed.map((p, i) => (
                <PropertyCard key={i} p={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------------------------------------------- */
/* EXTRACTED CARD COMPONENT */
/* ---------------------------------------------- */

function PropertyCard({ p }: any) {
  return (
    <div
      className="
        bg-white rounded-[28px] md:rounded-[32px] 
        overflow-hidden border border-[#f0f0f0]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        transition transform hover:-translate-y-1
      "
    >
      <div className="p-2">
        <div className="relative w-full aspect-[4/3] bg-white rounded-[20px] overflow-hidden">
          <Image
            src={p.img}
            alt={p.title}
            fill
            sizes="100%"
            quality={100}
            className="object-contain rounded-[20px] p-2"
          />

          <span
            className="
        absolute top-3 left-3 md:top-4 md:left-4 
        bg-[#E95522] text-white
        px-3 py-1 md:px-4 
        rounded-full text-xs md:text-sm 
        font-bold shadow
      "
          >
            For Rent
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-5 md:px-6 pb-8 pt-3">
        <h3 className="text-[1.35rem] md:text-[1.5rem] font-bold text-[#5B2C1A]">
          {p.price}
          <span className="text-sm font-normal text-[#666]">/month</span>
        </h3>

        <h4 className="text-lg md:text-xl font-semibold text-[#5B2C1A] mt-1">
          {p.title}
        </h4>

        <p className="text-[#666] text-sm mb-4">Autumn Towne Way</p>

        {/* SPECS */}
        <div className="flex flex-wrap gap-3 text-sm text-[#444] mb-6">
          <span className="flex items-center gap-1">
            <FaBed /> {p.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> {p.baths} Bath
          </span>
          <span className="flex items-center gap-1">
            <FaRulerCombined /> {p.sqft} sqft
          </span>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center pt-4 border-t border-[#f5f5f5]">
          <span className="text-sm font-medium text-[#5B2C1A]">
            Fixed Utilities
          </span>

          <a
            href="/amenities"
            className="
              w-10 h-10 rounded-full 
              bg-[#E95522] text-white 
              flex items-center justify-center 
              hover:rotate-[-20deg] hover:scale-110 
              transition
            "
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
