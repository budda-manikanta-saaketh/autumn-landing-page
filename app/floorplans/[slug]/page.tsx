import Image from "next/image";
import { FLOOR_PLANS } from "@/app/data/floorplans";
import { notFound } from "next/navigation";
import { Bed, Bath, Maximize, MapPin, Zap } from "lucide-react";

export default async function FloorPlanDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const plan = FLOOR_PLANS.find((p) => p.slug === slug);
  if (!plan) notFound();

  return (
    <section className="pt-20 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 space-y-16">
        {/* ---------- HEADER ---------- */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#5B2C1A]">
            {plan.title}
          </h1>

          <p className="text-xl font-semibold text-[#E95522]">
            {plan.price}
            <span className="text-sm font-normal text-[#7A5D4A]"> / month</span>
          </p>

          <p className="max-w-[720px] text-[#666] leading-relaxed">
            {plan.description}
          </p>
        </div>

        {/* ---------- FLOOR PLAN IMAGE (HERO) ---------- */}
        <div className="bg-white rounded-[28px] border border-[#eee] p-6">
          <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
            <Image
              src={plan.image}
              alt={plan.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ---------- SIMPLE DETAILS ROW ---------- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-[#5B2C1A]">
          <Spec icon={<Bed />} value={`${plan.beds}`} label="Bedrooms" />
          <Spec icon={<Bath />} value={`${plan.baths}`} label="Bathrooms" />
          <Spec icon={<Maximize />} value={`${plan.sqft}`} label="Sq Ft" />
          <Spec icon={<MapPin />} value={plan.location} label="Location" />
        </div>

        {/* ---------- UTILITIES + TIP ---------- */}
        <div className="grid md:grid-cols-1 gap-6">
          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-[#5B2C1A] mb-2">
              Utilities Included
            </h3>
            <p className="text-sm text-[#666]">{plan.utilities}</p>
          </div>
        </div>

        {/* ---------- 3D WALKTHROUGH ---------- */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#5B2C1A]">
            Interactive 3D Walkthrough
          </h2>

          <div className="rounded-[24px] overflow-hidden border">
            <div className="relative w-full aspect-[16/9] bg-black">
              <iframe
                src={plan.threeD}
                className="w-full h-full border-0"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Spec({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-[#E95522]/10 rounded-lg text-[#E95522]">
        {icon}
      </div>
      <div>
        <p className="font-bold">{value}</p>
        <p className="text-xs text-[#7A5D4A]">{label}</p>
      </div>
    </div>
  );
}
