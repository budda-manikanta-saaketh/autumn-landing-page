"use client";
import { FaCalendarAlt } from "react-icons/fa";

export default function BookVisit() {
  return (
    <section className="pt-[140px] pb-20">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        {/* HEADER */}
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-[#5B2C1A] leading-tight">
          Book a Visit
        </h1>

        <p className="text-[#666] max-w-[650px] mx-auto mt-4 text-[1.05rem] leading-relaxed">
          Experience Autumn Towne in person. Walk through our floor plans, meet
          our friendly staff, and discover what makes our senior community so
          special.
        </p>

        {/* CARD */}
        <div className="mt-12 bg-white rounded-[32px] shadow-xl p-10 border border-[#f1f1f1]">
          <h2 className="text-[1.8rem] font-bold text-[#5B2C1A] mb-4">
            Schedule Your Tour
          </h2>

          <p className="text-[#666] mb-8 max-w-[550px] mx-auto">
            Choose your preferred date and time on our Calendly scheduling page.
            No email chains
            <br />
            <br />
            <span className="font-bold">Fast and easy.</span>
          </p>

          <button
            onClick={() =>
              window.open("https://calendly.com/YOUR-LINK-HERE", "_blank")
            }
            className="
              bg-[#E95522] text-white font-semibold
              px-10 py-3.5 rounded-full shadow-md hover:bg-[#cf4a1d]
              transition text-lg flex items-center justify-center mx-auto gap-3
            "
          >
            <FaCalendarAlt className="text-xl" /> Book Now
          </button>

          <p className="text-[#999] text-sm mt-3">
            You will be redirected to Calendly.
          </p>
        </div>

        {/* PHONE SUPPORT */}
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
  );
}
