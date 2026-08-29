"use client";

export default function DashboardStats({
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


 const cards = [
  {
    title: "Products",
    value: stats.products,
  },
  {
    title: "Orders",
    value: stats.orders,
  },
  {
    title: "Customers",
    value: stats.customers,
  },
  {
    title: "Revenue",
    value: `₦${stats.revenue.toLocaleString()}`,
  },
];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[#572649] text-white p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-sm opacity-80">
            {card.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}