"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CarbonFootprintAnalysis() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-200 to-white">
      <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          
          {/* Heading Section */}
          <div className="flex justify-start">
            <div className="bg-green-600 text-white py-3 px-6 rounded-md shadow-md">
              <h1 className="text-4xl font-bold">Carbon Footprint Analysis</h1>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white h-64 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-gray-500">[ Square Chart Placeholder ]</span>
            </div>
            <div className="bg-white h-64 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-gray-500">[ Square Chart Placeholder ]</span>
            </div>
          </div>

          {/* Form Section */}
          <header className="text-center mb-8">
            <h2 className="text-2xl font-medium text-gray-700">Energy Use Assessment</h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Input 
              placeholder="Enter Electricity Consumption (kWh/Year)" 
              className="text-center p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" 
            />
            <Input 
              placeholder="Enter Fossil Fuel Consumption (Liters/Year)" 
              className="text-center p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Label className="text-lg font-medium text-gray-700 mb-2 block">Extraction Process</Label>
              <Input 
                placeholder="Type of Mining" 
                className="w-full text-center p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" 
              />
            </div>
            <div>
              <Label className="text-lg font-medium text-gray-700 mb-2 block">Coal Processing</Label>
              <Input 
                placeholder="Energy Used in Processing (kWh/Year)" 
                className="w-full text-center p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" 
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button 
              variant="default" 
              className="py-3 px-8 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            >
              Analyze
            </Button>
          </div>

          {/* Interactive Section */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow-md space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 text-center">Understand Your Carbon Footprint</h3>
            <p className="text-gray-600 text-center">
              Carbon footprint analysis measures the total greenhouse gases (GHGs) emitted by your activities. This helps in understanding your environmental impact and is crucial for setting reduction targets.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Electricity Consumption:</strong> Total kWh used by your operations.</li>
              <li><strong>Fossil Fuel Consumption:</strong> Amount of fossil fuels used.</li>
              <li><strong>Extraction Process:</strong> Type of mining being conducted.</li>
              <li><strong>Coal Processing:</strong> Energy consumed during processing.</li>
            </ul>
            <p className="text-center text-gray-500 italic">
              “Reducing your carbon footprint not only helps the environment but also can lead to cost savings and operational efficiency.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}