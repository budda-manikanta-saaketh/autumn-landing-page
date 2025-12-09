export default function SearchBar() {
  return (
    <div className="flex justify-center -mt-[30px] relative z-10 mb-20">
      <div
        className="
          bg-white 
          p-2 
          rounded-full 
          flex items-center 
          shadow-[0_15px_40px_rgba(0,0,0,0.08)]
          border border-[#f0f0f0]
          md:flex-row flex-col w-full md:w-auto
        "
      >
        {/* Item 1 */}
        <div className="flex flex-col px-6 py-3 w-full md:w-auto border-b md:border-b-0 border-[#eee] text-center md:text-left">
          <label className="text-[0.75rem] text-[#666] font-semibold mb-1">
            Looking for
          </label>
          <span className="font-bold text-[0.95rem] text-[#5B2C1A]">
            1 - 2 Bedrooms
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-[30px] bg-[#eee]" />

        {/* Item 2 */}
        <div className="flex flex-col px-6 py-3 w-full md:w-auto border-b md:border-b-0 border-[#eee] text-center md:text-left">
          <label className="text-[0.75rem] text-[#666] font-semibold mb-1">
            Location
          </label>
          <span className="font-bold text-[0.95rem] text-[#5B2C1A]">
            Murfreesboro, TN
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-[30px] bg-[#eee]" />

        {/* Item 3 */}
        <div className="flex flex-col px-6 py-3 w-full md:w-auto text-center md:text-left">
          <label className="text-[0.75rem] text-[#666] font-semibold mb-1">
            Price Range
          </label>
          <span className="font-bold text-[0.95rem] text-[#5B2C1A]">
            $1,495 - $1,995
          </span>
        </div>

        {/* Button */}
        <a
          href="#properties"
          className="
            bg-[#E95522] text-white 
            px-8 py-4 
            rounded-full 
            font-semibold 
            ml-0 md:ml-2 
            mt-3 md:mt-0 
            w-full md:w-auto text-center
            transition
            hover:bg-[#cf4a1d]
          "
        >
          Find Properties
        </a>
      </div>
    </div>
  );
}
