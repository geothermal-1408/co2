import { BarChart3, LineChart, PieChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <div className="h-6 w-6 bg-primary" />
            <span className="text-lg font-bold">CarbonTrack India</span>
          </Link>
          <nav className="flex gap-6">
            <Link className="text-sm font-medium hover:text-primary" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              Initiatives
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              Contact
            </Link>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section
          className="relative bg-cover bg-center py-24 text-white"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
            backgroundColor: "rgba(0,0,0,0.7)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container space-y-6 text-center">
            <h1 className="flex flex-col items-center justify-center space-y-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Carbon Footprint
              </span>
              <span className="flex items-center space-x-2">
                <span className="animate-pulse text-primary">&</span>
                <span>Neutrality</span>
              </span>
              <span className="text-2xl font-light sm:text-3xl md:text-4xl">
                in Indian Coal Mines
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-200">
              Understanding and mitigating the environmental impact of coal mining in India
            </p>
            <Button size="lg" className="mt-4 animate-bounce">
              Learn More
            </Button>
          </div>
        </section>
        <section className="container py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-video w-full">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Carbon Footprint Illustration"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Carbon Footprint</h3>
                <p className="text-muted-foreground">
                  Coal mines in India contribute significantly to the country's carbon footprint. They release methane, a
                  potent greenhouse gas, and the coal extraction and transportation processes emit substantial CO2.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-video w-full">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Carbon Neutrality Illustration"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Carbon Neutrality</h3>
                <p className="text-muted-foreground">
                  Achieving carbon neutrality in Indian coal mines involves implementing clean technologies, improving energy
                  efficiency, and investing in carbon offset projects like reforestation and renewable energy.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-video w-full">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mitigation Strategies Illustration"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Mitigation Strategies</h3>
                <p className="text-muted-foreground">
                  Strategies include methane capture and utilization, energy-efficient equipment, optimized transportation, and
                  land reclamation. These efforts aim to reduce the overall carbon impact of coal mining operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="container py-12 md:py-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Carbon Footprint Visualizations</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="transition-transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Emissions by Region</h3>
                <div className="aspect-square rounded-full border-8 border-primary/30" />
              </CardContent>
            </Card>
            <Card className="transition-transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Annual Emissions Trend</h3>
                <div className="aspect-video rounded bg-primary/30" />
              </CardContent>
            </Card>
            <Card className="transition-transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Emission Sources</h3>
                <div className="aspect-video rounded bg-primary/30" />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © 2024 CarbonTrack India. All rights reserved.
        </div>
      </footer>
    </div>
  )
}