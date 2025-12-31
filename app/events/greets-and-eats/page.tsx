import EventGallery from "@/app/components/EventGallery";

export default function GreetsAndEatsEventPage() {
  return (
    <section className="pt-[140px] pb-24">
      <div className="max-w-[1100px] mx-auto px-6 space-y-12">
        <div className="text-center max-w-[700px] mx-auto">
          <h1 className="text-3xl font-bold text-[#5B2C1A]">Greets & Eats</h1>

          <p className="mt-4 text-[#666]">
            A warm social dining experience with residents and families.
          </p>

          <p className="mt-2 text-sm text-[#999]">April 2024</p>
        </div>

        <EventGallery eventKey="greets-and-eats" />
      </div>
    </section>
  );
}
