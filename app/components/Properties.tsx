"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined, FaArrowRight } from "react-icons/fa";

const data = [
  {
    price: "$1,995",
    title: "Luxury 2 Bedroom Suite",
    beds: 2,
    baths: 2,
    sqft: 1327,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    price: "$1,895",
    title: "Standard 2 Bedroom",
    beds: 2,
    baths: 1,
    sqft: 1092,
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
  },
  {
    price: "$1,495",
    title: "Cozy 1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 649,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
];

export default function Properties() {
  const [filter, setFilter] = useState("all");

  const filtered = data.filter((p) =>
    filter === "all" ? true : p.beds.toString() === filter
  );

  return (
    <section id="properties" className="py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-12 gap-6">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-tight font-bold text-[#5B2C1A] text-center md:text-left">
            Discover Best Properties <br className="hidden md:block" />
            Tailored to You
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

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="
                bg-white rounded-[28px] md:rounded-[32px] 
                overflow-hidden border border-[#f0f0f0]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                transition transform hover:-translate-y-1
              "
            >
              {/* IMAGE */}
              <div className="relative h-[220px] md:h-[250px] p-2">
                <div className="relative w-full h-full">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="100%"
                    className="object-cover rounded-[20px]"
                  />
                </div>

                <span
                  className="
                    absolute top-4 left-4 md:top-6 md:left-6 
                    bg-[#E95522] text-white
                    px-3 py-1.5 md:px-4 md:py-1.5 
                    rounded-full text-xs md:text-sm 
                    font-bold shadow
                  "
                >
                  For Rent
                </span>
              </div>

              {/* CONTENT */}
              <div className="px-5 md:px-6 pb-8 pt-3">
                <h3 className="text-[1.35rem] md:text-[1.5rem] font-bold text-[#5B2C1A]">
                  {p.price}
                  <span className="text-sm font-normal text-[#666]">
                    /month
                  </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
