"use client";

import React, { useState } from "react";
import { Users, ChartLine, Target } from "lucide-react";

export default function About() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'mission':
        return (
          <div className="text-neutral-700 dark:text-neutral-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p>CarbonTrack is dedicated to empowering individuals and organizations to understand, reduce, and offset their carbon footprint. We believe in creating a sustainable future through technology and collective action.</p>
          </div>
        );
      case 'team':
        return (
          <div className="text-neutral-700 dark:text-neutral-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Team</h3>
            <p>Our diverse team of Artificial and Machine learning, data analysts, and tech innovators are united by a common goal: combating climate change through intelligent carbon tracking and reduction strategies.</p>
          </div>
        );
      case 'impact':
        return (
          <div className="text-neutral-700 dark:text-neutral-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Impact</h3>
            <p>Since our founding, we've helped organizations reduce their carbon emissions by an average of 25%, demonstrating the power of data-driven sustainability solutions.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" overflow-y-auto max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-6 md:p-12 shadow-lg bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-lg blur-3xl opacity-40" />

      {/* Cross Button */}
      <button
        className="absolute top-4 right-4 text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-700 rounded-full p-2 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-colors shadow-lg"
        onClick={() => window.location.href = '/'}
        aria-label="Close"
      >
        ✖
      </button>

      <h2 className="font-bold text-2xl text-center text-neutral-800 dark:text-neutral-200 mb-6">
        About <span className="text-blue-600">CarbonTrack India</span>
      </h2>

      <div className="my-8 space-y-6">
        <div className="mb-6">
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            CarbonTrack India is dedicated to empowering individuals and organizations to track and reduce their carbon footprint through innovative tools and actionable insights.
          </p>
        </div>

        {/* <div className="mb-6">
          <h3 className="font-semibold text-green-600 mb-3 text-xl">Our Mission</h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            To provide innovative tools and insights that help people understand, monitor, and minimize their environmental impact.
          </p>
        </div> */}
        <div className="flex justify-between mb-6">
          <button 
            onClick={() => setActiveTab('mission')}
            className={`flex items-center ${activeTab === 'mission' ? 'text-blue-600 font-bold' : 'text-neutral-500'} hover:text-blue-600`}
          >
            <Target className="mr-2" size={30} /> Mission
          </button>
          <button 
            onClick={() => setActiveTab('team')}
            className={`flex items-center ${activeTab === 'team' ? 'text-blue-600 font-bold' : 'text-neutral-500'} hover:text-blue-600`}
          >
            <Users className="mr-2" size={30} /> Team
          </button>
          <button 
            onClick={() => setActiveTab('impact')}
            className={`flex items-center ${activeTab === 'impact' ? 'text-blue-600 font-bold' : 'text-neutral-500'} hover:text-blue-600`}
          >
            <ChartLine className="mr-2" size={30} /> Impact
          </button>
        </div>

        <div className="mb-4 space-y-4">
          {renderTabContent()}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-blue-600 mb-3 text-xl">Key Initiatives</h3>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Carbon Footprint Tracking</li>
            <li>Personalized Reduction Strategies</li>
            <li>Educational Resources</li>
            <li>Community Engagement</li>
          </ul>
        </div>

        {/* Interactive Section */}
        <div className="relative mb-8 group">
          <button
            onClick={() => alert("Launching Carbon Footprint Tracker...")}
            className="bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            Track Your Carbon Footprint &rarr;
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mb-6">
          <h3 className="font-semibold text-blue-600 text-xl cursor-pointer flex items-center justify-between" onClick={() => setShowFAQ(!showFAQ)}>
            Frequently Asked Questions
            <span className="transform transition-transform duration-300">
              {showFAQ ? "▲" : "▼"}
            </span>
          </h3>
          {showFAQ && (
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="font-medium text-neutral-700 dark:text-neutral-300">What is CarbonTrack India?</h4>
                <p className="text-neutral-600 dark:text-neutral-400">A platform to help individuals and organizations monitor and reduce their environmental impact.</p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-700 dark:text-neutral-300">How does it work?</h4>
                <p className="text-neutral-600 dark:text-neutral-400">We use AI and data-driven insights to track and recommend personalized reduction strategies.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        className="relative bg-gradient-to-br from-gray-800 to-gray-600 text-white w-full py-3 rounded-md font-medium hover:scale-105 transition-transform shadow-lg"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home &rarr;
        <BottomGradient />
      </button>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
