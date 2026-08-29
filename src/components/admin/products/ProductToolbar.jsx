"use client";

import {
  Search,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

export default function ProductToolbar({
  search,
  setSearch,
  category,
  setCategory,
  stockFilter,
  setStockFilter,
  sortBy,
  setSortBy,
  onAddProduct,
}) {
  return (
    <div className="bg-white rounded-2xl shadow border p-6 mb-8">

      <div className="flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-between">

        {/* Left */}

        <div className="flex flex-col md:flex-row gap-4 flex-1">

          {/* Search */}

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search cakes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                h-12
                pl-12
                pr-4
                rounded-xl
                border
                 border-gray-300
                outline-none
                focus:border-pink-500
              "
            />

          </div>

          {/* Category */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              h-12
              px-4
              rounded-xl
              border
               border-gray-300
              outline-none
              focus:border-pink-500
            "
          >
            <option value="All">
              All Categories
            </option>

            <option value="Birthday Cakes">
              Birthday Cakes
            </option>

            <option value="Wedding Cakes">
              Wedding Cakes
            </option>

            <option value="Cupcakes">
              Cupcakes
            </option>

            <option value="Bread">
              Bread
            </option>

            <option value="Pastries">
              Pastries
            </option>

            <option value="Desserts">
              Desserts
            </option>

            <option value="Cookies">
              Cookies
            </option>

          </select>

          {/* Stock */}

          <select
            value={stockFilter}
            onChange={(e) =>
              setStockFilter(e.target.value)
            }
            className="
              h-12
              px-4
              rounded-xl
              border
              border-gray-300
              outline-none
              focus:border-pink-500
            "
          >
            <option value="All">
              All Stock
            </option>

            <option value="In Stock">
              In Stock
            </option>

            <option value="Out of Stock">
              Out of Stock
            </option>

          </select>

          {/* Sort */}

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="
              h-12
              px-4
              rounded-xl
              border
               border-gray-300
              outline-none
              focus:border-pink-500
            "
          >
            <option value="latest">
              Latest
            </option>

            <option value="priceLow">
              Price: Low → High
            </option>

            <option value="priceHigh">
              Price: High → Low
            </option>

            <option value="name">
              Name A-Z
            </option>

            <option value="rating">
              Highest Rating
            </option>

            <option value="stock">
              Highest Stock
            </option>

          </select>

        </div>

        {/* Right */}

        <button
          onClick={onAddProduct}
          className="
            h-12
            px-6
            rounded-xl
            bg-[#922b6a]
            hover:bg-[#9d216c]
            text-white
            flex
            items-center
            justify-center
            gap-2
            font-semibold
            transition
            whitespace-nowrap
          "
        >

          <Plus size={18} />

          Add Product

        </button>

      </div>

      {/* Filter Info */}

      <div className="mt-5 flex items-center gap-2 text-gray-500">

        <SlidersHorizontal size={16} />

        <span className="text-sm">
          Use the filters above to quickly find products.
        </span>

      </div>

    </div>
  );
}