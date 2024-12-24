"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <button
      className="inline-flex items-center justify-center border-none rounded-full bg-transparent dark:bg-transparent hover:bg-white dark:hover:bg-black"
      variant="outline"
      onClick={themeHandler}
    >
      <MoonIcon
        size={20}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <SunIcon
        size={20}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
