"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    ["Home", "/"],

    ["Floor Plans", "/floorplans"],
    ["Amenities", "/amenities"],
    ["Gallery", "/gallery"],
    ["Schedule A Visit", "/bookvisit"],
    ["About Us", "/aboutus"],
    ["Autumn Plaza", "/autumn-plaza"],
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-3 left-0 w-full z-[1000] flex justify-center">
      <div
        className="
          bg-white/80 backdrop-blur-xl
          border border-black/10
          shadow-[0_6px_30px_rgba(0,0,0,0.08)]
          w-[88%] md:w-[90%] max-w-[1200px]
          px-4 py-2.5 md:px-[30px] md:py-[12px]
          rounded-full 
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/logo.png"
            alt="Autumn Towne Logo"
            width={120}
            height={63}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map(([label, href]) => {
            const isActive = isActiveRoute(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    text-[0.95rem] font-medium transition relative 
                    ${
                      isActive
                        ? "text-[#E95522] font-semibold"
                        : "text-[#999] hover:text-[#E95522]"
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#E95522] rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}

          {/* CTA */}
          <li>
            <Link
              href="/contactus"
              className="
                bg-[#E95522] text-white 
                px-5 py-2 rounded-full 
                font-semibold hover:bg-[#cf4a1d] transition
              "
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-[1.7rem] text-[#333]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <ul
          className="
            absolute top-[70px] md:hidden 
            left-0 w-full bg-white shadow-lg 
            py-6 px-6 flex flex-col gap-4 
            font-medium text-[#444] rounded-b-2xl
          "
        >
          {menuItems.map(([label, href]) => {
            const isActive = isActiveRoute(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`
                    block py-2
                    ${isActive ? "text-[#E95522] font-semibold" : "text-[#444]"}
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              href="/contactus"
              className="block text-center text-white bg-[#E95522] px-4 py-2 rounded-md"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
