"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("plaza-hero");
  const pathname = usePathname();

  const isAutumnPlaza = pathname.startsWith("/autumn-plaza");
  const isPlazaHome =
    pathname.startsWith("/autumn-plaza") && !pathname.includes("aboutus");
  const isPlazaAboutUs = pathname.startsWith("/autumn-plaza/aboutus");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is currently in view on the plaza home page
  useEffect(() => {
    if (!isPlazaHome) return;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveAnchor(hash);
    }
    const anchors = [
      "plaza-hero",
      "plaza-living",
      "plaza-amenities",
      "plaza-location",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveAnchor(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    anchors.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isPlazaHome]);

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchor: string,
  ) => {
    if (isPlazaHome) {
      e.preventDefault();
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const towneMenu = [
    ["Home", "/"],
    ["Floor Plans", "/floorplans"],
    ["Amenities", "/amenities"],
    ["Gallery", "/gallery"],
    ["About Us", "/aboutus"],
  ];

  // [label, href, anchor] — anchor="" means it's a regular page link
  const plazaMenu: [string, string, string][] = [
    ["Home", "/autumn-plaza/home", "plaza-hero"],
    ["Residences", "/autumn-plaza/home", "plaza-living"],
    ["Amenities", "/autumn-plaza/home", "plaza-amenities"],
    ["Location", "/autumn-plaza/home", "plaza-location"],
    ["About Us", "/autumn-plaza/aboutus", ""],
  ];

  const getPlazaLinkActive = (anchor: string, href: string) => {
    if (!anchor) return isPlazaAboutUs; // About Us page
    if (!isPlazaHome) return false; // on about us, only About Us is active
    return activeAnchor === anchor;
  };

  const logoSrc = isAutumnPlaza
    ? "/logos/autumn-plaza-logo.jpg"
    : "/logos/logo.png";

  /* ── shared nav link renderer for plaza ── */
  const renderPlazaLink = (
    label: string,
    href: string,
    anchor: string,
    mobile = false,
  ) => {
    const isAboutUs = !anchor;
    const isActive = getPlazaLinkActive(anchor, href);
    const dest = isAboutUs ? href : `${href}#${anchor}`;

    const baseClass = mobile
      ? `block text-[0.95rem] py-[10px] border-b border-black/[0.05] last:border-none transition-all duration-150 hover:pl-1 cursor-pointer`
      : `text-[0.875rem] tracking-[0.01em] pb-0.5 transition-colors duration-200 cursor-pointer`;

    const colorClass = isActive
      ? "text-[#E95522] font-semibold"
      : "text-[#555] font-medium hover:text-[#E95522]";

    return (
      <a
        key={label}
        href={dest}
        onClick={
          isAboutUs
            ? () => setOpen(false)
            : (e) =>
                handleAnchorClick(
                  e as React.MouseEvent<HTMLAnchorElement>,
                  anchor,
                )
        }
        className={`${baseClass} ${colorClass}`}
      >
        {label}
      </a>
    );
  };

  return (
    <nav className="fixed top-3 left-0 w-full z-[1000] flex flex-col items-center">
      {/* DESKTOP — unified card */}
      <div className="hidden md:block w-[88%] md:w-[90%] max-w-[1200px]">
        {/* TAB STRIP */}
        <div className="flex">
          <Link
            href="/"
            className={`
              relative px-7 py-[8px] text-[0.8rem] font-semibold tracking-wide
              whitespace-nowrap select-none transition-colors duration-200
              rounded-tl-[18px] bg-white/95 backdrop-blur-xl
              border-t border-l border-r border-black/[0.08]
              ${!isAutumnPlaza ? "text-[#E95522]" : "text-[#aaa] hover:text-[#E95522]"}
            `}
          >
            Autumn Towne
            <span
              className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-t-full transition-all duration-200 ${!isAutumnPlaza ? "bg-[#E95522]" : "bg-transparent"}`}
            />
          </Link>

          <Link
            href="/autumn-plaza/home"
            className={`
              relative px-7 py-[8px] text-[0.8rem] font-semibold tracking-wide
              whitespace-nowrap select-none transition-colors duration-200
              rounded-tr-[18px] bg-white/95 backdrop-blur-xl
              border-t border-r border-l border-black/[0.08]
              ${isAutumnPlaza ? "text-[#E95522]" : "text-[#aaa] hover:text-[#E95522]"}
            `}
          >
            Autumn Plaza
            <span
              className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-t-full transition-all duration-200 ${isAutumnPlaza ? "bg-[#E95522]" : "bg-transparent"}`}
            />
          </Link>
        </div>

        {/* MAIN NAV CARD */}
        <div
          className={`
            w-full px-5 py-3 bg-white/95 backdrop-blur-xl
            border border-black/[0.08]
            rounded-b-[22px] rounded-tr-[22px]
            transition-all duration-300
            ${scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.11)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.07)]"}
          `}
        >
          <div className="flex items-center gap-5">
            {/* LOGO */}
            <Link
              href={isAutumnPlaza ? "/autumn-plaza/home" : "/"}
              className="shrink-0 hover:opacity-80 transition-opacity duration-200"
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

            <div className="h-8 w-px bg-black/[0.10] shrink-0" />

            {/* NAV LINKS */}
            <ul className="flex items-center gap-6 flex-1">
              {isAutumnPlaza
                ? plazaMenu.map(([label, href, anchor]) => (
                    <li key={label} className="relative group">
                      {renderPlazaLink(label, href, anchor)}
                      <span
                        className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#E95522] rounded-full transition-all duration-200 ${getPlazaLinkActive(anchor, href) ? "w-full" : "w-0 group-hover:w-full"}`}
                      />
                    </li>
                  ))
                : towneMenu.map(([label, href]) => {
                    const isActive = isActiveRoute(href);
                    return (
                      <li key={href} className="relative group">
                        <Link
                          href={href}
                          className={`text-[0.875rem] tracking-[0.01em] pb-0.5 transition-colors duration-200 ${isActive ? "text-[#E95522] font-semibold" : "text-[#555] font-medium hover:text-[#E95522]"}`}
                        >
                          {label}
                        </Link>
                        <span
                          className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#E95522] rounded-full transition-all duration-200 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                        />
                      </li>
                    );
                  })}
            </ul>

            {/* CTA BUTTONS */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={isAutumnPlaza ? "/autumn-plaza/contactus" : "/contactus"}
                className="text-[0.835rem] font-semibold tracking-wide px-[18px] py-[7px] rounded-full border-[1.5px] border-[#8b5a3c] text-[#8b5a3c] hover:bg-[#8b5a3c] hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                Contact Us
              </Link>
              <Link
                href={isAutumnPlaza ? "/autumn-plaza/bookvisit" : "/bookvisit"}
                className="text-[0.835rem] font-semibold tracking-wide px-5 py-[7px] rounded-full bg-[#E95522] text-white hover:bg-[#cf4a1d] transition-all duration-200 whitespace-nowrap shadow-[0_3px_14px_rgba(233,85,34,0.25)]"
              >
                Schedule Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE — logo + hamburger */}
      <div
        className={`
          md:hidden w-[88%] px-5 py-3 rounded-[22px]
          bg-white/95 backdrop-blur-xl border border-black/[0.08]
          transition-all duration-300
          ${scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.11)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.07)]"}
        `}
      >
        <div className="flex items-center justify-between">
          <Link
            href={isAutumnPlaza ? "/autumn-plaza/home" : "/"}
            className="shrink-0 hover:opacity-80 transition-opacity duration-200"
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

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          className="
          md:hidden absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2
          w-[88%] max-w-[1200px]
          bg-white/[0.98] backdrop-blur-xl border border-black/[0.08]
          rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.12)]
          px-6 py-5
        "
        >
          {/* Switcher */}
          <div className="flex justify-start mb-4">
            <div className="flex gap-[3px] bg-black/[0.04] rounded-full p-[3px]">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`text-[0.78rem] font-semibold tracking-wide px-4 py-1 rounded-full transition-all duration-200 whitespace-nowrap ${!isAutumnPlaza ? "bg-[#E95522] text-white shadow-[0_2px_8px_rgba(233,85,34,0.28)]" : "text-[#999] hover:text-[#E95522]"}`}
              >
                Autumn Towne
              </Link>
              <Link
                href="/autumn-plaza/home"
                onClick={() => setOpen(false)}
                className={`text-[0.78rem] font-semibold tracking-wide px-4 py-1 rounded-full transition-all duration-200 whitespace-nowrap ${isAutumnPlaza ? "bg-[#E95522] text-white shadow-[0_2px_8px_rgba(233,85,34,0.28)]" : "text-[#999] hover:text-[#E95522]"}`}
              >
                Autumn Plaza
              </Link>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent mb-2" />

          {isAutumnPlaza
            ? plazaMenu.map(([label, href, anchor]) =>
                renderPlazaLink(label, href, anchor, true),
              )
            : towneMenu.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block text-[0.95rem] py-[10px] border-b border-black/[0.05] last:border-none transition-all duration-150 hover:pl-1 ${isActiveRoute(href) ? "text-[#E95522] font-semibold" : "text-[#444] font-medium hover:text-[#E95522]"}`}
                >
                  {label}
                </Link>
              ))}

          <div className="flex flex-col gap-3 mt-5">
            <Link
              href={isAutumnPlaza ? "/autumn-plaza/contactus" : "/contactus"}
              onClick={() => setOpen(false)}
              className="block text-center text-[0.875rem] font-semibold tracking-wide border-[1.5px] border-[#8b5a3c] text-[#8b5a3c] px-4 py-2 rounded-full hover:bg-[#8b5a3c] hover:text-white transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link
              href={isAutumnPlaza ? "/autumn-plaza/bookvisit" : "/bookvisit"}
              onClick={() => setOpen(false)}
              className="block text-center text-[0.875rem] font-semibold tracking-wide bg-[#E95522] text-white px-4 py-2 rounded-full shadow-[0_3px_14px_rgba(233,85,34,0.28)] hover:bg-[#cf4a1d] transition-all duration-200"
            >
              Schedule Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
