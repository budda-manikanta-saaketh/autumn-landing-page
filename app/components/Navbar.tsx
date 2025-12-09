"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 w-full z-[1000] flex justify-center">
      <div
        className="
          bg-white 
          backdrop-blur-md 
          border border-white/70 
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          px-[30px] py-[12px] 
          rounded-full 
          flex items-center justify-between
          w-[90%] max-w-[1200px]
        "
      >
        {/* Logo */}
        <div className="font-extrabold text-[1.2rem] tracking-[-0.5px] flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="
                text-[0.95rem] font-medium 
                text-[#999999] 
                hover:text-[#E95522] 
                transition relative
              "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/floorplans"
              className="
                text-[0.95rem] font-medium 
                text-[#999999] 
                hover:text-[#E95522] 
                transition
              "
            >
              Floor Plans
            </Link>
          </li>

          <li>
            <Link
              href="/amenities"
              className="
                text-[0.95rem] font-medium 
                text-[#999999] 
                hover:text-[#E95522] 
                transition
              "
            >
              Amenities
            </Link>
          </li>

          <li>
            <Link
              href="/aboutus"
              className="
                text-[0.95rem] font-medium 
                text-[#999999] 
                hover:text-[#E95522] 
                transition
              "
            >
              About us
            </Link>
          </li>

          {/* Contact Button */}
          <li>
            <Link
              href="/contactus"
              className="
                bg-[#E95522] 
                text-white 
                px-5 py-2 
                rounded-md 
                font-semibold
                hover:bg-[#cf4a1d]
                transition
              "
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-[1.5rem] text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul
          className="
            absolute top-[80px] left-0 w-full 
            bg-white 
            shadow-lg 
            py-6 px-6 
            flex flex-col gap-4 
            font-medium text-[#666] 
            md:hidden
          "
        >
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/floorplans" onClick={() => setOpen(false)}>
              Floor Plans
            </Link>
          </li>

          <li>
            <Link href="/amenities" onClick={() => setOpen(false)}>
              Amenities
            </Link>
          </li>

          <li>
            <Link href="/aboutus" onClick={() => setOpen(false)}>
              About us
            </Link>
          </li>

          <li>
            <Link
              href="/contactus"
              className="text-white bg-[#E95522] px-4 py-2 rounded-md"
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
