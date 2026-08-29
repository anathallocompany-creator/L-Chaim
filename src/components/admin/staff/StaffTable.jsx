
"use client";

import Image from "next/image";
import {
  Eye,
  Pencil,
  Trash2,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

export default function StaffTable({
  staff = [],
  onView,
  onEdit,
  onDelete,
}) {
  const statusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "On Leave":
        return "bg-yellow-100 text-yellow-700";

      case "Suspended":
        return "bg-red-100 text-red-700";

      case "Resigned":
        return "bg-gray-100 text-gray-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border bg-white shadow">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          gap-3
          border-b
          px-4
          py-4
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-6
          sm:py-5
        "
      >
        <div className="min-w-0">
          <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
            Staff Members
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage all employees.
          </p>
        </div>

        <span
          className="
            w-fit
            rounded-full
            bg-pink-100
            px-3
            py-1.5
            text-xs
            font-semibold
            text-pink-700
            sm:px-4
            sm:py-2
            sm:text-sm
          "
        >
          {staff.length} Staff
        </span>
      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {staff.length === 0 && (
        <div className="py-16 text-center text-gray-500 sm:py-20">
          No staff found.
        </div>
      )}

      {/* =====================================================
          MOBILE / TABLET CARDS
          Visible below lg
      ====================================================== */}

      {staff.length > 0 && (
        <div className="block divide-y lg:hidden">

          {staff.map((member) => (
            <div
              key={member._id}
              className="
                p-4
                transition
                hover:bg-pink-50
                sm:p-5
              "
            >

              {/* Staff Header */}

              <div className="flex items-start justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3">

                  {/* Avatar */}

                  <div
                    className="
                      relative
                      h-12
                      w-12
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Image
                      src={
                        member.photo?.url &&
                        member.photo.url.trim() !== ""
                          ? member.photo.url
                          : "/avatar1.png"
                      }
                      alt={member.fullName || "Staff"}
                      fill
                      sizes="56px"
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  {/* Name */}

                  <div className="min-w-0">

                    <h3 className="truncate font-semibold text-gray-800">
                      {member.fullName || "Unnamed Staff"}
                    </h3>

                    <p className="truncate text-sm text-gray-500">
                      {member.employeeId || "-"}
                    </p>

                  </div>

                </div>

                {/* Status */}

                <span
                  className={`
                    shrink-0
                    rounded-full
                    px-2.5
                    py-1
                    text-[11px]
                    font-semibold
                    sm:px-3
                    sm:text-xs
                    ${statusColor(member.status)}
                  `}
                >
                  {member.status || "Unknown"}
                </span>

              </div>

              {/* Staff Details */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-3
                  text-sm
                  sm:grid-cols-2
                "
              >

                {/* Role */}

                <div>
                  <p className="text-xs text-gray-400">
                    Role
                  </p>

                  <p className="mt-1 font-medium text-gray-700">
                    {member.role || "-"}
                  </p>
                </div>

                {/* Department */}

                <div>
                  <p className="text-xs text-gray-400">
                    Department
                  </p>

                  <p className="mt-1 font-medium text-gray-700">
                    {member.department || "-"}
                  </p>
                </div>

                {/* Email */}

                <div className="min-w-0">

                  <p className="text-xs text-gray-400">
                    Email
                  </p>

                  <div className="mt-1 flex min-w-0 items-center gap-2 text-gray-700">

                    <Mail
                      size={14}
                      className="shrink-0 text-gray-400"
                    />

                    <span className="truncate">
                      {member.email || "-"}
                    </span>

                  </div>

                </div>

                {/* Phone */}

                <div>

                  <p className="text-xs text-gray-400">
                    Phone
                  </p>

                  <div className="mt-1 flex items-center gap-2 text-gray-700">

                    <Phone
                      size={14}
                      className="shrink-0 text-gray-400"
                    />

                    <span>
                      {member.phone || "-"}
                    </span>

                  </div>

                </div>

                {/* Salary */}

                <div>

                  <p className="text-xs text-gray-400">
                    Salary
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    ₦
                    {Number(
                      member.salary || 0
                    ).toLocaleString()}
                  </p>

                </div>

                {/* Joined */}

                <div>

                  <p className="text-xs text-gray-400">
                    Date Joined
                  </p>

                  <div className="mt-1 flex items-center gap-2 text-gray-600">

                    <Calendar
                      size={14}
                      className="shrink-0"
                    />

                    <span>
                      {member.joinDate
                        ? new Date(
                            member.joinDate
                          ).toLocaleDateString()
                        : "-"}
                    </span>

                  </div>

                </div>

              </div>

              {/* Actions */}

              <div
                className="
                  mt-4
                  flex
                  justify-end
                  gap-2
                  border-t
                  pt-4
                "
              >

                <button
                  type="button"
                  onClick={() => onView(member)}
                  aria-label={`View ${member.fullName}`}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-50
                    transition
                    hover:bg-green-100
                    active:scale-95
                  "
                >
                  <Eye
                    size={18}
                    className="text-green-600"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => onEdit(member)}
                  aria-label={`Edit ${member.fullName}`}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    transition
                    hover:bg-blue-100
                    active:scale-95
                  "
                >
                  <Pencil
                    size={18}
                    className="text-blue-600"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => onDelete(member)}
                  aria-label={`Delete ${member.fullName}`}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    transition
                    hover:bg-red-100
                    active:scale-95
                  "
                >
                  <Trash2
                    size={18}
                    className="text-red-600"
                  />
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

      {/* =====================================================
          DESKTOP TABLE
          Visible from lg
      ====================================================== */}

      {staff.length > 0 && (
        <div className="hidden overflow-x-auto lg:block">

          <table className="w-full min-w-[1100px]">

            <thead className="bg-gray-50">

              <tr className="text-left text-sm text-gray-600">

                <th className="whitespace-nowrap px-6 py-4">
                  Staff
                </th>

                <th className="whitespace-nowrap px-6 py-4">
                  Role
                </th>

                <th className="whitespace-nowrap px-6 py-4">
                  Department
                </th>

                <th className="whitespace-nowrap px-6 py-4">
                  Contact
                </th>

                <th className="whitespace-nowrap px-6 py-4">
                  Salary
                </th>

                <th className="whitespace-nowrap px-6 py-4">
                  Status
                </th>

                <th className="whitespace-nowrap px-6 py-4">
                  Joined
                </th>

                <th className="whitespace-nowrap px-6 py-4 text-right">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {staff.map((member) => (

                <tr
                  key={member._id}
                  className="
                    border-t
                    transition
                    hover:bg-pink-50
                  "
                >

                  {/* Staff */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          relative
                          h-14
                          w-14
                          shrink-0
                          overflow-hidden
                          rounded-full
                          border
                        "
                      >

                        <Image
                          src={
                            member.photo?.url &&
                            member.photo.url.trim() !== ""
                              ? member.photo.url
                              : "/avatar1.png"
                          }
                          alt={member.fullName || "Staff"}
                          fill
                          sizes="56px"
                          unoptimized
                          className="object-cover"
                        />

                      </div>

                      <div className="min-w-0">

                        <h3 className="font-semibold text-gray-800">
                          {member.fullName || "Unnamed Staff"}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {member.employeeId || "-"}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Role */}

                  <td className="px-6 py-5">
                    <p className="font-medium whitespace-nowrap">
                      {member.role || "-"}
                    </p>
                  </td>

                  {/* Department */}

                  <td className="px-6 py-5 whitespace-nowrap">
                    {member.department || "-"}
                  </td>

                  {/* Contact */}

                  <td className="px-6 py-5">

                    <div className="space-y-2 text-sm">

                      <div className="flex max-w-[220px] items-center gap-2 text-gray-700">

                        <Mail
                          size={14}
                          className="shrink-0"
                        />

                        <span className="truncate">
                          {member.email || "-"}
                        </span>

                      </div>

                      <div className="flex items-center gap-2 text-gray-700">

                        <Phone
                          size={14}
                          className="shrink-0"
                        />

                        <span className="whitespace-nowrap">
                          {member.phone || "-"}
                        </span>

                      </div>

                    </div>

                  </td>

                  {/* Salary */}

                  <td className="px-6 py-5 whitespace-nowrap">

                    <span className="font-semibold text-gray-800">
                      ₦
                      {Number(
                        member.salary || 0
                      ).toLocaleString()}
                    </span>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`
                        whitespace-nowrap
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        ${statusColor(member.status)}
                      `}
                    >
                      {member.status || "Unknown"}
                    </span>

                  </td>

                  {/* Joined */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">

                      <Calendar size={15} />

                      <span>
                        {member.joinDate
                          ? new Date(
                              member.joinDate
                            ).toLocaleDateString()
                          : "-"}
                      </span>

                    </div>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-2">

                      <button
                        type="button"
                        onClick={() => onView(member)}
                        aria-label={`View ${member.fullName}`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-green-50
                          transition
                          hover:bg-green-100
                          active:scale-95
                        "
                      >
                        <Eye
                          size={18}
                          className="text-green-600"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => onEdit(member)}
                        aria-label={`Edit ${member.fullName}`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-50
                          transition
                          hover:bg-blue-100
                          active:scale-95
                        "
                      >
                        <Pencil
                          size={18}
                          className="text-blue-600"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(member)}
                        aria-label={`Delete ${member.fullName}`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-red-50
                          transition
                          hover:bg-red-100
                          active:scale-95
                        "
                      >
                        <Trash2
                          size={18}
                          className="text-red-600"
                        />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

