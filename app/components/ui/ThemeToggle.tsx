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
  const { theme, setTheme } = useTheme();

  const themeToggle = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  const showLabel = variant === "mobile" || active;


  return (
    <button
      className={`
    flex items-center gap-3 rounded-xl p-3 w-full 
    ${active ? "bg-muted text-foreground" : "text-muted-foreground"}
  `}
      onMouseEnter={onHover}
      onClick={themeToggle}
    >
      {theme === "light" ? <Moon size={16} className="shrink-0" /> : <Sun size={16} className="shrink-0" />}
      <p
        className={`
    overflow-hidden whitespace-nowrap font-inter text-sm font-medium tracking-tight  transition-transform duration-300
    ${showLabel ? "max-w-40 opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"}
  `}
      >
        {` Modo ${theme === "light" ? "Oscuro" : "Claro"}`}
      </p>
    </button>
  );
}
