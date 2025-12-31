import FloorPlanTabs from "../FloorPlanTabs";

const plan = {
  title: "Cozy 1 Bedroom",
  price: "$1,495",
  beds: 1,
  baths: 1,
  sqft: 649,
  location: "Autumn Towne Way",
  utilities: "Fixed Utilities Included",
  image: "/floorplans/cozy1.webp",
  gallery: ["/floorplans/cozy1.webp"],
  threeD: "/3d/1bhk/index.htm",
  description:
    "A compact yet comfortable one-bedroom home designed for easy living and everyday convenience.",
};

export default function Cozy1BedroomPage() {
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
