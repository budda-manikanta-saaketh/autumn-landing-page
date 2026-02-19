"use client";

import React from "react";
import {
  Building2,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Users,
  Award,
} from "lucide-react";

export default function AutumnPlazaAbout() {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FAF7F5] to-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="inline-block bg-[#E95522]/10 text-[#E95522] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            About Autumn Plaza
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#5B2C1A] leading-tight mb-8">
            A Community Built for
            <br /> Modern Living
          </h1>

          <p className="text-xl xl:text-2xl text-[#666] max-w-4xl mx-auto leading-relaxed">
            Autumn Plaza was thoughtfully designed as a mixed-use destination
            where residential comfort and retail convenience come together in
            one walkable, connected environment.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-[#E95522] rounded-xl flex items-center justify-center text-white">
                  <Building2 size={26} />
                </div>
                <h2 className="text-4xl xl:text-5xl font-bold text-[#5B2C1A]">
                  Our Vision
                </h2>
              </div>

              <p className="text-lg xl:text-xl text-[#666] leading-relaxed mb-6">
                Autumn Plaza was created with a simple purpose: to redefine
                everyday living by combining thoughtfully designed apartments
                with essential neighborhood retail.
              </p>

              <p className="text-lg xl:text-xl text-[#666] leading-relaxed">
                By placing convenience at your doorstep while preserving quiet,
                private residential access above, we’ve built a community that
                supports both lifestyle and practicality.
              </p>
            </div>

            <div className="bg-[#FAF7F5] rounded-2xl p-10 space-y-8">
              <ValueItem
                icon={<Users />}
                title="Community Focused"
                desc="Designed to encourage connection while maintaining personal privacy."
              />
              <ValueItem
                icon={<ShieldCheck />}
                title="Security & Peace of Mind"
                desc="Controlled access, secure entry, and resident-only amenities."
              />
              <ValueItem
                icon={<HeartHandshake />}
                title="Service Driven"
                desc="Professional on-site management committed to resident satisfaction."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="py-20 md:py-28 bg-[#FAF7F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#5B2C1A] mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg xl:text-xl text-[#666] max-w-4xl mx-auto leading-relaxed">
              Autumn Plaza blends modern design, everyday convenience, and
              strategic location into one seamless living experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <HighlightCard
              icon={<Building2 />}
              title="Modern Mixed-Use Design"
              desc="Residential units thoughtfully separated from retail for comfort and privacy."
            />

            <HighlightCard
              icon={<MapPin />}
              title="Prime Murfreesboro Location"
              desc="Positioned along a vibrant corridor with easy access to shopping, dining, and major routes."
            />

            <HighlightCard
              icon={<Award />}
              title="Quality Construction"
              desc="Built with durable materials, timeless finishes, and sound-conscious design."
            />
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY STATEMENT ================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#5B2C1A] mb-8">
            More Than a Property <br /> A Community
          </h2>

          <p className="text-lg xl:text-xl text-[#666] leading-relaxed mb-6">
            Autumn Plaza isn’t just a place to live or shop. It’s a carefully
            curated environment where convenience enhances comfort and design
            supports daily life.
          </p>

          <p className="text-lg xl:text-xl text-[#666] leading-relaxed">
            Whether you're enjoying the quiet of your private apartment or
            walking downstairs to your favorite neighborhood service, Autumn
            Plaza delivers balance modern, accessible, and welcoming.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function HighlightCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 space-y-4 border border-transparent hover:border-[#E95522] hover:shadow-xl transition-all">
      <div className="w-14 h-14 flex items-center justify-center bg-[#E95522]/10 rounded-xl text-[#E95522]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#5B2C1A]">{title}</h3>
      <p className="text-[#666] leading-relaxed">{desc}</p>
    </div>
  );
}

function ValueItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 flex items-center justify-center bg-[#E95522]/10 rounded-xl text-[#E95522]">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-[#5B2C1A]">{title}</h4>
        <p className="text-[#666] mt-1">{desc}</p>
      </div>
    </div>
  );
}
