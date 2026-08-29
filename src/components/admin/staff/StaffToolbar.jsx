"use client";

import {
  Search,
  Plus,
  Filter,
  Users,
} from "lucide-react";

export default function StaffToolbar({
  search,
  setSearch,
  role,
  setRole,
  status,
  setStatus,
  onAdd,
}) {
  return (
    <div className="bg-white rounded-2xl shadow border p-6">

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">

            <Users className="text-[#922b6a]" />

            Staff Management

          </h1>

          <p className="text-gray-500 mt-1">
            Manage all staff members.
          </p>

        </div>

        {/* Add Button */}

        <button
          onClick={onAdd}
          className="
            bg-[#922b6a]
            hover:bg-[#7b2358]
            text-white
            px-5
            py-3
            rounded-xl
            flex
            items-center
            gap-2
            transition
          "
        >
          <Plus size={18} />

          Add Staff

        </button>

      </div>

      {/* Filters */}

      <div className="mt-6 grid md:grid-cols-3 gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search staff..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              border
              rounded-xl
              pl-11
              pr-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-[#922b6a]
            "
          />

        </div>

        {/* Role */}

        <div className="relative">

          <Filter
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="
              w-full
              border
              rounded-xl
              pl-11
              pr-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-[#922b6a]
            "
          >
            <option value="All">All Roles</option>

            <option>Administrator</option>

            <option>Manager</option>

            <option>Cake Decorator</option>

            <option>Baker</option>

            <option>Pastry Chef</option>

            <option>Sales Representative</option>

            <option>Cashier</option>

            <option>Delivery Rider</option>

            <option>Customer Support</option>

          </select>

        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-[#922b6a]
          "
        >
          <option value="All">All Status</option>

          <option>Active</option>

          <option>On Leave</option>

          <option>Suspended</option>

          <option>Resigned</option>

        </select>

      </div>

    </div>
  );
}