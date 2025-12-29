import EventGallery from "@/app/components/EventGallery";
import { EventKey } from "@/app/data/eventImage";
import { EVENTS } from "@/app/data/events";
import { notFound } from "next/navigation";

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ FIX
  const eventKey = slug as EventKey;
  const event = EVENTS[eventKey];

  if (!event) {
    notFound();
  }

  return (
    <section className="pt-[140px] pb-24">
      <div className="max-w-[1100px] mx-auto px-6 space-y-12">
        <div className="text-center max-w-[700px] mx-auto">
          <h1 className="text-3xl font-bold text-[#5B2C1A]">{event.title}</h1>
          <p className="mt-4 text-[#666]">{event.description}</p>
          {event.date && (
            <p className="mt-2 text-sm text-[#999]">{event.date}</p>
          )}
        </div>

        <EventGallery eventKey={eventKey} />
      </div>
    </section>
  );
}
