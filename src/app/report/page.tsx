"use client";

import { useState } from "react";
import { ArrowRight, Plus, Trash2 } from "lucide-react";

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
    <div className="container mx-auto py-10 overflow-y-auto" style={{ marginLeft: "5px" }}>
      {/* Sidebar spacing */}
      <h1 className="text-4xl font-bold mb-8 flex items-center justify-center">
        Carbon Neutrality Pathway Analysis
      </h1>

      <div className="report-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {inputs.map((input, index) => (
          <Card key={index} className="relative">
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
          className="flex items-center justify-center"
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
            <Card key={index} className="mb-4">
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
        <Card>
          <CardContent className="text-center py-8">
            <p>
              No suggestions generated yet. Please provide information and click
              the "Analyze" button.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
