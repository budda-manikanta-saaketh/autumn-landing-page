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
    "Gourmet Coffee Bar",
    "Close to I-24, Hwy 96, Sam’s Club & Hospital",
  ];

  const features = [
    {
      icon: FaCoffee,
      label: "Gourmet Coffee Bar",
      description:
        "Freshly brewed gourmet coffee available daily in our community lounge.",
    },
    {
      icon: FaDumbbell,
      label: "Wellness Center",
      description:
        "Modern fitness and wellness facilities designed for active senior living.",
    },
    {
      icon: FaWifi,
      label: "Free Wi-Fi",
      description:
        "High-speed wireless internet access available throughout the community.",
    },
    {
      icon: FaShieldAlt,
      label: "24/7 Security",
      description:
        "Round-the-clock security and controlled access for peace of mind.",
    },
    {
      icon: FaUsers,
      label: "Club Room",
      description:
        "A comfortable social space for gatherings, games, and community events.",
    },
    {
      icon: FaHome,
      label: "Dog Park",
      description:
        "Secure, pet-friendly outdoor area where dogs can play and socialize.",
    },
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
      <div className="max-w-[1280px] 2xl:max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#5B2C1A] leading-tight">
            Discover Beautiful
            <span className="block mt-2 bg-gradient-to-r from-[#E95522] to-orange-600 bg-clip-text text-transparent">
              Community Living
            </span>
          </h2>

          <p className="text-[#7A5D4A] text-lg mt-5 max-w-3xl mx-auto">
            Autumn Towne's amenities are thoughtfully designed to offer comfort,
            convenience, and a warm community atmosphere.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="
        relative bg-white border border-[#eee] rounded-[18px]
        p-5 flex flex-col items-center gap-3 text-center
        shadow-sm transition-all duration-300
        hover:shadow-xl hover:bg-[#E95522]/10 hover:-translate-y-1
        group cursor-pointer
      "
            >
              {/* Icon */}
              <div
                className="
          w-12 h-12 rounded-xl bg-[#FFF7F3]
          flex items-center justify-center
          text-[#E95522]
          transition-all duration-300
          group-hover:scale-110 group-hover:text-[#c5441b]
        "
              >
                <item.icon size={22} />
              </div>

              {/* Label */}
              <p
                className="
          text-sm font-semibold text-[#5B2C1A]
          transition-colors duration-300
          group-hover:text-[#E95522]
        "
              >
                {item.label}
              </p>

              {/* Tooltip / Description */}
              {item.description && (
                <div
                  className="
            absolute inset-x-0 -bottom-3 translate-y-full
            opacity-0 group-hover:opacity-100
            group-hover:translate-y-2
            transition-all duration-300
            bg-white text-[#5B2C1A]
            text-xs
            px-4 py-3 rounded-[14px]
            shadow-lg border border-[#eee]
            pointer-events-none
            mx-2 z-10
          "
                >
                  {item.description}
                </div>
              )}
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
                      hover:bg-[#FFF7F3] transition-all group
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
                            hover:bg-white/60 transition-all group
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
      </div>
    </section>
  );
}
