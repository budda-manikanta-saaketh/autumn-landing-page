import Image from "next/image";
import {
  Building2,
  Store,
  Home,
  Trees,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function AutumnPlaza() {
  return (
    <section className="pt-16 pb-8 md:md:pb-0">
      <div className="max-w-[1200px] mx-auto px-6 space-y-16 md:space-y-24 lg:space-y-28">
        {/* HERO / TOP OF PAGE */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#5B2C1A]">
              Autumn Plaza Complex
            </h1>

            <p className="text-sm text-[#7A5D4A] font-medium">
              146 Autumn Towne Way, Murfreesboro, TN 37128
            </p>

            <p className="text-lg text-[#E95522] font-semibold">
              Modern Living in the Heart of Murfreesboro
            </p>

            <p className="text-[#666] leading-relaxed max-w-[520px]">
              Autumn Plaza is a thoughtfully designed mixed-use community
              offering modern residential living above vibrant retail spaces —
              bringing comfort, convenience, and connection together.
            </p>
          </div>

          <div className="relative h-[380px] rounded-[28px] overflow-hidden group">
            <Image
              src="/images/autumn-plaza.webp"
              alt="Autumn Plaza Exterior"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* RESIDENTIAL SECTION */}

        <Section title="Residential Living">
          <p className="text-[#666] max-w-[720px]">
            The residential apartments at Autumn Plaza are designed for comfort,
            privacy, and ease of living with modern finishes and thoughtful
            layouts.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#5B2C1A] mt-6">
            <li>• In-unit washer & dryer</li>
            <li>• Stainless steel appliances</li>
            <li>• Secure private residential access</li>
            <li>• Elevator access for residents</li>
          </ul>

          <div className="mt-8">
            <Link
              href="/bookvisit"
              className="inline-block bg-[#E95522] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#D0441A] transition"
            >
              Visit Today
            </Link>
          </div>
        </Section>

        {/* AMENITIES & SECURITY */}

        <Section title="Amenities & Security">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
              icon={<ShieldCheck />}
              title="Secure Entry"
              desc="Controlled access points and security monitoring."
            />
            <Feature
              icon={<Building2 />}
              title="Private Elevator"
              desc="Exclusive elevator access for Autumn Plaza residents."
            />
            <Feature
              icon={<Home />}
              title="Comfort Living"
              desc="Modern finishes and thoughtfully designed interiors."
            />
          </div>
        </Section>

        {/* MAP & LOCATION */}

        <Section title="Location">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-[#666]">
                Autumn Plaza is conveniently located near everyday essentials
                and local attractions.
              </p>

              <ul className="text-sm text-[#5B2C1A] space-y-2">
                <li>• Starbucks</li>
                <li>• Publix</li>
                <li>• Sam’s Club</li>
                <li>• Boro Pickleball</li>
              </ul>
            </div>

            <div className="w-full h-[300px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=146+Autumn+Towne+Way,+Murfreesboro,+TN+37128&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Section>

        {/* RETAIL SPACE */}

        <Section title="Retail at Autumn Plaza">
          <p className="text-[#666] max-w-[720px]">
            Retail space is available at the base of the building, offering
            excellent visibility and foot traffic.
          </p>

          <ul className="text-sm text-[#5B2C1A] mt-6 space-y-2">
            <li>• Current Retail Tenant (optional)</li>
            <li>• Opportunity for cafés & services</li>
          </ul>
        </Section>

        {/* GALLERY */}

        {/* <Section title="Gallery">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-[220px] bg-[#F5F1EE] rounded-2xl flex items-center justify-center">
              Apartment Photos
            </div>
            <div className="h-[220px] bg-[#F5F1EE] rounded-2xl flex items-center justify-center">
              Retail Photos
            </div>
            <div className="h-[220px] bg-[#F5F1EE] rounded-2xl flex items-center justify-center">
              Community Photos
            </div>
          </div>
        </Section> */}
        {/* CONTACT */}
        <Section title="Contact">
          <div className="space-y-4 text-[#5B2C1A]">
            <p className="flex items-center gap-3">
              <Phone size={18} /> (615) 648-4099
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} /> AutumnPlaza5@gmail.com
            </p>
          </div>
        </Section>
        {/* CTA BANNER */}

        <div className="bg-[#5B2C1A] rounded-[28px] p-6 md:p-10 text-center text-white space-y-2 md:space-y-4">
          <h3 className="text-2xl font-bold">
            Now Leasing Limited Units Available
          </h3>
          <Link
            href="/bookvisit"
            className="inline-block bg-[#E95522] px-8 py-3 rounded-full font-semibold hover:bg-[#D0441A] transition"
          >
            Schedule Tour
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* REUSABLE COMPONENTS */
/* ================================================= */

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
