"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import Link from "next/link"
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

interface Errors {
  username?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState<Errors>({})
  const [success, setSuccess] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const router = useRouter()

  // Input change handler for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Validate input fields before form submission
  const validateInputs = (): boolean => {
    const newErrors: Errors = {}

    if (!formData.username.trim()) newErrors.username = "Username cannot be empty"
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address"
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long"
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission and store in local storage
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (validateInputs()) {
      // Store username and password in localStorage
      localStorage.setItem('username', formData.username)
      localStorage.setItem('password', formData.password)
      localStorage.setItem('email' , formData.email);

      // Navigate to dashboard
      router.replace('/dashboard');

      alert('Signup successful');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-4 border-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4 relative">
            <Label htmlFor="username" className="sr-only">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="border-2 border-black rounded-full pl-10 py-2"
            />
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            {errors.username && <small className="text-red-500">{errors.username}</small>}
          </div>
          
          {/* Email Field */}
          <div className="mb-4 relative">
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-black rounded-full pl-10 py-2"
            />
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <Label htmlFor="password" className="sr-only">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 border-black rounded-full pl-10 py-2"
            />
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            {errors.password && <small className="text-red-500">{errors.password}</small>}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6 relative">
            <Label htmlFor="confirmPassword" className="sr-only">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border-2 border-black rounded-full pl-10 py-2"
            />
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}
          </div>

          <Button type="submit" className="w-full py-3 text-lg bg-gradient-to-br from-teal-400 to-indigo-600 border border-black rounded-full text-black font-semibold transition-transform transform hover:scale-105 hover:shadow-lg">
            Sign Up
          </Button>

          <p className="text-center mt-4">
            Already a member? 
            <Link href={"/login"} className="font-bold text-black hover:text-pink-500">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}