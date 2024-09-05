// pages/index.js
import { ArrowRight, LineChart, BarChart2 } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <div className="container mx-auto p-6">
        {/* Emissions Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Actual Emissions</h2>
            <div className="bg-gray-100 h-48 flex justify-center items-center rounded-lg">
              <BarChart2 className="w-10 h-10 text-gray-400" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Predicted Emissions</h2>
            <div className="bg-gray-100 h-48 flex justify-center items-center rounded-lg">
              <LineChart className="w-10 h-10 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Analyze Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            Analyze
          </button>
        </div>

        {/* Pathways to Carbon Neutrality Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Pathways to Carbon Neutrality</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Renewable Energy</h3>
              <p className="mb-4">
                Transition to renewable energy sources like solar, wind, and hydroelectric power to reduce your carbon footprint.
              </p>
              <a href="#" className="text-blue-500 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Energy Efficiency</h3>
              <p className="mb-4">
                Implement energy-efficient practices and technologies to reduce your overall energy consumption.
              </p>
              <a href="#" className="text-blue-500 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Carbon Offsetting</h3>
              <p className="mb-4">
                Invest in carbon offset projects to counterbalance your remaining carbon emissions.
              </p>
              <a href="#" className="text-blue-500 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Sustainable Practices</h3>
              <p className="mb-4">
                Adopt sustainable practices in your daily operations to reduce your overall carbon footprint.
              </p>
              <a href="#" className="text-blue-500 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}