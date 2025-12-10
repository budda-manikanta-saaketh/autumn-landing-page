"use client";

import Link from "next/link";
import { FaCalendarAlt, FaHome, FaPhone, FaUser } from "react-icons/fa";

export default function BookVisit() {
  return (
    <section className="pt-[140px] pb-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* --------------------------- */}
        {/* HEADER */}
        {/* --------------------------- */}
        <div className="text-center mb-12">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-[#5B2C1A] leading-tight">
            Book a Visit <br />
            <span className="text-[#E95522]">See Autumn Towne in Person</span>
          </h1>

          <p className="text-[#666] max-w-[650px] mx-auto mt-4 text-[1.05rem] leading-relaxed">
            Schedule a personal tour and experience our warm, welcoming senior
            community. Explore floor plans, amenities, and meet our on-site
            management team.
          </p>
        </div>

        {/* --------------------------- */}
        {/* FORM CARD / UI BLOCK */}
        {/* --------------------------- */}
        <div
          className="
            max-w-[650px] mx-auto bg-white rounded-[32px] shadow-xl 
            p-8 md:p-10 border border-[#f1f1f1]
          "
        >
          <h2 className="text-[1.6rem] md:text-[1.9rem] font-bold text-[#5B2C1A] mb-6 text-center">
            Tell Us a Little About You
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-[#5B2C1A]">
                Full Name
              </label>
              <div className="flex items-center gap-2 bg-[#F8F9FB] rounded-[14px] px-4 py-3 mt-2">
                <FaUser className="text-[#E95522]" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent w-full focus:outline-none text-[#333]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-[#5B2C1A]">
                Phone Number
              </label>
              <div className="flex items-center gap-2 bg-[#F8F9FB] rounded-[14px] px-4 py-3 mt-2">
                <FaPhone className="text-[#E95522]" />
                <input
                  type="text"
                  placeholder="Your contact number"
                  className="bg-transparent w-full focus:outline-none text-[#333]"
                />
              </div>
            </div>

            {/* Interested In */}
            <div>
              <label className="text-sm font-semibold text-[#5B2C1A]">
                Interested In
              </label>
              <div className="flex items-center gap-2 bg-[#F8F9FB] rounded-[14px] px-4 py-3 mt-2">
                <FaHome className="text-[#E95522]" />
                <select className="bg-transparent w-full focus:outline-none text-[#333]">
                  <option value="">Select a Floor Plan</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedroom</option>
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="text-sm font-semibold text-[#5B2C1A]">
                Preferred Date
              </label>
              <div className="flex items-center gap-2 bg-[#F8F9FB] rounded-[14px] px-4 py-3 mt-2">
                <FaCalendarAlt className="text-[#E95522]" />
                <input
                  type="date"
                  className="bg-transparent w-full focus:outline-none text-[#333]"
                />
              </div>
            </div>
          </div>

          {/* --------------------------- */}
          {/* CTA BUTTON */}
          {/* --------------------------- */}
          <div className="mt-10 text-center">
            <button
              className="
                bg-[#E95522] text-white font-semibold
                px-10 py-3.5 rounded-full shadow-md hover:bg-[#cf4a1d]
                transition text-lg
              "
            >
              Book a Visit
            </button>

            <p className="text-[#999] text-sm mt-3">
              You will be redirected to our scheduling page.
            </p>
          </div>
        </div>

        {/* --------------------------- */}
        {/* OPTIONAL: CTA STRIP */}
        {/* --------------------------- */}
        <div className="mt-20 text-center">
          <h3 className="text-[#5B2C1A] text-lg font-medium mb-2">
            Prefer to talk to someone?
          </h3>
          <p className="text-[#666]">
            Call our management office at{" "}
            <span className="font-bold text-[#E95522]">(615) 648-4099</span>
          </p>
        </div>
      </div>
    </section>
  );
}
