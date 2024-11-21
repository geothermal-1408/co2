// pages/profile.tsx
"use client"

import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import based on your Shadcn setup
import { IconTrash, IconLogout, IconUserFilled } from '@tabler/icons-react'; // Import the icons you want to use

const ProfilePage: React.FC = () => {
  const username = 'John Doe'; // Replace with your username
  const email = 'johndoe@example.com'; // Replace with your email

  const handleDeleteProfile = () => {
    // Logic to delete the profile goes here
    alert('Profile deleted!');
  };

  const handleLogout = () => {
    // Logic to logout goes here
    alert('Logged out!');
  };

  return (
    <div className="flex items-start p-6 h-screen bg-gray-100 dark:bg-slate-700">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full mr-4">
          <IconUserFilled  className="w-12 h-12 text-gray-600" /> {/* Avatar icon */}
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white dark:text-black">{username}</h1>
          <p className="text-gray-600 text-white dark:text-black">{email}</p>
          <div className="mt-4 space-x-2">
            <Button variant="destructive" onClick={handleDeleteProfile}>
              <IconTrash className="w-4 h-4 mr-2" /> Delete Profile
            </Button>
            <Button onClick={handleLogout}>
              <IconLogout className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;