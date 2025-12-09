"use client";

import { useState } from "react";
import {
  FaPaperPlane,
  FaInstagram,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer id="contact" className="bg-white pt-20 mt-20 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* CTA BOX (unchanged) */}
        <div className="bg-[#8A3B27] text-white rounded-[32px] px-10 py-14 text-center mb-16">
          <h2 className="text-[2.5rem] font-bold mb-2">Ready to move in?</h2>

          <form
            onSubmit={submit}
            className="inline-flex items-center bg-white/10 rounded-full p-2 mt-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-transparent outline-none text-white px-5 py-2 placeholder:text-gray-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="bg-transparent outline-none text-white px-5 py-2 placeholder:text-gray-300"
            />

            <button className="bg-white text-[#111] px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              {sent ? (
                "Sent ✓"
              ) : (
                <>
                  Send Request <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>

        {/* CONTENT AREA — White background, brand colors applied */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#e6e6e6]">
          {/* COL 1 — Logo + Address */}
          <div>
            <h3 className="text-2xl font-bold text-[#E5562E]">
              Autumn <span className="text-[#8A3B27] font-normal">/ Towne</span>
            </h3>

            <h4 className="text-lg font-semibold mt-6 mb-1 text-[#E5562E]">
              Address
            </h4>
            <p className="text-[#8A3B27] leading-relaxed">
              146 Autumn Towne Way,
              <br />
              Murfreesboro, TN 37128
            </p>
          </div>

          {/* COL 2 — Say Hello */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#E5562E]">
              Say Hello
            </h4>
            <p className="text-[#8A3B27]">AutumnPlaza5@gmail.com</p>
            <p className="text-[#8A3B27]">(615) 648-4099</p>
          </div>

          {/* COL 3 — Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#E5562E]">
              Useful Links
            </h4>
            <ul className="space-y-1 text-[#8A3B27]">
              <li>
                <a href="/" className="hover:text-[#E5562E] transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/floorplans"
                  className="hover:text-[#E5562E] transition"
                >
                  Floor Plans
                </a>
              </li>
              <li>
                <a
                  href="/amenities"
                  className="hover:text-[#E5562E] transition"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a href="/aboutus" className="hover:text-[#E5562E] transition">
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  className="hover:text-[#E5562E] transition"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4 — Social */}
          <div className="flex items-start gap-4">
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
        <p className="text-center text-[#8A3B27] text-sm mt-6 px-4">
          All the information, terms, and rental prices are subject to change
          without notice. Please check the website for the current updates.
        </p>

        {/* COPYRIGHT */}
        <div className="text-center py-6 text-[#8A3B27] text-sm">
          © 2025 Autumn Towne Luxury Apartments for Seniors.
          <span className="font-semibold"> All Rights Reserved.</span>
        </div>

        {/* SCROLL TO TOP BUTTON */}
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
