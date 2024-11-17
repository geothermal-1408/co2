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
  password?: string;
}

export default function Login() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  // Handle form field changes
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
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Get stored username and password from local storage
    const storedFirstName = localStorage.getItem("firstname");
    const storedLastName = localStorage.getItem("lastname");
    const storedPassword = localStorage.getItem("password");

    // Compare the stored credentials with the submitted ones
    if (
      validateInputs() &&
      formData.firstname === storedFirstName &&
      formData.lastname === storedLastName &&
      formData.password === storedPassword
    ) {
      // Redirect to the dashboard on successful login
      router.replace("/dashboard");
      alert("Login Successful");
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className="relative max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
          Welcome Again to CarbonTrack India
        </h2>

        <p className="text-center mt-4">
          Not yet a member?
          <Link
            href={"/signup"}
            className="font-bold text-red-600 hover:text-blue-500"
          >
            Sign Up
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

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login &rarr;
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
