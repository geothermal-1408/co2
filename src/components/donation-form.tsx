"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TreesIcon as Tree, Loader2 } from "lucide-react";

export default function DonationForm() {
  const [amount, setAmount] = useState(20); // Initialize with ₹20
  const [trees, setTrees] = useState(1); // Default tree calculation based on ₹20
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Update the number of trees based on the donation amount
    setTrees(Math.floor(amount / 20)); // Each ₹20 corresponds to 1 tree
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // TODO: Implement actual payment processing here
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

    setIsLoading(false);
    router.push("/donation-success"); // Redirect to a success page
  };

  return (
    <Card className="w-full border-2 border-green-500 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl text-green-700">
          Make Your Green Impact
        </CardTitle>
        <CardDescription>
          Choose your contribution (minimum ₹20)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-green-600 text-lg">
                Donation Amount (₹)
              </Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) =>
                    setAmount(Math.max(20, Number(e.target.value)))
                  }
                  min={20} // Ensure the minimum amount is 20
                  step={10}
                  required
                  className="w-32 text-2xl font-bold text-green-700"
                />
                <span className="text-3xl font-bold text-green-700">₹</span>
              </div>
            </div>

            {/* Wrap the Slider with a div to apply custom styles */}
            <div className="w-full">
              <Slider
                value={amount} // Pass the amount directly instead of an array
                onValueChange={(value: number) =>
                  setAmount(Math.max(20, value))
                } // Pass a number directly
                max={1000}
                step={10}
                min={20} // Minimum value for slider
              />
            </div>

            <div className="text-sm text-gray-600 italic">
              Slide to adjust or enter a custom amount
            </div>

            <Card className="bg-green-100/80 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <p className="text-2xl font-bold text-green-800 mb-2">
                  Your donation will plant approximately
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <Tree className="w-8 h-8 text-green-600" />
                  <span className="text-4xl font-bold text-green-700">
                    {trees}
                  </span>
                  <span className="text-2xl font-semibold text-green-600">
                    trees
                  </span>
                </div>
                <p className="text-green-700 mt-2">
                  Absorbing up to {trees * 48} pounds of CO₂ per year!
                </p>
              </CardContent>
            </Card>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white text-xl h-14"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              Processing...
            </>
          ) : (
            <>Plant {trees} Trees Now</>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
