
"use client";

import {
  Cake,
  PartyPopper,
  CookingPot,
  UtensilsCrossed,
  Truck,
  Gift,
} from "lucide-react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const services = [
  {
    title: "Custom Celebration Cakes",
    icon: Cake,
    image: "/cake1.webp",
    text:
      "Beautiful birthday, wedding, anniversary and celebration cakes designed to your taste.",
  },
  {
    title: "Desserts & Pastries",
    icon: Gift,
    image: "/dessert1.jpg",
    text:
      "Cupcakes, cheesecakes, doughnuts, pastries, cookies and sweet treats for every event.",
  },
  {
    title: "Indoor Catering",
    icon: UtensilsCrossed,
    image: "/food5.jpg",
    text:
      "Professional catering services for weddings, birthdays, corporate events and private parties.",
  },
  {
    title: "Outdoor Catering",
    icon: Truck,
    image: "/catering2.jpg",
    text:
      "Outdoor catering for picnics, festivals, school events, weddings and large celebrations.",
  },
  {
    title: "Food Trays",
    icon: CookingPot,
    image: "/foodtray1.jpg",
    text:
      "Premium food trays prepared fresh for meetings, celebrations and family gatherings.",
  },
  {
    title: "Event Dessert Tables",
    icon: PartyPopper,
    image: "/dessert2.jpg",
    text:
      "Luxury dessert displays with cupcakes, mini pastries, chocolates and candy stations.",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="
        py-14
        sm:py-16
        md:py-20
        lg:py-24
        px-4
        sm:px-6
        bg-white
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= SECTION HEADER ================= */}

        <div
          className="
            text-center
            mb-10
            sm:mb-12
            md:mb-16
            max-w-3xl
            mx-auto
          "
        >
          <span
            className="
              inline-block
              uppercase
              tracking-[2px]
              sm:tracking-[3px]
              md:tracking-[4px]
              text-[#a8418b]
              font-semibold
              text-xs
              sm:text-sm
            "
          >
            What We Offer
          </span>

          <h2
            className={`
              ${greatVibes.className}
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              mt-2
              sm:mt-3
              leading-tight
            `}
          >
            Premium Bakery & Catering Services
          </h2>

          <p
            className="
              text-gray-500
              text-sm
              sm:text-base
              mt-3
              sm:mt-4
              px-2
            "
          >
            Everything you need to make your celebration unforgettable.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            sm:gap-7
            md:gap-8
            lg:gap-10
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-xl
                  sm:rounded-2xl
                  overflow-hidden
                  bg-white
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                {/* ================= IMAGE ================= */}

                <div
                  className="
                    overflow-hidden
                    h-52
                    sm:h-56
                    md:h-60
                    lg:h-64
                  "
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <div
                  className="
                    p-5
                    sm:p-6
                    md:p-7
                    lg:p-8
                  "
                >
                  <Icon
                    className="
                      text-[#a8418b]
                      w-8
                      h-8
                      sm:w-9
                      sm:h-9
                    "
                  />

                  <h3
                    className="
                      font-bold
                      text-xl
                      sm:text-2xl
                      mt-3
                      sm:mt-4
                      leading-tight
                      text-gray-900
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-gray-500
                      text-sm
                      sm:text-base
                      leading-6
                      sm:leading-7
                      mt-3
                    "
                  >
                    {service.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

