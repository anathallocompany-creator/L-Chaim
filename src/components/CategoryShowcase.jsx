
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Birthday Cakes",
    image: "/cat1.png",
  },
  {
    name: "Wedding Cakes",
    image: "/cat5.png",
  },
  {
    name: "Cupcakes",
    image: "/cat4.png",
  },
  {
    name: "Pastries",
    image: "/cat2.png",
  },
  {
    name: "Food Tray",
    image: "/cat3.png",
  },
  {
    name: "Bread",
    image: "/cat7.png",
  },
  {
    name: "Drinks",
    image: "/cat6.png",
  },
];

export default function CategoryShowcase({
  activeCategory,
  onSelectCategory,
}) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full mt-14 py-6 sm:py-8 lg:py-12">
      <div className=" sm:px-6 lg:px-12">

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between mb-5 sm:mb-7 lg:mb-10">

          <h2
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              font-bold
              text-gray-900
            "
          >
            Explore Our Collections
          </h2>

        

        </div>


        {/* ================= SLIDER ================= */}

        <div className="relative">

          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={scrollLeft}
            className="
              hidden
              sm:flex
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-1/2
              z-20

              w-10
              h-10

              lg:w-12
              lg:h-12

              xl:w-14
              xl:h-14

              rounded-full
              bg-white
              shadow-lg
              border
              border-gray-200

              items-center
              justify-center

              text-gray-700

              hover:bg-[#a8418b]
              hover:text-white
              hover:border-[#a8418b]

              transition-all
              duration-300
            "
            aria-label="Previous categories"
          >
            <ChevronLeft
              className="
                w-5
                h-5
                lg:w-6
                lg:h-6
                xl:w-7
                xl:h-7
              "
            />
          </button>


          {/* ================= CATEGORY LIST ================= */}

          <div
            ref={sliderRef}
            className="
              flex
              items-start

              gap-5
              sm:gap-7
              md:gap-10
              lg:gap-14
              xl:gap-16

              overflow-x-auto
              scroll-smooth
              scrollbar-hide

              pb-4

              px-1
              sm:px-3
              lg:px-6
            "
          >

            {categories.map((category) => (

              <button
                key={category.name}
                type="button"
                onClick={() =>
                  onSelectCategory(category.name)
                }
                className="
                  flex-shrink-0
                  text-center
                  group

                  w-[68px]
                  sm:w-[80px]
                  md:w-[105px]
                  lg:w-[135px]
                  xl:w-[155px]
                "
              >

                {/* ================= IMAGE CIRCLE ================= */}

                <div
                  className={`
                    mx-auto
                    rounded-full
                    overflow-hidden
                    bg-gray-100
                    border-3
                    border-gray-700
                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    /* MOBILE */
                    w-16
                    h-16

                    /* SMALL */
                    sm:w-[76px]
                    sm:h-[76px]

                    /* TABLET */
                    md:w-[100px]
                    md:h-[100px]

                    /* DESKTOP */
                    lg:w-[150px]
                    lg:h-[150px]

                    /* LARGE DESKTOP */
                    xl:w-[160px]
                    xl:h-[160px]

                    ${
                      activeCategory === category.name
                        ? "border-[#a8418b] ring-2 ring-[#e79ed3] scale-105"
                        : "border-gray-200 group-hover:border-[#a8418b] group-hover:scale-105"
                    }
                  `}
                >

                  <img
                    src={category.image}
                    alt={category.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                </div>


                {/* ================= CATEGORY NAME ================= */}

                <p
                  className="
                    mt-2

                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    lg:text-base
                    xl:text-lg

                    font-medium
                    text-gray-700

                    group-hover:text-[#a8418b]

                    transition

                    leading-tight
                    line-clamp-2
                  "
                >
                  {category.name}
                </p>

              </button>

            ))}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={scrollRight}
            className="
              hidden
              sm:flex
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              translate-x-1/2
              z-20

              w-10
              h-10

              lg:w-12
              lg:h-12

              xl:w-14
              xl:h-14

              rounded-full
              bg-white
              shadow-lg
              border
              border-gray-200

              items-center
              justify-center

              text-gray-700

              hover:bg-[#a8418b]
              hover:text-white
              hover:border-[#a8418b]

              transition-all
              duration-300
            "
            aria-label="Next categories"
          >
            <ChevronRight
              className="
                w-5
                h-5
                lg:w-6
                lg:h-6
                xl:w-7
                xl:h-7
              "
            />
          </button>

        </div>

      </div>
    </section>
  );
}

