"use client";

import { Button1 } from "@/components/ui/moving-border";
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
import { ModeToggle } from "@/components/Toggle-mode";

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import About from "./about";
import Contact from "./contact";
import {CarbonFootprintCard,CarbonNeutralityCard, MitigationStrategiesCard} from "./card";

export default function Component() {
  const router = useRouter();
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    router.push("/login");
  };

  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const words = [
    { text: "Understanding" },
    { text: "and" },
    { text: "mitigating" },
    { text: "environmental" },
    { text: "impact" },
    { text: "of" },
    { text: "coal" },
    { text: "mining" },
    { text: "in" },
    { text: "India.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 rounded-xl bg-neutral-200 dark:bg-gray-900 shadow-sm">
        <div className="flex items-center space-x-2">
          <BarChart className="h-6 w-6 text-green-600 dark:text-green-400" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            CarbonTrack
          </span>
        </div>
        <nav className="flex items-center space-x-4">
          <ModeToggle />
          <button
            onClick={openAboutModal}
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-green-600"
          >
            About
          </button>
          <Link
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-green-600"
            href="/Donate"
          >
            Donate
          </Link>
          <button
            onClick={openContactModal}
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-green-600"
          >
            Contact
          </button>
          <Button1
            variant="outline"
            className="text-sm bg-white dark:bg-slate-900 text-black dark:text-white hover:scale-105 transition-transform"
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button1>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 py-8 bg-white dark:bg-gray-800">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center py-24 text-black-800 dark:text-white"
          style={{
            backgroundImage: "url('https://s.yimg.com/uu/api/res/1.2/3mCYDQsUg05Enukn3Qxuvg--~B/aD0xNDE0O3c9MjExOTtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-06/33e53af0-8da2-11e9-93be-5782e244b0c4')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
            <div className="relative z-10 text-center space-y-6">
            <h1 className="text-4xl font-bold text-black-800 dark:text-white">
              Carbon Footprint & Neutrality in Indian Coal Mines
            </h1>
            <div className="text-m text-black-800 dark:text-white flex flex-col items-center justify-center">
              <TypewriterEffectSmooth words={words} />
            </div>
            <Button size="lg" className="mt-4 hover:scale-105 transition-transform">
              Learn More
            </Button>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CarbonFootprintCard/>

            <CarbonNeutralityCard/>

            <MitigationStrategiesCard/>
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

      {/* Footer */}
      <footer className="px-6 py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 CarbonTrack India. All rights reserved.</p>
      </footer>

      {/* About Modal */}
      {isAboutModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={closeAboutModal}
        >
          <div
            className="relative bg-white dark:bg-black rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <About />
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={closeContactModal}
        >
          <div
            className="relative bg-white dark:bg-black rounded-lg shadow-lg max-w-4xl w-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}
