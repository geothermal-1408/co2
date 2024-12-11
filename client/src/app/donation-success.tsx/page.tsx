/*import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreesIcon as Tree, Thermometer, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Donation Successful",
  description:
    "Thank you for your donation to plant trees and combat global warming",
};

export default function DonationSuccessPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 relative"
      style={{ backgroundImage: "url('/images/forest-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <Card className="max-w-3xl bg-white/80 backdrop-blur-md relative z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/leaves-background.jpg')" }}
        />
        <CardHeader className="text-center relative z-10">
          <div className="flex justify-center items-center mb-8">
            <Tree className="w-16 h-16 text-green-600 mr-4" />
            <Thermometer className="w-16 h-16 text-blue-600" />
          </div>
          <CardTitle className="text-5xl font-bold text-green-800 mb-6">
            Thank You for Cooling Our Planet!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 relative z-10">
          <p className="text-gray-800 text-xl text-center">
            Your generous contribution will help us plant trees, combat global
            warming, and create a healthier environment for future generations.
          </p>
          <Card className="bg-green-100/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-800">
                Your Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-green-700 text-lg">
                  <Leaf className="w-6 h-6 mr-2" />
                  Reduced carbon emissions
                </li>
                <li className="flex items-center text-green-700 text-lg">
                  <Thermometer className="w-6 h-6 mr-2" />
                  Cooler local temperatures
                </li>
                <li className="flex items-center text-green-700 text-lg">
                  <Tree className="w-6 h-6 mr-2" />
                  Increased biodiversity
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Button
              asChild
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xl h-14"
            >
              <Link href="/dashboard">Track Your Impact</Link>
            </Button>
            <Button asChild variant="outline" className="w-full text-lg h-12">
              <Link href="/donate">Make Another Donation</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

*/
