"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ✅ Detect current page

  const menuItems = [
    ["Home", "/"],
    ["Floor Plans", "/floorplans/"],
    ["Amenities", "/amenities/"],
    ["About us", "/aboutus/"],
    ["Book A Visit", "/bookvisit/"],
  ];

  return (
    <nav className="fixed top-3 left-0 w-full z-[1000] flex justify-center">
      <div
        className="
          bg-white 
          backdrop-blur-md 
          border border-white/70 
          shadow-[0_4px_20px_rgba(0,0,0,0.06)]
          w-[88%] md:w-[90%] max-w-[1200px]
          px-4 py-2.5 md:px-[30px] md:py-[12px]
          rounded-full 
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/logo.png"
            alt="Autumn Towne Logo"
            width={120}
            height={63}
            quality={100}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map(([label, href]) => {
            const isActive = pathname === href;

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

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#E95522] rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}

          {/* Contact button */}
          <li>
            <Link
              href="/contactus"
              className="
                bg-[#E95522] text-white 
                px-5 py-2 rounded-md 
                font-semibold hover:bg-[#cf4a1d] transition
              "
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[1.7rem] text-[#333]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
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
            const isActive = pathname === href;

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
              Contact us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
