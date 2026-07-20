"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="   " >
      <button
        className=" fixed bottom-5 right-5 z-50 flex justify-center items-center w-14 h-14 rounded-full bg-background border border-border transition-transform duration-200 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <X
          size={20}
          className={` absolute ${isOpen ? " opacity-100 rotate-90 scale-100 " : " opacity-0 scale-0 "} transition-transform duration-300 `}
        />
        <Menu
          size={20}
          className={` absolute ${!isOpen ? " opacity-100 rotate-180 scale-100" : " opacity-0 scale-0 "} transition-transform duration-300 `}
        />
      </button>
      <div
        className={` fixed z-40 inset-0 backdrop-blur-lg transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`p-4 transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(event) => event.stopPropagation()}
        >
          <Sidebar variant="mobile" onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
}


