"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

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

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const showLabel = variant === "mobile" || active;

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  // El servidor y el primer render del cliente muestran exactamente lo mismo
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Cambiar tema"
        className={`
          flex items-center gap-3 rounded-xl p-3 w-full
          ${active ? "bg-muted text-foreground" : "text-muted-foreground"}
        `}
      >
        <Moon size={16} className="shrink-0" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onClick={handleToggleTheme}
      aria-label={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
      className={`
        flex items-center gap-3 rounded-xl p-3 w-full
        ${active ? "bg-muted text-foreground" : "text-muted-foreground"}
      `}
    >
      {isDark ? (
        <Sun size={16} className="shrink-0" />
      ) : (
        <Moon size={16} className="shrink-0" />
      )}

      <span
        className={`
          overflow-hidden whitespace-nowrap
          font-inter text-sm text-muted-foreground font-medium tracking-tight
          transition-[max-width,opacity,margin]
          duration-300
          ${
            showLabel
              ? "max-w-40 opacity-100 ml-1"
              : "max-w-0 opacity-0 ml-0"
          }
        `}
      >
        Modo {isDark ? "Claro" : "Oscuro"}
      </span>
    </button>
  );
}