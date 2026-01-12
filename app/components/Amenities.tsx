"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCoffee,
  FaDog,
  FaDumbbell,
  FaWifi,
  FaGamepad,
  FaShieldAlt,
  FaArrowRight,
  FaCalendar,
} from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="
        w-full
        bg-white
        flex items-center
        min-h-screen
        py-16 sm:py-20 lg:py-28 xl:py-32
      "
    >
      <div
        className="
max-w-[1280px] 2xl:max-w-[1600px]
          mx-auto
          px-4 md:px-6
          grid grid-cols-1 md:grid-cols-2
          gap-12 md:gap-20 xl:gap-28
          items-center
          w-full
        "
      >
        {/* LEFT CONTENT */}
        <div>
          <h2
            className="
              font-bold text-[#5B2C1A] leading-tight mb-6
              text-[2rem]
              sm:text-[2.3rem]
              md:text-[2.8rem]
              lg:text-[3.2rem]
              xl:text-[3.6rem]
              2xl:text-[4rem]
            "
          >
            Discover Beautiful <br />
            <span className="inline-flex items-center">
              <span
                className="
                  inline-block
                  w-8 h-8
                  sm:w-9 sm:h-9
                  md:w-10 md:h-10
                  lg:w-12 lg:h-12
                  rounded-full mr-2
                  bg-cover bg-center
                "
                style={{ backgroundImage: "url('/images/Amenities.webp')" }}
              />
              Community
            </span>{" "}
            Living
          </h2>

          {/* FEATURE TAGS */}
          <Link href="/amenities">
            <div className="flex flex-wrap gap-3 md:gap-4 my-6 md:my-8">
              {[
                { icon: <FaCoffee />, label: "Gourmet Bar" },
                { icon: <FaGamepad />, label: "Billiards Club Room" },
                { icon: <FaDumbbell />, label: "Wellness Center" },
                { icon: <FaWifi />, label: "Complementary Wi-Fi" },
                { icon: <FaDog />, label: "Dog Park" },
                { icon: <FaShieldAlt />, label: "24/7 Security" },
                { icon: <FaHammer />, label: "Stainless Steel Appliances" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="
                    px-4 py-2
                    border border-[#eee]
                    rounded-full
                    text-xs sm:text-sm lg:text-base
                    font-medium
                    flex items-center gap-2
                    text-[#5B2C1A]
                    bg-white
                    transition-all duration-200
                    hover:bg-[#E95522]/10
                    hover:border-[#E95522]/40
                    hover:shadow-md
                    hover:scale-[1.05]
                    cursor-pointer
                  "
                >
                  <span className="text-base lg:text-lg">{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>
          </Link>

          {/* CTA CARD */}
          <Link href="/bookvisit" className="block w-fit">
            <div
              className="
                bg-[#F8F9FB]
                p-4 sm:p-5 lg:p-6
                rounded-[20px]
                flex gap-4
                max-w-full md:max-w-[420px]
              "
            >
              <div className="flex items-center gap-4 group cursor-pointer">
                <div
                  className="
                    w-10 h-10
                    sm:w-11 sm:h-11
                    lg:w-12 lg:h-12
                    bg-white
                    rounded-full
                    shadow
                    flex items-center justify-center
                    text-[#E95522]
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  <FaCalendar />
                </div>

                <div className="transition-all duration-300 group-hover:translate-x-1">
                  <h4 className="text-lg lg:text-xl font-semibold text-[#5B2C1A]">
                    Schedule a Visit
                  </h4>
                  <p className="text-[#666] text-sm lg:text-base">
                    Book a tour and explore our community in person.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative h-[600px] min-h-[420px] rounded-[24px] md:rounded-[32px] overflow-hidden group shadow-xl">
          <Image
            src="/images/Amenities.webp"
            alt="Community Living Spaces"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div
            className="
              absolute bottom-4 md:bottom-5 left-4 right-4
              bg-white/95 backdrop-blur-sm
              rounded-[16px] md:rounded-[20px]
              p-4 md:p-5
              shadow-2xl border border-white/50
            "
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-[#5B2C1A]">
                  Community Living Spaces
                </h4>
                <p className="text-[#666] text-sm">Modern & welcoming</p>
              </div>

              <Link href="/amenities">
                <button
                  className="
                    w-10 h-10 md:w-12 md:h-12
                    bg-[#E95522]
                    text-white
                    rounded-full
                    flex items-center justify-center
                    transition hover:scale-110 hover:rotate-12
                  "
                >
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
