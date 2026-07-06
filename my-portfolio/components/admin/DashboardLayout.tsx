"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";
import Loader from "@/components/ui/Loader";
import AdminSidebar from "./AdminSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const updateSidebar = () => {
      setCollapsed(
        localStorage.getItem("sidebar") ===
          "collapsed"
      );
    };

    updateSidebar();

    window.addEventListener(
      "storage",
      updateSidebar
    );

    const interval = setInterval(
      updateSidebar,
      200
    );

    return () => {
      window.removeEventListener(
        "storage",
        updateSidebar
      );

      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [loading, user, router]);

  if (loading) return <Loader />;

  if (!user) return null;

  return (
    <div className="flex">
      <AdminSidebar />

      <main
        className={`min-h-screen bg-[#050816] transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  );
}