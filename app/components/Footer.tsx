"use client";

import {
  FaInstagram,
  FaFacebook,
  FaArrowUp,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FDF9F6] relative">
      {/* CONTAINER */}
      <div
        className="
          max-w-[1280px]
          2xl:max-w-[1600px]
          mx-auto
          px-4 md:px-6
        "
      >
        {/* CTA CARD */}
        <div
          className="
            bg-[#5B2C1A]
            text-white
            rounded-[28px] lg:rounded-[36px]
            px-8 sm:px-12 lg:px-20
            py-12 sm:py-14 lg:py-20
            text-center
            mb-20
            shadow-xl
          "
        >
          <h2
            className="
              font-extrabold tracking-wide leading-tight mb-4
              text-[2.2rem]
              sm:text-[2.6rem]
              md:text-[3rem]
              lg:text-[3.4rem]
              xl:text-[3.8rem]
            "
          >
            Ready to Move In?
          </h2>

          <p
            className="
              text-white/90
              max-w-[520px]
              lg:max-w-[620px]
              mx-auto
              text-base sm:text-lg lg:text-xl
              mb-8
              leading-relaxed
              font-medium
            "
          >
            Have questions or want to learn more? Our management team is always
            happy to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contactus"
              className="
                bg-[#E95522] hover:bg-[#D0441A]
                text-white font-semibold
                px-10 lg:px-14
                py-4 lg:py-5
                text-lg lg:text-xl
                rounded-full shadow-lg hover:shadow-2xl
                flex items-center justify-center gap-3
                w-full sm:w-auto
                transition-transform hover:scale-[1.05]
              "
            >
              <FaPhone className="scale-x-[-1]" />
              Contact Us
            </Link>

            <Link
              href="/bookvisit"
              className="
                bg-white hover:bg-gray-100
                text-[#5B2C1A] font-semibold
                px-10 lg:px-14
                py-4 lg:py-5
                text-lg lg:text-xl
                rounded-full shadow-lg hover:shadow-2xl
                flex items-center justify-center gap-3
                w-full sm:w-auto
                transition-transform hover:scale-[1.05]
              "
            >
              <FaCalendarAlt />
              Schedule Now
            </Link>
          </div>
        </div>

        {/* FOOTER GRID */}
        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            gap-12 lg:gap-16 xl:gap-20
            pb-14
            border-b border-[#C8B4A9]
          "
        >
          {/* BRAND */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-[#5B2C1A] tracking-tight">
              Autumn <span className="text-[#E95522]">Towne</span>
            </h3>

            <h4 className="text-xl font-semibold mt-8 mb-2 text-[#E95522]">
              Address
            </h4>

            <p className="text-[#5B2C1A] text-base lg:text-lg leading-relaxed font-medium">
              146 Autumn Towne Way,
              <br />
              Murfreesboro, TN 37128
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#E95522]">
              Say Hello
            </h4>

            <p className="text-[#5B2C1A] text-base lg:text-lg font-medium">
              AutumnPlaza5@gmail.com
            </p>
            <p className="text-[#5B2C1A] text-base lg:text-lg font-bold mt-1">
              (615) 648-4099
            </p>
          </div>

          {/* LINKS */}
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

          {/* SOCIAL */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#E95522]">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              {[FaInstagram, FaFacebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-12 h-12 lg:w-14 lg:h-14
                    bg-[#FBE4DD]
                    rounded-full
                    flex items-center justify-center
                    text-[#5B2C1A] text-2xl
                    hover:bg-[#E95522] hover:text-white
                    transition
                  "
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-center text-[#5B2C1A] text-sm lg:text-base mt-8 px-4 leading-relaxed font-medium">
          All rental information, terms, and prices are subject to change
          without notice. Please check the website for the latest updates.
        </p>

        <div className="text-center py-8 text-[#5B2C1A] text-sm lg:text-base font-semibold">
          © 2025 Autumn Towne Luxury Apartments for Seniors. All Rights
          Reserved.
        </div>

        {/* SCROLL TO TOP */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            fixed bottom-6 right-6
            w-12 h-12
            bg-[#E95522]
            text-white text-xl
            rounded-full
            flex items-center justify-center
            shadow-xl
            hover:scale-110
            transition
          "
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
