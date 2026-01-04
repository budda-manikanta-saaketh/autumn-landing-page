import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Home,
  ShieldCheck,
  Phone,
  Mail,
  Trees,
  Store,
  MapPin,
} from "lucide-react";

/* ================================================= */
/* PAGE */
/* ================================================= */

export default function AutumnPlaza() {
  return (
    <>
      {/* HERO */}
      <FullSection>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#5B2C1A]">
              Autumn Plaza Complex
            </h1>

            <p className="text-sm text-[#7A5D4A] font-medium">
              146 Autumn Towne Way, Murfreesboro, TN 37128
            </p>

            <p className="text-lg text-[#E95522] font-semibold">
              A Modern Mixed-Use Community Designed for Everyday Living
            </p>

            <p className="text-[#666] leading-relaxed max-w-[560px]">
              Autumn Plaza blends contemporary residential living with
              thoughtfully curated retail spaces, creating a walkable, connected
              environment where convenience meets comfort.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/bookvisit"
                className="bg-[#E95522] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#D0441A] transition"
              >
                Schedule a Visit
              </Link>
              <Link
                href="/floorplans"
                className="border border-[#E95522] text-[#E95522] px-8 py-3 rounded-full font-semibold hover:bg-[#E95522]/10 transition"
              >
                View Floor Plans
              </Link>
            </div>
          </div>

          <div className="relative h-[460px] rounded-[28px] overflow-hidden">
            <Image
              src="/images/autumn-plaza.webp"
              alt="Autumn Plaza Exterior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </FullSection>

      {/* LIVING AT AUTUMN PLAZA */}
      <FullSection bg>
        <Section title="Living at Autumn Plaza">
          <p className="text-[#666] max-w-[780px]">
            Autumn Plaza is a thoughtfully designed mixed-use community where
            modern residential living meets everyday convenience through
            integrated retail spaces.
          </p>

          {/* RESIDENTIAL */}
          <div className="mt-14">
            <h3 className="text-xl font-bold text-[#5B2C1A] mb-6">
              Residential Living
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <InfoCard
                icon={<Home />}
                title="Thoughtful Layouts"
                desc="Spacious floor plans designed to maximize natural light and flow."
              />
              <InfoCard
                icon={<Building2 />}
                title="Private Access"
                desc="Separate residential entrances and controlled building access."
              />
              <InfoCard
                icon={<Trees />}
                title="Peaceful Living"
                desc="Quiet interiors above retail for a calm, residential feel."
              />
            </div>

            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#5B2C1A] mt-8">
              <li>• In-unit washer & dryer</li>
              <li>• Stainless steel appliances</li>
              <li>• Elevator access</li>
              <li>• Secure residential corridors</li>
            </ul>
          </div>

          {/* DIVIDER */}
          <div className="my-16 h-px bg-[#E5DDD6]" />

          {/* RETAIL */}
          <div>
            <h3 className="text-xl font-bold text-[#5B2C1A] mb-6">
              Retail Convenience
            </h3>

            <p className="text-[#666] max-w-[720px] mb-10">
              Ground-level retail spaces bring daily essentials and neighborhood
              services just steps from your home, enhancing walkability and
              community interaction.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <InfoCard
                icon={<Store />}
                title="Street-Level Access"
                desc="Convenient retail located directly below residential spaces."
              />
              <InfoCard
                icon={<MapPin />}
                title="High Visibility"
                desc="Positioned along a well-traveled corridor with steady foot traffic."
              />
              <InfoCard
                icon={<Building2 />}
                title="Flexible Retail Space"
                desc="Ideal for cafés, services, and neighborhood-focused businesses."
              />
            </div>
          </div>
        </Section>
      </FullSection>

      {/* AMENITIES */}
      <FullSection>
        <Section title="Amenities & Security">
          <p className="text-[#666] max-w-[760px]">
            Autumn Plaza prioritizes safety, accessibility, and convenience
            through well-planned amenities and secure infrastructure.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <Feature
              icon={<ShieldCheck />}
              title="Secure Entry"
              desc="Controlled access points with monitored entry systems."
            />
            <Feature
              icon={<Building2 />}
              title="Private Elevator"
              desc="Exclusive elevator access reserved for residents."
            />
            <Feature
              icon={<Home />}
              title="Modern Interiors"
              desc="Clean finishes, durable materials, and timeless design."
            />
          </div>
        </Section>
      </FullSection>

      {/* LOCATION */}
      <FullSection bg>
        <Section title="Prime Location">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#666]">
                Located in one of Murfreesboro’s most convenient corridors,
                Autumn Plaza offers quick access to daily essentials,
                recreation, and major roadways.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm text-[#5B2C1A]">
                <LocationItem label="Starbucks" />
                <LocationItem label="Publix" />
                <LocationItem label="Sam’s Club" />
                <LocationItem label="Boro Pickleball" />
              </div>

              <p className="text-sm text-[#7A5D4A] flex items-center gap-2">
                <MapPin size={16} />
                Central Murfreesboro Location
              </p>
            </div>

            <div className="w-full h-[420px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=146+Autumn+Towne+Way,+Murfreesboro,+TN+37128&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </Section>
      </FullSection>

      {/* CONTACT */}
      <FullSection bg>
        <Section title="Contact & Leasing">
          <p className="text-[#666] max-w-[720px]">
            Interested in learning more about availability, leasing options, or
            scheduling a private tour? Our team is here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10 text-[#5B2C1A]">
            <p className="flex items-center gap-3">
              <Phone size={18} /> (615) 648-4099
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} /> AutumnPlaza5@gmail.com
            </p>
          </div>
        </Section>
      </FullSection>
    </>
  );
}

/* ================================================= */
/* HELPERS */
/* ================================================= */

function FullSection({
  children,
  bg = false,
}: {
  children: React.ReactNode;
  bg?: boolean;
}) {
  return (
    <section
      className={`min-h-screen w-full flex items-center ${
        bg ? "bg-[#FAF7F5]" : "bg-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full">{children}</div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#5B2C1A]">{title}</h2>
      {children}
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#eee] space-y-3 text-center">
      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-[#E95522]/10 rounded-xl text-[#E95522]">
        {icon}
      </div>
      <h3 className="font-bold text-[#5B2C1A]">{title}</h3>
      <p className="text-sm text-[#666]">{desc}</p>
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
    <div className="bg-white border border-[#eee] rounded-2xl p-6 space-y-3">
      <div className="w-10 h-10 flex items-center justify-center bg-[#E95522]/10 rounded-lg text-[#E95522]">
        {icon}
      </div>
      <h3 className="font-semibold text-[#5B2C1A]">{title}</h3>
      <p className="text-sm text-[#666]">{desc}</p>
    </div>
  );
}

function LocationItem({ label }: { label: string }) {
  return <div className="bg-white rounded-xl px-4 py-3">{label}</div>;
}
