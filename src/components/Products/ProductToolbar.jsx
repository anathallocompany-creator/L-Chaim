"use client";

import {
  LayoutGrid,
  List,
} from "lucide-react";

export default function ProductToolbar({
  total,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">

      <div className="flex items-center gap-4">

        <span className="font-medium">
          Sort by:
        </span>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="border rounded px-3 py-2"
        >
          <option value="default">
            Default
          </option>

          <option value="az">
            Alphabetically A-Z
          </option>

          <option value="price-low">
            Price Low → High
          </option>

          <option value="price-high">
            Price High → Low
          </option>

        </select>

      </div>

      <div className="flex items-center gap-6">

        <p className="text-gray-500">
          {total} Products
        </p>

        <button>

          <LayoutGrid />

        </button>

        <button>

          <List />

        </button>

      </div>

    </div>
  );
}