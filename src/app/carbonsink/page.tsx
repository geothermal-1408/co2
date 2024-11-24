"use client";

import { useState } from "react";
import MapComponent from "@/components/Map";
import { LineChart } from "lucide-react";

type States = {
  [key: string]: [number, number];
};

const Carbonsink: React.FC = () => {
  const [selectedState, setSelectedState] = useState("");
  const [coordinates, setCoordinates] = useState<[number, number]>([
    37.5652, 126.9774,
  ]); // Default coordinates (Seoul, South Korea)

  const states: States = {
    California: [36.7783, -119.4179],
    Texas: [31.9686, -99.9018],
    Florida: [27.9944, -81.7603],
    NewYork: [40.7128, -74.006],
    Washington: [47.7511, -120.7401],
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Container */}
      <div className="container mx-auto p-4 flex flex-col gap-6">
        {/* Centered Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Carbon Sink Analysis</h1>
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
              <option value="" disabled>-- Select a State --</option>
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
            <h2 className="mt-4 text-2xl font-semibold mb-4">Select a Coal Mine</h2>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full p-3 rounded-lg bg-white dark:bg-white text-gray-900 dark:text-black"
            >
              <option value="" disabled>-- Select a State --</option>
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
            <MapComponent position={coordinates} />
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
