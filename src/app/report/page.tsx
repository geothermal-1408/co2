"use client";

import { useState } from "react";
import { ArrowRight, Plus, Trash2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { AlertCircle } from "lucide-react";

// Mock function to simulate AI analysis
const analyzeInputs = (inputs: string[]): string[] => {
  return [
    "Consider transitioning to renewable energy sources for your power needs.",
    "Implement a comprehensive recycling program to reduce waste.",
    "Explore options for sustainable transportation, such as electric vehicles or public transit.",
    "Invest in energy-efficient appliances and lighting throughout your operations.",
    "Develop a sustainable supply chain by partnering with eco-friendly suppliers.",
  ];
};

export default function CarbonReport() {
  const [inputs, setInputs] = useState([""]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [analyzeClicked, setAnalyzeClicked] = useState(false);
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

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleRemoveInput = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleAnalyze = () => {
    setAnalyzeClicked(true);
    const aiSuggestions = analyzeInputs(inputs);
    setSuggestions(aiSuggestions);
  };

  return (
    <div className="py-10 overflow-y-auto overflow-x-hidden">

      {/* Sidebar spacing */}
        <header className="flex justify-between items-center mb-8 ">
          <h1 className="text-3xl font-extrabold text-center tracking-wide flex-1">
            Carbon Report 📊
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

        <div className="report-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">

        {inputs.map((input, index) => (
          <Card key={index} className="relative bg-green-100 dark:bg-slate-700">
            <CardHeader>
              <CardTitle>Input Box {index + 1}</CardTitle>
              <CardDescription>
                Provide specific details about your carbon-related activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="E.g., 'Annual electricity usage: 10,000 kWh' or 'Business travel: 30 flights/year'"
                value={input}
                onChange={(e: any) => handleInputChange(index, e.target.value)}
                className="min-h-[150px]"
              />
              {inputs.length > 1 && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveInput(index)}
                  className="absolute top-4 right-4"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
        <Button
          onClick={handleAddInput}
          variant="outline"
          className="flex items-center justify-center m-auto"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Input Box
        </Button>
      </div>

      <div className="flex justify-center my-8">
        {/* Centralized button */}
        <Button
          onClick={handleAnalyze}
          disabled={inputs.every((input) => input.trim() === "")}
        >
          Analyze and Generate Suggestions
        </Button>
      </div>

      {inputs.every((input) => input.trim() === "") && analyzeClicked && (
        <div className="flex items-center justify-center text-red-500 mb-4">
          <AlertCircle className="mr-2 h-5 w-5" />
          Please fill in at least one input box before analyzing.
        </div>
      )}

      <Separator className="my-8" />

      <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
        AI-Generated Pathways to Carbon Neutrality
      </h2>
      {suggestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {suggestions.map((suggestion, index) => (
            <Card key={index} className="mb-4 bg-green-100 dark:bg-slate-700">
              <CardHeader>
                <CardTitle>Suggestion {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{suggestion}</p>
                <Button
                  className="mt-4"
                  variant="outline"
                  rel="noopener noreferrer"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card
          className="relative bg-green-100 dark:bg-slate-700"
          style={{ marginLeft: "10px", marginRight: "10px", marginTop: "50px" }}
        >
          <CardContent className="text-center py-8">
            <p>
              No suggestions generated yet. Please provide information and click
              the &quot;Analyze&quot; button.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
