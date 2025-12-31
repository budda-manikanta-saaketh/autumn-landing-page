import FloorPlanTabs from "../FloorPlanTabs";

const plan = {
  title: "Cozy 2 Bedroom",
  price: "$1,795",
  beds: 2,
  baths: 2,
  sqft: 1039,
  location: "Autumn Towne Way",
  utilities: "Fixed Utilities Included",
  image: "/floorplans/cozy2.webp",
  gallery: ["/floorplans/cozy2.webp"],
  threeD: "/3d/2bhk_3/index.htm",
  description:
    "A thoughtfully designed two-bedroom home offering warmth, comfort, and efficient use of space.",
};

export default function Cozy2BedroomPage() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 space-y-16">
        <div>
          <h1 className="text-4xl font-bold text-[#5B2C1A]">{plan.title}</h1>

          <p className="text-xl text-[#E95522] mt-2">
            {plan.price} <span className="text-sm">/ month</span>
          </p>

          <p className="mt-4 text-[#666] max-w-[720px]">{plan.description}</p>
        </div>

        <FloorPlanTabs plan={plan} />
      </div>
    </section>
  );
}
