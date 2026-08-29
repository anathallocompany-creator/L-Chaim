import {
  Truck,
  ShieldCheck,
  Gift,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Delivery",
    icon: Truck,
  },
  {
    title: "100% Fresh",
    icon: ShieldCheck,
  },
  {
    title: "Offers",
    icon: Gift,
  },
  {
    title: "Support",
    icon: Headphones,
  },
];

export default function FeatureSidebar() {
  return (
    <div
      className="
        grid
        grid-cols-4
        gap-1.5
        sm:gap-2
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
              bg-white/95
              backdrop-blur-sm
              rounded-lg
              shadow-lg
              p-2
              sm:p-3
              lg:p-5
              flex
              flex-col
              lg:flex-row
              gap-1
              lg:gap-4
              items-center
              justify-center
              lg:justify-start
              text-center
              lg:text-left
              lg:mb-6
            "
          >
            <Icon
              className="text-[#a8418b] flex-shrink-0"
              size={20}
            />

            <div className="min-w-0">
              <h3
                className="
                  font-semibold
                  text-[10px]
                  sm:text-xs
                  lg:text-base
                  leading-tight
                  whitespace-nowrap
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  hidden
                  lg:block
                  text-sm
                  text-gray-500
                "
              >
                Learn More
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}