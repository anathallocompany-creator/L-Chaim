"use client";

import Link from "next/link";

const banners = [
  {
    id: 1,
    title: "Fresh Cakes Daily",
    subtitle: "Enjoy up to 20% OFF on all Birthday Cakes",
    button: "Shop Birthday Cakes",
    image: "/cat10.png",
    gradient: "from-gray-500 to-pink-300",
    link: "/category/birthday-cakes",
  },
  {
    id: 2,
    title: "Luxury Wedding Cakes",
    subtitle: "Beautiful handcrafted cakes made for your special day",
    button: "Explore Collection",
    image: "/cat11.png",
    gradient: "from-black to-gray-600",
    link: "/category/wedding-cakes",
  },
];

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative overflow-hidden rounded-3xl shadow-lg group max-h-[310px]"
          >
            {/* Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${banner.gradient}`}
            />

            {/* Overlay */}
          

            <div className="relative z-10 flex h-full items-center justify-between px-8 py-10">

              {/* Text */}
              <div className="max-w-sm text-white">

                <span className="inline-block bg-white text-black px-4 py-1 rounded-full text-xs font-semibold mb-4">
                  SPECIAL OFFER
                </span>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {banner.title}
                </h2>

                <p className="mt-4 text-white/90 text-base">
                  {banner.subtitle}
                </p>

                <Link
                  href={banner.link}
                  className="
                    inline-flex 
                    mt-6 
                    bg-white 
                    text-black 
                    px-6 
                    py-3 
                    rounded-full 
                    font-bold
                    hover:bg-gray-100
                    transition
                  "
                >
                  {banner.button}
                </Link>

              </div>


              {/* Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="
                  absolute
                  right-[-20px]
                  bottom-0
                  h-[240px]
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}