"use client";

import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Home, ChefHat, WashingMachine, Wifi, UserCheck } from "lucide-react";

export default function FloorPlanDetails({ plan }: { plan: any }) {
  return (
    <>
      {/* ---------- SPECS ---------- */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-[#5B2C1A]">
        <Spec icon={<Bed />} value={`${plan.beds}`} label="Bedrooms" />
        <Spec icon={<Bath />} value={`${plan.baths}`} label="Bathrooms" />
        <Spec icon={<Maximize />} value={`${plan.sqft}`} label="Sq Ft" />
        <Spec icon={<MapPin />} value={plan.location} label="Location" />
      </div>

      {/* ---------- UTILITIES ---------- */}
      <div className="border rounded-2xl p-6">
        <h3 className="font-bold text-[#5B2C1A] mb-6">Utilities Included</h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <UtilityItem icon={<Home />} label="Generous closet space" />
          <UtilityItem icon={<ChefHat />} label="Fully equipped kitchens" />
          <UtilityItem
            icon={<WashingMachine />}
            label="In-unit washer & dryer"
          />
          <UtilityItem icon={<Wifi />} label="High-speed Wi-Fi" />
          <UtilityItem
            icon={<UserCheck />}
            label="Attentive on-site professional management"
          />
        </div>
      </div>
    </>
  );
}
function UtilityItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF7F5] border border-[#eee] hover:shadow-sm transition">
      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#E95522]/10 text-[#E95522] flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm font-medium text-[#5B2C1A]">{label}</p>
    </div>
  );
}

function Spec({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-[#E95522]/10 rounded-lg text-[#E95522]">
        {icon}
      </div>
      <div>
        <p className="font-bold">{value}</p>
        <p className="text-xs text-[#7A5D4A]">{label}</p>
      </div>
    </div>
  );
}
