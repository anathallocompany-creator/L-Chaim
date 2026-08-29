
"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const categories = [
  "All",
  "Birthday Cakes",
  "Wedding Cakes",
  "Children Cakes",
  "Cupcakes",
  "Desserts",
  "Pastries",
  "Food Tray",
  "Drinks",
];

const occasions = [
  "Birthday",
  "Wedding",
  "Anniversary",
  "Graduation",
  "Baby Shower",
];

const flavours = [
  "Chocolate",
  "Vanilla",
  "Red Velvet",
  "Strawberry",
  "Caramel",
];

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-6 border-b border-gray-200 pb-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          text-left
          text-base
          font-semibold
          text-gray-800
          sm:text-lg
        "
      >
        <span>{title}</span>

        {open ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </button>

      {open && (
        <div className="mt-5 space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductFilter({
  category,
  setCategory,

  availability,
  setAvailability,

  selectedOccasions,
  setSelectedOccasions,

  selectedFlavours,
  setSelectedFlavours,

  minPrice,
  setMinPrice,

  maxPrice,
  setMaxPrice,
}) {
  // Toggle availability
  const toggleAvailability = (item) => {
    if (availability.includes(item)) {
      setAvailability(
        availability.filter(
          (x) => x !== item
        )
      );
    } else {
      setAvailability([
        ...availability,
        item,
      ]);
    }
  };

  // Toggle occasion
  const toggleOccasion = (item) => {
    if (selectedOccasions.includes(item)) {
      setSelectedOccasions(
        selectedOccasions.filter(
          (x) => x !== item
        )
      );
    } else {
      setSelectedOccasions([
        ...selectedOccasions,
        item,
      ]);
    }
  };

  // Toggle flavour
  const toggleFlavour = (item) => {
    if (selectedFlavours.includes(item)) {
      setSelectedFlavours(
        selectedFlavours.filter(
          (x) => x !== item
        )
      );
    } else {
      setSelectedFlavours([
        ...selectedFlavours,
        item,
      ]);
    }
  };

  return (
    <div
      className="
        w-full
        lg:sticky
        lg:top-24
      "
    >
      {/* =====================================================
          FILTER TITLE
      ====================================================== */}

      <div className="mb-6 flex items-center justify-between">
        <h2
          className="
            text-xl
            font-bold
            text-gray-900
            sm:text-2xl
          "
        >
          Filter
        </h2>
      </div>

      {/* =====================================================
          AVAILABILITY
      ====================================================== */}

      <FilterSection title="Availability">
        {["In Stock", "Out of Stock"].map(
          (item) => (
            <label
              key={item}
              className="
                flex
                min-h-[40px]
                cursor-pointer
                items-center
                gap-3
                rounded-lg
                px-1
                text-sm
                text-gray-700
                transition
                hover:bg-gray-50
                sm:text-base
              "
            >
              <input
                type="checkbox"
                checked={availability.includes(
                  item
                )}
                onChange={() =>
                  toggleAvailability(item)
                }
                className="
                  h-4
                  w-4
                  shrink-0
                  cursor-pointer
                  accent-[#a8418b]
                "
              />

              <span>{item}</span>
            </label>
          )
        )}
      </FilterSection>

      {/* =====================================================
          PRICE
      ====================================================== */}

      <FilterSection title="Price">
        <p className="text-xs text-gray-500 sm:text-sm">
          Highest price is ₦250,000
        </p>

        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-2
            sm:gap-3
          "
        >
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(e.target.value)
            }
            placeholder="From"
            className="
              min-w-0
              w-full
              rounded-lg
              border
              border-gray-300
              bg-white
              p-2.5
              text-sm
              outline-none
              transition
              focus:border-[#a8418b]
              focus:ring-1
              focus:ring-[#a8418b]
              sm:p-3
            "
          />

          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
            placeholder="To"
            className="
              min-w-0
              w-full
              rounded-lg
              border
              border-gray-300
              bg-white
              p-2.5
              text-sm
              outline-none
              transition
              focus:border-[#a8418b]
              focus:ring-1
              focus:ring-[#a8418b]
              sm:p-3
            "
          />
        </div>
      </FilterSection>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <FilterSection title="Categories">
        <div className="space-y-1">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                setCategory(item)
              }
              className={`
                block
                w-full
                rounded-lg
                px-2
                py-2.5
                text-left
                text-sm
                transition
                sm:text-base

                ${
                  category === item
                    ? `
                      bg-[#a8418b]/10
                      font-semibold
                      text-[#a8418b]
                    `
                    : `
                      text-gray-700
                      hover:bg-gray-50
                      hover:text-[#a8418b]
                    `
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* =====================================================
          OCCASION
      ====================================================== */}

      <FilterSection title="Occasion">
        {occasions.map((item) => (
          <label
            key={item}
            className="
              flex
              min-h-[40px]
              cursor-pointer
              items-center
              gap-3
              rounded-lg
              px-1
              text-sm
              text-gray-700
              transition
              hover:bg-gray-50
              sm:text-base
            "
          >
            <input
              type="checkbox"
              checked={selectedOccasions.includes(
                item
              )}
              onChange={() =>
                toggleOccasion(item)
              }
              className="
                h-4
                w-4
                shrink-0
                cursor-pointer
                accent-[#a8418b]
              "
            />

            <span>{item}</span>
          </label>
        ))}
      </FilterSection>

      {/* =====================================================
          FLAVOURS
      ====================================================== */}

      <FilterSection title="Flavours">
        {flavours.map((item) => (
          <label
            key={item}
            className="
              flex
              min-h-[40px]
              cursor-pointer
              items-center
              gap-3
              rounded-lg
              px-1
              text-sm
              text-gray-700
              transition
              hover:bg-gray-50
              sm:text-base
            "
          >
            <input
              type="checkbox"
              checked={selectedFlavours.includes(
                item
              )}
              onChange={() =>
                toggleFlavour(item)
              }
              className="
                h-4
                w-4
                shrink-0
                cursor-pointer
                accent-[#a8418b]
              "
            />

            <span>{item}</span>
          </label>
        ))}
      </FilterSection>
    </div>
  );
}
