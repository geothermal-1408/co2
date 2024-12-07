"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function CarbonFootprintAnalysis() {
  const [production, setProduction] = useState("");
  const [conversion, setConversion] = useState("");
  const [emission, setEmission] = useState("");
  const [exclusion, setExclusion] = useState("");
  const [coalType, setCoalType] = useState("bituminous");
  const [footprint, setFootprint] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const { setTheme } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
  };
  const divStyle = {
    backgroundImage: "public/Footprint.jpg", // Path to your image
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Center the background image
    height: "200vh", // Set the height of the div (full viewport height)
  };
  const handleCalculate = async () => {
    const productionValue = parseFloat(production);
    const conversionValue = parseFloat(conversion);
    const emissionValue = parseFloat(emission);
    const exclusionValue = parseFloat(exclusion);

    if (
      isNaN(productionValue) ||
      isNaN(conversionValue) ||
      isNaN(emissionValue) ||
      isNaN(exclusionValue)
    ) {
      alert("Please enter valid numbers for the inputs.");
      return;
    }

    setLoading(true);
    setMessages([]); // Clear messages before new calculation

    try {
      const res = await fetch("/api/calculate_footprint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coal_type: coalType,
          production: productionValue,
          exclusion_factor: exclusionValue,
          coal_conversion_factor: conversionValue,
          co2_emissions_factor: emissionValue,
        }),
      });
      const data = await res.json();
      setMessages(data.messages);
      setFootprint(data.emissions);
    } catch (error) {
      return alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      setShowResult(true);
    }
  };

  const handleCalculateAgain = () => {
    setProduction("");
    setConversion("");
    setEmission("");
    setExclusion("");
    setCoalType("bituminous");
    setFootprint(null);
    setShowResult(false);
    setMessages([]);
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto flex flex-col bg-white text-gray-900 dark:bg-gray-900">
      <header
        className="flex justify-between items-center mb-8 mt-8 px-4 py-6"
        style={{
          color: darkMode ? "white" : "black", // Dark text for both modes
        }}
      >
        <h1 className="text-3xl font-extrabold text-center tracking-wide flex-1">
          Carbon Footprint 👣
        </h1>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
          style={{
            backgroundColor: darkMode ? "#2d2d2d" : "#e0e0e0", // Light gray background for light mode toggle button, dark background for dark mode
            color: darkMode ? "#ffffff" : "#333333", // Dark text for dark mode toggle button, light text for light mode
          }}
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-500" />
          )}
        </button>
      </header>

      <div style={divStyle}>
        {/* Inputs and Output Section */}
        <div className="container mx-auto py-10 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Inputs in a single card */}
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
            style={{ opacity: 0.8 }}
          >
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Analyse Footprint
            </h2>
            {/* Coal Type Input */}
            <div className="flex flex-col">
              <Label className="text-gray-700 dark:text-gray-300">
                Coal Type
              </Label>
              <select
                value={coalType}
                onChange={(e) => setCoalType(e.target.value)}
                className="mt-2 bg-white text-black border dark:border-black"
              >
                <option value="bituminous">Bituminous</option>
                <option value="anthracite">Anthracite</option>
                <option value="lignite">Lignite</option>
              </select>
            </div>
            <div className="space-y-6">
              {[
                {
                  label: "Yearly Coal Production (Tonnes)",
                  value: production,
                  setter: setProduction,
                },
                {
                  label: "Coal Type Conversion Factor (TJ/kt)",
                  value: conversion,
                  setter: setConversion,
                },
                {
                  label: "CO2 Emissions Factor (CO2/TJ)",
                  value: emission,
                  setter: setEmission,
                },
                {
                  label: "Exclusion Factor",
                  value: exclusion,
                  setter: setExclusion,
                },
              ].map(({ label, value, setter }) => (
                <div key={label} className="flex flex-col">
                  <Label className="text-gray-700 dark:text-gray-300">
                    {label}
                  </Label>
                  <Tooltip content={`Enter ${label}`}>
                    <Input
                      type="number"
                      placeholder="Enter value"
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      className="mt-2 bg-white text-black border dark:border-black"
                    />
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Output */}
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-center"
            style={{ opacity: 0.8 }}
          >
            {showResult ? (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Total Carbon Footprint
                </h3>
                <p className="mt-2 text-green-500 dark:text-green-400 text-xl">
                  {footprint?.toFixed(2)} CO₂e
                </p>
                <Button
                  onClick={handleCalculateAgain}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
                >
                  Calculate Again
                </Button>
                {/* Display Messages */}
                {messages.length > 0 && (
                  <div className="mt-4 text-left space-y-2">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                      Suggested Actions:
                    </h4>
                    <ul className="list-disc pl-5">
                      {messages.map((message, index) => (
                        <li
                          key={index}
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {message}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Button
                onClick={handleCalculate}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
                disabled={loading}
              >
                {loading ? "Calculating..." : "Analyze Footprint"}
              </Button>
            )}
          </div>
        </div>
        <div className="mt-12 ml-5 mr-5 p-6 bg-gradient-to-r from-green-400 to-blue-500 dark:bg-gradient-to-r dark:from-green-700 dark:to-blue-800 rounded-xl shadow-lg space-y-6">
          {/* Section for Image */}
          <div className="relative w-full h-56 rounded-lg overflow-hidden mb-6 shadow-xl"></div>

          {/* Main Content */}
          <h3 className="text-3xl font-extrabold text-white text-center dark:text-gray-100 mb-4">
            Understand Your Carbon Footprint
          </h3>
          <p className="text-gray-200 dark:text-gray-300 text-center mb-6 leading-relaxed">
            Carbon footprint analysis measures the total greenhouse gases (GHGs)
            emitted by your activities. This helps in understanding your
            environmental impact and is crucial for setting reduction targets.
          </p>

          {/* List of Factors */}
          <ul className="list-disc list-inside text-gray-200 dark:text-gray-300 space-y-3">
            <li>
              <strong className="text-yellow-300">
                Yearly Coal Production:
              </strong>{" "}
              Total amount of coal produced in a specific year.
            </li>
            <li>
              <strong className="text-yellow-300">Coal Type:</strong>{" "}
              Classification of coal based on its carbon content and maturity
              (e.g., bituminous, anthracite, lignite).
            </li>
            <li>
              <strong className="text-yellow-300">Extraction Process:</strong>{" "}
              Method used to extract coal from the Earth (e.g., surface mining,
              underground mining).
            </li>
            <li>
              <strong className="text-yellow-300">Coal Processing:</strong>{" "}
              Steps involved in transforming raw coal into usable forms (e.g.,
              cleaning, crushing, pulverizing), and the energy consumed during
              these processes.
            </li>
            <li>
              <strong className="text-yellow-300">Exclusion Factor:</strong> A
              factor used to account for coal that is not burned, such as coal
              used for non-energy purposes or lost during transportation.
            </li>
            <li>
              <strong className="text-yellow-300">
                Coal Type Conversion Factor:
              </strong>{" "}
              A factor used to convert the mass of coal into energy units
              (terajoules, TJ) based on the specific type of coal.
            </li>
            <li>
              <strong className="text-yellow-300">
                Effective CO2 Emissions Factor:
              </strong>{" "}
              A factor representing the amount of CO2 emitted per unit of energy
              produced from a specific type of coal, taking into account factors
              like carbon content and energy efficiency.
            </li>
          </ul>

          <p className="text-center text-gray-100 dark:text-gray-300 italic mt-6">
            “Reducing your carbon footprint not only helps the environment but
            also can lead to cost savings and operational efficiency.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarbonFootprintAnalysis;
