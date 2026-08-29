
"use client";

import { Search, Plus, Filter } from "lucide-react";

export default function CustomerToolbar({
  search,
  setSearch,
  status,
  setStatus,
  onAdd,
}) {
  return (
    <div
      className="
        w-full
        min-w-0
        rounded-2xl
        border
        bg-white
        p-4
        shadow-sm
        sm:p-5
        lg:p-6
      "
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          gap-4
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        {/* Title */}

        <div className="min-w-0">

          <h1
            className="
              text-xl
              font-bold
              text-gray-800
              sm:text-2xl
            "
          >
            Customers
          </h1>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
              sm:text-base
            "
          >
            Manage your bakery customers
          </p>

        </div>

        {/* =================================================
            CONTROLS
        ================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:flex
            lg:w-auto
          "
        >

          {/* Search */}

          <div
            className="
              relative
              w-full
              sm:col-span-2
              lg:w-64
              xl:w-72
            "
          >

            <Search
              size={18}
              className="
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-gray-400
                sm:left-4
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search customer..."
              className="
                h-11
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-4
                text-sm
                text-gray-700
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#922b6a]
                focus:ring-2
                focus:ring-[#922b6a]/10
                sm:h-12
                sm:pl-11
              "
            />

          </div>

          {/* Status Filter */}

          <div
            className="
              relative
              w-full
              lg:w-48
            "
          >

            <Filter
              size={18}
              className="
                pointer-events-none
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-gray-400
                sm:left-4
              "
            />

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="
                h-11
                w-full
                cursor-pointer
                appearance-none
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-9
                text-sm
                text-gray-700
                outline-none
                transition
                focus:border-[#922b6a]
                focus:ring-2
                focus:ring-[#922b6a]/10
                sm:h-12
                sm:pl-11
              "
            >
              <option value="">
                All Status
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>

              <option value="Blocked">
                Blocked
              </option>

            </select>

            {/* Custom arrow */}

            <div
              className="
                pointer-events-none
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            >
              ▾
            </div>

          </div>

          {/* Add Customer */}

          <button
            type="button"
            onClick={onAdd}
            className="
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#922b6a]
              px-5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#7f245d]
              active:scale-[0.98]
              sm:h-12
              lg:w-auto
              lg:whitespace-nowrap
            "
          >

            <Plus size={18} />

            <span>
              Add Customer
            </span>

          </button>

        </div>

      </div>

    </div>
  );
}

