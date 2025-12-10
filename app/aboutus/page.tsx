"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCoffee,
  FaDog,
  FaWifi,
  FaDumbbell,
  FaGamepad,
  FaHome,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="pt-[140px] pb-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* --------------------------- */}
        {/* HEADER SECTION */}
        {/* --------------------------- */}
        <div className="text-center mb-12">
          <h1 className="text-[2.4rem] md:text-[3rem] font-bold text-[#5B2C1A] leading-tight">
            Welcome to <br />
            Autumn Towne Luxury Apartments{" "}
            <span className="text-[#E95522]">for Seniors</span>
          </h1>

          <p className="text-[#666] max-w-[700px] mx-auto mt-4 text-[1.05rem] leading-relaxed">
            Autumn Towne Senior Apartments offers big city living with home-town
            appeal. Enjoy spacious floor plans, grand windows, fully equipped
            kitchens, in-apartment washer & dryer, Wi-Fi, and professional
            on-site management.
          </p>
        </div>

        {/* --------------------------- */}
        {/* IMAGE + FEATURE PARAGRAPHS */}
        {/* --------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div className="relative h-[300px] sm:h-[380px] md:h-[450px] rounded-[32px] overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Autumn Towne Community"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          {/* PARAGRAPH CONTENT */}
          <div>
            <h2 className="text-[1.8rem] md:text-[2rem] font-bold text-[#5B2C1A] mb-4">
              A Vibrant, Active Senior Community
            </h2>

            <p className="text-[#666] leading-relaxed text-[1.05rem] mb-4">
              Enjoy a morning brew from our gourmet coffee bar located in the
              community dining room. Take Rover for a walk in our secured dog
              park, meet friends for a game of billiards, or relax with a book
              in the lobby’s comfortable seating area.
            </p>

            <p className="text-[#666] leading-relaxed text-[1.05rem]">
              Our community is located in a vibrant and active neighborhood with
              quick access to restaurants, coffee shops, specialty stores, major
              retailers, doctors’ offices, and I-24 & Hwy 96.
            </p>
          </div>
        </div>

        {/* --------------------------- */}
        {/* FEATURE ICON GRID */}
        {/* --------------------------- */}
        <div className="mt-16">
          <h3 className="text-[1.9rem] font-bold text-[#5B2C1A] text-center mb-10">
            What Our Residents Enjoy
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { icon: <FaCoffee />, label: "Gourmet Coffee Bar" },
              { icon: <FaDog />, label: "Secured Dog Park" },
              { icon: <FaWifi />, label: "Community Wi-Fi" },
              { icon: <FaDumbbell />, label: "Wellness Center" },
              { icon: <FaGamepad />, label: "Club Room & Billiards" },
              { icon: <FaHome />, label: "Spacious Floor Plans" },
            ].map((f, i) => (
              <div
                key={i}
                className="
                  bg-white border border-[#eee] rounded-[20px] 
                  p-6 flex flex-col items-center gap-3 text-center
                  shadow-sm hover:shadow-md transition
                "
              >
                <div className="text-[#E95522] text-[1.6rem]">{f.icon}</div>
                <p className="text-[#5B2C1A] font-semibold text-sm md:text-base">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --------------------------- */}
        {/* CTA SECTION */}
        {/* --------------------------- */}
        <div className="mt-20 text-center bg-[#E95522]/10 rounded-[28px] p-10 shadow">
          <h3 className="text-[1.8rem] md:text-[2rem] font-bold text-[#5B2C1A] mb-3">
            Schedule a Visit Today
          </h3>
          <p className="text-[#666] max-w-[600px] mx-auto mb-6">
            Come tour our community and see why so many seniors love calling
            Autumn Towne their home.
          </p>

          <Link
            href="/contactus"
            className="
              inline-block bg-[#E95522] text-white px-8 py-3 
              rounded-full font-semibold hover:bg-[#cf4a1d] transition
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
