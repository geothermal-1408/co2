// pages/index.js
"use client"

import { MapPin, LineChart } from "lucide-react";
import DashboardLayout from "@/components/Sidebar";
import MapComponent from "@/components/Map";
//import dynamic from "next/dynamic";

 export default function Carbonsink() 
{
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold">Carbon Sink Analysis</h1>
            <p className="text-xl text-gray-600">
              Explore the carbon sequestration potential of a specific area.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-xl font-semibold">
                  Total Carbon Sequestered
                </h2>
                <p className="text-lg text-gray-700 mt-2">12,345 tons</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-xl font-semibold">
                  Annual Sequestration Rate
                </h2>
                <p className="text-lg text-gray-700 mt-2">1,234 tons/year</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-xl font-semibold">Ecosystem Value</h2>
                <p className="text-lg text-gray-700 mt-2">$98,765</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-xl font-semibold">Land Area</h2>
                <p className="text-lg text-gray-700 mt-2">5,678 acres</p>
              </div>
            </div>

            {/* Trends */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Carbon Sequestration Trends
              </h2>
              <div className="bg-white h-64 rounded-lg shadow-md flex items-center justify-center">
                <LineChart className="w-16 h-16 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="bg-gray-200 h-96 rounded-lg shadow-md flex items-center justify-center relative">
              <MapComponent/>
            </div>
          </div>
        </div>
      </div>
  );
}
