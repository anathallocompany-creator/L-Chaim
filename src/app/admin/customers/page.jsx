"use client";

import { useEffect, useState } from "react";

import CustomerToolbar from "@/components/admin/customers/CustomerToolbar";
import CustomersTable from "@/components/admin/customers/CustomersTable";
import CustomerModal from "@/components/admin/customers/CustomerModal";
import CustomerDetailsModal from "@/components/admin/customers/CustomerDetailsModal";
import DeleteCustomerModal from "@/components/admin/customers/DeleteCustomerModal";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  async function loadCustomers() {
    try {
      const res = await fetch("/api/customer");

      const data = await res.json();

      setCustomers(data.customers || []);
      setFilteredCustomers(data.customers || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  function handleSearch(value) {
    if (!value) {
      setFilteredCustomers(customers);
      return;
    }

    const keyword = value.toLowerCase();

    setFilteredCustomers(
      customers.filter(
        (customer) =>
          customer.name?.toLowerCase().includes(keyword) ||
          customer.email?.toLowerCase().includes(keyword) ||
          customer.phone?.toLowerCase().includes(keyword)
      )
    );
  }

  return (
    <div className="space-y-8">

      <CustomerToolbar
        onSearch={handleSearch}
        onAdd={() => {
          setSelectedCustomer(null);
          setCustomerModalOpen(true);
        }}
      />

      {loading ? (
        <div className="py-20 text-center">
          Loading customers...
        </div>
      ) : (
        <CustomersTable
          customers={filteredCustomers}
          onView={(customer) => {
            setSelectedCustomer(customer);
            setDetailsOpen(true);
          }}
          onEdit={(customer) => {
            setSelectedCustomer(customer);
            setCustomerModalOpen(true);
          }}
          onDelete={(customer) => {
            setSelectedCustomer(customer);
            setDeleteOpen(true);
          }}
        />
      )}

      <CustomerModal
        open={customerModalOpen}
        customer={selectedCustomer}
        onClose={() => {
          setCustomerModalOpen(false);
          setSelectedCustomer(null);
        }}
        onSaved={loadCustomers}
      />

      <CustomerDetailsModal
        open={detailsOpen}
        customer={selectedCustomer}
        onClose={() => {
          setDetailsOpen(false);
          setSelectedCustomer(null);
        }}
      />

      <DeleteCustomerModal
        open={deleteOpen}
        customer={selectedCustomer}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedCustomer(null);
        }}
        onDeleted={loadCustomers}
      />
    </div>
  );
}