"use client";

import React  from "react";
import DashboardLayout from "@/components/Sidebar";

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

const Dashboard = () => {
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
    <DashboardLayout>
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
                  energy in the mine's energy mix, such as solar and wind.
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
    </DashboardLayout>
  );
};

export default Dashboard;
