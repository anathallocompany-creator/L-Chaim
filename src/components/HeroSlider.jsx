
"use client";

import { useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

const slides = [
    {
        image: "/hero1.png",
        title: "Sweet Heart",
        subtitle: "Fresh Cakes Made With Love",
        button: "Shop Now",
    },
    {
        image: "/hero2.png",
        title: "Birthday Collection",
        subtitle: "Celebrate Every Moment",
        button: "Order Now",
    },
    {
        image: "/hero3.png",
        title: "Wedding Cakes",
        subtitle: "Luxury Custom Cakes",
        button: "Explore",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const changeSlide = (index) => {
        setCurrent(index);
    };

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="
                relative
                
                md:mt-0
                h-[250px]
                sm:h-[320px]
                md:h-[400px]
                lg:h-[500px]
                rounded-xl
                overflow-hidden
                shadow-lg
            "
        >
            <img
                key={slides[current].image}
                src={slides[current].image}
                alt=""
                className="w-full h-full object-cover animate-image"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Text */}
            <div
                key={current}
                className="
                    absolute
                    left-6
                    sm:left-10
                    md:left-20
                    lg:left-40
                    top-1/2
                    -translate-y-1/2
                    max-w-[75%]
                    sm:max-w-md
                "
            >
                <h1
                    className={`
                        ${greatVibes.className}
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-8xl
                        text-white
                        leading-none
                        animate-title
                    `}
                >
                    {slides[current].title}
                </h1>

                <p
                    className="
                        mt-2
                        sm:mt-4
                        md:mt-6
                        text-white
                        text-sm
                        sm:text-base
                        md:text-xl
                        animate-subtitle
                    "
                >
                    {slides[current].subtitle}
                </p>

                <button
                    className="
                        mt-4
                        sm:mt-6
                        md:mt-8
                        bg-[#ce45b7]
                        hover:bg-[#8b3372]
                        text-white
                        px-5
                        sm:px-6
                        md:px-8
                        py-2
                        sm:py-2.5
                        md:py-3
                        text-sm
                        sm:text-base
                        rounded-full
                        font-semibold
                        animate-button
                    "
                >
                    {slides[current].button}
                </button>
            </div>

            {/* Previous */}
            <button
                onClick={prevSlide}
                className="
                    absolute
                    left-2
                    sm:left-3
                    md:left-5
                    top-1/2
                    -translate-y-1/2
                    bg-white/90
                    p-1.5
                    sm:p-2
                    md:p-3
                    rounded-full
                    hover:bg-white
                "
            >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Next */}
            <button
                onClick={nextSlide}
                className="
                    absolute
                    right-2
                    sm:right-3
                    md:right-5
                    top-1/2
                    -translate-y-1/2
                    bg-white/90
                    p-1.5
                    sm:p-2
                    md:p-3
                    rounded-full
                    hover:bg-white
                "
            >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Indicators */}
            <div
                className="
                    absolute
                    bottom-3
                    sm:bottom-4
                    md:bottom-6
                    left-1/2
                    -translate-x-1/2
                    flex
                    gap-2
                    sm:gap-3
                "
            >
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => changeSlide(index)}
                        className={`
                            w-2 h-2
                            sm:w-2.5 sm:h-2.5
                            md:w-3 md:h-3
                            rounded-full
                            transition
                            ${
                                current === index
                                    ? "bg-[#a8418b]"
                                    : "bg-white"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}

