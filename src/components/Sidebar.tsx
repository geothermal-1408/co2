// components/DashboardLayout.tsx
"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // Define the pages where the sidebar should be shown
  const pagesWithSidebar = ["/dashboard", "/footprint", "/carbonsink", "/neutrality", "/report"];

  // Check if the current route is in the defined pages
  const showSidebar = pagesWithSidebar.includes(pathname);

  // State to manage active link
  const [activeLink, setActiveLink] = useState<string>(pathname);

  // Update active link when the route changes
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen">
      {showSidebar && (
        <aside className="sidebar w-64 bg-gray-800 text-white flex flex-col border rounded-xl">
          <div className="sidebar-header p-4 bg-gray-900 text-center ">
            <h2 className="text-2xl font-bold">Carbon Neutral Mines</h2>
          </div>
          <nav className="sidebar-menu p-4">
            <ul className="space-y-2">
              <li className={`p-3 rounded-md ${activeLink === "/dashboard" ? 'bg-green-600' : 'hover:bg-green-600'}`}>
                <Link href="/dashboard" onClick={() => setActiveLink("/dashboard")}>Dashboard</Link>
              </li>
              <li className={`p-3 rounded-md ${activeLink === "/footprint" ? 'bg-green-600' : 'hover:bg-green-600'}`}>
                <Link href="/footprint" onClick={() => setActiveLink("/footprint")}>Carbon Footprint</Link>
              </li>
              <li className={`p-3 rounded-md ${activeLink === "/carbonsink" ? 'bg-green-600' : 'hover:bg-green-600'}`}>
                <Link href="/carbonsink" onClick={() => setActiveLink("/carbonsink")}>Sink Analysis</Link>
              </li>
              <li className={`p-3 rounded-md ${activeLink === "/neutrality" ? 'bg-green-600' : 'hover:bg-green-600'}`}>
                <Link href="/neutrality" onClick={() => setActiveLink("/neutrality")}>Neutrality</Link>
              </li>
              <li className={`p-3 rounded-md ${activeLink === "/report" ? 'bg-green-600' : 'hover:bg-green-600'}`}>
                <Link href="/report" onClick={() => setActiveLink("/report")}>Report</Link>
              </li>
            </ul>
          </nav>
        </aside>
      )}
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;