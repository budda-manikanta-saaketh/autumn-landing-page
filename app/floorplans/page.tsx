"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

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
    baths: 2,
    sqft: 1092,
    img: "/floorplans/standard2.png",
  },
  {
    price: "$1,795",
    title: "Cozy 2 Bedroom",
    beds: 2,
    baths: 2,
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
const threeDLayouts = [
  {
    key: "1bhk",
    label: "1 BHK – 3D View",
    src: "/3d/1bhk/index.htm",
  },
  {
    key: "2bhk1",
    label: "2 BHK Type A – 3D View",
    src: "/3d/2bhk_1/index.htm",
  },
  {
    key: "2bhk2",
    label: "2 BHK Type B – 3D View",
    src: "/3d/2bhk_2/index.htm",
  },
  {
    key: "2bhk3",
    label: "2 BHK Type C – 3D View",
    src: "/3d/2bhk_3/index.htm",
  },
];

export default function FloorPlans() {
  const [filter, setFilter] = useState("all");
  const [selected3D, setSelected3D] = useState(threeDLayouts[0].key);

  const filtered = data.filter((p) =>
    filter === "all" ? true : p.beds.toString() === filter
  );

  const twoBed = filtered.filter((p) => p.beds === 2);
  const oneBed = filtered.filter((p) => p.beds === 1);

  return (
    <section id="properties" className="pt-16 md:pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#5B2C1A]">
            Discover Floor Plans
          </h2>

          <div className="bg-[#eee] p-1 rounded-full flex">
            {[
              { key: "all", label: "All" },
              { key: "1", label: "1 Bed" },
              { key: "2", label: "2 Bed" },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setFilter(option.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition
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

        {/* 2 Bedroom */}
        {(filter === "all" || filter === "2") && twoBed.length > 0 && (
          <>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#5B2C1A]">
              2 Bedroom
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {twoBed.map((p, i) => (
                <FloorPlanCard key={i} p={p} />
              ))}
            </div>
          </>
        )}

        {/* 1 Bedroom */}
        {(filter === "all" || filter === "1") && oneBed.length > 0 && (
          <>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#5B2C1A]">
              1 Bedroom
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {oneBed.map((p, i) => (
                <FloorPlanCard key={i} p={p} />
              ))}
            </div>
          </>
        )}
        {/* -------- 3D FLOOR PLANS SECTION -------- */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#5B2C1A]">
              Interactive 3D Floor Plans
            </h3>

            <select
              className="
        border border-[#ddd] rounded-xl px-4 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-[#E95522]/40
      "
              value={selected3D}
              onChange={(e) => setSelected3D(e.target.value)}
            >
              {threeDLayouts.map((layout) => (
                <option key={layout.key} value={layout.key}>
                  {layout.label}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-[28px] border border-[#f0f0f0] overflow-hidden shadow-sm">
            <div
              className="relative w-full bg-black overflow-hidden
                          rounded-[20px]
                          aspect-[4/5]        /* mobile */
                          sm:aspect-[3/4]    /* small tablets */
                          md:aspect-[16/10]  /* tablets */
                          lg:aspect-[16/9]   /* desktop */
                          xl:aspect-[21/9]   /* large screens */
                        "
            >
              <iframe
                key={selected3D} // IMPORTANT: forces reload when changed
                src={threeDLayouts.find((l) => l.key === selected3D)?.src}
                className="w-full h-full border-0"
                allow="fullscreen"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ---------- STANDARD FLOOR PLAN CARD ---------- */
function FloorPlanCard({ p }: any) {
  return (
    <Link href="/amenities" className="block">
      <div className="bg-white rounded-[28px] border border-[#f0f0f0] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1">
        <div className="p-2">
          <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-white">
            <Image
              src={p.img}
              alt={p.title}
              fill
              className="object-contain p-2"
            />
          </div>
        </div>

        <div className="px-6 pb-8 pt-3">
          <h3 className="text-[1.9rem] font-bold text-[#E95522]">
            {p.sqft} sqft
          </h3>

          <p className="font-semibold text-[#5B2C1A] mt-1">
            {p.price}
            <span className="text-sm font-normal text-[#7A5D4A]"> /month</span>
          </p>

          <h4 className="text-lg font-bold text-[#5B2C1A] mt-2">{p.title}</h4>

          <p className="text-sm text-[#7A5D4A] mb-4">Autumn Towne Way</p>

          <div className="flex gap-4 text-sm mb-6 text-[#5B2C1A]">
            <span className="flex items-center gap-1">
              <FaBed className="text-[#E95522]" /> {p.beds} Beds
            </span>
            <span className="flex items-center gap-1">
              <FaBath className="text-[#E95522]" /> {p.baths} Bath
            </span>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-sm font-medium text-[#5B2C1A]">
              Fixed Utilities Included
            </span>

            {/* icon only — NOT a link */}
            <div className="w-10 h-10 bg-[#E95522] text-white rounded-full flex items-center justify-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ---------- 3D IFRAME CARD ---------- */
function FloorPlanIframeCard({ src, title }: any) {
  return (
    <div className="bg-white rounded-[28px] border border-[#f0f0f0] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1">
      <div className="p-2">
        <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-black">
          <iframe
            src={src}
            className="w-full h-full border-0"
            loading="lazy"
            allow="fullscreen"
          />
        </div>
      </div>

      <div className="px-6 pb-8 pt-3">
        <h3 className="text-[1.9rem] font-bold text-[#E95522]">Interactive</h3>

        <p className="font-semibold text-[#5B2C1A] mt-1">{title}</p>

        <p className="text-sm text-[#7A5D4A] mb-6">
          Explore the layout in full 3D
        </p>

        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-sm font-medium text-[#5B2C1A]">
            360° Interactive View
          </span>

          <a
            href={src}
            target="_blank"
            className="w-10 h-10 bg-[#E95522] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
