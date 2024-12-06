"use client";

import { useState } from "react";
import { LineChart, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Heatmap from "@/components/Map";

type States = {
  [key: string]: [number, number];
};

const Carbonsink: React.FC = () => {
  const [selectedState, setSelectedState] = useState("");
  const [coordinates, setCoordinates] = useState<[number, number]>([
    23.6166, 87.1306,
  ]); // Default coordinates (Jharia)

  const states: States = {
    Jharkhand: [23.7321, 86.4204],
    West_Bengal: [23.6166, 87.1306],
    Chhattisgarh: [23.6693, 86.1511],
    Madhya_Pradesh: [20.9507, 85.2386],
    Odisha: [22.3511, 82.6746],
    // Singrauli: [24.1974, 82.6753],
    // Chandrapur: [19.9595, 79.2961],
    // Neyveli: [11.5394, 79.4704],
    // Ramagundam: [18.8005, 79.4528],
  };

  const heatData: [number, number, number][] = [
    [23.6166, -0.09, 0.5],
    [51.51, -0.1, 0.7],
    [51.49, -0.08, 0.9],
    [23.6166, -0.09, 0.5],
    [51.51, -0.1, 0.7],
    [51.49, -0.08, 0.9],
    [23.6166, -0.09, 0.5],
    [51.51, -0.1, 0.7],
    [51.49, -0.08, 1.9],
  ];

  const [darkMode, setDarkMode] = useState(false);
  const { setTheme } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    setDarkMode(!darkMode);
    if (darkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const handleStateChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    const state = target.value;
    setSelectedState(state);
    if (state && states[state]) {
      setCoordinates(states[state]);
    }
  };

  return (
    <div className=" w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Container */}
      <div className="container mx-auto flex flex-col gap-6">
        {/* Centered Title */}
        <div className="container mx-auto p-6 space-y-12">
          {/* Header */}
          <header className="flex justify-between items-center mb-8 ">
            <h1 className="text-3xl font-extrabold text-center tracking-wide flex-1">
              Carbon Sink Analysis
            </h1>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-blue-500" />
              )}
            </button>
          </header>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore the carbon sequestration potential of a specific area.
          </p>
        </div>

        {/* Map and State Selection */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* State Selection */}
          <div className="flex-1 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Select a State</h2>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full p-3 rounded-lg bg-white dark:bg-white text-gray-900 dark:text-black"
            >
              <option value="" disabled>
                -- Select a State --
              </option>
              {Object.keys(states).map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {selectedState && (
              <div className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                Selected State: <strong>{selectedState}</strong>
              </div>
            )}
            <h2 className="mt-4 text-2xl font-semibold mb-4">
              Select a Coal Mine
            </h2>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full p-3 rounded-lg bg-white dark:bg-white text-gray-900 dark:text-black"
            >
              <option value="" disabled>
                -- Select a State --
              </option>
              {Object.keys(states).map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {selectedState && (
              <div className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                Selected State: <strong>{selectedState}</strong>
              </div>
            )}
          </div>

          {/* Map Display */}
          <div className="flex-1 bg-gray-200 dark:bg-gray-800 h-96 rounded-lg shadow-md flex items-center justify-center relative">
            {/* <MapComponent position={coordinates} /> */}
            <Heatmap heatData={heatData} location={coordinates} />
          </div>
        </div>
        {/* Metrics Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Key Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Total Carbon Sequestered",
                value: "12,345 tons",
              },
              {
                title: "Annual Sequestration Rate",
                value: "1,234 tons/year",
              },
              {
                title: "Ecosystem Value",
                value: "$98,765",
              },
              {
                title: "Land Area",
                value: "5,678 acres",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-xl font-semibold">{metric.title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 mt-2">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trends Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">
            Carbon Sequestration Trends
          </h2>
          <div className="bg-white dark:bg-gray-800 h-64 rounded-lg shadow-md flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <LineChart className="w-16 h-16 text-gray-300" />
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                View Detailed Trends
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carbonsink;
