import { Metadata } from 'next'
import Image from 'next/image'
import DonationForm from '@/components/donation-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TreesIcon as Tree, Thermometer, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate to Plant Trees',
  description: 'Make a donation to plant trees and help combat global warming',
}

export default function DonatePage() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 relative" 
      style={{ backgroundImage: "url('https://media.greenmatters.com/brand-img/XyKQ739tU/1440x753/tree-planting-carbon-offset-1554233333607.jpg')" }} // Updated background image
    >
      <div className="absolute inset-0 bg-black/30" />
      <Card className="w-full max-w-5xl bg-white/80 backdrop-blur-md relative z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://media.greenmatters.com/brand-img/XyKQ739tU/1440x753/tree-planting-carbon-offset-1554233333607.jpg')" }} // Updated background image
        />
        <CardContent className="p-0 relative z-10">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-green-800 mb-6">Plant Trees, Cool Our Planet</h1>
              <p className="text-gray-800 mb-6 text-lg">
                Your contribution doesn't just plant trees – it actively combats global warming. 
                Each tree absorbs CO₂, reducing greenhouse gases and cooling our planet.
              </p>
              <Card className="bg-green-100/80 backdrop-blur-sm mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-green-800 mb-2">Impact of Your Donation</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-700">
                      <Tree className="mr-2 h-5 w-5" />
                      Absorbs up to 48 pounds of CO₂ per year
                    </li>
                    <li className="flex items-center text-green-700">
                      <Leaf className="mr-2 h-5 w-5" />
                      Provides oxygen for two human beings
                    </li>
                    <li className="flex items-center text-green-700">
                      <Thermometer className="mr-2 h-5 w-5" />
                      Reduces soil erosion and increases biodiversity
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg h-14" asChild>
                <a href="#donate-form">
                  <Tree className="mr-2 h-6 w-6" />
                  Start Planting Now
                </a>
              </Button>
            </div>
            <div className="md:w-1/2 p-8" id="donate-form">
              <DonationForm />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
