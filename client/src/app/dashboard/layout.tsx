"use client";

import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dashboard } from "./page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  IconDashboard,
  IconLeaf,
  IconGraph,
  IconScale,
  IconFileReport,
} from "@tabler/icons-react";
import LoadingState from "@/components/LoadingState/LoadingState";

export function Dashboardlayout() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconDashboard className="text-black dark:text-white h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: "Carbon Footprint",
      href: "/footprint",
      icon: (
        <IconLeaf className="text-black dark:text-white h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: "Sink Analysis",
      href: "/carbonsink",
      icon: (
        <IconGraph className="text-black dark:text-white h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: "Neutrality",
      href: "/neutrality",
      icon: (
        <IconScale className="text-black dark:text-white h-7 w-7 flex-shrink-0" />
      ),
    },
    // {
    //   label: "Report",
    //   href: "/report",
    //   icon: (
    //     <IconFileReport className="text-black dark:text-white h-7 w-7 flex-shrink-0" />
    //   ),
    // },
  ];
  const [open, setOpen] = useState(false);

  /*const { data: session, status } = useSession();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") {
      // Show loading state while session is loading
      setIsLoading(true);
      return;
    }

    // Once the session is loaded, check if user is authenticated
    if (!session) {
      // If not authenticated, redirect to login page and show alert

      alert("Please sign up or log in to access this page.");
      router.push("/login");
    } else {
      // If authenticated, stop loading
      setIsLoading(false);
    }
  }, [status, session, router]);

  if (isLoading) {
    // Show loading state while session is loading
    return (
      <LoadingState
        message="Loading..."
        submessage="Please wait while we check your session."
      />
    );
  }*/

  return (
    <div className="h-screen flex flex-row bg-gray-100 dark:bg-gray-900">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-5 ">
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SidebarLink link={link} />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "profile",
                href: "/profile",
                icon: (
                  <Image
                    src=""
                    className="h-9 w-9 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        <Dashboard />
      </div>
    </div>
  );
}

// Logo Components
export const Logo = () => (
  <Link
    href="/dashboard"
    className="font-normal flex space-x-5 items-center text-m text-black py-1 "
  >
    <div className="h-7 w-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex-shrink-0" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-semibold text-lg text-black dark:text-white whitespace-pre"
    >
      CarbonTrack
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link
    href="/profile"
    className="font-normal flex space-x-2 items-center text-sm text-black py-1"
  >
    <div className="h-5 w-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex-shrink-0" />
  </Link>
);

export default Dashboardlayout;