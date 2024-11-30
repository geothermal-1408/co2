"use client";

import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        About CarbonTrack India
      </h2>

      <p className="text-center mt-4">
        Want to learn more about our mission?
        <Link
          href={"/"}
          className="font-bold text-red-600 hover:text-blue-500 ml-2"
        >
          Back to Home
        </Link>
      </p>

      <div className="my-8 space-y-4">
        <div className="mb-4">
          <p className="text-neutral-700 dark:text-neutral-300">
            CarbonTrack India is dedicated to empowering individuals and organizations to track and reduce their carbon footprint.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-green-600 mb-2">Our Mission</h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            To provide innovative tools and insights that help people understand, monitor, and minimize their environmental impact.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-green-600 mb-2">Key Initiatives</h3>
          <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
            <li>Carbon Footprint Tracking</li>
            <li>Personalized Reduction Strategies</li>
            <li>Educational Resources</li>
            <li>Community Engagement</li>
          </ul>
        </div>
      </div>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform"
        onClick={() => window.location.href = '/'}
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