"use client";
import { navigation } from "@/data/navigation";
import { socials } from "@/data/socials";
import { X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

export default function Sidebar() {
  return (
    <aside className=" flex flex-col w-79.5 h-screen border border-border rounded-2xl   ">
      <div className=" flex justify-between items-center px-5 pt-5 pb-3 ">
        <h2 className=" font-spaceGrotesk font-semibold tracking-tight text-sm text-foreground ">
          Navegacion
        </h2>
        <button className=" text-muted-foreground ">
          <X size={16} />
        </button>
      </div>
      <nav className=" flex flex-col gap-1.5 px-3  ">
        {navigation.map((navItem) => {
          const Icon = navItem.icon;

          return (
            <Link
              key={navItem.label}
              href={navItem.href}
              className=" flex gap-2 p-3 font-inter font-medium tracking-tight text-sm text-muted-foreground  "
            >
              <Icon size={19} /> {navItem.label}
            </Link>
          );
        })}
      </nav>
      <div className=" border-b border-border my-3 mx-3  " />
      <div className=" flex flex-col gap-1.5 px-3 ">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.label}
              href={social.href}
              className=" flex gap-2 p-3 font-inter font-medium tracking-tight text-sm text-muted-foreground  "
            >
              <Icon size={19} /> {social.label}
            </Link>
          );
        })}
      </div>
      <div className=" border-b border-border my-3 mx-3  " />
      <div className=" px-3 ">
        <ThemeToggle />
      </div>
    </aside>
  );
}
