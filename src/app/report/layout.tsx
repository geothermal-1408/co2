"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import CarbonReport from "./page";

import {
  IconDashboard,
  IconLeaf,
  IconGraph,
  IconScale,
  IconFileReport,
} from "@tabler/icons-react";


export function dashboardlayout() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconDashboard className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
    {
      label: "Carbon Footprint",
      href: "/footprint",
      icon: <IconLeaf className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
    {
      label: "Sink Analysis",
      href: "/carbonsink",
      icon: <IconGraph className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
    {
      label: "Neutrality",
      href: "/neutrality",
      icon: <IconScale className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
    {
      label: "Report",
      href: "/report",
      icon: <IconFileReport className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-5">
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
                label: "John Doe",
                href: "#",
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
      <CarbonReport/>
    </div>
  );
}

// Logo Components
export const Logo = () => (
  <Link href="/dashboard" className="font-normal flex space-x-5 items-center text-m text-black py-1 ">
    <div className="h-7 w-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex-shrink-0" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-semibold text-2xl text-black dark:text-white whitespace-pre"
    >
      CarbonTrack India
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link href="/profile" className="font-normal flex space-x-2 items-center text-sm text-black py-1">
    <div className="h-5 w-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex-shrink-0" />
  </Link>
);

export default dashboardlayout