"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
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

  const [darkMode, setDarkMode] = useState(false);
  const { setTheme } = useTheme();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex min-h-screen overflow-y-auto">
      <main className="main-content flex-grow p-6">
        {/* Dashboard Section */}
        <section className="dashboard mb-8 text-center">
          <header className="flex justify-between items-center mb-8 ">
            <h1 className="text-3xl font-extrabold text-center tracking-wide flex-1">
              Dashboard💨
            </h1>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full border border-black dark:border-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-blue-500" />
              )}
            </button>
          </header>
          {/* Responsive Grid for Dashboard Cards */}
          <div className="dashboard-cards grid grid-cols-2 gap-6">
            {/* Card 1: Total Emissions (left side) */}
            <div className="card col-span-2 lg:col-span-1 row-span-1 p-6 bg-green-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start hover:scale-105 transition-transform">
              {/* Text Section */}
              <div className="text-section w-full lg:w-1/2 flex flex-col justify-center text-left h-full">
                <h2 className="text-2xl mb-4 text-black font-bold"><span role="img" aria-label="graph">📊</span>Carbon Emissions</h2>
                <p className="text-lg mb-4 text-black dark:text-white">Understanding total emissions is critical for tracking environmental impact.The total emissions of world equal to almost :</p>
      
                <p className="text-xl mb-6 ml-12">Total Emissions:  12,345 tCO2e</p>
              </div>
              {/* Chart Section */}
              <div className="chart-section w-full lg:w-1/2 flex justify-center">
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
            </div>
            {/* Table Card (Right side) */}
            <div className="card col-span-2 lg:col-span-1 row-span-1 p-6 bg-green-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform">
              <div className="table-container w-full flex justify-center items-center h-full">
                <div className="w-full max-w-md">
                  {/* Table Heading */}
                  <h3 className="text-2xl font-semibold mb-4 text-center text-black dark:text-black">
                    <span role="img" aria-label="table">📋</span> Emission Rates
                  </h3>
                  {/* Table */}
                  <table className="table-auto w-full max-w-full border-collapse mx-auto font-lucida">
                    {/* Table Header */}
                    <thead className="bg-black text-white dark:bg-gray-800">
                      <tr className="text-lg">
                        <th className="px-6 py-2 border border-gray-200">Country</th>
                        <th className="px-6 py-2 border border-gray-200">Coal Mine</th>
                        <th className="px-6 py-2 border border-gray-200">Emissions</th>
                      </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                      <tr className="bg-gray-100 dark:bg-gray-600">
                        <td className="px-4 py-2 border border-gray-200 text-black">India</td>
                        <td className="px-4 py-2 border border-gray-200 text-black">Neyveli I</td>
                        <td className="px-4 py-2 border border-gray-200 text-black">1.90 TonsCO2/year</td>
                      </tr>
                      <tr className="bg-gray-200 dark:bg-gray-700">
                        <td className="px-4 py-2 border border-gray-200 text-red-600">USA</td>
                        <td className="px-4 py-2 border border-gray-200 text-red-600">D-21 coalmine</td>
                        <td className="px-4 py-2 border border-gray-200 text-red-600">2.62 TonsCO2/year</td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-600">
                        <td className="px-4 py-2 border border-gray-200 text-green-600">Russia</td>
                        <td className="px-4 py-2 border border-gray-200 text-green-600">Razrez Raspadsky</td>
                        <td className="px-4 py-2 border border-gray-200 text-green-600">2.98 TonsCO2/year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Card 2: Energy Consumption */}
            <div className="card col-span-1 row-span-1 p-6 bg-green-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start hover:scale-105 transition-transform">
              {/* Text Section */}
              <div className="text-section w-full lg:w-1/2 flex flex-col justify-center text-left h-full">
                <h4 className="text-2xl mb-4 text-black font-bold">
                  <span role="img" aria-label="energy">⚡</span> Energy Consumption
                </h4>
                <p className="text-lg mb-4 text-black dark:text-white">Energy consumption is a key factor in determining the environmental impact of an organization.The average global consumption equals : </p>

                <p className="text-xl mb-6 ml-4">Toatl Consumption:  45,678 MWh</p>
              </div>
              {/* Chart Section */}
              <div className="chart-section w-full lg:w-1/2 flex justify-center">
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
            </div>
            {/* Card 3: Carbon Intensity */}
            <div className="card col-span-1 row-span-1 p-6 bg-green-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start hover:scale-105 transition-transform">
              {/* Text Section */}
              <div className="text-section w-full lg:w-1/2 flex flex-col justify-center text-left h-full">
                <h2 className="text-2xl mb-4 text-black font-bold">
                  <span role="img" aria-label="carbon">🌍</span> Carbon Intensity
                </h2>
                <p className="text-lg mb-4 text-black dark:text-white">Carbon intensity refers to the amount of carbon emissions per unit of energy produced.The global average is close to :</p>
                <p className="text-xl mb-6 ml-4">Total Intensity:  0.85 tCO2e/t</p>
              </div>
              {/* Chart Section */}
              <div className="chart-section w-full lg:w-1/2 flex justify-center">
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
          </div>
        </section>
        {/* Carbon Neutrality Section */}
        <section className="carbon-neutrality mt-8">
          <h2 className="text-3xl mb-6">Impacts</h2>
          {/* Responsive Grid for Strategy Cards */}
          <div className="strategy-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Strategy Card 1 */}
            <div className="card p-6 bg-blue-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col hover:scale-105 transition-transform">
            <h3 className="text-xl mb-4 text-black font-bold">
            Carbon Footprint
            </h3>
            <ul className="list-disc pl-5 space-y-2">
            <li>
              Quantifies our environmental impact.
            </li>
              <li>
                It quantifies the environmental impact of our activities and helps identify areas where emissions can be reduced.
              </li>
            </ul>
            </div>
            {/* Strategy Card 2 */}
            <div className="card p-6 bg-blue-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col hover:scale-105 transition-transform">
            <h3 className="text-xl mb-4 text-black font-bold">
            Carbon Sink
            </h3>
            <ul className="list-disc pl-5 space-y-2">
            <li>
              Natural systems like forests and oceans absorb more carbon than they emit, acting as carbon sinks.
            </li>
            <li>
              Protecting and restoring these sinks is crucial for mitigating climate change and maintaining ecological balance.
            </li>
            </ul>
            </div>
            {/* Strategy Card 3 */}
            <div className="card p-6 bg-blue-200 dark:bg-slate-700 rounded-lg shadow-md flex flex-col hover:scale-105 transition-transform">
            <h3 className="text-xl mb-4 text-black font-bold">
            Carbon Neutrality
            </h3>
            <ul className="list-disc pl-5 space-y-2">
            <li>
            Achieving carbon neutrality means balancing carbon emissions with carbon removal, leading to a net-zero impact on the environment.
            </li>
              <li>
              This is essential for stabilizing the climate and preserving our planet for future generations.
            </li>
            </ul>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;