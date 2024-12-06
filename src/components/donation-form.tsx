"use client";

import { useState, useEffect } from "react";
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
import { QRCodeSVG } from "qrcode.react";

export default function DonationForm() {
  const [amount, setAmount] = useState<number>(20); // Initialize with ₹20
  const [trees, setTrees] = useState<number>(1); // Default tree calculation
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showQRCode, setShowQRCode] = useState<boolean>(false);

  // Replace with your UPI ID and details
  const upiPaymentLink = "upi://pay?pa=upi_id@bank&pn=Yourname&mc=0000";

  const handleGenerateQRCode = () => {
    setIsLoading(true); // Start the loading process
    setTimeout(() => {
      setIsLoading(false); // Stop the loading
      setShowQRCode(true); // Show the QR code
    }, 2000); // Simulate 2-second processing
  };

  useEffect(() => {
    // Update the number of trees based on the donation amount
    setTrees(Math.floor(amount / 20)); // Each ₹20 corresponds to 1 tree
  }, [amount]);

  return (
    <Card className="w-full border-2 border-green-500 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl text-green-700 text-center">
          Make Your Green Impact
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showQRCode && (
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
              <p className="text-gray-600 text-sm">Choose your contribution (minimum ₹20)</p>
            </div>

            {/* Slider */}
            <div className="w-full">
              <Slider
                value={amount} // Pass the amount as an array for Slider
                onValueChange={(value: number) =>
                  setAmount(Math.max(20, value))
                } // Ensure minimum amount is 20
                max={1000}
                step={10}
                min={20} // Minimum value for slider
              />
            </div>

            <div className="text-sm text-gray-600 italic">
              Slide to adjust or enter a custom amount
            </div>

            <Card className="bg-green-100/80 backdrop-blur-sm">
              <CardContent className="p-3 text-center">
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
        )}
        {showQRCode && (
          <div className="text-center">
            <p className="text-xl font-semibold text-green-700 mb-4">
              Scan this QR code to make a payment!
            </p>
            <QRCodeSVG value={upiPaymentLink} size={200} className="mx-auto" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!showQRCode && (
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white text-xl h-14"
            onClick={handleGenerateQRCode}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                Generating QR Code...
              </>
            ) : (
              <>Plant {trees} Trees Now</>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
