import FloorPlanHero from "../FloorPlanHero";
import FloorPlanDetails from "../FloorPlanTabs";

const plan = {
  title: "Luxury 1 Bedroom",
  price: "$1,750",
  beds: 1,
  baths: 1,
  sqft: 930,
  location: "Autumn Towne Way",
  utilities: "Fixed Utilities Included",
  image: "/floorplans/luxury1.webp",
  gallery: ["/floorplans/luxury1.webp"],
  threeD: "/3d/1bhk/index.htm",
  description:
    "Elegant one-bedroom residence featuring a modern layout with upscale finishes and a spacious living area.",
};

export default function Luxury1BedroomPage() {
  return (
    <>
      {/* FULLSCREEN HERO (3D / Images toggle) */}
      <FloorPlanHero plan={plan} />

      {/* DETAILS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 space-y-16">
          {/* HEADER */}
          <div>
            <h1 className="text-4xl font-bold text-[#5B2C1A]">{plan.title}</h1>

            <p className="text-xl text-[#E95522] mt-2">
              {plan.price} <span className="text-sm">/ month</span>
            </p>

            <p className="mt-4 text-[#666] max-w-[720px]">{plan.description}</p>
          </div>

          {/* SPECS + UTILITIES */}
          <FloorPlanDetails plan={plan} />
        </div>
      </section>
    </>
  );
}
