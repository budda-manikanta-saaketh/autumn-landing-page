export default function SearchBar() {
  return (
    <div className="flex justify-center -mt-0 relative z-10  px-4">
      <div
        className="
          bg-white 
          p-3 
          rounded-[20px] 
          shadow-[0_15px_40px_rgba(0,0,0,0.08)]
          border border-[#f0f0f0]

          /* Desktop: pill with items inline */
          rounded-[20px] 
          md:flex md:items-center md:justify-between

          /* Width control */
          w-full md:w-auto
        "
      >
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col px-6 py-3 border-b md:border-b-0 md:border-r border-[#eee] text-center md:text-left">
            <label className="text-[0.75rem] text-[#666] font-semibold mb-1">
              Looking for
            </label>
            <span className="font-bold text-[0.95rem] text-[#5B2C1A]">
              1 - 2 Bedrooms
            </span>
          </div>

          <div className="flex flex-col px-6 py-3 border-b md:border-b-0 md:border-r border-[#eee] text-center md:text-left">
            <label className="text-[0.75rem] text-[#666] font-semibold mb-1">
              Location
            </label>
            <span className="font-bold text-[0.95rem] text-[#5B2C1A]">
              Murfreesboro, TN
            </span>
          </div>

          <div className="flex flex-col px-6 py-3 text-center md:text-left">
            <label className="text-[0.75rem] text-[#666] font-semibold mb-1">
              Price Range
            </label>
            <span className="font-bold text-[0.95rem] text-[#5B2C1A]">
              $1,495 - $1,995
            </span>
          </div>
        </div>

        <a
          href="#properties"
          className="
            bg-[#E95522] text-white 
            px-6 py-3 
            rounded-full 
            font-semibold 
            block md:ml-4 
            mt-4 md:mt-0 
            text-center
            hover:bg-[#cf4a1d]
            transition
          "
        >
          Find Properties
        </a>
      </div>
    </div>
  );
}
