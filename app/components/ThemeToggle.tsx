"use client";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { setThemeMode, useThemeMode } from "./useThemeMode";

export default function ThemeToggle() {
  const theme = useThemeMode();

  const toggle = () => {
    setThemeMode(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      onClick={toggle}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
