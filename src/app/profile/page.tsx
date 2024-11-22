// pages/profile.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import based on your Shadcn setup
import { IconTrash, IconLogout, IconUserFilled, IconHistory } from "@tabler/icons-react"; // Import required icons

const ProfilePage: React.FC = () => {
  const username = "John Doe"; // Replace with your username
  const email = "johndoe@example.com"; // Replace with your email

  const handleDeleteProfile = () => {
    alert("Profile deleted!"); // Logic to delete the profile
  };

  const handleLogout = () => {
    alert("Logged out!"); // Logic to logout
  };

  const handleViewHistory = () => {
    alert("Viewing history..."); // Logic for viewing history
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-500 to-indigo-700 p-8">
      {/* Profile Card */}
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        {/* Avatar and User Details */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full mr-4 shadow-md">
            <IconUserFilled className="w-16 h-16 text-gray-600" /> {/* Avatar icon */}
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
            onClick={handleLogout}
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
      </div>

      {/* Additional Information */}
      <div className="mt-8 w-full max-w-md text-center">
        <h2 className="text-xl font-medium text-white">
          Welcome back, {username}!
        </h2>
        <p className="text-gray-200 mt-2">
          Here you can manage your profile, view your history, or logout.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-300 text-sm">
        © {new Date().getFullYear()} Your App Name. All rights reserved.
      </footer>
    </div>
  );
};

export default ProfilePage;
