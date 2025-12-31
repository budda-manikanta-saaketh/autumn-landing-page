import FloorPlanTabs from "../FloorPlanTabs";

const plan = {
  title: "Luxury 2 Bedroom",
  price: "$1,995",
  beds: 2,
  baths: 2,
  sqft: 1327,
  location: "Autumn Towne Way",
  image: "/floorplans/luxury2.png",
  threeD: "/3d/2bhk_1/index.htm",
  description:
    "Spacious two-bedroom residence featuring premium finishes, open living spaces, and abundant natural light.",
};

export default function Luxury2BedroomPage() {
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
