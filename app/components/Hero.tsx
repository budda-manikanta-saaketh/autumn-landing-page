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
    <header id="home" className="pt-[140px] pb-[60px]">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-[60px] items-center">
        {/* LEFT TEXT BLOCK */}
        <div className="text-center md:text-left text-[#5B2C1A]">
          <h1 className="text-[3.8rem] leading-[1.1] font-bold mb-6 tracking-[-1.5px]">
            Welcome to <br />
            Autumn{" "}
            <span
              className="
      inline-flex items-center justify-center 
      w-[60px] h-[60px] 
      bg-[#E95522] text-white rounded-full 
      text-[1.5rem] mx-2
    "
            >
              <FaHome />
            </span>
            Towne <br />
          </h1>

          <p className="text-[1.1rem] text-[#666] mb-10 max-w-[450px] mx-auto md:mx-0">
            Autumn Towne Senior Apartments offers big city living with home-town
            appeal.
          </p>

          {/* Agent Card — Visible on Desktop Only */}
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
              className="
                w-10 h-10 rounded-full 
                bg-[#E95522] text-white 
                flex items-center justify-center
              "
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-4">
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <FaStar className="text-yellow-500" /> 4.8 (120+ Reviews)
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> 55+ Community
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-[1.5fr_1fr] grid-rows-[200px_200px] gap-5">
          {/* Main Image */}
          <div className="row-span-2 relative">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
              className="w-full h-full object-cover rounded-[32px]"
            />

            {/* Floating Tag */}
            <div
              className="
                absolute bottom-5 left-5 
                bg-white/95 px-4 py-2 rounded-[12px] 
                flex items-center gap-2 
                font-semibold text-sm shadow text-[#5B2C1A]
              "
            >
              <FaSmile className="text-[#E95522]" />
              <FaSmile className="text-[#E95522]" />
              <FaSmile className="text-[#E95522]" />
              <span>Happy Residents</span>
            </div>
          </div>

          {/* Sub Image 1 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>

          {/* Sub Image 2 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
