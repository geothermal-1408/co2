"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/ace_input";
import { Label } from "@/components/ui/ace_label";
import { useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandFacebook,
} from "@tabler/icons-react";

interface Errors {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  // Input change handler for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate input fields before form submission
  const validateInputs = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.firstname.trim())
      newErrors.firstname = "First Name cannot be empty";
    if (!formData.lastname.trim())
      newErrors.lastname = "Last Name cannot be empty";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Enter a valid email address";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission and store in local storage
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateInputs()) {
      // Store username and password in localStorage
      localStorage.setItem("firstname", formData.firstname);
      localStorage.setItem("lastname", formData.lastname);
      localStorage.setItem("password", formData.password);
      localStorage.setItem("email", formData.email);

      // Navigate to dashboard
      router.replace("/login");

      alert("Signup successful");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        Welcome to CarbonTrack India
      </h2>

      <p className="text-center mt-4">
        Already a member?
        <Link
          href={"/login"}
          className="font-bold text-red-600 hover:text-blue-500"
        >
          Login
        </Link>
      </p>
      {success && <p className="text-blue-500 text-center mb-4">{success}</p>}
      {errorMessage && (
        <p className="text-red-500 text-center mb-4">{errorMessage}</p>
      )}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tony"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <small className="text-red-500">{errors.firstname}</small>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Stark"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <small className="text-red-500">{errors.lastname}</small>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="ironman@gmail.com"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="text-red-500">{errors.email}</small>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <small className="text-red-500">{errors.password}</small>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmpassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <small className="text-red-500">{errors.confirmPassword}</small>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Facebook
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
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
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
