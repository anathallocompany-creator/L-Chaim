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
            left: -250,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: 250,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-2 mt-12 md:mt-0 sm:py-4 lg:py-8">

            <div className="max-w-7xl mx-auto">

                {/* ================= MOBILE ================= */}
                <div className="block lg:hidden">

                    {/* Heading */}
                    <div className="flex items-center justify-between mb-3 px-1">
                        <h2 className="text-lg font-bold text-gray-900">
                            Popular near you
                        </h2>

                        <button
                            onClick={() => onSelectCategory("Featured")}
                            className="text-[#a8418b] text-sm font-semibold"
                        >
                            See all
                        </button>
                    </div>

                    {/* Horizontal categories */}
                    <div
                        ref={sliderRef}
                        className="
              flex
              gap-4
              overflow-x-auto
              scrollbar-hide
              scroll-smooth
              pb-2
            "
                    >
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => onSelectCategory(category.name)}
                                className="
                  flex-shrink-0
                  w-[68px]
                  text-center
                "
                            >

                                {/* Circle */}
                                <div
                                    className={`
                    w-16
                    h-16
                    mx-auto
                    rounded-full
                    overflow-hidden
                    bg-gray-100
                    border
                    flex
                    items-center
                    justify-center
                    transition
                    ${activeCategory === category.name
                                            ? "border-[#a8418b] ring-2 ring-[#e79ed3]"
                                            : "border-gray-200"
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
                    "
                                    />
                                </div>

                                {/* Name */}
                                <p className="
                  mt-1.5
                  text-[10px]
                  leading-tight
                  text-gray-700
                  line-clamp-2
                ">
                                    {category.name}
                                </p>

                            </button>
                        ))}
                    </div>

                </div>


                {/* ================= DESKTOP ================= */}
                <div className="hidden lg:block">

                    <div className="relative">

                        {/* Left */}
                        <button
                            onClick={scrollLeft}
                            className="
                absolute
                -left-6
                top-1/2
                -translate-y-1/2
                z-10
                w-12
                h-12
                rounded-full
                bg-gray-200
                hover:bg-[#a8418b]
                hover:text-white
                transition
                flex
                items-center
                justify-center
                shadow
              "
                        >
                            <ChevronLeft />
                        </button>


                        {/* Categories */}
                        <div
                            ref={sliderRef}
                            className="
                flex
                gap-5
                overflow-x-auto
                scroll-smooth
                scrollbar-hide
              "
                        >
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => onSelectCategory(category.name)}
                                    className="
                    group
                    min-w-[220px]
                    h-65
                    flex-shrink-0
                  "
                                >

                                    <div
                                        className={`
                      rounded-xl
                      bg-gray-600
                      border-2
                      border-[#e79ed3]/30
                      h-56
                      shadow
                      hover:shadow-xl
                      transition
                      duration-300
                      overflow-hidden
                    `}
                                    >

                                        <div className="overflow-hidden">
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="
                          w-full
                          h-44
                          object-contain
                          group-hover:scale-110
                          transition-transform
                          duration-500
                        "
                                            />
                                        </div>

                                        <div className="bg-[#222222] py-3 text-center">
                                            <h3 className="
                        font-semibold
                        text-white
                        group-hover:text-[#e79ed3]
                        transition
                      ">
                                                {category.name}
                                            </h3>
                                        </div>

                                    </div>

                                </button>
                            ))}
                        </div>


                        {/* Right */}
                        <button
                            onClick={scrollRight}
                            className="
                absolute
                -right-6
                top-1/2
                -translate-y-1/2
                z-10
                w-12
                h-12
                rounded-full
                bg-gray-200
                hover:bg-[#a8418b]
                hover:text-white
                transition
                flex
                items-center
                justify-center
                shadow
              "
                        >
                            <ChevronRight />
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}