"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaSmile,
  FaUserCircle,
  FaEnvelope,
  FaStar,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";
const HERO_IMAGES = [
  "/images/Hero1.webp",
  "/images/Hero2.webp",
  "/images/Hero3.webp",
  "/images/Hero4.webp",
  "/images/Hero5.webp",
  "/images/Hero6.webp",
  "/images/Hero7.webp",
];
const HERO_IMAGE_PROPS = {
  sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 720px",
  quality: 65,
};

const getRandomImages = (count: number) =>
  [...HERO_IMAGES].sort(() => 0.5 - Math.random()).slice(0, count);
function LayoutOne({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 grid-rows-[200px_200px]">
      <div className="relative row-span-2 rounded-[32px] overflow-hidden">
        <Image
          src={images[0]}
          alt="Autumn Towne apartments"
          fill
          priority
          {...HERO_IMAGE_PROPS}
          className="object-cover"
        />
      </div>

      {images.slice(1).map((img, i) => (
        <div key={i} className="relative rounded-[32px] overflow-hidden">
          <Image
            src={img}
            alt="Autumn Towne community"
            fill
            loading="lazy"
            {...HERO_IMAGE_PROPS}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function LayoutClassic({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 grid-rows-[150px_150px] sm:grid-rows-[180px_180px] md:grid-rows-[200px_200px]">
      {/* BIG IMAGE (LCP) */}
      <div className="relative row-span-2 overflow-hidden rounded-[32px]">
        <Image
          src={images[0]}
          alt="Autumn Towne Senior Apartments"
          fill
          priority
          {...HERO_IMAGE_PROPS}
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {images.slice(1).map((img, i) => (
        <div key={i} className="relative overflow-hidden rounded-[32px]">
          <Image
            src={img}
            alt="Autumn Towne interiors"
            fill
            loading="lazy"
            {...HERO_IMAGE_PROPS}
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

function LayoutTwo({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 h-[420px]">
      {images.slice(0, 3).map((img, i) => (
        <div key={i} className="relative rounded-[32px] overflow-hidden">
          <Image
            src={img}
            alt="Autumn Towne apartments"
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            {...HERO_IMAGE_PROPS}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function LayoutThree({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* LCP IMAGE */}
      <div className="relative col-span-2 h-[220px] rounded-[32px] overflow-hidden">
        <Image
          src={images[0]}
          alt="Autumn Towne community living"
          fill
          priority
          loading="eager"
          {...HERO_IMAGE_PROPS}
          className="object-cover"
        />
      </div>

      {/* Secondary images */}
      {images.slice(1, 3).map((img, i) => (
        <div
          key={i}
          className="relative h-[180px] rounded-[32px] overflow-hidden"
        >
          <Image
            src={img}
            alt="Autumn Towne interiors"
            fill
            loading="lazy"
            {...HERO_IMAGE_PROPS}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function LayoutFour({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[420px]">
      {/* LCP IMAGE */}
      <div className="relative col-span-3 row-span-2 rounded-[32px] overflow-hidden">
        <Image
          src={images[0]}
          alt="Autumn Towne senior apartments"
          fill
          priority
          loading="eager"
          {...HERO_IMAGE_PROPS}
          className="object-cover"
        />
      </div>

      {/* Smaller images */}
      {images.slice(1, 3).map((img, i) => (
        <div
          key={i}
          className="relative col-span-1 row-span-1 rounded-[24px] overflow-hidden"
        >
          <Image
            src={img}
            alt="Autumn Towne amenities"
            fill
            loading="lazy"
            {...HERO_IMAGE_PROPS}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

const HERO_LAYOUTS = [
  { component: LayoutClassic, imageCount: 3 },
  { component: LayoutOne, imageCount: 3 },
  { component: LayoutTwo, imageCount: 3 },
  { component: LayoutThree, imageCount: 3 },
  { component: LayoutFour, imageCount: 3 },
];

export default function Hero() {
  const [layoutData, setLayoutData] = useState<{
    Component: any;
    images: string[];
  } | null>(null);
  useEffect(() => {
    const layout =
      HERO_LAYOUTS[Math.floor(Math.random() * HERO_LAYOUTS.length)];

    setLayoutData({
      Component: layout.component,
      images: getRandomImages(layout.imageCount),
    });
  }, []);
  return (
    <header
      id="home"
      className="
    h-screen
    w-full
    flex items-center
    overflow-hidden
  "
    >
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-[40px] md:gap-[60px] items-center">
        <div className="text-center md:text-left text-[#5B2C1A]">
          <h1
            className="font-bold tracking-[-1.2px] mb-6 leading-[1.15]
            text-[2.2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem]"
          >
            Welcome to <br />
            Autumn{" "}
            <span
              className="inline-flex items-center justify-center
              w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px]
              bg-[#E95522] text-white rounded-full
              text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] mx-1 sm:mx-2"
            >
              <FaHome />
            </span>
            Towne
          </h1>

          <p className="text-[1rem] sm:text-[1.05rem] text-[#666] mb-8 max-w-[450px] mx-auto md:mx-0 leading-relaxed">
            Autumn Towne Senior Apartments offers big city living with home-town
            appeal.
          </p>
          <a
            href="tel:6156484099"
            className="
              inline-flex items-center justify-center gap-3
              bg-[#E95522] hover:bg-[#cf4a1d]
              text-white font-semibold px-6 py-3 sm:px-8 sm:py-4
              rounded-full shadow-lg hover:shadow-xl
              text-lg sm:text-xl transition-all
              hover:scale-[1.05] active:scale-[0.98]
              mb-8
            "
          >
            <FaPhoneAlt className="text-xl" />
            Call (615) 648-4099
          </a>
          <Link href={"/contactus"}>
            <div
              className="
    hidden md:flex items-center gap-4 
    bg-white shadow-md rounded-[20px] 
    px-5 py-3 mb-6 border border-transparent
    transition-all duration-300 
    hover:-translate-y-1 hover:shadow-lg hover:border-[#E95522]/30
  "
            >
              <div className="text-[2.5rem] text-[#C9C9C9] transition-colors duration-300 group-hover:text-[#5B2C1A]">
                <FaUserCircle />
              </div>

              <div className="transition-colors duration-300">
                <span className="text-sm text-[#7a7a7a] block">
                  Management Team
                </span>
                <h4 className="text-base font-semibold text-[#5B2C1A]">
                  Here to assist you
                </h4>
              </div>

              <div className="ml-auto">
                <div
                  className="
        w-10 h-10 rounded-full bg-[#E95522] text-white 
        flex items-center justify-center
        transition-all duration-300
        hover:bg-[#cf4a1d] hover:scale-110
      "
                >
                  <FaEnvelope />
                </div>
              </div>
            </div>
          </Link>

          <div className="flex justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <FaStar className="text-yellow-500" /> 4.8 (120+)
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> 55+ Community
            </div>
          </div>
        </div>
        {layoutData && <layoutData.Component images={layoutData.images} />}
      </div>
    </header>
  );
}
