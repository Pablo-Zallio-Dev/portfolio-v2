"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function MobileMenu() {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <div className="   " >
                  <button
                        className=" fixed bottom-3 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center w-14 h-14 rounded-full bg-blue-800 border border-border transition-transform duration-200 "
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir o cerrar menu movil"
                  >
                        <div className="absolute flex flex-col items-center justify-center ">
                        <X
                              size={16}
                              className={` absolute top-0 text-background ${isOpen ? " opacity-100 rotate-90 scale-100 " : " opacity-0 scale-0 "} transition-transform duration-300 `}
                        />

                              <Menu
                                    size={16}
                                    className={` text-background  ${!isOpen ? " opacity-100 rotate-180 scale-100" : " opacity-0 scale-0 "} transition-transform duration-300 `}
                              />
                              <p className=" text-[10px] tracking-widest uppercase text-muted ">menu</p>
                        </div>
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


