"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LineChart from "@/components/ui/LineChart";
import React, { useState } from "react";
import { Tooltip } from "@/components/ui/tooltip";

export function CarbonFootprintAnalysis() {
  const [electricity, setElectricity] = useState("");
  const [fuel, setFuel] = useState("");
  const [footprint, setFootprint] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = async () => {
    const electricityValue = parseFloat(electricity);
    const fuelValue = parseFloat(fuel);

    // Validate inputs
    if (isNaN(electricityValue) || isNaN(fuelValue)) {
      alert("Please enter valid numbers for both inputs.");
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
          electricity: electricityValue,
          fuel: fuelValue,
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
    setElectricity("");
    setFuel("");
    setFootprint(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-black">Carbon Footprint Analyzer</h1>
          <p className="mt-2 text-lg text-black">
            Measure your environmental impact and take steps toward sustainability.
          </p>
        </div>
      </header>

      <div className="container mx-auto py-10 px-4 lg:px-8">
        {/* Interactive Section */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Chart Visualization */}
            <div className="bg-white h-[300px] dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Energy Use Overview
              </h2>
            
            </div>

            {/* Right: Input Cards */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Label className="text-gray-700 dark:text-gray-300">
                  Electricity Consumption (kWh/Year)
                </Label>
                <Tooltip content="Total annual electricity usage in kilowatt-hours">
                  <Input
                    type="number"
                    placeholder="Enter value"
                    value={electricity}
                    onChange={(e) => setElectricity(e.target.value)}
                    className="mt-2 bg-white ml-6 text-black border dark:border-black"
                  />
                </Tooltip>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Label className="text-gray-700 dark:text-gray-300">
                  Fossil Fuel Consumption (Liters/Year)
                </Label>
                <Tooltip content="Total annual fossil fuel consumption in liters">
                  <Input
                    type="number"
                    placeholder="Enter value"
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value)}
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
                Extraction Process
              </Label>
              <select
                className="mt-2 block w-full bg-gray-50 dark:bg-white border dark:border-black rounded-md p-2 text-black"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Mining Type
                </option>
                <option value="Placer Mining">Placer Mining</option>
                <option value="Strip Mining">Strip Mining</option>
                <option value="Surface Mining">Surface Mining</option>
                <option value="Hydraulic Mining">Hydraulic Mining</option>
              </select>
            </div>

            <div>
              <Label className="text-gray-700 dark:text-gray-300">
                Coal Processing Energy (kWh/Year)
              </Label>
              <Input
                type="number"
                placeholder="Enter value"
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
            <strong>Electricity Consumption:</strong> Total kWh used by your
            operations.
          </li>
          <li>
            <strong>Fossil Fuel Consumption:</strong> Amount of fossil fuels
            used.
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
