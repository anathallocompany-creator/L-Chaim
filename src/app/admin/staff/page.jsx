"use client";

import { useEffect, useState } from "react";

import StaffToolbar from "@/components/admin/staff/StaffToolbar";
import StaffTable from "@/components/admin/staff/StaffTable";
import StaffModal from "@/components/admin/staff/StaffModal";
import StaffDetailsModal from "@/components/admin/staff/StaffDetailsModal";
import DeleteStaffModal from "@/components/admin/staff/DeleteStaffModal";

export default function StaffPage() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedStaff, setSelectedStaff] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");

  async function loadStaff() {
    try {
      setLoading(true);

      const res = await fetch("/api/staffs");

      const data = await res.json();

      if (res.ok) {
        setStaff(data.staff || []);
      }

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStaff();
  }, []);

  const filteredStaff = staff.filter((person) => {
    const keyword = search.toLowerCase();

    return (
      person.fullName?.toLowerCase().includes(keyword) ||
      person.email?.toLowerCase().includes(keyword) ||
      person.phone?.toLowerCase().includes(keyword) ||
      person.department?.toLowerCase().includes(keyword) ||
      person.role?.toLowerCase().includes(keyword) ||
      person.employeeId?.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="space-y-8">

      <StaffToolbar
        search={search}
        setSearch={setSearch}
        onAdd={() => {
          setSelectedStaff(null);
          setModalOpen(true);
        }}
      />

      {loading ? (

        <div className="bg-white rounded-2xl p-20 text-center shadow">

          Loading Staff...

        </div>

      ) : (

        <StaffTable
          staff={filteredStaff}
          onView={(person) => {
            setSelectedStaff(person);
            setDetailsOpen(true);
          }}
          onEdit={(person) => {
            setSelectedStaff(person);
            setModalOpen(true);
          }}
          onDelete={(person) => {
            setSelectedStaff(person);
            setDeleteOpen(true);
          }}
        />

      )}

      {/* Add/Edit Staff */}

      <StaffModal
        open={modalOpen}
        staff={selectedStaff}
        onClose={() => {
          setModalOpen(false);
          setSelectedStaff(null);
        }}
        onSaved={loadStaff}
      />

      {/* View Staff */}

      <StaffDetailsModal
        open={detailsOpen}
        staff={selectedStaff}
        onClose={() => {
          setDetailsOpen(false);
          setSelectedStaff(null);
        }}
      />

      {/* Delete Staff */}

      <DeleteStaffModal
        open={deleteOpen}
        staff={selectedStaff}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedStaff(null);
        }}
        onDeleted={loadStaff}
      />

    </div>
  );
}