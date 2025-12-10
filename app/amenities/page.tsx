import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="py-16 md:py-20 bg-gradient-to-b from-white via-orange-50/30 to-white mx-4 md:mx-6"
    >
      <div
        className="
          max-w-[1280px] mx-auto px-4 md:px-6
          grid grid-cols-1 md:grid-cols-2 
          gap-12 md:gap-20 items-start
        "
      >
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* TITLE */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-[#E95522] to-transparent rounded-full" />
            <h2 className="text-[2rem] md:text-[2.5rem] leading-tight font-bold mb-6 text-[#5B2C1A]">
              Discover Beautiful <br />
              <span className="inline-flex items-center gap-2 relative">
                <span
                  className="
                    inline-block w-8 h-8 md:w-10 md:h-10 
                    rounded-full bg-cover bg-center
                    ring-4 ring-orange-100 shadow-lg
                    animate-pulse
                  "
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00')",
                  }}
                />
                <span className="bg-gradient-to-r from-[#E95522] to-orange-600 bg-clip-text text-transparent">
                  Community
                </span>
              </span>{" "}
              Living
            </h2>
          </div>

          {/* FEATURED AMENITIES */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-[#5B2C1A] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E95522] rounded-full animate-pulse" />
              Featured Amenities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#5B2C1A]">
              {[
                "Stainless Steel Appliances",
                "Washer & Dryer Furnished",
                "Pest Control Service",
                "A/C Filter Maintenance Service",
                "After Hours Keyless Entry",
                "Wellness Center",
                "Complementary Wi-Fi",
                "24-Hour Security Surveillance",
                "Community Laundry Room",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm group cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <FaCheck className="text-[#E95522] mt-[2px] group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-[#E95522] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL AMENITIES */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-[#5B2C1A] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E95522] rounded-full animate-pulse" />
              Social Amenities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#5B2C1A]">
              {[
                "Family Dining Room with Kitchenette",
                "Club Room with Billiards Table",
                "Large Screen TVs in Lobby & Club Room",
                "Community and Family Functions",
                "Dog Park (Coming Soon)",
                "Close to Shopping & Restaurants",
                "Guest Greeting Area",
                "Resident Appreciation Receptions",
                "Gourmet Coffee & Morning Pastries",
                "Close to I-24, Hwy 96, Sam's Club & Hospital",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm group cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <FaCheck className="text-[#E95522] mt-[2px] group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-[#E95522] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* INFO BOX */}
          <div
            className="
              bg-gradient-to-br from-[#5B2C1A] to-[#7a3d24] 
              p-5 md:p-6 rounded-2xl 
              flex gap-4 max-w-full md:max-w-[400px]
              shadow-xl hover:shadow-2xl transition-all duration-300
              hover:scale-[1.02]
            "
          >
            <div
              className="
                w-12 h-12 bg-white rounded-full shadow-lg
                flex items-center justify-center font-bold text-[#5B2C1A]
                text-xl
              "
            >
              ?
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                Questions?
              </h4>
              <p className="text-orange-100 text-sm md:text-base">
                Our management team is on-site to help.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative h-[260px] sm:h-[340px] md:h-[500px] rounded-[24px] md:rounded-[32px] overflow-hidden group shadow-2xl">
          {/* IMAGE (Next/Image version) */}
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Community Living Space"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
      object-cover 
      transition-transform duration-700 
      group-hover:scale-110
    "
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* INFO CARD */}
          <div
            className="
      absolute bottom-4 md:bottom-5 left-4 right-4 
      bg-white/95 backdrop-blur-sm rounded-[16px] md:rounded-[20px] 
      p-4 md:p-5 shadow-2xl border border-white/50
      transition-all duration-300 group-hover:bg-white
    "
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-[#5B2C1A] mb-1">
                  Community Living Spaces
                </h4>
                <p className="text-[#666] text-sm">Modern & welcoming</p>
              </div>

              <button
                className="
          w-10 h-10 md:w-12 md:h-12 
          bg-gradient-to-br from-[#E95522] to-orange-600
          text-white rounded-full 
          flex items-center justify-center 
          transition-all duration-300
          hover:scale-110 hover:rotate-12 hover:shadow-lg
          shadow-md
        "
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
