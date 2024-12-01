import React, { useState } from "react";
import Link from "next/link";
import { Users, ChartLine, Target } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'mission':
        return (
          <div className="text-neutral-700 dark:text-neutral-300">
            <h3 className="text-lg font-semibold text-green-600 mb-4">Our Mission</h3>
            <p>CarbonTrack India is dedicated to empowering individuals and organizations to understand, reduce, and offset their carbon footprint. We believe in creating a sustainable future through technology and collective action.</p>
          </div>
        );
      case 'team':
        return (
          <div className="text-neutral-700 dark:text-neutral-300">
            <h3 className="text-lg font-semibold text-green-600 mb-4">Our Team</h3>
            <p>Our diverse team of Artificial and Machine learning, data analysts, and tech innovators are united by a common goal: combating climate change through intelligent carbon tracking and reduction strategies.</p>
          </div>
        );
      case 'impact':
        return (
          <div className="text-neutral-700 dark:text-neutral-300">
            <h3 className="text-lg font-semibold text-green-600 mb-4">Our Impact</h3>
            <p>Since our founding, we've helped organizations reduce their carbon emissions by an average of 25%, demonstrating the power of data-driven sustainability solutions.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        About CarbonTrack India
      </h2>

      <p className="text-center mt-4">
        Want to go back?
        <Link
          href={"/"}
          className="font-bold text-red-600 hover:text-blue-500 ml-2"
        >
          Back to Home
        </Link>
      </p>

      <div className="my-8 space-y-4">
        <div className="flex justify-between mb-6">
          <button 
            onClick={() => setActiveTab('mission')}
            className={`flex items-center ${activeTab === 'mission' ? 'text-green-600 font-bold' : 'text-neutral-500'} hover:text-green-500`}
          >
            <Target className="mr-2" size={20} /> Mission
          </button>
          <button 
            onClick={() => setActiveTab('team')}
            className={`flex items-center ${activeTab === 'team' ? 'text-green-600 font-bold' : 'text-neutral-500'} hover:text-green-500`}
          >
            <Users className="mr-2" size={20} /> Team
          </button>
          <button 
            onClick={() => setActiveTab('impact')}
            className={`flex items-center ${activeTab === 'impact' ? 'text-green-600 font-bold' : 'text-neutral-500'} hover:text-green-500`}
          >
            <ChartLine className="mr-2" size={20} /> Impact
          </button>
        </div>

        <div className="mb-4 space-y-4">
          {renderTabContent()}
        </div>

        <div className="mb-4 space-y-2">
          <h3 className="font-semibold text-green-600">Company Information</h3>
          <div className="flex items-center text-neutral-700 dark:text-neutral-300">
            <Target className="mr-2 text-green-600" size={20} />
            <span>Team Miners</span>
          </div>
          <div className="flex items-center text-neutral-700 dark:text-neutral-300">
            <Users className="mr-2 text-blue-600" size={20} />
            <span>Founded in 2024</span>
          </div>
          <div className="flex items-center text-neutral-700 dark:text-neutral-300">
            <ChartLine className="mr-2 text-purple-600" size={20} />
            <span>Carbon Reduction Solutions</span>
          </div>
        </div>

        <Link
          href="/contact"
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform text-center flex items-center justify-center"
        >
          Contact Us &rarr;
        </Link>
      </div>
    </div>
  );
}