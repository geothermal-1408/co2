"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: ''
  });

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

  // Initialize state with values from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem('username') || '';
    const storedEmail = localStorage.getItem('email') || '';
    setUserInfo({
      name: storedName,
      email: storedEmail
    });
  }, []);

  const handleButtonClick = (page: any) => {
    switch (page) {
      case "footprint":
        router.push('./footprint');
        break;
      case "carbonsink":
        router.push('./carbonsink');
        break;
      case "neutrality":
        router.push('./neutrality');
        break;
      case "report":
        router.push('./report'); // Assuming you have a report page
        break;
      default:
        console.error("Unknown page");
    }
  };

  return (
    <div className="container flex min-h-screen">
      <aside className="sidebar w-64 bg-gray-800 text-white flex flex-col">
        <div className="sidebar-header p-6 bg-gray-900 text-center">
          <h2 className="text-2xl font-bold">Carbon Neutral Mines</h2>
        </div>
        <nav className="sidebar-menu p-4">
          <ul className="space-y-2">
            <li className="active bg-green-600 p-3 rounded-md">
              <a href="#">Dashboard</a>
            </li>
            <li className="hover:bg-green-600 p-3 rounded-md">
              <button onClick={() => handleButtonClick('footprint')}>Carbon Footprint</button>
            </li>
            <li className="hover:bg-green-600 p-3 rounded-md">
              <button onClick={() => handleButtonClick('carbonsink')}>Sink Analysis</button>
            </li>
            <li className="hover:bg-green-600 p-3 rounded-md">
              <button onClick={() => handleButtonClick('neutrality')}>Neutrality</button>
            </li>
            <li className="hover:bg-green-600 p-3 rounded-md">
              <button onClick={() => handleButtonClick('report')}>Report</button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content flex-grow p-6">
        <header className="header mb-6">
          <div className="user-details flex flex-col text-white">
            <div className="user-info text-lg space-y-2">
              <div>
                <strong className="text-black">Name:</strong>{" "}
                <span className="text-black">{userInfo.name}</span>
              </div>
              <div>
                <strong className="text-black">Email:</strong>{" "}
                <span className="text-black">{userInfo.email}</span>
              </div>
              <div>Organization</div>
            </div>
          </div>
        </header>

        <section className="dashboard mb-8 text-center">
          <h1 className="text-4xl text-white mb-6">DASHBOARD</h1>
          <div className="dashboard-cards flex gap-6">
            <div className="card p-6 bg-white rounded-lg shadow-md flex-1">
              <h2 className="text-2xl mb-4">Total Emissions</h2>
              <p className="text-xl mb-6">12,345 tCO2e</p>
              <BarChart
                width={400}
                height={300}
                data={emissionsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="emissions" fill="#e74c3c" />
              </BarChart>
            </div>

            <div className="card p-6 bg-white rounded-lg shadow-md flex-1">
              <h2 className="text-2xl mb-4">Energy Consumption</h2>
              <p className="text-xl mb-6">45,678 MWh</p>
              <LineChart
                width={400}
                height={300}
                data={energyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="energy"
                  stroke="#3498db"
                  fill="#3498db"
                />
              </LineChart>
            </div>

            <div className="card p-6 bg-white rounded-lg shadow-md flex-1">
              <h2 className="text-2xl mb-4">Carbon Intensity</h2>
              <p className="text-xl mb-6">0.85 tCO2e/t</p>
              <PieChart width={400} height={300}>
                <Pie
                  data={intensityData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {intensityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </section>

        <section className="carbon-neutrality mt-8">
          <h2 className="text-3xl mb-6">Carbon Neutrality</h2>
          <div className="strategy-cards flex gap-6 flex-wrap">
            <div className="card p-6 bg-white rounded-lg shadow-md flex-1">
              <h3 className="text-xl mb-4">Renewable Energy Integration</h3>
              <p>
                Explore opportunities to increase the share of renewable energy
                in the mine's energy mix, such as solar and wind.
              </p>
            </div>
            <div className="card p-6 bg-white rounded-lg shadow-md flex-1">
              <h3 className="text-xl mb-4">Energy Efficiency Measures</h3>
              <p>
                Implement energy-efficient technologies and optimize processes
                to reduce overall energy consumption.
              </p>
            </div>
            <div className="card p-6 bg-white rounded-lg shadow-md flex-1">
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

export default Dashboard;