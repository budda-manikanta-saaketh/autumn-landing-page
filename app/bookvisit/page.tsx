"use client";

import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";

export default function BookVisit() {
  const [open, setOpen] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tourBooked") === "true";
    setBooked(saved);
  }, []);

  useEffect(() => {
    const handleCalendlyEvent = (e: any) => {
      if (e.data?.event === "calendly.event_scheduled") {
        setBooked(true);
        setOpen(false);
        localStorage.setItem("tourBooked", "true");
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  return (
    <>
      <section className="pt-[140px] pb-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-[#5B2C1A] leading-tight">
            Book a Visit
          </h1>

          <p className="text-[#666] max-w-[650px] mx-auto mt-4 text-[1.05rem] leading-relaxed">
            Experience Autumn Towne in person. Walk through our floor plans,
            meet our staff, and explore our community in real life.
          </p>

          <div className="mt-12 bg-white rounded-[32px] shadow-xl p-10 border border-[#f1f1f1]">
            <h2 className="text-[1.8rem] font-bold text-[#5B2C1A] mb-4">
              Schedule Your Tour
            </h2>

            <p className="text-[#666] mb-8 max-w-[550px] mx-auto">
              Choose your date and time directly from our scheduling popup.
              <br />
              <br />
              <span className="font-bold">Fast and easy.</span>
            </p>

            <button
              onClick={() => !booked && setOpen(true)}
              disabled={booked}
              className={`
                px-10 py-3.5 rounded-full shadow-md text-lg flex items-center justify-center mx-auto gap-3
                font-semibold transition
                ${
                  booked
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-[#E95522] text-white hover:bg-[#cf4a1d]"
                }
              `}
            >
              <FaCalendarAlt className="text-xl" />
              {booked ? "Tour Booked ✓" : "Book Now"}
            </button>

            <p className="text-[#999] text-sm mt-3">
              {booked
                ? "You have already booked a tour."
                : "A popup will open with available times."}
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-[#5B2C1A] text-lg font-medium mb-1">
              Prefer to schedule by phone?
            </h3>
            <p className="text-[#666]">
              Call our management office at{" "}
              <span className="font-bold text-[#E95522]">(615) 648-4099</span>
            </p>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[2000] p-4">
          <div className="bg-white rounded-[20px] w-full max-w-[900px] relative shadow-2xl">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#5B2C1A] hover:text-[#E95522] text-2xl"
            >
              <FaTimes />
            </button>

            <div className="p-4 h-[700px] overflow-hidden rounded-[20px]">
              <InlineWidget
                url="https://calendly.com/manikantaspam/30min"
                styles={{
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
