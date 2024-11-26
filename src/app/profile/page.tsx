"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import based on your Shadcn setup
import {
  IconTrash,
  IconLogout,
  IconUserFilled,
  IconHistory,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import { useSession, signOut } from "next-auth/react"; // Import NextAuth hooks

const ProfilePage: React.FC = () => {
  const { data: session, status } = useSession(); // Get user session
  const [darkMode, setDarkMode] = useState(false);

  if (status === "loading") {
    return <p>Loading...</p>; // Loading state
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">You are not signed in.</h1>
        <Button
          onClick={() => window.location.replace("/api/auth/signin")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
        >
          Sign In
        </Button>
      </div>
    );
  }

  const username = session.user?.name || "User"; // Use session data
  const email = session.user?.email || "Email not found";

  const handleDeleteProfile = () => {
    alert("Profile deleted!"); // Implement deletion logic
  };

  const handleLogout = () => {
    signOut(); // Sign out using NextAuth
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
    >
      {/* Header */}
      <header className="w-full max-w-md flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold text-white">Profile Page</h1>
      </header>

      {/* Profile Card */}
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
        {/* Avatar and User Details */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-24 h-24 bg-blue-500 text-white font-bold text-6xl rounded-full mr-4 shadow-md">
            {initial} {/* Avatar icon */}
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {username}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">{email}</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 space-y-4">
          <Button
            variant="default"
            onClick={handleViewHistory}
            className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            <IconHistory className="w-5 h-5 mr-2" />
            View History
          </Button>
          <Button
            variant="default"
            onClick={() => signOut({ callbackUrl: '/api/auth/logout'})}
            className="w-full flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            <IconLogout className="w-5 h-5 mr-2" />
            Logout
          </Button>
          <Button
            variant="destructive"
            onClick={handleDeleteProfile}
            className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white"
          >
            <IconTrash className="w-5 h-5 mr-2" />
            Delete Profile
          </Button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-6 flex justify-center">
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
        © {new Date().getFullYear()} Your App Name. All rights reserved.
      </footer>
    </div>
  );
};

export default ProfilePage;
