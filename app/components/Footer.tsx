"use client";

import {
  FaInstagram,
  FaFacebook,
  FaArrowUp,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FDF9F6] pt-0 md:pt-10 relative">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="bg-[#5B2C1A] text-white rounded-[28px] md:rounded-[32px] px-8 md:px-14 py-14 md:py-18 text-center mb-20 shadow-xl">
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-extrabold mb-4 leading-tight tracking-wide">
            Ready to Move In?
          </h2>

          <p className="text-white/90 max-w-[520px] mx-auto text-base md:text-lg mb-8 leading-relaxed font-medium">
            Have questions or want to learn more? Our management team is always
            happy to help.
          </p>

          <Link
            href="/contactus"
            className="
              bg-[#E95522] hover:bg-[#D0441A]
              text-white font-semibold
              px-10 py-4 text-lg
              rounded-full shadow-lg hover:shadow-2xl
              flex items-center justify-center gap-3
              mx-auto w-max transition-transform hover:scale-[1.04]
            "
          >
            Contact Us <FaPhoneFlip size={18} />
          </Link>
        </div>
        <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
            gap-12 
            pb-14 
            border-b border-[#C8B4A9]
          "
        >
          <div>
            <h3 className="text-3xl font-extrabold text-[#5B2C1A] tracking-tight">
              Autumn <span className="text-[#E95522]">Towne</span>
            </h3>

            <h4 className="text-xl font-semibold mt-8 mb-2 text-[#E95522]">
              Address
            </h4>

            <p className="text-[#5B2C1A] text-base leading-relaxed font-medium">
              146 Autumn Towne Way,
              <br />
              Murfreesboro, TN 37128
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#E95522]">
              Say Hello
            </h4>

            <p className="text-[#5B2C1A] text-base font-medium leading-relaxed">
              AutumnPlaza5@gmail.com
            </p>
            <p className="text-[#5B2C1A] text-base font-bold mt-1">
              (615) 648-4099
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#E95522]">
              Useful Links
            </h4>

            <ul className="space-y-2 text-lg">
              {[
                ["Home", "/"],
                ["Floor Plans", "/floorplans"],
                ["Amenities", "/amenities"],
                ["About Us", "/aboutus"],
                ["Schedule A Visit", "/bookvisit"],
                ["Contact Us", "/contactus"],
              ].map(([label, link]) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="text-[#5B2C1A] font-medium hover:text-[#E95522] transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#E95522]">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a
                className="
                  w-12 h-12 
                  bg-[#FBE4DD] 
                  rounded-full 
                  flex items-center justify-center 
                  text-[#5B2C1A] text-2xl
                  hover:bg-[#E95522] hover:text-white 
                  transition
                "
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="
                  w-12 h-12 
                  bg-[#FBE4DD] 
                  rounded-full 
                  flex items-center justify-center 
                  text-[#5B2C1A] text-2xl
                  hover:bg-[#E95522] hover:text-white
                  transition
                "
                href="#"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-[#5B2C1A] text-sm md:text-base mt-8 px-4 leading-relaxed font-medium">
          All rental information, terms, and prices are subject to change
          without notice. Please check the website for the latest updates.
        </p>
        <div className="text-center py-8 text-[#5B2C1A] text-sm md:text-base font-semibold">
          © 2025 Autumn Towne Luxury Apartments for Seniors. All Rights
          Reserved.
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            fixed bottom-6 right-6 
            w-12 h-12 rounded-full 
            bg-[#E95522] 
            text-white text-xl 
            flex items-center justify-center 
            shadow-xl hover:scale-110 transition
          "
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
