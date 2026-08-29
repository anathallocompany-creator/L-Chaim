import {
  Cake,
  Cookie,
  Croissant,
  Sandwich,
  CupSoda,
} from "lucide-react";

const categories = [
  {
    name: "Birthday Cakes",
    icon: Cake,
  },
  {
    name: "Wedding Cakes",
    icon: Cake,
  },
  {
    name: "Cupcakes",
    icon: Cookie,
  },
  {
    name: "Pastries",
    icon: Croissant,
  },
  {
    name: "Bread",
    icon: Sandwich,
  },
  {
    name: "Drinks",
    icon: CupSoda,
  },
];

export default function CategorySidebar() {
  return (
    <div className="bg-white rounded-lg shadow">

      <div className="bg-[#a8418b] text-white p-4 font-semibold">
        Categories
      </div>

      {categories.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-5 py-4 border-b hover:bg-pink-50 transition"
          >
            <Icon size={18} />
            {item.name}
          </button>
        );
      })}
    </div>
  );
}