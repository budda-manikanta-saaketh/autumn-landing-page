import Image from "next/image";
import {
  FaHome,
  FaSmile,
  FaUserCircle,
  FaEnvelope,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <header id="home" className="pt-[120px] pb-[60px]">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-[40px] md:gap-[60px] items-center">
        {/* LEFT TEXT BLOCK */}
        <div className="text-center md:text-left text-[#5B2C1A]">
          {/* RESPONSIVE HEADLINE */}
          <h1
            className="font-bold tracking-[-1.2px] mb-6 leading-[1.15]
            text-[2.2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem]"
          >
            Welcome to <br />
            Autumn{" "}
            <span
              className="inline-flex items-center justify-center
              w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px]
              bg-[#E95522] text-white rounded-full
              text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] mx-1 sm:mx-2"
            >
              <FaHome />
            </span>
            Towne
          </h1>

          <p className="text-[1rem] sm:text-[1.05rem] text-[#666] mb-10 max-w-[450px] mx-auto md:mx-0 leading-relaxed">
            Autumn Towne Senior Apartments offers big city living with home-town
            appeal.
          </p>

          {/* AGENT CARD */}
          <div className="hidden md:flex items-center gap-4 bg-white shadow-md rounded-[20px] px-5 py-3 mb-6">
            <div className="text-[2.5rem] text-gray-300">
              <FaUserCircle />
            </div>

            <div>
              <span className="text-sm text-[#666]">Management Team</span>
              <h4 className="text-base font-semibold text-[#5B2C1A]">
                (615) 648-4099
              </h4>
            </div>

            <a
              href="#contact"
              className="w-10 h-10 rounded-full bg-[#E95522] text-white flex items-center justify-center"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* STATS */}
          <div className="flex justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <FaStar className="text-yellow-500" /> 4.8 (120+)
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> 55+ Community
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 grid-rows-[150px_150px] sm:grid-rows-[180px_180px] md:grid-rows-[200px_200px]">
          {/* MAIN IMAGE */}
          <div className="relative row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
              alt="Autumn Towne Senior Apartments"
              fill
              className="object-cover rounded-[24px] md:rounded-[32px]"
            />

            {/* FLOATING TAG */}
            <div
              className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5
              bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-[10px] sm:rounded-[12px]
              flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm
              font-semibold shadow text-[#5B2C1A]"
            >
              <FaSmile className="text-[#E95522]" />
              <FaSmile className="text-[#E95522]" />
              <FaSmile className="text-[#E95522]" />
              <span>Happy Residents</span>
            </div>
          </div>

          {/* IMAGE 2 */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              alt="Community Area"
              fill
              className="object-cover rounded-[24px] md:rounded-[32px]"
            />
          </div>

          {/* IMAGE 3 */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Interior Design"
              fill
              className="object-cover rounded-[24px] md:rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
