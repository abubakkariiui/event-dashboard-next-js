"use client";

import React from "react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { GrFavorite } from "react-icons/gr";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="hidden md:flex md:flex-col md:fixed md:top-28 md:left-5 md:bottom-10 md:rounded-lg md:w-20 md:bg-gray-50 md:justify-between">
      <div className="flex flex-col items-center justify-center mt-5">
        <Link href="/dashboard/table">
          <div
            className={`p-3 rounded-full ${
              isActive("/dashboard/table")
                ? "bg-[#eceaff] text-blue-500"
                : "bg-gray-200 text-gray-500"
            } flex items-center justify-center`}
          >
            <RxDashboard size={24} />
          </div>
        </Link>
        <Link href="/dashboard/favourite" className="mt-4">
          <div
            className={`p-3 rounded-full ${
              isActive("/dashboard/favourite")
                ? "bg-[#eceaff] text-blue-500"
                : "bg-gray-200 text-gray-500"
            } flex items-center justify-center`}
          >
            <GrFavorite size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
