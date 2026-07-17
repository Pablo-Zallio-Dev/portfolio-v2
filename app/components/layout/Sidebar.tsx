"use client";
import { navigation } from "@/data/navigation";
import { socials } from "@/data/socials";
import { X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import NavLink from "../ui/NavLink";
import { useState } from "react";

export type SidebarVariant = "desktop" | "mobile";

export interface SidebarProps {
      onClose?: () => void;
      variant: SidebarVariant;
}

export default function Sidebar({ variant, onClose }: SidebarProps) {
      const [expanded, setExpanded] = useState(false);
      const [hoveredLink, setHoveredLink] = useState<string | null>(null);
      const [currentSection, setCurrentSection] = useState("home");

      


      const isExpanded = variant === "mobile" || expanded;

      return (
            <aside
                  onMouseEnter={() => setExpanded(true)}
                  onMouseLeave={() => {
                        setExpanded(false);
                        setHoveredLink(null);
                  }}
                  className={`  fixed
                        z-60
    lg:top-1/2
    lg:left-6
    lg:-translate-y-1/2
     flex flex-col ${variant === "desktop" ? (expanded ? "w-52 " : "w-18") : "w-69.5"} py-3  transition-all duration-500 bg-glass backdrop-blur-sm border border-border rounded-2xl `}
            >
                  {variant === "mobile" && (
                        <div className=" flex justify-between items-center px-5 pt-5 pb-3 ">
                              <h2 className=" font-spaceGrotesk font-semibold tracking-tight text-sm text-foreground ">
                                    Navegacion
                              </h2>
                              {onClose && (
                                    <button className=" text-muted-foreground " onClick={onClose}>
                                          <X size={16} />
                                    </button>
                              )}
                        </div>
                  )}
                  <nav className=" flex flex-col gap-1.5 px-3  ">
                        {navigation.map((navItem) => (
                              <NavLink
                                    variant={variant}
                                    expanded={isExpanded}
                                    active={currentSection === navItem.href.replace("#", "")}
                                    hovered={hoveredLink === navItem.label}
                                    onHover={() => setHoveredLink(navItem.label)}
                                    onClick={() => {
                                          setCurrentSection(navItem.href.replace("#", ""));
                                          onClose?.();
                                    }}
                                    key={navItem.label}
                                    {...navItem}
                              />
                        ))}
                  </nav>
                  <div className=" border-b border-border my-3 mx-3  " />
                  <div className=" flex flex-col gap-1.5 px-3 ">
                        {socials.map((social) => (
                              <NavLink
                                    variant={variant}
                                    expanded={isExpanded}
                                    active={currentSection === social.href.replace("#", "")}
                                    hovered={hoveredLink === social.label}
                                    onHover={() => setHoveredLink(social.label)}
                                    key={social.label}
                                    social
                                    {...social}
                              />
                        ))}
                  </div>
                  <div className=" border-b border-border my-3 mx-3  " />
                  <div className=" px-3 ">
                        <ThemeToggle
                              variant={variant}
                              expanded={isExpanded}
                              active={hoveredLink === "theme"}
                              onHover={() => setHoveredLink("theme")}
                        />
                  </div>
            </aside>
      );
}
