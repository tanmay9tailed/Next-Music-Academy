"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 w-2/3 sm:max-w-2xl mx-auto z-50 text-xs sm:text-xl", className)}>
      <Menu setActive={setActive}>
      <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/basic-music">Basic Music</HoveredLink>
            <HoveredLink href="/advanced-music">Advanced Music</HoveredLink>
            <HoveredLink href="/songwriting">Songwriting</HoveredLink>
            <HoveredLink href="/music-production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
