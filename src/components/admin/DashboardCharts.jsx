"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  CartesianGrid,
  Legend,
} from "recharts";

export default function DashboardCharts({
 stats = {
  products: 125,
  orders: 42,
  customers: 320,
  revenue: 2850000,
  staffs: 8,
  reviews: 126,
  categories: 12,
  wishlist: 95,
},

}) {


 const analyticsData = [
  {
    name: "Products",
    value: Number(stats.products || 0),
  },
  {
    name: "Orders",
    value: Number(stats.orders || 0),
  },
  {
    name: "Customers",
    value: Number(stats.customers || 0),
  },
  {
    name: "Reviews",
    value: Number(stats.reviews || 0),
  },
  {
    name: "Wishlist",
    value: Number(stats.wishlist || 0),
  },
  {
    name: "Staff",
    value: Number(stats.staffs || 0),
  },
  {
    name: "Categories",
    value: Number(stats.categories || 0),
  },
];


  const monthlyActivityData =
  stats?.monthlyActivity || [];
  const colors = [
    "#572649",
    "#ca5bab",
    "#22c55e",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
  ];

  const hasData = analyticsData.some(
    (item) => item.value > 0
  );

  console.log("Analytics Data:", analyticsData);
  console.log("stats:", stats);
  console.log("analyticsData:", analyticsData);
  const router = useRouter();




  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border lg:col-span-2">
        <h3 className="text-lg font-semibold mb-4">
          Store Overview
        </h3>

        <div className="w-full h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
              >
                {analyticsData.map((entry, index) => (
                  <Cell
                    key={`bar-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Sales Statistics */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-6">
            Monthly Orders & Revenue
          </h3>

          <div className="w-full h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyActivityData}>
                <CartesianGrid
                  stroke="#E5E7EB"
                  strokeDasharray="5 5"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Legend />

                <defs>
                  <linearGradient id="bookingGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5B5FEF" stopOpacity={0.8} />
                    <stop offset="50%" stopColor="#CA5BAB" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#5B5FEF" stopOpacity={0.05} />
                  </linearGradient>

                  <linearGradient id="inquiryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F87171" stopOpacity={0.8} />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#F87171" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="orders"
                  stroke="#5B5FEF"
                  fill="url(#bookingGradient)"
                  strokeWidth={3}
                  fillOpacity={1}
                  name="Orders"
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#F87171"
                  fill="url(#inquiryGradient)"
                  strokeWidth={3}
                  fillOpacity={1}
                  name="Revenue"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">
         Store Analytics
        </h3>

        <div className="w-full h-[320px]">
          {hasData ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {analyticsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              No data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}