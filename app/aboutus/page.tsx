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
    <section className="pt-[140px] pb-4">
      <div className="max-w-[1280px] mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[300px] sm:h-[380px] md:h-[450px] rounded-[32px] overflow-hidden shadow-xl group">
            <Image
              src="/images/Community.jpeg"
              alt="Autumn Towne Community"
              fill
              className="object-cover transition-all duration-700 ease-out
               group-hover:scale-105 group-hover:brightness-110"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent 
                  transition-all duration-700 group-hover:from-black/50 group-hover:via-black/20"
            />
          </div>

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
    relative bg-white border border-[#eee] rounded-[20px] 
    p-6 flex flex-col items-center gap-3 text-center
    shadow-sm 
    transition-all duration-300 
    hover:shadow-xl 
    hover:bg-[#E95522]/10 
    hover:-translate-y-1
    group cursor-pointer
  "
              >
                <div
                  className="
      text-[#E95522] text-[1.6rem]
      transition-all duration-300
      group-hover:scale-110 
      group-hover:text-[#c5441b]
    "
                >
                  {f.icon}
                </div>

                <p
                  className="
      text-[#5B2C1A] font-semibold text-sm md:text-base
      transition-colors duration-300 
      group-hover:text-[#E95522]
    "
                >
                  {f.label}
                </p>

                <div
                  className="
      absolute inset-x-0 -bottom-3 translate-y-full
      opacity-0 group-hover:opacity-100
      group-hover:translate-y-2
      transition-all duration-300 
      bg-white text-[#5B2C1A]
      text-xs md:text-sm
      px-4 py-3 rounded-[16px]
      shadow-lg border border-[#eee]
      pointer-events-none
      mx-3
    "
                >
                  {(() => {
                    switch (f.label) {
                      case "Gourmet Coffee Bar":
                        return "Freshly brewed coffee and pastries served daily in our community dining room.";
                      case "Secured Dog Park":
                        return "A safe, fenced-in area for your pets to play and socialize.";
                      case "Community Wi-Fi":
                        return "High-speed wireless internet available throughout the property.";
                      case "Wellness Center":
                        return "Fitness space with equipment designed for active seniors.";
                      case "Club Room & Billiards":
                        return "Social space for games, gatherings, and entertainment.";
                      case "Spacious Floor Plans":
                        return "Open layouts with large windows, modern kitchens, and in-unit laundry.";
                      default:
                        return "";
                    }
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center bg-[#E95522]/10 rounded-[28px] p-10 shadow">
          <h3 className="text-[1.8rem] md:text-[2rem] font-bold text-[#5B2C1A] mb-3">
            Schedule a Visit Today
          </h3>
          <p className="text-[#666] max-w-[600px] mx-auto mb-6">
            Come tour our community and see why so many seniors love calling
            Autumn Towne their home.
          </p>

          <Link
            href="/bookvisit"
            className="
              inline-block bg-[#E95522] text-white px-8 py-3 
              rounded-full font-semibold hover:bg-[#cf4a1d] transition
            "
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </section>
  );
}
