import React from "react";
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

export default function AutumnPlaza() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FAF7F5] to-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#E95522]/10 text-[#E95522] px-4 py-2 rounded-full text-sm font-semibold">
                Modern Mixed-Use Living
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#5B2C1A] leading-tight">
                Autumn Plaza Complex
              </h1>

              <p className="text-lg text-[#7A5D4A] font-medium flex items-center gap-2">
                <MapPin size={20} className="text-[#E95522]" />
                146 Autumn Towne Way, Murfreesboro, TN 37128
              </p>

              <p className="text-xl xl:text-2xl text-[#666] leading-relaxed">
                A modern mixed-use community blending contemporary residential
                living with thoughtfully curated retail spaces, creating a
                walkable, connected environment where convenience meets comfort.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <button className="bg-[#E95522] text-white px-10 py-4 text-lg rounded-full font-semibold hover:bg-[#D0441A] transition-all shadow-lg hover:shadow-xl">
                  Schedule a Visit
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 xl:gap-8 pt-4 text-base text-[#7A5D4A]">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[#E95522]" />
                  <span>(615) 555-0100</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[#E95522]" />
                  <span>info@autumnplaza.com</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E95522]/20 to-[#5B2C1A]/20 rounded-3xl blur-2xl" />
              <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] xl:h-[620px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#5B2C1A] to-[#7A5D4A] flex items-center justify-center">
                <img
                  src="/images/autumn-plaza.webp"
                  alt="Autumn Plaza Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVING AT AUTUMN PLAZA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 xl:mb-20">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#5B2C1A] mb-6">
              Living at Autumn Plaza
            </h2>
            <p className="text-lg xl:text-xl text-[#666] max-w-4xl mx-auto leading-relaxed">
              A thoughtfully designed mixed-use community where modern
              residential living meets everyday convenience through integrated
              retail spaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* RESIDENTIAL */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-14 h-14 bg-[#E95522] rounded-xl flex items-center justify-center text-white">
                  <Home size={26} />
                </div>
                <h3 className="text-3xl xl:text-4xl font-bold text-[#5B2C1A]">
                  Residential Living
                </h3>
              </div>

              <div className="grid gap-6 xl:gap-8 mb-10">
                <InfoCard
                  icon={<Home />}
                  title="Thoughtful Layouts"
                  desc="Spacious floor plans designed to maximize natural light and flow, creating a welcoming atmosphere."
                />
                <InfoCard
                  icon={<Building2 />}
                  title="Private Access"
                  desc="Separate residential entrances and controlled building access for enhanced security and privacy."
                />
                <InfoCard
                  icon={<Trees />}
                  title="Peaceful Living"
                  desc="Quiet interiors above retail spaces provide a calm, residential feel with modern soundproofing."
                />
              </div>

              <div className="bg-[#FAF7F5] rounded-2xl p-8 xl:p-10">
                <h4 className="text-xl xl:text-2xl font-bold text-[#5B2C1A] mb-6">
                  Premium Features Include:
                </h4>
                <div className="grid gap-4">
                  <FeatureItem text="In-unit washer & dryer" />
                  <FeatureItem text="Stainless steel appliances" />
                  <FeatureItem text="Elevator access to all floors" />
                  <FeatureItem text="Secure residential corridors" />
                  <FeatureItem text="Energy-efficient windows" />
                  <FeatureItem text="High-speed internet ready" />
                </div>
              </div>
            </div>

            {/* RETAIL */}
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
                Ground-level retail spaces bring daily essentials and
                neighborhood services just steps from your home, enhancing
                walkability and community interaction while supporting local
                businesses.
              </p>

              <div className="grid gap-6 xl:gap-8">
                <InfoCard
                  icon={<Store />}
                  title="Street-Level Access"
                  desc="Convenient retail located directly below residential spaces with dedicated parking and entrances."
                />
                <InfoCard
                  icon={<MapPin />}
                  title="High Visibility"
                  desc="Positioned along a well-traveled corridor with steady foot traffic and excellent exposure."
                />
                <InfoCard
                  icon={<Building2 />}
                  title="Flexible Retail Space"
                  desc="Ideal for cafés, services, and neighborhood-focused businesses with customizable layouts."
                />
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
              Located in one of Murfreesboro's most convenient corridors with
              quick access to daily essentials, recreation, and major roadways.
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

            <div className="w-full h-[500px] lg:h-[600px] xl:h-[680px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=146+Autumn+Towne+Way,+Murfreesboro,+TN+37128&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
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
