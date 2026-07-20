"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export interface ToggleTheme {
  variant: "desktop" | "mobile";
  expanded?: boolean;
  active: boolean;
  onHover?: () => void;
}

export default function ThemeToggle({
  variant,
  active,
  onHover,
}: ToggleTheme) {
  const { resolvedTheme, setTheme } = useTheme();

  const showLabel = variant === "mobile" || active;

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onClick={handleToggleTheme}
      className={`
        flex items-center gap-3 rounded-xl p-3 w-full
        ${active ? "bg-muted text-foreground" : "text-muted-foreground"}
      `}
    >
      {resolvedTheme === "light" ? (
        <Moon size={16} className="shrink-0" />
      ) : (
        <Sun size={16} className="shrink-0" />
      )}

      <span
        className={`
          overflow-hidden whitespace-nowrap font-inter text-sm text-muted-foreground font-medium tracking-tight transition-all duration-300
          ${showLabel ? "max-w-40 opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"}
        `}
      >
        Modo {resolvedTheme === "light" ? "Oscuro" : "Claro"}
      </span>
    </button>
  );
}