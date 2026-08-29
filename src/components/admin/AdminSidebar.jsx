
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Calendar,
  Users,
  Mail,
  Image,
  UserRound,
  Star,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Image,
  },
  {
    name: "Orders",
    href: "/admin/order",
    icon: Calendar,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    name: "Reviews",
    href: "/admin/reviews",
    icon: Star,
  },
  {
    name: "Messages",
    href: "/admin/message",
    icon: Mail,
  },
  {
    name: "Staff",
    href: "/admin/staff",
    icon: UserRound,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const [admin, setAdmin] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get admin information
  useEffect(() => {
    const adminAuth = JSON.parse(
      localStorage.getItem("adminAuth") || "null"
    );

    if (adminAuth) {
      setAdmin(adminAuth);
    }
  }, []);

  // Automatically close sidebar when changing pages
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminProfile");

    window.location.href = "/admin/login";
  };

  return (
    <>
      {/* =====================================================
          MOBILE MENU BUTTON
      ====================================================== */}
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
        className="
          fixed
          top-13
          left-4
          z-40
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-[#160913]
          text-white
          shadow-lg
          border
          border-white/20
          transition
          hover:bg-[#24101f]
          md:hidden
        "
      >
        <Menu size={24} />
      </button>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-sm
            md:hidden
          "
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          flex
          min-h-screen
          w-72
          flex-col
          border-r
          border-white/40
          bg-[#160913]
          p-6
          text-white

          transform
          transition-transform
          duration-300
          ease-in-out

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          md:static
          md:translate-x-0
        `}
      >
        {/* =====================================================
            MOBILE CLOSE BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
          className="
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            bg-white/10
            text-white
            transition
            hover:bg-white/20
            md:hidden
          "
        >
          <X size={20} />
        </button>

        {/* =====================================================
            LOGO / HEADER
        ====================================================== */}
        <div className="mb-12">
          <div className="flex flex-col items-center gap-2 pt-4">
            <div className="w-56 rounded-full">
              <img
                src="/logo.png"
                alt="L'Chaim logo"
                className="w-56 cursor-pointer"
              />
            </div>

            <p className="text-lg text-white/60">
              L&apos;Chaim Management
            </p>

            <p className="text-center text-sm text-white/40">
              Cakes • Orders • Customers
            </p>
          </div>
        </div>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}
        <nav className="flex-1 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;

            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  relative
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-4
                  py-3
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-white
                        text-[#4E1F42]
                        shadow-lg
                      `
                      : `
                        text-white/80
                        hover:bg-white/10
                        hover:text-white
                      `
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <div
                    className="
                      absolute
                      left-0
                      top-2
                      bottom-2
                      w-1
                      rounded-full
                      bg-[#FFD369]
                    "
                  />
                )}

                <Icon
                  size={20}
                  className="shrink-0"
                />

                <span className="font-medium">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            ADMIN PROFILE
        ====================================================== */}
        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-white/5
            p-4
          "
        >
          <img
            src={admin?.image || "/avatar1.png"}
            alt={admin?.name || "Admin"}
            className="
              h-12
              w-12
              shrink-0
              rounded-full
              border
              border-white/20
              object-cover
            "
          />

          <div className="min-w-0">
            <p className="text-sm text-white/60">
              Store Manager
            </p>

            <h4 className="font-semibold">
              {admin?.name || "Admin"}
            </h4>

            {admin?.email && (
              <p className="max-w-[150px] truncate text-xs text-white/50">
                {admin.email}
              </p>
            )}
          </div>
        </div>

        {/* =====================================================
            LOGOUT
        ====================================================== */}
        <button
          type="button"
          onClick={handleLogout}
          className="
            mt-4
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-red-400
            transition
            hover:bg-red-50/10
          "
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>
    </>
  );
}

