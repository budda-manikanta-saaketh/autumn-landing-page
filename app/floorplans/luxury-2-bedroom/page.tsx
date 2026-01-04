import FloorPlanHero from "../FloorPlanHero";
import FloorPlanDetails from "../FloorPlanTabs";

const plan = {
  title: "Luxury 2 Bedroom",
  price: "$1,995",
  beds: 2,
  baths: 2,
  sqft: 1327,
  location: "Autumn Towne Way",
  image: "/floorplans/luxury2.webp",
  threeD: "/3d/2bhk_1/index.htm",
  description:
    "Spacious two-bedroom residence featuring premium finishes, open living spaces, and abundant natural light.",
};

export default function Luxury2BedroomPage() {
  return (
    <>
      {/* FULLSCREEN HERO */}
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
