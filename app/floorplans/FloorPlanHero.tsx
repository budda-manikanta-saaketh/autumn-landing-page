"use client";

import { useState } from "react";
import Image from "next/image";

export default function FloorPlanHero({ plan }: { plan: any }) {
  const [mode, setMode] = useState<"3d" | "images">("3d");

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* BACKGROUND */}
      {mode === "3d" ? (
        <iframe
          src={plan.threeD}
          className="absolute inset-0 w-full h-full"
          allow="fullscreen"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div
            className="
      relative
      w-full
      max-w-[1100px]
      h-[75vh]
      rounded-[32px]
      overflow-hidden
      shadow-2xl
      bg-black
    "
          >
            <Image src={plan.image} alt={plan.title} fill priority />
          </div>
        </div>
      )}

      {/* DARK OVERLAY (optional, Rivian-style) */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* TOGGLE */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex bg-white/90 backdrop-blur rounded-full shadow-lg overflow-hidden">
          <button
            onClick={() => setMode("3d")}
            className={`px-6 py-3 text-sm font-semibold ${
              mode === "3d" ? "bg-[#E95522] text-white" : "text-[#5B2C1A]"
            }`}
          >
            3D View
          </button>
          <button
            onClick={() => setMode("images")}
            className={`px-6 py-3 text-sm font-semibold ${
              mode === "images" ? "bg-[#E95522] text-white" : "text-[#5B2C1A]"
            }`}
          >
            Images
          </button>
        </div>
      </div>
    </section>
  );
}
