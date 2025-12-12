import React from "react";
import {
  FaCheck,
  FaCoffee,
  FaDumbbell,
  FaWifi,
  FaShieldAlt,
  FaHome,
  FaUsers,
  FaTools,
  FaCalendar,
} from "react-icons/fa";

export default function Amenities() {
  const roomAmenities = [
    "Stainless Steel Appliances",
    "Washer & Dryer Furnished",
    "Pest Control Service",
    "A/C Filter Maintenance Service",
    "After Hours Keyless Entry",
    "Wellness Center",
    "Complementary Wi-Fi",
    "24-Hour Security Surveillance",
    "Community Laundry Room",
  ];

  const socialAmenities = [
    "Family Dining Room with Kitchenette",
    "Club Room with Billiards Table",
    "Large Screen TVs in Lobby & Club Room",
    "Community and Family Functions",
    "Dog Park (Coming Soon)",
    "Close to Shopping, Restaurants, Coffee Shops",
    "Guest Greeting Area",
    "Resident Appreciation Receptions",
    "Gourmet Coffee & Morning Pastries",
    "Close to I-24, Hwy 96, Sam’s Club & Hospital",
  ];

  const features = [
    { icon: FaCoffee, label: "Gourmet Coffee" },
    { icon: FaDumbbell, label: "Wellness Center" },
    { icon: FaWifi, label: "Free Wi-Fi" },
    { icon: FaShieldAlt, label: "24/7 Security" },
    { icon: FaUsers, label: "Club Room" },
    { icon: FaHome, label: "Dog Park" },
  ];
  const amenityInfo: Record<string, string> = {
    "Stainless Steel Appliances":
      "Modern, energy-efficient appliances included in every home.",
    "Washer & Dryer Furnished":
      "Enjoy the convenience of in-unit laundry at no extra cost.",
    "Pest Control Service":
      "Regular preventative pest control provided for a worry-free home.",
    "A/C Filter Maintenance Service":
      "Scheduled filter replacements to ensure clean, cool air.",
    "After Hours Keyless Entry": "Secure and easy access to your home anytime.",
    "Wellness Center":
      "Stay active with equipment designed for senior-friendly workouts.",
    "Complementary Wi-Fi":
      "High-speed Wi-Fi available throughout the property.",
    "24-Hour Security Surveillance":
      "Continuous monitoring for enhanced community safety.",
    "Community Laundry Room":
      "Additional shared laundry facilities available onsite.",

    "Family Dining Room with Kitchenette":
      "A warm gathering space for meals and celebrations.",
    "Club Room with Billiards Table":
      "Play games, meet neighbors, and unwind in comfort.",
    "Large Screen TVs in Lobby & Club Room":
      "Perfect for sports, movies, and entertainment.",
    "Community and Family Functions":
      "Regular activities and events to stay socially connected.",
    "Dog Park (Coming Soon)": "A fenced-in, secure area for your pets to play.",
    "Close to Shopping, Restaurants, Coffee Shops":
      "Convenient access to daily essentials and dining.",
    "Guest Greeting Area": "A welcoming lobby area for receiving guests.",
    "Resident Appreciation Receptions":
      "Monthly gatherings to celebrate our community members.",
    "Gourmet Coffee & Morning Pastries":
      "Fresh coffee and pastries available daily in the lounge.",
    "Close to I-24, Hwy 96, Sam’s Club & Hospital":
      "Quick access to medical care, shopping, and major roads.",
  };

  return (
    <section className="pt-20 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#5B2C1A] leading-tight">
            Discover Beautiful
            <span className="block mt-2 bg-gradient-to-r from-[#E95522] to-orange-600 bg-clip-text text-transparent">
              Community Living
            </span>
          </h2>

          <p className="text-[#7A5D4A] text-lg mt-5 max-w-3xl mx-auto">
            Autumn Townes amenities are thoughtfully designed to offer comfort,
            convenience, and a warm community atmosphere.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 text-center shadow-md border border-orange-100 
              hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#FFF7F3] flex items-center justify-center text-[#E95522]">
                <item.icon size={22} />
              </div>
              <p className="text-sm font-semibold text-[#5B2C1A]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-[#E95522]">
                <FaTools size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#5B2C1A]">
                  Room Amenities
                </h3>
                <p className="text-[#7A5D4A] text-sm">
                  Thoughtfully designed for modern senior living
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {roomAmenities.map((item, idx) => (
                <li
                  key={idx}
                  className="
                      relative flex items-start gap-3 p-2 rounded-lg 
                      hover:bg-[#FFF7F3] transition-all group cursor-pointer
                    "
                >
                  <span
                    className="
                        mt-1 w-6 h-6 rounded-md flex items-center justify-center 
                        bg-[#FFF7F3] text-[#E95522] 
                        group-hover:scale-110 transition-transform
                      "
                  >
                    <FaCheck size={14} />
                  </span>

                  <span className="text-[#5B2C1A] text-sm font-medium group-hover:text-[#E95522] transition-colors">
                    {item}
                  </span>

                  <div
                    className="
                        absolute left-0 right-0 top-full 
                        opacity-0 translate-y-1 
                        group-hover:opacity-100 group-hover:translate-y-2
                        transition-all duration-300
                        bg-white shadow-lg border border-orange-100 
                        rounded-xl p-3 text-xs text-[#5B2C1A]
                        pointer-events-none
                        z-20
                      "
                  >
                    {amenityInfo[item]}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFECE3] flex items-center justify-center text-[#5B2C1A]">
                <FaUsers size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#5B2C1A]">
                  Social Amenities
                </h3>
                <p className="text-[#7A5D4A] text-sm">
                  Spaces designed for connection and joy
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {socialAmenities.map((item, idx) => (
                <li
                  key={idx}
                  className="
                            relative flex items-start gap-3 p-2 rounded-lg 
                            hover:bg-white/60 transition-all group cursor-pointer
                          "
                >
                  <span
                    className="
                                mt-1 w-6 h-6 rounded-md flex items-center justify-center 
                                bg-[#FFF7F3] text-[#E95522] 
                                group-hover:scale-110 transition-transform
                              "
                  >
                    <FaCheck size={14} />
                  </span>

                  <span className="text-[#5B2C1A] text-sm font-medium group-hover:text-[#E95522] transition-colors">
                    {item}
                  </span>

                  <div
                    className="
                                absolute left-0 right-0 top-full 
                                opacity-0 translate-y-1 
                                group-hover:opacity-100 group-hover:translate-y-2
                                transition-all duration-300
                                bg-white shadow-lg border border-orange-100 
                                rounded-xl p-3 text-xs text-[#5B2C1A]
                                pointer-events-none
                                z-20
                              "
                  >
                    {amenityInfo[item]}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#5B2C1A] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#5B2C1A] text-3xl">
                <FaCalendar />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white">
                  Schedule A Visit
                </h4>
                <p className="text-orange-100">
                  Book a visit and experience Autumn Towne in person.
                </p>
              </div>
            </div>

            <a href="/bookvisit">
              <button className="px-8 py-3 bg-[#E95522] hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Schedule Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
