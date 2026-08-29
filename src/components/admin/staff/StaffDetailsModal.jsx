"use client";

import Image from "next/image";
import {
  X,
  Mail,
  Phone,
  Briefcase,
  Building2,
  Calendar,
  BadgeDollarSign,
  MapPin,
  User,
} from "lucide-react";

function InfoCard({ icon, label, value }) {
  return (
    <div className="border rounded-xl p-4 bg-gray-50">
      <div className="flex items-center gap-2 text-gray-500 mb-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>

      <p className="font-semibold text-gray-800 break-words">
        {value || "-"}
      </p>
    </div>
  );
}

export default function StaffDetailsModal({
  open,
  staff,
  onClose,
}) {
  if (!open || !staff) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-y-auto">

        {/* Header */}

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center z-10">

          <div>

            <h2 className="text-2xl font-bold">
              Staff Details
            </h2>

            <p className="text-gray-500 mt-1">
              Employee Information
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X />
          </button>

        </div>

        <div className="p-8 space-y-10">

          {/* Profile */}

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

            <div className="relative w-44 h-44 rounded-3xl overflow-hidden border shadow">

              <Image
                src={staff.image || "/avatar.png"}
                alt={staff.fullName}
                fill
                className="object-cover"
              />

            </div>

            <div className="flex-1">

              <h2 className="text-3xl font-bold">
                {staff.fullName}
              </h2>

              <p className="text-pink-600 font-semibold mt-2">
                {staff.role}
              </p>

              <div className="flex flex-wrap gap-3 mt-5">

                <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium">
                  {staff.department}
                </span>

                <span
                  className={`px-4 py-2 rounded-full font-medium ${
                    staff.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {staff.status}
                </span>

              </div>

            </div>

          </div>

          {/* Personal Information */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              <InfoCard
                icon={<User size={18} />}
                label="Employee ID"
                value={staff.employeeId}
              />

              <InfoCard
                icon={<Mail size={18} />}
                label="Email"
                value={staff.email}
              />

              <InfoCard
                icon={<Phone size={18} />}
                label="Phone"
                value={staff.phone}
              />

              <InfoCard
                icon={<Calendar size={18} />}
                label="Date Joined"
                value={
                  staff.joinDate
                    ? new Date(staff.joinDate).toLocaleDateString()
                    : "-"
                }
              />

              <InfoCard
                icon={<Building2 size={18} />}
                label="Department"
                value={staff.department}
              />

              <InfoCard
                icon={<Briefcase size={18} />}
                label="Role"
                value={staff.role}
              />

            </div>

          </div>

          {/* Employment */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Employment Details
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              <InfoCard
                icon={<BadgeDollarSign size={18} />}
                label="Salary"
                value={`₦${Number(
                  staff.salary || 0
                ).toLocaleString()}`}
              />

              <InfoCard
                icon={<Calendar size={18} />}
                label="Employment Type"
                value={staff.employmentType}
              />

              <InfoCard
                icon={<Building2 size={18} />}
                label="Shift"
                value={staff.shift}
              />

            </div>

          </div>

          {/* Address */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Address
            </h3>

            <div className="border rounded-2xl p-6 bg-gray-50">

              <div className="flex gap-3">

                <MapPin
                  size={22}
                  className="text-pink-600 mt-1"
                />

                <div>

                  <p className="font-semibold">
                    {staff.address || "No address provided"}
                  </p>

                  {staff.city && (
                    <p className="text-gray-500 mt-2">
                      {staff.city}, {staff.state}
                    </p>
                  )}

                </div>

              </div>

            </div>

          </div>

          {/* Emergency Contact */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Emergency Contact
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <InfoCard
                icon={<User size={18} />}
                label="Contact Name"
                value={staff.emergencyName}
              />

              <InfoCard
                icon={<Phone size={18} />}
                label="Contact Phone"
                value={staff.emergencyPhone}
              />

            </div>

          </div>

          {/* Notes */}

          {staff.notes && (

            <div>

              <h3 className="text-xl font-bold mb-5">
                Notes
              </h3>

              <div className="border rounded-2xl p-6 bg-yellow-50 leading-8">

                {staff.notes}

              </div>

            </div>

          )}

        </div>

        {/* Footer */}

        <div className="border-t px-8 py-5 flex justify-end">

          <button
            onClick={onClose}
            className="px-8 py-3 rounded-xl bg-[#922b6a] text-white hover:bg-[#7f235c]"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}