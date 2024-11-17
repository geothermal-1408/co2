"use client"

import { ModeToggle } from "@/components/Toggle-mode";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart, Leaf, Factory, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/login"); // Redirect to the login page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <BarChart className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">CarbonTrack India</span>
        </div>
        <nav className="flex items-center space-x-4">
          <Link className="text-sm font-medium transition-colors hover:text-green-600" href="#">
            About
          </Link>
          <Link className="text-sm font-medium transition-colors hover:text-green-600" href="#">
            Initiatives
          </Link>
          <Link className="text-sm font-medium transition-colors hover:text-green-600" href="#">
            Contact
          </Link>
          <Button variant="outline" onClick={handleGetStartedClick}>Get Started</Button>
        </nav>
      </header>

      <main className="flex-grow px-6 py-8 bg-gray-50">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Carbon Footprint and Neutrality in Indian Coal Mines</h1>
          <p className="text-xl text-gray-600 mb-6">
            Understanding and mitigating the environmental impact of coal mining in India
          </p>
        </section>

        <section className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Factory className="h-6 w-6 mr-2 text-orange-500" />
                  Carbon Footprint
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Coal mines in India contribute significantly to the countrys carbon footprint. They release methane, a
                  potent greenhouse gas, and the coal extraction and transportation processes emit substantial CO2.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-6 w-6 mr-2 text-green-500" />
                  Carbon Neutrality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Achieving carbon neutrality in Indian coal mines involves implementing clean technologies, improving
                  energy efficiency, and investing in carbon offset projects like reforestation and renewable energy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-6 w-6 mr-2 text-blue-500" />
                  Mitigation Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Strategies include methane capture and utilization, energy-efficient equipment, optimized
                  transportation, and land reclamation. These efforts aim to reduce the overall carbon impact of coal
                  mining operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Carbon Footprint Visualizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Emissions by Region</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart className="h-64 w-64 text-green-600" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Annual Emissions Trend</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <LineChart className="h-64 w-full text-blue-600" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emission Sources</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <BarChart className="h-64 w-full text-purple-600" />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="px-6 py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 CarbonTrack India. All rights reserved.</p>
      </footer>
    </div>
  );
}