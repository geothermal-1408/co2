"use client";
import { useState } from "react";
import { ArrowRight, LineChart, BarChart2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Neutrality() {
  const [darkMode, setDarkMode] = useState(false);
  const { setTheme } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedMine, setSelectedMine] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const cleanMessage = (raw: string): string[] => {
    const lines = raw.split("\n").map((line) => line.trim());
    console.log(lines);

    // Find the index where the section starting with "1. Reducing Emissions at Source:" begins
    const startIndex = lines.findIndex((line) => line.startsWith("**1."));

    // If the starting point isn't found, return an empty array
    if (startIndex === -1) {
      return [];
    }

    // Extract lines starting from the found index to the end
    const relevantLines = lines.slice(startIndex);

    // Clean up the relevant lines and remove any numbered and bullet points
    const pathways = relevantLines
      .map(
        (line) =>
          line
            .replace(/^\*\*\s*/, "") // Remove numbered list with **
            .replace(/^\*\s*/, "") // Remove asterisk bullet points
            .replace(/\*\*/g, "") // Remove any remaining bold formatting
      )
      .filter((line) => line); // Remove blank lines
    return pathways;
  };

  const generateAISuggestions = async () => {
    try {
      // Call the AI API to generate more specific suggestions
      const res = await fetch("api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `Generate carbon neutrality suggestions for ${selectedMine} in ${selectedCountry}`,
        }),
      });
      const data = await res.json();
      const cleanedData = cleanMessage(data);
      setAiSuggestions(cleanedData);
    } catch (error) {
      console.error("Failed to generate suggestions", error);
    }
  };

  return (
    <div className="mx-auto p-6 space-y-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
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
      <div
        className="bg-cover bg-center"
        style={
          {
            // backgroundImage:
            //   'url("https://www.awa.asn.au/hubfs/GettyImages-1417564706.jpg")',
          }
        }
      >
        <section className="space-y-8 py-10">
          {/* Location Selection */}
          <h2 className="text-xl font-semibold text-center text-white">
            Select Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
            </select>
            <select
              value={selectedMine}
              onChange={(e) => setSelectedMine(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white"
              disabled={!selectedCountry}
            >
              <option value="">Select Coal Mine</option>
              {selectedCountry === "India" && (
                <>
                  <option value="Jharia">Jharia</option>
                  <option value="Raniganj">Raniganj</option>
                </>
              )}
              {selectedCountry === "Australia" && (
                <>
                  <option value="Hunter Valley">Hunter Valley</option>
                  <option value="Bowen Basin">Bowen Basin</option>
                </>
              )}
              {selectedCountry === "USA" && (
                <>
                  <option value="Powder River Basin">Powder River Basin</option>
                  <option value="Appalachian Coalfields">
                    Appalachian Coalfields
                  </option>
                </>
              )}
            </select>
          </div>
          {/* Analyze Now Button */}
          <div className="flex justify-center">
            <button className="relative group bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:animate-pulse transition">
              Analyze Now
            </button>
          </div>
        </section>
      </div>
      {/* Lower Section: Suggestions */}
      <div
        className="bg-cover bg-center"
        style={
          {
            // backgroundImage:
            //   'url("https://www.ga.gov.au/__data/assets/image/0006/109383/iStock-937183680.jpg")',
          }
        }
      >
        <section className="space-y-8 py-10">
          <h2 className="text-2xl font-bold text-center text-white">
            Do you want tips to save the environment? 🌱
          </h2>
          <div className="flex justify-center">
            <button
              className="relative group bg-purple-600 text-white py-4 px-8 rounded-full shadow-lg hover:bg-purple-800 transition"
              onClick={generateAISuggestions}
            >
              Generate Suggestions!
            </button>
          </div>
          {aiSuggestions.length > 0 && (
            <div className=" mt-2 space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <p>{suggestion}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
