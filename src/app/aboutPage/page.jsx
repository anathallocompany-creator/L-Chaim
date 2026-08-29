"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import TeamSelection from "@/components/TeamSelection";

export default function AboutHeader() {
    return (
        <section className="bg-[#f8f4f1] overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-24 lg:py-32">

                {/* Hero Header */}
                <div className="text-center mb-28">
                    <p className="uppercase tracking-[0.45em] text-[12px] text-[#a8418b] mb-5">
                        About Chaim Sweet
                    </p>

                    <h1 className="font-serif text-[#1d1718] text-5xl md:text-7xl lg:text-[92px] font-light tracking-[-0.04em] leading-[0.95]">
                        Creating Sweet

                        <br />
                        Moments Every Day
                    </h1>

                    <div className="mt-8 flex justify-center">
                        <div className="w-20 h-[1px] bg-[#8b6f76]" />
                    </div>

                    <ChevronDown
                        className="mx-auto mt-8 text-[#3d2f33]"
                        size={26}
                        strokeWidth={1}
                    />
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left */}
                    <div className="lg:col-span-5 -mt-34">

                        <p className="uppercase tracking-[0.35em] text-[12px] text-[#7a5b63] mb-8">
                            WHO WE ARE
                        </p>

                        <h2 className="font-serif text-[#231b1c] text-4xl md:text-6xl leading-[1] tracking-[-0.03em] max-w-[560px]">
                            Baking Happiness With Passion, Creativity & Premium Ingredients
                        </h2>

                        <div className="w-24 h-[1px] bg-[#8b6f76] my-10" />

                        <div className="space-y-7 text-[#4f4444] text-lg leading-[1.9] max-w-[600px]">

                            <p>
                                Chaim Sweet is a premium bakery and catering brand dedicated to
                                creating handcrafted cakes, pastries, desserts, and delicious meals
                                for every celebration and everyday enjoyment.
                            </p>

                            <p>
                                From elegant wedding cakes and birthday masterpieces to desserts,
                                pastries, and indoor & outdoor catering services, every order is
                                prepared with attention to detail and the finest ingredients.
                            </p>

                            <p>
                                Our talented team combines creativity with exceptional baking
                                techniques to deliver products that are as beautiful as they are
                                delicious.
                            </p>

                            <p>
                                Whether you're celebrating life's biggest milestones or simply
                                treating yourself, Chaim Sweet is committed to making every bite a
                                memorable experience.
                            </p>

                        </div>

                        {/* Floating Card */}
                        <div className="relative mt-20 mx-auto lg:ml-24 max-w-[280px] lg:max-w-none">

                            <div className="relative w-[280px] h-[360px] lg:w-full lg:h-[200px] overflow-hidden shadow-2xl">
                                <Image
                                    src="/dessert1.jpg"
                                    alt="Celebration"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="absolute bottom-4 left-4 lg:-bottom-8 lg:-left-8 bg-white px-4 py-4 lg:px-8 lg:py-6 shadow-xl max-w-[220px]">
                                <p className="text-xs lg:text-sm uppercase tracking-[0.25em] lg:tracking-[0.35em] text-[#7a5b63]">
                                    Freshly Crafted
                                </p>
                                <h3 className="font-serif text-lg lg:text-2xl mt-2">
                                    Made with Love & Premium Quality
                                </h3>
                            </div>
                        </div>
                    </div>

                   
    
                 



                    {/* Right */}
                    <div className="lg:col-span-7 relative">



                        {/* Decorative Block */}
                        <div className="absolute top-50 -left-10 w-48 h-48 border border-[#d7c7cb]" />

                        <div className="relative overflow-hidden shadow-2xl bg-gray-700">
                            <Image
                                src="/cat10.png"
                                alt="Luxury Event"
                                width={900}
                                height={1000}
                                className="object-cover w-full h-[750px]"
                            />
                        </div>

                        {/* Overlay Text */}
                        <div className="absolute bottom-12 left-12 bg-white/95 backdrop-blur-sm px-10 py-8 max-w-md shadow-xl">
                            <p className="uppercase tracking-[0.35em] text-[11px] text-[#7a5b63] mb-3">
                                Our Promise
                            </p>

                            <h3 className="font-serif text-3xl text-[#231b1c] leading-tight">
                                Every Cake Is Freshly Baked, Beautifully Designed & Made To Impress
                            </h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative w-full h-[45rem] overflow-hidden">

                {/* Background Image */}
                <Image
                    src="/hero1.png"
                    alt="Luxury Event"
                    fill
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/25" />

                {/* Content Overlay */}
                <div className="
    absolute inset-0
    flex items-center
    px-8 md:px-20 lg:px-32
  ">
                    <div className="max-w-2xl text-white">

                        <p className="
        uppercase
        tracking-[4px]
        text-sm
        mb-6
        text-[#f3e6dc]
      ">
                            HANDCRAFTED GOODNESS
                        </p>

                        <h1 className="
        font-serif
        text-5xl
        md:text-7xl
        leading-[1.05]
        mb-8
      ">
                            Fresh Cakes, Delicious Desserts & Premium Catering For Every Occasion
                        </h1>

                        <p className="
        text-lg
        md:text-xl
        leading-[1.8]
        text-white/90
        max-w-xl
        mb-10
      ">
                            Every celebration deserves something special.
                            From birthdays and weddings to corporate events and family gatherings,
                            we create beautifully crafted cakes, desserts, pastries, and catering
                            services that leave lasting memories.
                        </p>

                        <Link href="/services">

                            <button className="
        bg-[#d6a073]
        hover:bg-[#c58c5c]
        px-10 py-5
        text-lg
        font-medium
        transition-all
      ">
                               Explore Our Services
                            </button>

                        </Link>

                    </div>
                </div>

            </div>

           <TeamSelection/>

        </section>
    );
}