"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  LineChart,
  PieChart,
  Leaf,
  Factory,
  Truck,
} from "lucide-react";
import Link from "next/link";
import DashboardLayout from "@/components/Sidebar";
import { ModeToggle } from "@/components/Toggle-mode";

import * as React from "react";
import { useRouter } from "next/navigation";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Component() {

  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/login"); // Redirect to the login page
  };
  const words = [
    {
      text: "Understanding",
    },
    {
      text: "and",
    },
    {
      text: "mitigating",
    },
    {
      text: "environmental",
    },
    {
      text: "impact",
    },
    {
      text: "of",
    },
    {
      text: "coal",
    },
    {
      text: "mining",
    },
    {
      text: "in",
    },
    {
      text: "India.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 rounded-xl bg-neutral-200 dark:bg-gray-900 shadow-sm">
          <div className="flex items-center space-x-2">
            <BarChart className="h-6 w-6 text-green-600 dark:text-green-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              CarbonTrack India
            </span>
          </div>
          <nav className="flex items-center space-x-4">
            <ModeToggle />
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-green-600 dark:"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-green-600"
              href="/initiatives"
            >
              Initiatives
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-green-600"
              href="/contact"
            >
              Contact
            </Link>
            <Button variant="outline" className="text-sm" onClick={handleGetStartedClick}>
              Get Started
            </Button>
          </nav>
        </header>

        <main className="flex-grow px-6 py-8 bg-white dark:bg-gray-800">
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center py-24 text-black-800 dark:text-white"
            style={{
              backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold text-black-800 dark:text-white">
                Carbon Footprint & Neutrality in Indian Coal Mines
              </h1>
              <div className="text-m text-black-800 dark:text-white">
                <TypewriterEffect words={words}/>
              </div>
              <Button size="lg" className="mt-4">
                Learn More
              </Button>
            </div>
          </section>

          {/* Info Cards Section */}
          <section className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Factory className="h-6 w-6 mr-2 text-orange-500" />
                    Carbon Footprint
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Coal mines in India contribute significantly to the
                    country’s carbon footprint, releasing methane, a potent
                    greenhouse gas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-6 w-6 mr-2 text-green-500" />
                    Carbon Neutrality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Achieving carbon neutrality involves clean technologies,
                    energy efficiency, and investing in carbon offset projects
                    like reforestation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-6 w-6 mr-2 text-blue-500" />
                    Mitigation Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Strategies include methane capture, energy-efficient
                    equipment, optimized transportation, and land reclamation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Visualization Section */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Carbon Footprint Visualizations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:scale-105 transition-transform">
                <CardContent className="flex justify-center">
                  <PieChart className="h-64 w-64 text-green-600 dark:text-green-400" />
                </CardContent>
                <div className="text-center font-semibold mt-4">
                  Emissions by Region
                </div>
              </Card>

              <Card className="hover:scale-105 transition-transform">
                <CardContent className="flex justify-center">
                  <LineChart className="h-64 w-full text-blue-600 dark:text-blue-400" />
                </CardContent>
                <div className="text-center font-semibold mt-4">
                  Annual Emissions Trend
                </div>
              </Card>

              <Card className="hover:scale-105 transition-transform">
                <CardContent className="flex justify-center">
                  <BarChart className="h-64 w-full text-purple-600 dark:text-purple-400" />
                </CardContent>
                <div className="text-center font-semibold mt-4">
                  Emission Sources
                </div>
              </Card>
            </div>
          </section>
        </main>

        <footer className="px-6 py-4 bg-gray-800 text-white text-center">
          <p>&copy; 2024 CarbonTrack India. All rights reserved.</p>
        </footer>
      </div>
    </DashboardLayout>
  );
}
