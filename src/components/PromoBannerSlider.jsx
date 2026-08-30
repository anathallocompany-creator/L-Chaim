
"use client";

import Link from "next/link";

const banners = [
  {
    id: 1,
    title: "Fresh Cakes Daily",
    subtitle: "Enjoy up to 20% OFF on all Birthday Cakes",
    button: "Shop Birthday Cakes",
    image: "/cat10.png",
    gradient: "from-[#7b285f] via-[#a8418b] to-[#e89acb]",
    link: "/category/birthday-cakes",
  },
  {
    id: 2,
    title: "Luxury Wedding Cakes",
    subtitle: "Beautiful handcrafted cakes made for your special day",
    button: "Explore Collection",
    image: "/cat11.png",
    gradient: "from-[#171717] via-[#363636] to-[#777777]",
    link: "/category/wedding-cakes",
  },
];

export default function PromoBanner() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-16">
      
      {/* WIDER CONTAINER */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* BANNER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">

          {banners.map((banner) => (
            <div
              key={banner.id}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                sm:rounded-3xl

                min-h-[360px]
                sm:min-h-[380px]
                lg:min-h-[380px]
                xl:min-h-[300px]

                shadow-lg
                hover:shadow-2xl

                transition-all
                duration-500
              "
            >

              {/* BACKGROUND */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${banner.gradient}
                  transition-transform
                  duration-700
                  group-hover:scale-105
                `}
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  group-hover:bg-black/5
                  transition
                  duration-500
                "
              />

              {/* IMAGE FADE */}
              <div
                className="
                  absolute
                  right-0
                  bottom-0
                  w-[65%]
                  h-full
                  bg-gradient-to-l
                  from-transparent
                  via-transparent
                  to-black/10
                  pointer-events-none
                "
              />

              {/* CONTENT */}
              <div
                className="
                  relative
                  z-10
                  min-h-[360px]
                  sm:min-h-[380px]
                  lg:min-h-[380px]
                  xl:min-h-[400px]

                  flex
                  items-center

                  px-5
                  sm:px-8
                  lg:px-10
                  xl:px-12

                  py-8
                "
              >

                {/* TEXT */}
                <div
                  className="
                    relative
                    z-20

                    w-[60%]
                    sm:w-[58%]
                    lg:w-[60%]
                    xl:w-[58%]

                    text-white
                  "
                >

                  {/* BADGE */}
                  <span
                    className="
                      inline-flex
                      items-center
                      bg-white
                      text-[#922b6a]

                      px-3
                      sm:px-4

                      py-1.5

                      rounded-full

                      text-[9px]
                      sm:text-[10px]

                      font-bold
                      tracking-[1.5px]
                      uppercase

                      shadow-sm
                    "
                  >
                    Special Offer
                  </span>

                  {/* TITLE */}
                  <h2
                    className="
                      mt-4

                      text-2xl
                      sm:text-3xl
                      lg:text-4xl
                      xl:text-[42px]

                      font-bold

                      leading-[1.1]
                      tracking-tight

                      max-w-[420px]
                    "
                  >
                    {banner.title}
                  </h2>

                  {/* SUBTITLE */}
                  <p
                    className="
                      mt-3
                      sm:mt-4

                      text-xs
                      sm:text-sm
                      lg:text-base

                      text-white/90

                      leading-6

                      max-w-[350px]
                    "
                  >
                    {banner.subtitle}
                  </p>

                  {/* BUTTON */}
                  <Link
                    href={banner.link}
                    className="
                      inline-flex
                      items-center
                      justify-center

                      mt-5
                      sm:mt-6

                      bg-white
                      text-gray-900

                      px-4
                      sm:px-5
                      lg:px-6

                      py-2.5
                      sm:py-3

                      rounded-full

                      text-xs
                      sm:text-sm

                      font-bold

                      shadow-md

                      hover:bg-[#922b6a]
                      hover:text-white
                      hover:scale-105

                      transition-all
                      duration-300
                    "
                  >
                    {banner.button}
                  </Link>

                </div>

                {/* PRODUCT IMAGE */}
                <div
                  className="
                    absolute

                    right-[-10px]
                    sm:right-[-15px]
                    lg:right-[-20px]

                    bottom-0

                    w-[48%]
                    sm:w-[48%]
                    lg:w-[48%]

                    h-[88%]

                    flex
                    items-end
                    justify-end

                    pointer-events-none
                  "
                >
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="
                      w-full
                      h-full

                      object-contain
                      object-bottom

                      drop-shadow-2xl

                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-110
                      group-hover:-translate-y-2
                    "
                  />
                </div>

              </div>

              {/* DECORATIVE CIRCLES */}
              <div
                className="
                  absolute
                  -right-16
                  -top-16

                  w-40
                  h-40

                  rounded-full

                  border
                  border-white/10

                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  -right-24
                  -top-24

                  w-52
                  h-52

                  rounded-full

                  border
                  border-white/5

                  pointer-events-none
                "
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

