'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'

// Mock function to simulate AI analysis
const analyzeInputs = (inputs: string[]): string[] => {
  // In a real application, this would be an API call to your AI model
  return [
    "Consider transitioning to renewable energy sources for your power needs.",
    "Implement a comprehensive recycling program to reduce waste.",
    "Explore options for sustainable transportation, such as electric vehicles or public transit.",
    "Invest in energy-efficient appliances and lighting throughout your operations.",
    "Develop a sustainable supply chain by partnering with eco-friendly suppliers."
  ]
}

export default function CarbonReport() {
  const [inputs, setInputs] = useState(['', '', ''])
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
  }

  const handleAnalyze = () => {
    const aiSuggestions = analyzeInputs(inputs)
    setSuggestions(aiSuggestions)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Carbon Neutrality Pathway Analysis</h1>
     
      <div className="grid gap-6 mb-8 md:grid-cols-3">
        {inputs.map((input, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Input Box {index + 1}</CardTitle>
              <CardDescription>Enter relevant information about your carbon footprint</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter your information here..."
                value={input}
                onChange={(e:any) => handleInputChange(index, e.target.value)}
                className="min-h-[150px]"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={handleAnalyze} className="mb-8">
        Analyze and Generate Suggestions
      </Button>

      <Separator className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">AI-Generated Pathways to Carbon Neutrality</h2>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle>Suggestion {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{suggestion}</p>
              <Button className="mt-4" variant="outline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent className="text-center py-8">
            <p>No suggestions generated yet. Please enter your information and click the analyze button.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

