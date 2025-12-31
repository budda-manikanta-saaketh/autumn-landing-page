import Image from "next/image";
import Link from "next/link";
import {
  FaCoffee,
  FaDog,
  FaDumbbell,
  FaWifi,
  FaGamepad,
  FaShieldAlt,
  FaArrowRight,
  FaCalendar,
} from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";
const featureInfo: Record<string, string> = {
  "Gourmet Coffee & Pastries":
    "Enjoy fresh morning pastries and premium coffee daily in our community dining area.",
  "Billiards Club Room":
    "A cozy, social environment where residents can play billiards and relax.",
  "Wellness Center":
    "A fitness space designed with seniors in mind—safe, simple, and accessible.",
  "Complementary Wi-Fi":
    "High-speed Wi-Fi available throughout the community for work, entertainment, and communication.",
  "Dog Park (Coming Soon)":
    "A secure, fenced-in area where pets can enjoy fresh air and play.",
  "24/7 Security Surveillance":
    "Continuous monitoring and enhanced safety for a worry-free lifestyle.",
  "Stainless Steel Appliances":
    "Modern, durable kitchen appliances included in every apartment.",
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-4 md:py-8 bg-white mx-4 md:mx-6">
      <div
        className="
          max-w-[1280px] mx-auto px-4 md:px-6
          grid grid-cols-1 md:grid-cols-2 
          gap-12 md:gap-20 items-start
        "
      >
        <div>
          <h2 className="text-[2rem] md:text-[2.5rem] leading-tight font-bold mb-6 text-[#5B2C1A]">
            Discover Beautiful <br />
            <span className="inline-flex items-center">
              <span
                className="
                  inline-block w-8 h-8 md:w-10 md:h-10 
                  rounded-full mr-2 bg-cover bg-center
                "
                style={{
                  backgroundImage: "/images/Amenities.webp",
                }}
              />
              Community
            </span>{" "}
            Living
          </h2>
          <Link href={"/amenities"}>
            <div className="flex flex-wrap gap-3 md:gap-4 my-6 md:my-8">
              {[
                { icon: <FaCoffee />, label: "Gourmet Coffee & Pastries" },
                { icon: <FaGamepad />, label: "Billiards Club Room" },
                { icon: <FaDumbbell />, label: "Wellness Center" },
                { icon: <FaWifi />, label: "Complementary Wi-Fi" },
                { icon: <FaDog />, label: "Dog Park (Coming Soon)" },
                { icon: <FaShieldAlt />, label: "24/7 Security Surveillance" },
                { icon: <FaHammer />, label: "Stainless Steel Appliances" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="
      px-4 py-2 
      border border-[#eee] rounded-full 
      text-xs md:text-sm 
      font-medium flex items-center gap-2
      text-[#5B2C1A]
      bg-white
      transition-all duration-200

      hover:bg-[#E95522]/10 
      hover:border-[#E95522]/40 
      hover:shadow-md 
      hover:scale-[1.05]
      cursor-pointer
    "
                >
                  <span className="text-base">{f.icon}</span> {f.label}
                </div>
              ))}
            </div>
          </Link>
          <Link href="/bookvisit" className="block w-fit">
            <div
              className="
              bg-[#F8F9FB] p-4 md:p-5 rounded-[20px] 
              flex gap-4 max-w-full md:max-w-[400px]
            "
            >
              <div className="flex items-center gap-4 group cursor-pointer">
                <div
                  className="
      w-10 h-10 
      bg-white 
      rounded-full 
      shadow 
      flex items-center justify-center 
      font-bold 
      text-[#E95522]
      transition-all duration-300
      group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md
    "
                >
                  <FaCalendar />
                </div>

                <div
                  className="
      transition-all duration-300
      group-hover:translate-x-1
    "
                >
                  <h4 className="text-lg font-semibold text-[#5B2C1A] group-hover:text-[#E95522]">
                    Schedule a Visit
                  </h4>
                  <p className="text-[#666] text-sm md:text-base group-hover:text-[#5B2C1A]">
                    Book a tour and explore our community in person.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative h-[260px] sm:h-[340px] md:h-[500px] rounded-[24px] md:rounded-[32px] overflow-hidden group shadow-xl">
          <Image
            src="/images/Amenities.webp"
            alt="Community Living Spaces"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div
            className="
              absolute bottom-4 md:bottom-5 left-4 right-4 
              bg-white/95 backdrop-blur-sm rounded-[16px] md:rounded-[20px] p-4 md:p-5
              shadow-2xl border border-white/50
            "
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-[#5B2C1A]">
                  Community Living Spaces
                </h4>
                <p className="text-[#666] text-sm">Modern & welcoming</p>
              </div>
              <Link href="/amenities" className="block w-fit">
                <button
                  className="
                  w-10 h-10 md:w-12 md:h-12 
                  bg-[#E95522] text-white rounded-full 
                  flex items-center justify-center 
                  transition hover:scale-110 hover:rotate-12
                "
                >
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
