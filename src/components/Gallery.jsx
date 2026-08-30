"use client";

import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

const galleryImages = [
  {
    image: "/cake2.jpg",
    title: "Birthday Cakes",
    subtitle: "Beautiful cakes crafted for unforgettable celebrations.",
  },
  {
    image: "/childcake5.jpg",
    title: "Wedding Collection",
    subtitle: "Luxury wedding cakes designed with elegance.",
  },
  {
    image: "/meatpie1.webp",
    title: "Premium Desserts",
    subtitle: "Freshly baked desserts made every day.",
  },
  {
    image: "/cake5.webp",
    title: "Custom Creations",
    subtitle: "Personalized cakes tailored to your vision.",
  },
  {
    image: "/combo11.jpg",
    title: "Snack Boxes",
    subtitle: "Perfect for birthdays, parties and events.",
  },
  {
    image: "/combo13.jpg",
    title: "Party Platters",
    subtitle: "Delicious assortments for every gathering.",
  },
  {
    image: "/combo14.jpg",
    title: "Corporate Catering",
    subtitle: "Professional catering for meetings and celebrations.",
  },
  {
    image: "/food2.jpg",
    title: "Fresh Meals",
    subtitle: "Delicious homemade meals prepared with love.",
  },
];

export default function GallerySlider() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((prev) => (prev + 2) % galleryImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const images = [
    ...galleryImages.slice(start),
    ...galleryImages.slice(0, start),
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[90%] mx-auto px-4">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-[#a8418b] text-sm font-semibold">
            Sweet Moments
          </span>

          <h2 className={`${greatVibes.className} text-4xl md:text-7xl font-bold mt-3`}>
            Our Gallery
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Every cake tells a story. Browse through our handcrafted cakes,
            desserts and catering creations made for life's special moments.
          </p>

        </div>

        <div className="space-y-6">

          {/* Top */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.slice(0, 2).map((item, index) => (
              <GalleryImage
                key={index}
                item={item}
                height="h-[260px]"
              />
            ))}
          </div>

          {/* Middle */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.slice(2, 4).map((item, index) => (
              <GalleryImage
                key={index}
                item={item}
                height="h-[420px]"
              />
            ))}
          </div>

          {/* Bottom */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.slice(4, 6).map((item, index) => (
              <GalleryImage
                key={index}
                item={item}
                height="h-[260px]"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function GalleryImage({ item, height }) {
  return (
    <div
      className={`
        ${height}
        relative
        overflow-hidden
        rounded-3xl
        group
        cursor-pointer
        shadow-lg
      `}
    >
      <img
        src={item.image}
        alt={item.title}
        className="
          w-full
          h-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/30
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      />

      {/* Text */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-8
          translate-y-12
          opacity-0
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      >
        <span className="uppercase tracking-[4px] text-[#f3a4d5] text-xs font-semibold">
          Chaim Sweets
        </span>

        <h3 className="text-white text-3xl font-bold mt-2">
          {item.title}
        </h3>

        <p className="text-gray-200 mt-3 leading-relaxed">
          {item.subtitle}
        </p>

        <button
          className="
            mt-6
            px-6
            py-3
            rounded-full
            bg-[#a8418b]
            hover:bg-white
            hover:text-[#a8418b]
            text-white
            font-semibold
            transition
          "
        >
          View Collection →
        </button>
      </div>
    </div>
  );
}