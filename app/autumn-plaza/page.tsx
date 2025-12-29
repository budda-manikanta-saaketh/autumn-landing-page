import Image from "next/image";
import { Building2, Store, Home, Trees, ShieldCheck } from "lucide-react";

export default function AutumnPlaza() {
  return (
    <section className="pt-20 pb-28">
      <div className="max-w-[1200px] mx-auto px-6 space-y-20">
        {/* ---------- HERO ---------- */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#5B2C1A]">
              Autumn Plaza
            </h1>

            <p className="text-lg text-[#E95522] font-semibold">
              Where Community, Comfort & Convenience Meet
            </p>

            <p className="text-[#666] leading-relaxed max-w-[520px]">
              Autumn Plaza is a thoughtfully designed mixed-use destination,
              bringing everyday convenience to your doorstep with vibrant
              commercial spaces on the ground floor and peaceful residential
              living above.
            </p>
          </div>

          <div className="relative h-[360px] rounded-[28px] overflow-hidden ">
            <Image
              src="/images/autumn-plaza.jpeg"
              alt="Autumn Plaza"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ---------- CONCEPT SECTION ---------- */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Commercial */}
          <div className="bg-white rounded-[28px] border border-[#eee] p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#E95522]/10 rounded-xl">
                <Store className="w-6 h-6 text-[#E95522]" />
              </div>
              <h2 className="text-xl font-bold text-[#5B2C1A]">
                Ground Floor – Commercial Plaza
              </h2>
            </div>

            <p className="text-[#666] leading-relaxed">
              The ground floor of Autumn Plaza hosts carefully curated
              commercial spaces including cafés, essential services, wellness
              studios, and neighborhood retail all designed to serve residents
              and visitors alike.
            </p>

            <ul className="space-y-2 text-sm text-[#5B2C1A]">
              <li>• Cafés & casual dining</li>
              <li>• Daily essentials & retail</li>
              <li>• Wellness & lifestyle services</li>
              <li>• Barrier-free access for all ages</li>
            </ul>
          </div>

          {/* Residential */}
          <div className="bg-white rounded-[28px] border border-[#eee] p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#E95522]/10 rounded-xl">
                <Home className="w-6 h-6 text-[#E95522]" />
              </div>
              <h2 className="text-xl font-bold text-[#5B2C1A]">
                Upper Floors – Residential Living
              </h2>
            </div>

            <p className="text-[#666] leading-relaxed">
              Above the plaza lies calm, secure residential living thoughtfully
              separated from the commercial level to ensure privacy, peace, and
              comfort for residents.
            </p>

            <ul className="space-y-2 text-sm text-[#5B2C1A]">
              <li>• Private residential access</li>
              <li>• Noise-controlled design</li>
              <li>• Secure entrances & elevators</li>
              <li>• Senior-friendly layouts</li>
            </ul>
          </div>
        </div>

        {/* ---------- WHY AUTUMN PLAZA ---------- */}
        <div className="bg-[#FFF7ED] rounded-[32px] p-10 space-y-8">
          <h2 className="text-2xl font-bold text-[#5B2C1A] text-center">
            Why Autumn Plaza Works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={<Building2 />}
              title="Smart Mixed Use Design"
              desc="Seamlessly blends commercial activity with peaceful residential living."
            />
            <Feature
              icon={<Trees />}
              title="Community Focused"
              desc="Encourages social interaction while preserving privacy and calm."
            />
            <Feature
              icon={<ShieldCheck />}
              title="Safe & Accessible"
              desc="Designed with safety, accessibility, and comfort as top priorities."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURE CARD ---------- */
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
