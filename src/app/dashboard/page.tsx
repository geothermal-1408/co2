"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  IconDashboard,
  IconLeaf,
  IconGraph,
  IconScale,
  IconFileReport,
} from "@tabler/icons-react";

export function sideBar() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconDashboard className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
    {
      label: "Carbon Footprint",
      href: "/footprint",
      icon: <IconLeaf className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
    {
      label: "Sink Analysis",
      href: "/carbonsink",
      icon: <IconGraph className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
    {
      label: "Neutrality",
      href: "/neutrality",
      icon: <IconScale className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
    {
      label: "Report",
      href: "/report",
      icon: <IconFileReport className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-5">
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SidebarLink link={link} />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "John Doe",
                href: "/profile",
                icon: (
                  <Image
                    src=""
                    className="h-9 w-9 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

// Logo Components
export const Logo = () => (
  <Link href="/dashboard" className="font-normal flex space-x-5 items-center text-m text-black py-1 ">
    <div className="h-7 w-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex-shrink-0" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-semibold text-lg text-black dark:text-white whitespace-pre"
    >
      CarbonTrack
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link href="/profile" className="font-normal flex space-x-2 items-center text-sm text-black py-1">
    <div className="h-5 w-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex-shrink-0" />
  </Link>
);

export const Dashboard = () => {
  const emissionsData = [
    { name: "Jan", emissions: 200 },
    { name: "Feb", emissions: 250 },
    { name: "Mar", emissions: 230 },
    { name: "Apr", emissions: 270 },
    { name: "May", emissions: 220 },
    { name: "Jun", emissions: 190 },
  ];

  const energyData = [
    { name: "Jan", energy: 50 },
    { name: "Feb", energy: 75 },
    { name: "Mar", energy: 150 },
    { name: "Apr", energy: 125 },
    { name: "May", energy: 175 },
    { name: "Jun", energy: 200 },
  ];

  const intensityData = [
    { name: "Jan", value: 15 },
    { name: "Feb", value: 25 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 20 },
    { name: "May", value: 30 },
    { name: "Jun", value: 25 },
  ];

  const COLORS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];
  return (
      <div className="container flex min-h-screen">
        <main className="main-content flex-grow p-6">
          {/* Dashboard Section */}
          <section className="dashboard mb-8 text-center">
            <h1 className="text-3xl text-black dark:text-white mb-6">
              DASHBOARD
            </h1>

            {/* Responsive Grid for Dashboard Cards */}
            <div className="dashboard-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Total Emissions */}
              <div className="card p-6 bg-green-100 dark:bg-slate-700 rounded-lg shadow-md flex flex-col items-center">
                <h2 className="text-2xl mb-4">Total Emissions</h2>
                <p className="text-xl mb-6">12,345 tCO2e</p>
                <BarChart
                  width={300}
                  height={250}
                  data={emissionsData}
                  margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, "auto"]} />
                  <Tooltip />
                  <Bar dataKey="emissions" fill="#e74c3c" />
                </BarChart>
              </div>

              {/* Card 2: Energy Consumption */}
              <div className="card p-6 bg-green-100 dark:bg-slate-700 rounded-lg shadow-md flex flex-col items-center">
                <h2 className="text-2xl mb-4">Energy Consumption</h2>
                <p className="text-xl mb-6">45,678 MWh</p>
                <LineChart
                  width={300}
                  height={250}
                  data={energyData}
                  margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, "auto"]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="energy"
                    stroke="#3498db"
                    fill="#3498db"
                  />
                </LineChart>
              </div>

              {/* Card 3: Carbon Intensity */}
              <div className="card p-6 bg-green-100 dark:bg-slate-700 rounded-lg shadow-md flex flex-col items-center">
                <h2 className="text-2xl mb-4">Carbon Intensity</h2>
                <p className="text-xl mb-6">0.85 tCO2e/t</p>
                <PieChart width={300} height={250}>
                  <Pie
                    data={intensityData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                  >
                    {intensityData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </section>

          {/* Carbon Neutrality Section */}
          <section className="carbon-neutrality mt-8">
            <h2 className="text-3xl mb-6">Carbon Neutrality</h2>

            {/* Responsive Grid for Strategy Cards */}
            <div className="strategy-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Strategy Card 1 */}
              <div className="card p-6 bg-blue-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl mb-4">Renewable Energy Integration</h3>
                <p>
                  Explore opportunities to increase the share of renewable
                  energy in the mine’s energy mix, such as solar and wind.
                </p>
              </div>

              {/* Strategy Card 2 */}
              <div className="card p-6 bg-blue-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl mb-4">Energy Efficiency Measures</h3>
                <p>
                  Implement energy-efficient technologies and optimize processes
                  to reduce overall energy consumption.
                </p>
              </div>

              {/* Strategy Card 3 */}
              <div className="card p-6 bg-blue-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl mb-4">Carbon Capture and Storage</h3>
                <p>
                  Explore the feasibility of carbon capture and storage
                  technologies to mitigate emissions.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
};

export default sideBar;
