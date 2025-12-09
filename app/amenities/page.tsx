import {
  FaCoffee,
  FaDog,
  FaDumbbell,
  FaWifi,
  FaGamepad,
  FaArrowRight,
} from "react-icons/fa";

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white rounded-[40px] mx-6">
      <div
        className="
          max-w-[1280px] mx-auto px-6 
          grid grid-cols-1 md:grid-cols-2 
          gap-20 items-center
        "
      >
        {/* LEFT TEXT AREA */}
        <div>
          <h2 className="text-[2.5rem] leading-tight font-bold mb-6 text-[#5B2C1A]">
            Discover Beautiful <br />
            <span className="inline-flex items-center">
              {/* Circle Image before text */}
              <span
                className="
                  inline-block w-10 h-10 rounded-full mr-2 
                  bg-cover bg-center
                "
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00')",
                }}
              ></span>
              Community
            </span>{" "}
            Living
          </h2>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-4 my-8">
            {[
              {
                icon: <FaCoffee className="text-[#5B2C1A]" />,
                label: "Gourmet Coffee Bar",
              },
              {
                icon: <FaDog className="text-[#5B2C1A]" />,
                label: "Secured Dog Park",
              },
              {
                icon: <FaDumbbell className="text-[#5B2C1A]" />,
                label: "Wellness Center",
              },
              {
                icon: <FaWifi className="text-[#5B2C1A]" />,
                label: "Community Wi-Fi",
              },
              {
                icon: <FaGamepad className="text-[#5B2C1A]" />,
                label: "Billiards Room",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="
                  px-5 py-2 border border-[#eee] rounded-full 
                  text-sm font-medium flex items-center gap-2
                  text-[#5B2C1A]
                "
              >
                {f.icon} {f.label}
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div
            className="
              bg-[#F8F9FB] p-5 rounded-[20px] 
              flex gap-4 max-w-[400px]
            "
          >
            <div
              className="
                w-10 h-10 bg-white rounded-full shadow 
                flex items-center justify-center font-bold text-[#5B2C1A]
              "
            >
              ?
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#5B2C1A]">
                Questions?
              </h4>
              <p className="text-[#666]">
                Our management team is on-site to help.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div
          className="
            relative h-[500px] rounded-[32px] overflow-hidden
          "
        >
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            className="w-full h-full object-cover"
          />

          <div
            className="
              absolute bottom-5 left-5 right-5 
              bg-white rounded-[20px] p-5
            "
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold text-[#5B2C1A]">
                  Sunny Meadows Estate
                </h4>
                <p className="text-[#666]">$10,000 (Example Layout)</p>
              </div>

              <button
                className="
                  w-12 h-12 bg-[#E95522] text-white rounded-full 
                  flex items-center justify-center transition
                  hover:scale-110
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
