import FloorPlanHero from "../FloorPlanHero";
import FloorPlanDetails from "../FloorPlanTabs";

const plan = {
  title: "Standard 2 Bedroom",
  price: "$1,895",
  beds: 2,
  baths: 2,
  sqft: 1092,
  location: "Autumn Towne Way",
  utilities: "Fixed Utilities Included",
  image: "/floorplans/standard2.webp",
  gallery: ["/floorplans/standard2.webp"],
  threeD: "/3d/2bhk_2/index.htm",
  description:
    "Comfortable two-bedroom layout designed for everyday living with a perfect balance of space and functionality.",
};

export default function Standard2BedroomPage() {
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
