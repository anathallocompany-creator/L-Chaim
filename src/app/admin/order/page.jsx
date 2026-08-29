"use client";

import { useEffect, useState } from "react";

import OrdersTable from "@/components/admin/orders/OrdersTable";
import OrderToolbar from "@/components/admin/orders/OrderToolbar";
import OrderDetailsModal from "@/components/admin/orders/OrderDetailsModal";
import DeleteOrderModal from "@/components/admin/orders/DeleteOrderModal";
import UpdateStatusModal from "@/components/admin/orders/UpdateStatusModal";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  async function loadOrders() {
    try {
      setLoading(true);

      const res = await fetch("/api/order", {
        cache: "no-store",
      });

      const data = await res.json();

      // Handles both { orders: [...] } and [...] responses
      setOrders(data.orders || data || []);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="space-y-8">

      <OrderToolbar />

      {loading ? (

        <div className="py-20 text-center">
          Loading...
        </div>

      ) : (

        <OrdersTable
          orders={orders}
          onView={(order) => {
            setSelectedOrder(order);
            setDetailsOpen(true);
          }}
          onEdit={(order) => {
            setSelectedOrder(order);
            setStatusOpen(true);
          }}
          onDelete={(order) => {
            setSelectedOrder(order);
            setDeleteOpen(true);
          }}
        />

      )}

      <OrderDetailsModal
        open={detailsOpen}
        order={selectedOrder}
        onClose={() => setDetailsOpen(false)}
        onUpdated={loadOrders}
      />

      <UpdateStatusModal
        open={statusOpen}
        order={selectedOrder}
        onClose={() => setStatusOpen(false)}
        onUpdate={loadOrders}
      />

      <DeleteOrderModal
        open={deleteOpen}
        order={selectedOrder}
        onClose={() => setDeleteOpen(false)}
        onDeleted={loadOrders}
      />

    </div>
  );
}