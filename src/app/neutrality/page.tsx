// pages/index.js

"use client";
import { useState } from "react";
import { ArrowRight, LineChart, BarChart2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Neutrality() {
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
    <div className="mx-auto p-6 space-y-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 ">
        <h1 className="text-3xl font-extrabold text-center tracking-wide flex-1">
          Carbon Neutrality🌍
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

      {/* Emissions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Actual Emissions", icon: <BarChart2 /> },
          { title: "Predicted Emissions", icon: <LineChart /> },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative bg-green-200 dark:bg-slate-700 h-60 flex justify-center items-center rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-dark-custom  transition"
          >
            {item.icon}
            <div className="absolute bottom-4 left-4 group-hover:opacity-100 opacity-0 transition-opacity">
              <p className="bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Analyze Button */}
      <div className="flex justify-center">
        <button className="relative group bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:animate-pulse transition">
          Analyze Now
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex justify-center items-center h-full"></div>
          </div>
        </button>
      </div>

      {/* Pathways to Carbon Neutrality Section */}
      <section>
        <h2 className="text-2xl font-extrabold mb-6">
          Pathways to Carbon Neutrality
        </h2>
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
              className="relative bg-blue-200 dark:bg-slate-700 p-6 rounded-lg shadow hover:shadow-xl dark:hover:shadow-dark-custom transition group"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                {pathway.title}
              </h3>
              <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
                {pathway.description}
              </p>
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
  );
}
