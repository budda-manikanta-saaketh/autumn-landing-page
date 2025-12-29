import { FLOOR_PLANS } from "@/app/data/floorplans";
import { notFound } from "next/navigation";
import FloorPlanTabs from "./FloorPlanTabs";

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

        {/* ---------- CLIENT TABS ---------- */}
        <FloorPlanTabs plan={plan} />
      </div>
    </section>
  );
}
