"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminProtectedRoute({ children }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          router.replace("/admin-login");
          return;
        }

        const res = await fetch("/api/auth/verify-token", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminEmail");
          localStorage.removeItem("adminRole");

          router.replace("/admin-login");
          return;
        }

        setAuthorized(true);
      } catch (error) {
        console.error(error);

        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminEmail");
        localStorage.removeItem("adminRole");

        router.replace("/admin-login");
      } finally {
        setLoading(false);
      }
    };

    verifyLogin();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#572649] rounded-full animate-spin" />
      </div>
    );
  }

  if (!authorized) {
    return null;
  }

  return children;
}