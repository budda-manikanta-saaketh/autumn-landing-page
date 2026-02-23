"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isAutumnPlaza = pathname.startsWith("/autumn-plaza");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* ============================= */
  /* MENUS */
  /* ============================= */

  const towneMenu = [
    ["Home", "/"],
    ["Floor Plans", "/floorplans"],
    ["Amenities", "/amenities"],
    ["Gallery", "/gallery"],
    ["About Us", "/aboutus"],
  ];

  const plazaMenu = [
    ["Home", "/autumn-plaza/home"],
    ["About Us", "/autumn-plaza/aboutus"],
  ];

  const currentMenu = isAutumnPlaza ? plazaMenu : towneMenu;

  /* ============================= */
  /* LOGO */
  /* ============================= */

  const logoSrc = isAutumnPlaza
    ? "/logos/autumn-plaza-logo.jpg"
    : "/logos/logo.png";

  return (
    <nav className="fixed top-3 left-0 w-full z-[1000] flex flex-col items-center">
      {/* ========================= */}
      {/* MAIN PILL */}
      {/* ========================= */}
      <div
        className={`
          w-[88%] md:w-[90%] max-w-[1200px] px-6 py-3 rounded-[22px]
          backdrop-blur-xl border border-black/[0.08]
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 shadow-[0_8px_40px_rgba(0,0,0,0.11)]"
              : "bg-white/82 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          }
        `}
      >
        {/* ── DESKTOP: 2-col grid — Logo (row-span-2) | Right content ── */}
        <div className="hidden md:grid grid-cols-[auto_1fr] gap-x-6 items-center">
          {/* LOGO — spans both rows, vertically centered */}
          <Link
            href={isAutumnPlaza ? "/autumn-plaza/home" : "/"}
            className="row-span-2 self-center shrink-0 opacity-100 hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src={logoSrc}
              alt={isAutumnPlaza ? "Autumn Plaza Logo" : "Autumn Towne Logo"}
              width={130}
              height={65}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* ROW 1 — Project Switcher (left) + CTAs (right) */}
          <div className="flex items-center justify-between gap-4 pb-2.5">
            {/* Project Switcher — left aligned */}
            <div className="flex gap-[3px] bg-black/[0.04] rounded-full p-[3px]">
              <Link
                href="/"
                className={`
                  text-[0.8rem] font-semibold tracking-wide px-5 py-1.5 rounded-full
                  transition-all duration-200 whitespace-nowrap
                  ${
                    !isAutumnPlaza
                      ? "bg-[#E95522] text-white shadow-[0_2px_8px_rgba(233,85,34,0.28)]"
                      : "text-[#999] hover:text-[#E95522]"
                  }
                `}
              >
                Autumn Towne
              </Link>
              <Link
                href="/autumn-plaza/home"
                className={`
                  text-[0.8rem] font-semibold tracking-wide px-5 py-1.5 rounded-full
                  transition-all duration-200 whitespace-nowrap
                  ${
                    isAutumnPlaza
                      ? "bg-[#E95522] text-white shadow-[0_2px_8px_rgba(233,85,34,0.28)]"
                      : "text-[#999] hover:text-[#E95522]"
                  }
                `}
              >
                Autumn Plaza
              </Link>
            </div>

            {/* CTA Buttons — right aligned */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/contactus"
                className="text-[0.835rem] font-semibold tracking-wide px-[18px] py-[7px] rounded-full border-[1.5px] border-[#8b5a3c] text-[#8b5a3c] hover:bg-[#8b5a3c] hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                Contact Us
              </Link>
              <Link
                href="/bookvisit"
                className="text-[0.835rem] font-semibold tracking-wide px-5 py-[7px] rounded-full bg-[#E95522] text-white hover:bg-[#cf4a1d] transition-all duration-200 whitespace-nowrap"
              >
                Schedule Now
              </Link>
            </div>
          </div>

          {/* ROW 2 — Nav Links */}
          <div className="pt-2.5 border-t border-black/[0.06]">
            <ul className="flex items-center gap-7">
              {currentMenu.map(([label, href]) => {
                const isActive = isActiveRoute(href);
                return (
                  <li key={href} className="relative group">
                    <Link
                      href={href}
                      className={`text-[0.875rem] tracking-[0.01em] pb-0.5 transition-colors duration-200 ${
                        isActive
                          ? "text-[#E95522] font-semibold"
                          : "text-[#666] font-medium hover:text-[#E95522]"
                      }`}
                    >
                      {label}
                    </Link>
                    <span
                      className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#E95522] rounded-full transition-all duration-200 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ── MOBILE: Logo + Hamburger ── */}
        <div className="flex md:hidden items-center justify-between">
          <Link
            href={isAutumnPlaza ? "/autumn-plaza/home" : "/"}
            className="shrink-0 opacity-100 hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src={logoSrc}
              alt={isAutumnPlaza ? "Autumn Plaza Logo" : "Autumn Towne Logo"}
              width={130}
              height={65}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <button
            className="w-9 h-9 flex items-center justify-center rounded-[10px] bg-black/[0.04] text-[#333] text-lg hover:bg-[#E95522]/10 hover:text-[#E95522] transition-all duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ========================= */}
      {/* MOBILE MENU */}
      {/* ========================= */}
      {open && (
        <div
          className="
            md:hidden
            absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2
            w-[88%] max-w-[1200px]
            bg-white/[0.98] backdrop-blur-xl
            border border-black/[0.08]
            rounded-[20px]
            shadow-[0_12px_40px_rgba(0,0,0,0.12)]
            px-6 py-5
          "
        >
          {/* Mobile Project Switcher — left aligned */}
          <div className="flex justify-start mb-4">
            <div className="flex gap-[3px] bg-black/[0.04] rounded-full p-[3px]">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`
                  text-[0.78rem] font-semibold tracking-wide px-4 py-1 rounded-full
                  transition-all duration-200 whitespace-nowrap
                  ${
                    !isAutumnPlaza
                      ? "bg-[#E95522] text-white shadow-[0_2px_8px_rgba(233,85,34,0.28)]"
                      : "text-[#999] hover:text-[#E95522]"
                  }
                `}
              >
                Autumn Towne
              </Link>
              <Link
                href="/autumn-plaza/home"
                onClick={() => setOpen(false)}
                className={`
                  text-[0.78rem] font-semibold tracking-wide px-4 py-1 rounded-full
                  transition-all duration-200 whitespace-nowrap
                  ${
                    isAutumnPlaza
                      ? "bg-[#E95522] text-white shadow-[0_2px_8px_rgba(233,85,34,0.28)]"
                      : "text-[#999] hover:text-[#E95522]"
                  }
                `}
              >
                Autumn Plaza
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent mb-2" />

          {/* Nav Links */}
          {currentMenu.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`
                block text-[0.95rem] py-[10px]
                border-b border-black/[0.05] last:border-none
                transition-all duration-150
                hover:pl-1
                ${
                  isActiveRoute(href)
                    ? "text-[#E95522] font-semibold"
                    : "text-[#444] font-medium hover:text-[#E95522]"
                }
              `}
            >
              {label}
            </Link>
          ))}

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mt-5">
            <Link
              href={isAutumnPlaza ? "/autumn-plaza/contactus" : "/contactus"}
              onClick={() => setOpen(false)}
              className="
                block text-center text-[0.875rem] font-semibold tracking-wide
                border-[1.5px] border-[#8b5a3c] text-[#8b5a3c]
                px-4 py-2 rounded-full
                hover:bg-[#8b5a3c] hover:text-white
                transition-all duration-200
              "
            >
              Contact Us
            </Link>
            <Link
              href={isAutumnPlaza ? "/autumn-plaza/bookvisit" : "/bookvisit"}
              onClick={() => setOpen(false)}
              className="
                block text-center text-[0.875rem] font-semibold tracking-wide
                bg-[#E95522] text-white
                px-4 py-2 rounded-full
                shadow-[0_3px_14px_rgba(233,85,34,0.28)]
                hover:bg-[#cf4a1d]
                transition-all duration-200
              "
            >
              Schedule Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
