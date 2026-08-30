
import {
  Truck,
  ShieldCheck,
  Gift,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Delivery",
    description: "Fast & Reliable",
    icon: Truck,
  },
  {
    title: "100% Fresh",
    description: "Made Fresh Daily",
    icon: ShieldCheck,
  },
  {
    title: "Offers",
    description: "Special Deals",
    icon: Gift,
  },
  {
    title: "Support",
    description: "We're Here 24/7",
    icon: Headphones,
  },
];

export default function FeatureSidebar() {
  return (
    <div
      className="
        grid
        grid-cols-4
        gap-2
        sm:gap-3

        lg:block
        lg:space-y-4
      "
    >
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              group
              bg-white
              rounded-xl
              shadow-sm
              hover:shadow-lg
              border
              border-gray-100

              p-2
              sm:p-3
              lg:p-5

              flex
              flex-col
              lg:flex-row
              md:h-28
              h-16

              gap-1.5
              lg:gap-4

              items-center
              justify-center
              lg:justify-start

              text-center
              lg:text-left

              transition-all
              duration-300
            "
          >
            {/* ICON */}

            <div
              className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                lg:w-12
                lg:h-12

                rounded-full
                bg-pink-50

                flex
                items-center
                justify-center

                flex-shrink-0

                group-hover:bg-[#a8418b]
                transition
                duration-300
              "
            >
              <Icon
                className="
                  text-[#a8418b]
                  group-hover:text-white
                  transition
                  duration-300
                "
                size={18}
              />
            </div>

            {/* TEXT */}

            <div className="min-w-0">
              <h3
                className="
                  font-semibold
                  text-[10px]
                  sm:text-xs
                  lg:text-base
                  text-gray-800
                  leading-tight
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  hidden
                  lg:block
                  mt-1
                  text-xs
                  xl:text-sm
                  text-gray-500
                  leading-tight
                "
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

