"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  IconTrash,
  IconLogout,
  IconHistory,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import Router from "next/router";
import { signOut, useSession } from "next-auth/react";

const ProfilePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const session = useSession();
  console.log(session);

  const username = "User";
  const email = " ";
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  // if (status === "loading") {
  //   return <p>Loading...</p>; // Loading state
  // }

  // if (!session) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
  //       <h1 className="text-3xl font-bold text-gray-800">
  //         You are not signed in.
  //       </h1>
  //       <Button
  //         onClick={() => window.location.replace("/api/auth/signin")}
  //         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
  //       >
  //         Sign In
  //       </Button>
  //     </div>
  //   );
  // }
  const handleDeleteProfile = async () => {
    try {
      const response = await fetch("api/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        Router.replace("/");
      } else {
        alert(data.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleViewHistory = () => {
    alert("Viewing history..."); // Implement history view logic
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const initial = username.charAt(0).toUpperCase();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-8 ${
        darkMode
          ? "bg-slate-900"
          : "bg-gradient-to-br from-blue-900 to-indigo-950"
      }`}
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/mergernetwork/image/upload/posts/1B6E2FB6-6CF1-40DA-B2668CA934B89396.jpg')", // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Profile Card */}
      <div
        className="w-full max-w-4xl bg-white dark:bg-slate-800 rounded-lg shadow-lg p-10 flex flex-col justify-between"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight translucency with white background
        }}
      >
        {/* Header inside Profile Card */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-black">
          Profile Page
        </h1>

        {/* Avatar and User Details */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-32 h-32 bg-blue-500 text-white font-bold text-7xl rounded-full mb-4 shadow-md">
            {initial} {/* Avatar icon */}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
              {username}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">{email}</p>
          </div>
        </div>

        {/* Input Fields for User Data */}
        <div className="mb-8 space-y-4 flex flex-col items-center">
          <input
            type="text"
            placeholder="Change Username"
            className="w-3/4 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600"
            value={username}
            //onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Change Email"
            className="w-3/4 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600"
            value={email}
            //onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Organization"
            className="w-3/4 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
          <input
            type="text"
            placeholder="Designation"
            className="w-3/4 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />

          {/* Location Dropdown */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-3/4 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600"
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        {/* Buttons Section */}
        <div className="mt-8 space-y-4 flex flex-col items-center">
          <Button
            variant="default"
            onClick={handleViewHistory}
            className="w-3/4 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            <IconHistory className="w-5 h-5 mr-2" />
            View History
          </Button>
          <Button
            variant="default"
            onClick={() => signOut({ callbackUrl: "/api/auth/logout" })}
            className="w-3/4 flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            <IconLogout className="w-5 h-5 mr-2" />
            Logout
          </Button>
          <Button
            variant="destructive"
            onClick={handleDeleteProfile}
            className="w-3/4 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white"
          >
            <IconTrash className="w-5 h-5 mr-2" />
            Delete Profile
          </Button>
        </div>

        {/* Dark Mode Toggle (aligned to the right) */}
        <div className="mt-6 flex justify-end">
          <Button
            variant="default"
            onClick={toggleDarkMode}
            className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <IconSun className="w-5 h-5 mr-2" />
            ) : (
              <IconMoon className="w-5 h-5 mr-2" />
            )}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-gray-300 text-sm">
        © {new Date().getFullYear()} Carbon Track. All rights reserved.
      </footer>
    </div>
  );
};

export default ProfilePage;
