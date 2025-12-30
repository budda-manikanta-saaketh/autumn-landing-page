"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Home, ChefHat, WashingMachine, Wifi, UserCheck } from "lucide-react";

export default function FloorPlanTabs({ plan }: { plan: any }) {
  const [activeTab, setActiveTab] = useState<"images" | "3d">("images");

  return (
    <>
      {/* ---------- HEADER ROW (RIGHT ALIGNED TABS) ---------- */}
      <div className="flex justify-end sm:justify-end mb-6">
        <div className="bg-[#eee] p-1 rounded-full flex">
          {[
            { key: "images", label: "Images" },
            { key: "3d", label: "3D Walkthrough" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "images" | "3d")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition
                ${
                  activeTab === tab.key
                    ? "bg-white shadow-md text-[#5B2C1A]"
                    : "text-[#666]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- IMAGE / 3D ---------- */}
      <div className="bg-white rounded-[28px] border border-[#eee] p-6">
        {activeTab === "images" && (
          <ImageCarousel images={plan.images ?? [plan.image]} />
        )}

        {activeTab === "3d" && (
          <div
            className="
      relative w-full overflow-hidden bg-black
      rounded-[20px]
      aspect-[3/4] sm:aspect-[16/9]
      sm:rounded-[20px]
    "
          >
            <iframe
              src={plan.threeD}
              className="w-full h-full border-0"
              allow="fullscreen"
            />
          </div>
        )}
      </div>

      {/* ---------- DETAILS ---------- */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-[#5B2C1A]">
        <Spec icon={<Bed />} value={`${plan.beds}`} label="Bedrooms" />
        <Spec icon={<Bath />} value={`${plan.baths}`} label="Bathrooms" />
        <Spec icon={<Maximize />} value={`${plan.sqft}`} label="Sq Ft" />
        <Spec icon={<MapPin />} value={plan.location} label="Location" />
      </div>

      {/* ---------- UTILITIES ---------- */}
      <div className="border rounded-2xl p-6">
        <h3 className="font-bold text-[#5B2C1A] mb-6">Utilities Included</h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <UtilityItem icon={<Home />} label="Generous closet space" />
          <UtilityItem icon={<ChefHat />} label="Fully equipped kitchens" />
          <UtilityItem
            icon={<WashingMachine />}
            label="In-unit washer & dryer"
          />
          <UtilityItem icon={<Wifi />} label="High-speed Wi-Fi" />
          <UtilityItem
            icon={<UserCheck />}
            label="Attentive on-site professional management"
          />
        </div>
      </div>
    </>
  );
}
function ImageCarousel({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Left button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white"
      >
        ‹
      </button>

      {/* Right button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white"
      >
        ›
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-full snap-center aspect-[4/3] rounded-[20px] overflow-hidden bg-white"
          >
            <Image
              src={src}
              alt={`Floor plan image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function UtilityItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF7F5] border border-[#eee] hover:shadow-sm transition">
      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#E95522]/10 text-[#E95522] flex items-center justify-center">
        {icon}
      </div>

      <p className="text-sm font-medium text-[#5B2C1A] leading-snug">{label}</p>
    </div>
  );
}

function Spec({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-[#E95522]/10 rounded-lg text-[#E95522]">
        {icon}
      </div>
      <div>
        <p className="font-bold">{value}</p>
        <p className="text-xs text-[#7A5D4A]">{label}</p>
      </div>
    </div>
  );
}
