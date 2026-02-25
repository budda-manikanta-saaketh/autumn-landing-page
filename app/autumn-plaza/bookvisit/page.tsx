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
      {/* PAGE SECTION */}
      <section
        className="
    min-h-screen
    flex
    items-center
    justify-center
    pt-[120px] sm:pt-[140px] lg:pt-[180px]
    pb-20 sm:pb-24 lg:pb-32
  "
      >
        <div
          className="
    max-w-[900px]
    lg:max-w-[1100px]
    xl:max-w-[1300px]
    2xl:max-w-[1500px]
    w-full
    mx-auto
    px-4 sm:px-6
    text-center
  "
        >
          {/* TITLE */}
          <h1
            className="
              font-bold text-[#5B2C1A] leading-tight
              text-[2.4rem]
              sm:text-[2.8rem]
              md:text-[3.2rem]
              lg:text-[3.8rem]
              xl:text-[4.2rem]
              2xl:text-[4.6rem]
            "
          >
            Schedule A Visit
          </h1>

          {/* SUBTEXT */}
          <p
            className="
              text-[#666]
              max-w-[650px]
              lg:max-w-[750px]
              xl:max-w-[850px]
              mx-auto
              mt-4
              text-[1.05rem]
              sm:text-[1.1rem]
              md:text-[1.15rem]
              lg:text-[1.2rem]
              leading-relaxed
            "
          >
            Experience Autumn Towne in person. Walk through our floor plans,
            meet our staff, and explore our community in real life.
          </p>

          {/* CARD */}
          <div
            className="
              mt-12 lg:mt-16
              bg-white
              rounded-[28px] lg:rounded-[36px]
              shadow-xl
              p-8 sm:p-10 lg:p-14
              border border-[#f1f1f1]
            "
          >
            <h2
              className="
                font-bold text-[#5B2C1A] mb-4
                text-[1.7rem]
                sm:text-[1.9rem]
                lg:text-[2.2rem]
              "
            >
              Schedule Now
            </h2>

            <p
              className="
                text-[#666]
                mb-8
                max-w-[550px]
                lg:max-w-[650px]
                mx-auto
                text-[1rem]
                sm:text-[1.05rem]
                lg:text-[1.1rem]
              "
            >
              Choose your date and time directly from our scheduling popup.
              <br />
              <br />
              <span className="font-bold">Fast and easy.</span>
            </p>

            {/* BUTTON */}
            <button
              onClick={() => !booked && setOpen(true)}
              disabled={booked}
              className={`
                px-10 sm:px-12 lg:px-14
                py-3.5 sm:py-4 lg:py-5
                rounded-full
                shadow-md
                text-lg lg:text-xl
                flex items-center justify-center mx-auto gap-3
                font-semibold transition
                ${
                  booked
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-[#E95522] text-white hover:bg-[#cf4a1d]"
                }
              `}
            >
              <FaCalendarAlt className="text-xl lg:text-2xl" />
              {booked ? "Tour Booked ✓" : "Schedule Now"}
            </button>

            <p className="text-[#999] text-sm lg:text-base mt-3">
              {booked
                ? "You have already booked a tour."
                : "A popup will open with available times."}
            </p>
          </div>

          {/* PHONE CTA */}
          <div className="mt-16 lg:mt-20">
            <h3 className="text-[#5B2C1A] text-lg lg:text-xl font-medium mb-1">
              Prefer to schedule by phone?
            </h3>
            <p className="text-[#666] text-base lg:text-lg">
              Call our management office at{" "}
              <span className="font-bold text-[#E95522]">(615) 648-4099</span>
            </p>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[2000] p-4">
          <div
            className="
              bg-white
              rounded-[20px] lg:rounded-[28px]
              w-full
              max-w-[900px]
              lg:max-w-[1100px]
              xl:max-w-[1300px]
              relative
              shadow-2xl
            "
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#5B2C1A] hover:text-[#E95522] text-2xl lg:text-3xl"
            >
              <FaTimes />
            </button>

            <div
              className="
                p-4 sm:p-6
                h-[600px]
                sm:h-[650px]
                lg:h-[720px]
                xl:h-[780px]
                overflow-hidden
                rounded-[20px]
              "
            >
              <InlineWidget
                url="https://calendly.com/w3-kalyan/30min"
                styles={{ height: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
