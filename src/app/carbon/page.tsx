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

export default function Component() {
  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
          <div className="flex items-center space-x-2">
            <BarChart className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">CarbonTrack India</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              className="text-sm font-medium transition-colors hover:text-green-600"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium transition-colors hover:text-green-600"
              href="#"
            >
              Initiatives
            </Link>
            <Link
              className="text-sm font-medium transition-colors hover:text-green-600"
              href="#"
            >
              Contact
            </Link>
            <Button variant="outline">Get Started</Button>
          </nav>
        </header>

        <main className="flex-grow px-6 py-8 bg-gray-50">
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center py-24 text-white"
            style={{
              backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
              backgroundColor: "rgba(0,0,0,0.7)",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold">
                Carbon Footprint & Neutrality in Indian Coal Mines
              </h1>
              <p className="text-xl text-gray-200">
                Understanding and mitigating the environmental impact of coal mining in India
              </p>
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
                    Coal mines in India contribute significantly to the country's carbon footprint, releasing methane, a potent greenhouse gas.
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
                    Achieving carbon neutrality involves clean technologies, energy efficiency, and investing in carbon offset projects like reforestation.
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
                    Strategies include methane capture, energy-efficient equipment, optimized transportation, and land reclamation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Visualization Section */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Carbon Footprint Visualizations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:scale-105 transition-transform">
                <CardContent className="flex justify-center">
                  <PieChart className="h-64 w-64 text-green-600" />
                </CardContent>
                <div className="text-center font-semibold mt-4">Emissions by Region</div>
              </Card>

              <Card className="hover:scale-105 transition-transform">
                <CardContent className="flex justify-center">
                  <LineChart className="h-64 w-full text-blue-600" />
                </CardContent>
                <div className="text-center font-semibold mt-4">Annual Emissions Trend</div>
              </Card>

              <Card className="hover:scale-105 transition-transform">
                <CardContent className="flex justify-center">
                  <BarChart className="h-64 w-full text-purple-600" />
                </CardContent>
                <div className="text-center font-semibold mt-4">Emission Sources</div>
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
