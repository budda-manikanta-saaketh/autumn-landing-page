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
    ["About Us", "/aboutus"],
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  const isAutumnPlaza = pathname.startsWith("/autumn-plaza");

  const logoSrc = isAutumnPlaza
    ? "/logos/autumn-plaza-logo.jpg"
    : "/logos/logo.png";
  return (
    <nav className="fixed top-3 left-0 w-full z-[1000] flex justify-center">
      <div
        className="
          bg-white/80 backdrop-blur-xl
          border border-black/10
          shadow-[0_6px_30px_rgba(0,0,0,0.08)]
          w-[88%] md:w-[90%] max-w-[1200px]
          px-4 py-2.5 md:px-[30px] md:py-[12px]
          rounded-[20px]
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="Autumn Towne Logo"
            width={120}
            height={63}
            priority
            className="h-8 w-auto md:h-10 transition-all duration-300"
          />
        </Link>

        {/* DESKTOP MENU */}
        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6">
          {/* Regular links */}
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

          {/* CTA GROUP */}
          <li className="flex items-center gap-3">
            {/* Contact Us – secondary outlined CTA */}
            <Link
              href="/contactus"
              className="
      px-5 py-2 rounded-full
      text-[0.9rem] font-semibold
      border border-[#8b5a3c]
      text-[#8b5a3c]
      hover:bg-[#8b5a3c]/10
      transition
    "
            >
              Contact Us
            </Link>

            {/* Schedule Now – primary CTA */}
            <Link
              href="/bookvisit"
              className="
      px-5 py-2 rounded-full
      font-semibold text-[0.9rem]
      bg-[#E95522]
      text-white
      hover:bg-[#cf4a1d]
      transition
    "
            >
              Schedule Now
            </Link>
          </li>

          {/* SUBTLE SEPARATOR */}
          <li className="h-6 w-px bg-black/10" />

          {/* Autumn Plaza */}
          <li>
            <Link
              href="/autumn-plaza"
              className={`
        text-[0.95rem] font-medium transition
        ${
          isActiveRoute("/autumn-plaza")
            ? "text-[#E95522] font-semibold"
            : "text-[#999] hover:text-[#E95522]"
        }
      `}
            >
              Autumn Plaza
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
      font-medium rounded-b-2xl
    "
        >
          {/* Main navigation */}
          {menuItems.map(([label, href]) => {
            const isActive = isActiveRoute(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`
              block py-2 text-[1rem]
              ${isActive ? "text-[#E95522] font-semibold" : "text-[#444]"}
            `}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {/* Divider */}
          <li className="h-px bg-black/10 my-2" />

          {/* Contact Us – secondary */}
          <li>
            <Link
              href="/contactus"
              onClick={() => setOpen(false)}
              className="
          block text-center
          border border-[#8b5a3c]
          text-[#8b5a3c]
          px-4 py-2 rounded-full
          font-semibold
        "
            >
              Contact Us
            </Link>
          </li>

          {/* Schedule Now – primary */}
          <li>
            <Link
              href="/bookvisit"
              onClick={() => setOpen(false)}
              className="
          block text-center
          bg-[#E95522] text-white
          px-4 py-2 rounded-full
          font-semibold
        "
            >
              Schedule Now
            </Link>
          </li>

          {/* Autumn Plaza */}
          <li className="pt-2">
            <Link
              href="/autumn-plaza"
              onClick={() => setOpen(false)}
              className={`
          block py-2 text-center
          ${
            isActiveRoute("/autumn-plaza")
              ? "text-[#E95522] font-semibold"
              : "text-[#666]"
          }
        `}
            >
              Autumn Plaza
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
