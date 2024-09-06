// pages/index.js
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CarbonFootprintAnalysis() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Card className="w-full max-w-4xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Carbon Footprint Analysis</h1>
        <h2 className="text-xl font-semibold text-center mb-6">Energy Use</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Input placeholder="Enter Electricity Consumption Per Year" className="text-center" />
          <Input placeholder="Enter Fossil Fuel Consumption" className="text-center" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <Label className="text-lg font-semibold mb-2">Extraction Process</Label>
            <Input placeholder="Enter the type of mining" className="w-full text-center" />
          </div>
          <div>
            <Label className="text-lg font-semibold mb-2">Coal Processing</Label>
            <Input placeholder="Enter Energy used in processing" className="w-full text-center" />
          </div>
        </div>
        
        <div className="flex justify-center mb-6">
          <Button variant="default" className="py-2 px-6">Analyze</Button>
        </div>
        
        {/* Placeholder divs for charts */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-300 h-48 rounded-lg"></div> {/* Square chart */}
          <div className="bg-gray-300 h-48 w-48 rounded-full mx-auto"></div> {/* Circular chart */}
        </div>
      </Card>
    </div>
  );
}