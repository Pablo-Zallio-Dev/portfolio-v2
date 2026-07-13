import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
      const { theme, setTheme } = useTheme();

      const themeToggle = () => theme === "light" ? setTheme("dark") : setTheme("light");

      return (
            <button className=" flex gap-2 w-full items-center p-3 font-inter  font-medium tracking-tight text-sm text-muted-foreground " onClick={themeToggle}>
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  {` Modo ${theme === "light" ? "Oscuro" : "Claro"}`}{" "}
            </button>
      );
}
