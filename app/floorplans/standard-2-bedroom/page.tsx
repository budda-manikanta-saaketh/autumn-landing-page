import FloorPlanTabs from "../FloorPlanTabs";

const plan = {
  title: "Standard 2 Bedroom",
  price: "$1,895",
  beds: 2,
  baths: 2,
  sqft: 1092,
  location: "Autumn Towne Way",
  utilities: "Fixed Utilities Included",
  image: "/floorplans/standard2.png",
  gallery: ["/floorplans/standard2.png"],
  threeD: "/3d/2bhk_2/index.htm",
  description:
    "Comfortable two-bedroom layout designed for everyday living with a perfect balance of space and functionality.",
};

export default function Standard2BedroomPage() {
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
