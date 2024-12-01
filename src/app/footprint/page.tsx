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
  const [footprint, setFootprint] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
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

  const handleCalculate = async () => {
    const productionValue = parseFloat(production);
    const conversionValue = parseFloat(conversion);
    const emissionValue = parseFloat(emission);
    const exclusionValue = parseFloat(exclusion);

    // Validate inputs
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

    try {
      const response = await fetch("/api/calculate_footprint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          electricity: productionValue,
          conversion: conversionValue,
          emission: emissionValue,
          exclusion: exclusionValue,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFootprint(data.result);
        setShowResult(true);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
      alert("An error occurred while calculating the carbon footprint.");
    } finally {
      setLoading(false);
    }
  };

  const handleCalculateAgain = () => {
    setProduction("");
    setConversion("");
    setEmission("");
    setFootprint(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Page Header */}
      <header className="flex justify-between items-center mb-8 mt-8 px-4">
        {/* Centered Title */}
        <h1 className="text-3xl font-extrabold text-center tracking-wide flex-1">
          Carbon Footprint 👣
        </h1>

        {/* Dark Mode Toggle Button */}
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

      <div className="container mx-auto py-10 px-4 lg:px-8">
        {/* Interactive Section */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Chart Visualization */}
            <div className="bg-white h-[325px] dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Energy Use Overview
              </h2>
            </div>

            {/* Right: Input Cards */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Label className="text-gray-700 dark:text-gray-300">
                  Yearly Coal Production (Tonnes)
                </Label>
                <Tooltip content="Total annual coal production in Tonnes">
                  <Input
                    type="number"
                    placeholder="Enter value"
                    value={production}
                    onChange={(e) => setProduction(e.target.value)}
                    className="mt-2 bg-white ml-6 text-black border dark:border-black"
                  />
                </Tooltip>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Label className="text-gray-700 dark:text-gray-300">
                  Coal Type Conversion Factor (TJ/kt)
                </Label>
                <Tooltip content="the coal type conversion factor in TJ/Kt">
                  <Input
                    type="number"
                    placeholder="Enter value"
                    value={conversion}
                    onChange={(e) => setConversion(e.target.value)}
                    className="mt-2 bg-white ml-6 text-black border dark:border-black"
                  />
                </Tooltip>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Label className="text-gray-700 dark:text-gray-300">
                  CO2 Emissions factor (CO2/TJ)
                </Label>
                <Tooltip content="the effective co2 emissions factor in CO2/TJ">
                  <Input
                    type="number"
                    placeholder="Enter value"
                    value={emission}
                    onChange={(e) => setEmission(e.target.value)}
                    className="mt-2 bg-white ml-6 text-black border dark:border-black"
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Options */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 mb-10 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Additional Inputs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-700 dark:text-gray-300">
                Coal Type
              </Label>
              <select
                className="mt-2 block w-full bg-gray-50 dark:bg-white border dark:border-black rounded-md p-2 text-black"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Coal Type
                </option>
                <option value="Bituminous">Bituminous</option>
                <option value="Anthracite">Anthracite</option>
                <option value="Lignite">Lignite</option>
              </select>
            </div>

            <div>
              <Label className=" text-gray-700 dark:text-gray-300">
                Exclusion factor
              </Label>
              <Input
                type="number"
                placeholder="Enter value"
                value={exclusion}
                onChange={(e) => setExclusion(e.target.value)}
                className="mt-2 bg-white text-black border dark:border-black"
              />
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="flex justify-center">
          {!showResult ? (
            <Button
              onClick={handleCalculate}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
            >
              {loading ? "Calculating..." : "Analyze Footprint"}
            </Button>
          ) : (
            <div className="text-center space-y-4">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Total Carbon Footprint
                </h3>
                <p className="mt-2 text-green-500 dark:text-green-400 text-xl">
                  {footprint?.toFixed(2)} CO₂e
                </p>
              </div>
              <Button
                onClick={handleCalculateAgain}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
              >
                Calculate Again
              </Button>
            </div>
          )}
        </section>
      </div>
      <div className="mt-12 ml-5 mr-5 p-6 bg-green-100 dark:bg-slate-700 rounded-lg shadow-md space-y-6">
        <h3 className="text-xl font-bold text-black text-center">
          Understand Your Carbon Footprint
        </h3>
        <p className="text-white text-center">
          Carbon footprint analysis measures the total greenhouse gases (GHGs)
          emitted by your activities. This helps in understanding your
          environmental impact and is crucial for setting reduction targets.
        </p>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>
            <strong>Yearly Coal Production:</strong> Amount of Coal production
            in an year
          </li>
          <li>
            <strong>Coal Type:</strong> Type of coal used.
          </li>
          <li>
            <strong>Extraction Process:</strong> Type of mining being conducted.
          </li>
          <li>
            <strong>Coal Processing:</strong> Energy consumed during processing.
          </li>
        </ul>
        <p className="text-center text-white italic">
          “Reducing your carbon footprint not only helps the environment but
          also can lead to cost savings and operational efficiency.”
        </p>
      </div>
    </div>
  );
}

export default CarbonFootprintAnalysis;
