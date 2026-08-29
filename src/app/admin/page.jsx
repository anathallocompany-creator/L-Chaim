"use client";

import { useEffect, useState } from "react";
import DashboardStats from "@/components/admin/DashboardStats";
import DashboardCharts from "@/components/admin/DashboardCharts";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    customers: 0,
    revenue: 0,
    staffs: 0,
    reviews: 0,
    categories: 0,
    wishlist: 0,
    monthlyActivity: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await fetch("/api/dashboard");

      if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const data = await res.json();

      setStats(data);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <DashboardStats stats={stats} />
      <DashboardCharts stats={stats} />
    </div>
  );
}