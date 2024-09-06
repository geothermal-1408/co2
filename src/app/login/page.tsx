"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from "next/link";
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const router = useRouter();

  // Handle form field changes
  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    // Get stored username and password from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Compare the stored credentials with the submitted ones
    if (formData.username === storedUsername && formData.password === storedPassword) {
      // Redirect to the dashboard on successful login
      router.replace("/dashboard");
    } else {
      // Set error message for incorrect credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 to-indigo-600">
      <div className="bg-white p-10 border-4 border-black rounded-lg shadow-lg backdrop-blur-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-black mb-8">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="relative mb-6">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full py-3 pl-10 pr-3 border-2 border-black rounded-full bg-white bg-opacity-50 text-black shadow-inner"
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-lg">
              <FaUser />
            </span>
          </div>

          {/* Password Field */}
          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full py-3 pl-10 pr-3 border-2 border-black rounded-full bg-white bg-opacity-50 text-black shadow-inner"
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-lg">
              <FaLock />
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 bg-gradient-to-br from-teal-400 to-indigo-600 border border-black rounded-full text-black font-semibold transition-transform transform hover:scale-105 hover:shadow-lg">
            Login
          </button>

          <p className="text-center mt-4">
            Not yet a member?{' '}
            <Link href="/signup" className="font-bold text-black hover:text-pink-500">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}