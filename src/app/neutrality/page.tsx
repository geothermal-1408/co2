// pages/index.js
"use client";
import { useState } from "react";
import {
  ArrowRight,
  LineChart,
  BarChart2,
  Sun,
  Moon,
} from "lucide-react";

export default function Neutrality() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white font-sans min-h-screen"
          : "bg-white text-black font-sans min-h-screen"
      }
    >
      <div className="container mx-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Carbon Neutrality Dashboard</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </header>

        {/* Emissions Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Actual Emissions</h2>
            <div className="bg-gray-100 dark:bg-gray-800 h-60 flex justify-center items-center rounded-lg">
              <BarChart2 className="w-10 h-10 text-gray-400" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Predicted Emissions</h2>
            <div className="bg-gray-100 dark:bg-gray-800 h-60 flex justify-center items-center rounded-lg">
              <LineChart className="w-10 h-10 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Analyze Button */}
        <div className="flex justify-center mb-12">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
            Analyze Now
          </button>
        </div>

        {/* Pathways to Carbon Neutrality Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Pathways to Carbon Neutrality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Renewable Energy",
                description:
                  "Transition to renewable energy sources like solar, wind, and hydroelectric power to reduce your carbon footprint.",
              },
              {
                title: "Energy Efficiency",
                description:
                  "Implement energy-efficient practices and technologies to reduce your overall energy consumption.",
              },
              {
                title: "Carbon Offsetting",
                description:
                  "Invest in carbon offset projects to counterbalance your remaining carbon emissions.",
              },
              {
                title: "Sustainable Practices",
                description:
                  "Adopt sustainable practices in your daily operations to reduce your overall carbon footprint.",
              },
            ].map((pathway, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">{pathway.title}</h3>
                <p className="mb-4 text-sm">{pathway.description}</p>
                <a
                  href="#"
                  className="text-blue-500 dark:text-blue-400 font-semibold flex items-center hover:underline"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
