"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import Link from "next/link"
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

interface Errors {
  username?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export default function SignUp() {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [errors, setErrors] = useState<Errors>({})

  const validateInputs = (): boolean => {
    const newErrors: Errors = {}
    if (!username.trim()) newErrors.username = "Username cannot be empty"
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email address"
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters long"
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (validateInputs()) {
      alert("Sign up successful!")
      setUsername('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-teal-400 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <Label htmlFor="username" className="sr-only">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 border-black rounded-full pl-10 py-2"
            />
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            {errors.username && <small className="text-red-500">{errors.username}</small>}
          </div>
          
          <div className="mb-4 relative">
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black rounded-full pl-10 py-2"
            />
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>

          <div className="mb-4 relative">
            <Label htmlFor="password" className="sr-only">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-black rounded-full pl-10 py-2"
            />
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            {errors.password && <small className="text-red-500">{errors.password}</small>}
          </div>

          <div className="mb-6 relative">
            <Label htmlFor="confirm_password" className="sr-only">Confirm Password</Label>
            <Input
              id="confirm_password"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-2 border-black rounded-full pl-10 py-2"
            />
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-teal-400 to-indigo-600 text-white rounded-full py-2">
            Sign Up
          </Button>

          <p className="text-center mt-4">
            Already a member? 
            <Link href={"/login"} className="text-teal-500">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
