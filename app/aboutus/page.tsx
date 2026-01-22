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
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="pt-[140px] pb-4">
      <div className="max-w-[1280px] 2xl:max-w-[1600px] mx-auto px-6">
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
              src="/images/Community.webp"
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
        {/* ================= TESTIMONIALS ================= */}
        <div className="mt-20">
          <h3 className="text-[1.9rem] font-bold text-[#5B2C1A] text-center mb-12">
            What Our Residents Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Gloria D.",
                text: "Autumn Towne is a place to truly connect with our neighbors. Great special events and activities. We are a family here at Autumn Towne.",
              },
              {
                name: "Judith F.",
                text: "Autumn Towne is a beautiful 55+ community and we are happy to call it home. The amenities are great, and every day is a cheerful experience.",
              },
              {
                name: "Troy W.",
                text: "I love living at Autumn Towne; the people and staff are very friendly and helpful. Very clean and organized.",
              },
              {
                name: "Barbara L.",
                text: "Autumn Towne is one of the best senior communities I've lived in! The price is great, and there are no utility bills. I love it here.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-[#eee] rounded-[24px] p-8 shadow-sm hover:shadow-lg transition"
              >
                <p className="text-[#666] italic leading-relaxed mb-6">
                  “{t.text}”
                </p>
                <p className="font-semibold text-[#5B2C1A]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* ================= SOCIAL MEDIA ================= */}
        <div className="mt-24 text-center">
          <h3 className="text-[1.8rem] font-bold text-[#5B2C1A] mb-4">
            Stay Connected With Us
          </h3>

          <p className="text-[#666] max-w-[600px] mx-auto mb-8">
            Follow us on social media to see community moments, events, and
            daily life at Autumn Towne.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#1877F2]/10 flex items-center justify-center
                 text-[#1877F2] text-xl hover:bg-[#1877F2] hover:text-white transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#E1306C]/10 flex items-center justify-center
                 text-[#E1306C] text-xl hover:bg-[#E1306C] hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
