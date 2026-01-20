"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGE_PROPS = {
  sizes: `
    (max-width: 640px) 90vw,
    (max-width: 1024px) 50vw,
    (max-width: 1280px) 45vw,
    35vw
  `,
  quality: 70,
};

function LayoutClassic({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 grid-rows-[200px_200px] lg:grid-rows-[280px_280px]">
      <div className="relative row-span-2 rounded-[32px] overflow-hidden">
        <Image
          src={images[0]}
          fill
          priority
          {...HERO_IMAGE_PROPS}
          className="object-cover"
          alt=""
        />
      </div>
      {images.slice(1).map((img, i) => (
        <div key={i} className="relative rounded-[32px] overflow-hidden">
          <Image
            src={img}
            fill
            loading="lazy"
            {...HERO_IMAGE_PROPS}
            className="object-cover"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

function LayoutThree({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative col-span-2 h-[280px] rounded-[32px] overflow-hidden">
        <Image
          src={images[0]}
          fill
          priority
          {...HERO_IMAGE_PROPS}
          className="object-cover"
          alt=""
        />
      </div>
      {images.slice(1, 3).map((img, i) => (
        <div
          key={i}
          className="relative h-[200px] rounded-[32px] overflow-hidden"
        >
          <Image
            src={img}
            fill
            loading="lazy"
            {...HERO_IMAGE_PROPS}
            className="object-cover"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

const LAYOUTS = [
  { component: LayoutClassic, count: 3 },
  { component: LayoutThree, count: 3 },
];

export default function HeroLayouts({ images }: { images: string[] }) {
  const [layout, setLayout] = useState<any>(null);

  useEffect(() => {
    const picked = LAYOUTS[Math.floor(Math.random() * LAYOUTS.length)];
    setLayout({
      Component: picked.component,
      imgs: images.sort(() => 0.5 - Math.random()).slice(0, picked.count),
    });
  }, [images]);

  if (!layout) return null;
  return <layout.Component images={layout.imgs} />;
}
