"use client";

import { Button1 } from "@/components/ui/moving-border";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Toggle-mode";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CoinsIcon as Coal, Factory, Leaf, TrendingUp, Wind, AlertTriangle, BarChart, PieChart } from 'lucide-react';
import { motion } from "framer-motion";
import Image from "next/image";
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import About from "./about";
import Contact from "./contact";
import { CarbonFootprintCard, CarbonNeutralityCard, MitigationStrategiesCard } from "./card";
import Link from "next/link";


// Emission data for the chart
const emissionData = [
  { name: 'Mine A', emissions: 4000 },
  { name: 'Mine B', emissions: 3000 },
  { name: 'Mine C', emissions: 2000 },
  { name: 'Mine D', emissions: 2780 },
  { name: 'Mine E', emissions: 1890 },
];

// Main page component
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
            href="/donation"
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
        <br /><br />
        
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out transform hover:scale-105">
        The Growing Concern
</h2>

        {/* Awareness Sections */}
        <section className="mb-12 py-10 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md transition-colors duration-300">

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2" />
                  Rising Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Coal mining activities contribute significantly to global carbon emissions, with a steady increase over the past decades.
                </p>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Carbon Emissions Growth</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2" />
                  Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  The increasing carbon footprint of coal mines leads to various environmental issues, including climate change and air pollution.
                </p>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Continued increase in emissions may lead to irreversible environmental damage.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out transform hover:scale-105">
        Carbon Emission Rates in Coal Mines
</h2>

        {/* Emission Data Section */}
        <section className="mb-12 py-10 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md transition-colors duration-300">

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2" />
                  Emission Rates by Mine
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={emissionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="emissions" fill="#8884d8" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="mr-2" />
                  Emission Sources Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center h-[300px]">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Pie chart of emission sources"
                  width={250}
                  height={250}
                />
              </CardContent>
            </Card>
          </div>
        </section>
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out transform hover:scale-105">
  Visual Impact of Coal Mining
</h2>


        {/* Visual Impact Section */}
        <section className="w-full mb-12 py-12 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md transition-colors duration-300">

          <div className=" grid md:grid-cols-3 gap-12">
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Coal mine landscape"
                  width={350}
                  height={250}
                  className="rounded-lg"
                />
                <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300">Open-pit coal mine</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Coal power plant emissions"
                  width={350}
                  height={250}
                  className="rounded-lg"
                />
                <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300">Emissions from coal power plant</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Reforestation efforts"
                  width={350}
                  height={250}
                  className="rounded-lg"
                />
                <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300">Reforestation efforts near mining sites</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
       
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out transform hover:scale-105">
        The Path to Carbon Neutrality
</h2>


        {/* The Path to Carbon Neutrality Section */}
        <section className="mb-12 py-12 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md transition-colors duration-300">

          <div className="grid md:grid-cols-3 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Leaf className="mr-2" />
                  Sustainable Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Implementing eco-friendly mining techniques and reforestation projects to offset carbon emissions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Wind className="mr-2" />
                  Renewable Energy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Transitioning to renewable energy sources for powering mining operations and related activities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Factory className="mr-2" />
                  Efficient Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Adopting advanced technologies to improve energy efficiency and reduce overall carbon emissions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Call to Action Section */}
        <section className="text-center py-12 bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Sign In
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Want to quantify your carbon footprint?
            </p>
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          className="inline-block"
          >
    <Button
      size="lg"
      className="bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-all"
      onClick={handleGetStartedClick} 
    >
      Join
    </Button>
  </motion.div>
</section>
        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Carbon Track. All rights reserved.</p>
          </div>
        </footer>
      </main>

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