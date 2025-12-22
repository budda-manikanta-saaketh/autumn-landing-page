"use client";

import Image from "next/image";

export default function GalleryPage() {
  return (
    <section className="pt-[140px] pb-20">
      <div className="max-w-[1280px] mx-auto px-6 space-y-24">
        {/* PAGE HEADER */}
        <div className="text-center">
          <h1 className="text-[2.4rem] md:text-[3rem] font-bold text-[#5B2C1A]">
            Life at Autumn Towne
          </h1>
          <p className="text-[#666] max-w-[700px] mx-auto mt-4 text-[1.05rem]">
            A glimpse into our everyday moments, special events, and the vibrant
            community life our residents enjoy.
          </p>
        </div>

        {/* ================= RECENT MOMENTS ================= */}
        <GallerySection
          title="Recent Moments"
          subtitle="Everyday life around the community"
          images={[
            "/images/events/coffee.jpeg",
            "/images/events/social.jpeg",
            "/images/events/birthday.jpeg",
          ]}
        />

        {/* ================= COMMUNITY EVENTS ================= */}
        <GallerySection
          title="Community Events"
          subtitle="Special gatherings and activities"
          images={[
            "/images/events/bingo.jpeg",
            "/images/events/wellness.jpeg",
            "/images/events/event2.jpeg",
          ]}
        />

        {/* ================= LIFE AT AUTUMN TOWNE ================= */}
        <GallerySection
          title="Life at Autumn Towne"
          subtitle="Comfort, connection, and active living"
          images={[
            "/images/Community.jpeg",
            "/images/Hero1.jpeg",
            "/images/Community2.jpeg",
          ]}
        />

        {/* ================= SOCIAL MEDIA FEED ================= */}
        <SocialFeed />
      </div>
    </section>
  );
}
function GallerySection({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: string[];
}) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-[1.8rem] font-bold text-[#5B2C1A]">{title}</h2>
        <p className="text-[#666] mt-1">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="
              bg-white rounded-[24px] overflow-hidden border border-[#eee]
              hover:shadow-xl hover:-translate-y-1 transition-all
            "
          >
            <div className="relative h-[220px] group">
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function SocialFeed() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-[1.8rem] font-bold text-[#5B2C1A]">
          From Our Social Media
        </h2>
        <p className="text-[#666] mt-2">
          Follow us on Facebook and Instagram for the latest updates.
        </p>
      </div>
    </div>
  );
}
