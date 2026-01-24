"use client";
import React, { useState } from "react";
import {
  Building2,
  Home,
  ShieldCheck,
  Phone,
  Mail,
  Trees,
  Store,
  MapPin,
  Award,
  CheckCircle2,
} from "lucide-react";
import HeroLayouts from "../components/HeroLayouts";

export default function AutumnPlaza() {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const AUTUMN_PLAZA_IMAGES = [
    "/images/autumn-plaza/1.webp",
    "/images/autumn-plaza/2.webp",
    "/images/autumn-plaza/3.webp",
    "/images/autumn-plaza/4.webp",
    "/images/autumn-plaza/5.webp",
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FAF7F5] to-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            {/* IMAGE – LEFT ON DESKTOP */}
            <div className="relative lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E95522]/20 to-[#5B2C1A]/20 rounded-3xl blur-2xl" />
              <div className="relative">
                <HeroLayouts images={AUTUMN_PLAZA_IMAGES} />
              </div>
            </div>

            {/* CONTENT – RIGHT ON DESKTOP */}
            <div className="space-y-6 lg:order-2 text-right">
              <div className="inline-block bg-[#E95522]/10 text-[#E95522] px-4 py-2 rounded-full text-sm font-semibold ml-auto">
                Modern Mixed-Use Living
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#5B2C1A] leading-tight">
                Autumn Plaza Complex
              </h1>

              <p className="text-lg text-[#7A5D4A] font-medium flex items-center gap-2 justify-end">
                <MapPin size={20} className="text-[#E95522]" />
                146 Autumn Towne Way, Murfreesboro, TN 37128
              </p>

              <p className="text-xl xl:text-2xl text-[#666] leading-relaxed">
                A modern mixed-use community blending contemporary residential
                living with thoughtfully curated retail spaces, creating a
                walkable, connected environment where convenience meets comfort.
              </p>

              <div className="flex flex-wrap gap-4 pt-6 justify-end">
                <button className="bg-[#E95522] text-white px-10 py-4 text-lg rounded-full font-semibold hover:bg-[#D0441A] transition-all shadow-lg hover:shadow-xl">
                  Schedule a Visit
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 xl:gap-8 pt-4 text-base text-[#7A5D4A] justify-end">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[#E95522]" />
                  <span>(615) 648-4099</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[#E95522]" />
                  <span>AutumnPlaza5@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVING AT AUTUMN PLAZA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          {/* SECTION HEADER */}
          <div className="text-center mb-16 xl:mb-20">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#5B2C1A] mb-6">
              Modern Living with Integrated Retail
            </h2>
            <p className="text-lg xl:text-xl text-[#666] max-w-4xl mx-auto leading-relaxed">
              A modern mixed-use community offering comfortable residential
              living paired with everyday conveniences just steps from your
              door.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* ================= RESIDENTIAL ================= */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-14 h-14 bg-[#E95522] rounded-xl flex items-center justify-center text-white">
                  <Home size={26} />
                </div>
                <h3 className="text-3xl xl:text-4xl font-bold text-[#5B2C1A]">
                  Residential Living
                </h3>
              </div>
              <p className="text-lg xl:text-xl text-[#666] mb-10 leading-relaxed">
                Thoughtfully designed apartments provide a peaceful retreat with
                modern comforts, efficient layouts, and secure access.
                Residential spaces are intentionally separated from retail
                activity, ensuring quiet living while remaining connected to
                everyday conveniences below.
              </p>

              {/* HIGHLIGHTS */}
              <div className="grid gap-6 xl:gap-8 mb-10">
                <InfoCard
                  icon={<Home />}
                  title="Well-Planned Layouts"
                  desc="Functional floor plans designed for comfort, natural light, and everyday living."
                />
                <InfoCard
                  icon={<Building2 />}
                  title="Private & Secure Access"
                  desc="Dedicated residential entrances with controlled access for added privacy and peace of mind."
                />
                <InfoCard
                  icon={<Trees />}
                  title="Quiet Living Environment"
                  desc="Sound-conscious construction creates a calm residential atmosphere above retail spaces."
                />
              </div>

              {/* FEATURES */}
              <div className="bg-[#FAF7F5] rounded-2xl p-8 xl:p-10 space-y-10">
                <h4 className="text-xl xl:text-2xl font-bold text-[#5B2C1A]">
                  Apartment Features & Details
                </h4>

                {/* APPLIANCES */}
                <div>
                  <h5 className="text-lg xl:text-xl font-semibold text-[#5B2C1A] mb-4">
                    Appliances
                  </h5>

                  <div className="grid gap-3">
                    {/* Always visible */}
                    <FeatureItem text="Dishwasher" />
                    <FeatureItem text="Washer & Dryer" />
                    <FeatureItem text="Refrigerator & Freezer" />

                    {/* Hidden by default */}
                    {showAllAmenities && (
                      <>
                        <FeatureItem text="Microwave Oven" />
                        <FeatureItem text="Oven & Range" />
                      </>
                    )}
                  </div>
                </div>

                {/* COMFORT */}
                <div>
                  <h5 className="text-lg xl:text-xl font-semibold text-[#5B2C1A] mb-4">
                    Comfort & Climate
                  </h5>

                  <div className="grid gap-3">
                    {/* Always visible */}
                    <FeatureItem text="Central air conditioning" />
                    <FeatureItem text="Ceiling fans" />

                    {/* Hidden by default */}
                    {showAllAmenities && (
                      <>
                        <FeatureItem text="Electric heating" />
                        <FeatureItem text="Durable vinyl flooring" />
                        <FeatureItem text="Patio or balcony available" />
                      </>
                    )}
                  </div>
                </div>

                {/* INTERNET */}
                <div>
                  <h5 className="text-lg xl:text-xl font-semibold text-[#5B2C1A] mb-4">
                    Internet & Media
                  </h5>

                  <div className="grid gap-3">
                    {/* Always visible */}
                    <FeatureItem text="High-speed internet ready" />

                    {/* Hidden by default */}
                    {showAllAmenities && (
                      <>
                        <FeatureItem text="Building-wide wireless internet" />
                        <FeatureItem text="Cable TV ready" />
                      </>
                    )}
                  </div>
                </div>

                {/* POLICIES */}
                <div>
                  <h5 className="text-lg xl:text-xl font-semibold text-[#5B2C1A] mb-4">
                    Community Details & Policies
                  </h5>

                  <div className="grid gap-3">
                    {/* Always visible */}
                    <FeatureItem text="On-site parking lot" />
                    <FeatureItem text="Common area maintenance included" />

                    {/* Hidden by default */}
                    {showAllAmenities && (
                      <>
                        <FeatureItem text="Landscaping, dumpster & pest control included" />
                        <FeatureItem text="One-year and multi-year lease options" />
                        <FeatureItem text="Pet-free community (no dogs or cats)" />
                      </>
                    )}
                  </div>
                </div>

                {/* TOGGLE BUTTON */}
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="text-[#E95522] font-semibold hover:underline transition"
                >
                  {showAllAmenities
                    ? "Show fewer amenities"
                    : "View all amenities"}
                </button>
              </div>
            </div>

            {/* ================= RETAIL ================= */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-14 h-14 bg-[#E95522] rounded-xl flex items-center justify-center text-white">
                  <Store size={26} />
                </div>
                <h3 className="text-3xl xl:text-4xl font-bold text-[#5B2C1A]">
                  Retail Convenience
                </h3>
              </div>

              <p className="text-lg xl:text-xl text-[#666] mb-10 leading-relaxed">
                Ground-level retail spaces bring everyday essentials and
                neighborhood services directly into the community, enhancing
                walkability and convenience.
              </p>

              <div className="grid gap-6 xl:gap-8 mb-10">
                <InfoCard
                  icon={<Store />}
                  title="Street-Level Retail"
                  desc="Easily accessible storefronts with dedicated customer access and nearby parking."
                />
                <InfoCard
                  icon={<MapPin />}
                  title="Prime Visibility"
                  desc="Located along a well-traveled corridor offering strong visibility and foot traffic."
                />
                <InfoCard
                  icon={<Building2 />}
                  title="Flexible Commercial Space"
                  desc="Adaptable layouts suitable for cafés, services, and local businesses."
                />
              </div>

              {/* FEATURE LIST */}
              <div className="bg-[#FAF7F5] rounded-2xl p-8 xl:p-10">
                <h4 className="text-xl xl:text-2xl font-bold text-[#5B2C1A] mb-6">
                  Retail Space Features
                </h4>

                <div className="grid gap-3">
                  <FeatureItem text="Convenient ground-floor access" />
                  <FeatureItem text="Clear storefront visibility" />
                  <FeatureItem text="Flexible interior layouts" />
                  <FeatureItem text="Dedicated customer parking areas" />
                  <FeatureItem text="Pedestrian-friendly walkways" />
                  <FeatureItem text="Designed for a variety of neighborhood services" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-20 md:py-28 bg-[#FAF7F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 xl:mb-20">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#5B2C1A] mb-6">
              Amenities & Security
            </h2>
            <p className="text-lg xl:text-xl text-[#666] max-w-4xl mx-auto leading-relaxed">
              Autumn Plaza prioritizes safety, accessibility, and convenience
              through well-planned amenities and secure infrastructure designed
              for modern living.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            <AmenityCard
              icon={<ShieldCheck />}
              title="Secure Entry"
              desc="Controlled access points with monitored entry systems and 24/7 surveillance."
            />
            <AmenityCard
              icon={<Building2 />}
              title="Private Elevator"
              desc="Exclusive elevator access reserved for residents with key card entry."
            />
            <AmenityCard
              icon={<Home />}
              title="Modern Interiors"
              desc="Clean finishes, durable materials, and timeless design throughout."
            />
            <AmenityCard
              icon={<Award />}
              title="Professional Management"
              desc="On-site management team dedicated to resident satisfaction."
            />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 xl:mb-20">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#5B2C1A] mb-6">
              Prime Location
            </h2>
            <p className="text-lg xl:text-xl text-[#666] max-w-4xl mx-auto leading-relaxed">
              Located in one of Murfreesboro&apos;s most convenient corridors
              with quick access to daily essentials, recreation, and major
              roadways.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            <div className="space-y-8">
              <div className="bg-[#FAF7F5] rounded-2xl p-8 xl:p-10">
                <h3 className="text-2xl xl:text-3xl font-bold text-[#5B2C1A] mb-8">
                  Nearby Attractions
                </h3>
                <div className="grid grid-cols-2 gap-5">
                  <LocationCard label="Starbucks" distance="0.3 mi" />
                  <LocationCard label="Publix" distance="0.5 mi" />
                  <LocationCard label="Sam's Club" distance="0.8 mi" />
                  <LocationCard label="Boro Pickleball" distance="1.2 mi" />
                  <LocationCard label="MTSU Campus" distance="2.5 mi" />
                  <LocationCard label="The Avenue" distance="3.1 mi" />
                </div>
              </div>

              <div className="bg-[#E95522] text-white rounded-2xl p-8 xl:p-10">
                <h3 className="text-2xl xl:text-3xl font-bold mb-4">
                  Ready to Visit?
                </h3>
                <p className="mb-6 xl:mb-8 opacity-90 text-lg">
                  Schedule a tour today and experience the Autumn Plaza
                  lifestyle firsthand.
                </p>
                <button className="bg-white text-[#E95522] px-8 py-4 text-lg rounded-full font-semibold hover:bg-gray-100 transition-all w-full md:w-auto">
                  Book Your Tour
                </button>
              </div>
            </div>

            {/* EMBEDDED MAP – UPDATED */}
            <div className="w-full h-[500px] lg:h-[600px] xl:h-[680px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.01140933425!2d-86.45208732494461!3d35.84446302099107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863f7c884e93763%3A0x3d9441bc1b38a238!2s2909%20Old%20Fort%20Pkwy%2C%20Murfreesboro%2C%20TN%2037128%2C%20USA!5e1!3m2!1sen!2sin!4v1768900221905!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white border-2 border-[#E5DDD6] rounded-2xl p-6 xl:p-8 space-y-4 hover:border-[#E95522] transition-all hover:shadow-lg">
      <div className="w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center bg-[#E95522]/10 rounded-xl text-[#E95522]">
        {icon}
      </div>
      <h3 className="text-xl xl:text-2xl font-bold text-[#5B2C1A]">{title}</h3>
      <p className="text-[#666] text-base xl:text-lg leading-relaxed">{desc}</p>
    </div>
  );
}

function AmenityCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 xl:p-8 space-y-4 hover:shadow-xl transition-all border border-transparent hover:border-[#E95522]">
      <div className="w-14 h-14 xl:w-16 xl:h-16 flex items-center justify-center bg-[#E95522]/10 rounded-xl text-[#E95522]">
        {icon}
      </div>
      <h3 className="text-lg xl:text-xl font-bold text-[#5B2C1A]">{title}</h3>
      <p className="text-sm xl:text-base text-[#666] leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-[#5B2C1A] text-base xl:text-lg">
      <CheckCircle2 size={22} className="text-[#E95522] flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function LocationCard({
  label,
  distance,
}: {
  label: string;
  distance: string;
}) {
  return (
    <div className="bg-white rounded-xl p-5 xl:p-6 border border-[#E5DDD6] hover:border-[#E95522] transition-all">
      <div className="font-semibold text-[#5B2C1A] text-base xl:text-lg">
        {label}
      </div>
      <div className="text-sm xl:text-base text-[#7A5D4A] mt-1">{distance}</div>
    </div>
  );
}
