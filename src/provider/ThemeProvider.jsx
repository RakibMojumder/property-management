"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { Bounce } from "react-toastify";
import { ToastContainer } from "react-toastify";

export function ThemeProvider({ children, ...props }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const defaultTheme = localStorage.getItem("theme");
    setTheme(defaultTheme ?? "dark");
  }, []);

  return (
    <NextThemesProvider {...props} defaultTheme={theme}>
      {children}
      <ToastContainer
        position="bottom-right"
        transition={Bounce}
        autoClose={3000}
      />
    </NextThemesProvider>
  );
}
