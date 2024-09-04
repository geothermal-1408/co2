// components/Login.js
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from "axios"
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const router=useRouter()
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    const data={username,password}
const res= await axios.get("/api/login",data)
if(res.status==200)
    router.replace("/dashboard")
    if (validateForm()) {
      alert('Login successful!');
      // Handle form submission here
    }
  };

  const validateForm = () => {
    if (!username || !password) {
      alert('Username and Password are required!');
      return false;
    }
    // Add more validation logic if needed
    return true;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-300 to-indigo-600">
      <div className="bg-green-500 p-10 border border-black rounded-lg shadow-lg backdrop-blur-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-black mb-8">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-3 pl-10 pr-3 border border-black rounded-full bg-white bg-opacity-50 text-black shadow-inner"
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-lg">
              <FaUser />
            </span>
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-10 pr-3 border border-black rounded-full bg-white bg-opacity-50 text-black shadow-inner"
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-lg">
              <FaLock />
            </span>
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-br from-cyan-400 to-pink-500 border border-black rounded-full text-black font-semibold transition-transform transform hover:scale-105 hover:shadow-lg">
            Login
          </button>
          <p className="text-center mt-4">
            Not yet a member?{' '}
            <a href="#" className="font-bold text-black hover:text-pink-500">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
