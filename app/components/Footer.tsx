"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaArrowUp,
  FaPaperPlane,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-16 md:pt-20 mt-20 relative">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* ======================== CTA BOX ======================== */}
        <div className="bg-[#8A3B27] text-white rounded-[28px] md:rounded-[32px] px-6 md:px-12 py-12 md:py-16 text-center mb-16">
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold mb-4 leading-tight">
            Ready to Move In?
          </h2>

          <p className="text-white/80 max-w-[480px] mx-auto text-sm md:text-base mb-8">
            Have questions or want to learn more? Contact our management team
            and we’ll be happy to assist you.
          </p>

          {/* CTA BUTTON */}
          <Link
            href="/contactus"
            className="
              bg-white text-[#8A3B27]
              px-8 py-3.5
              rounded-full
              font-semibold
              text-base
              flex items-center justify-center gap-2
              mx-auto
              w-max
              hover:bg-[#FBE4DD] transition
            "
          >
            Contact Us <FaPaperPlane />
          </Link>
        </div>

        {/* ======================== INFO GRID ======================== */}
        <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
            gap-10 
            pb-10 
            border-b border-[#e6e6e6]
          "
        >
          {/* COL 1 */}
          <div>
            <h3 className="text-2xl font-bold text-[#E5562E]">
              Autumn <span className="text-[#8A3B27] font-normal">/ Towne</span>
            </h3>

            <h4 className="text-lg font-semibold mt-6 mb-1 text-[#E5562E]">
              Address
            </h4>

            <p className="text-[#8A3B27] text-sm md:text-base leading-relaxed">
              146 Autumn Towne Way,
              <br />
              Murfreesboro, TN 37128
            </p>
          </div>

          {/* COL 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#E5562E]">
              Say Hello
            </h4>
            <p className="text-[#8A3B27] text-sm md:text-base">
              AutumnPlaza5@gmail.com
            </p>
            <p className="text-[#8A3B27] text-sm md:text-base">
              (615) 648-4099
            </p>
          </div>

          {/* COL 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#E5562E]">
              Useful Links
            </h4>
            <ul className="space-y-1 text-[#8A3B27] text-sm md:text-base">
              {[
                ["Home", "/"],
                ["Floor Plans", "/floorplans"],
                ["Amenities", "/amenities"],
                ["About us", "/aboutus"],
                ["Contact us", "/contactus"],
              ].map(([label, link]) => (
                <li key={link}>
                  <a href={link} className="hover:text-[#E5562E] transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — SOCIAL */}
          <div className="flex sm:flex-row md:flex-row items-start gap-3">
            <a
              className="
                w-10 h-10 
                bg-[#FBE4DD] 
                rounded-full 
                flex items-center justify-center 
                text-[#8A3B27] text-xl
              "
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="
                w-10 h-10 
                bg-[#FBE4DD] 
                rounded-full 
                flex items-center justify-center 
                text-[#8A3B27] text-xl
              "
              href="#"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="text-center text-[#8A3B27] text-xs md:text-sm mt-6 px-4 leading-relaxed">
          All the information, terms, and rental prices are subject to change
          without notice. Please check the website for current updates.
        </p>

        {/* COPYRIGHT */}
        <div className="text-center py-6 text-[#8A3B27] text-xs md:text-sm">
          © 2025 Autumn Towne Luxury Apartments for Seniors.
          <span className="font-semibold"> All Rights Reserved.</span>
        </div>

        {/* SCROLL TO TOP */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            fixed bottom-6 right-6 
            w-10 h-10 rounded-full 
            bg-[#E5562E] 
            text-white 
            flex items-center justify-center 
            shadow-lg hover:scale-110 transition
          "
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
