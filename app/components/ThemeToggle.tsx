"use client";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { setThemeMode, useThemeMode } from "./useThemeMode";
import { track, ANALYTICS_EVENTS } from "../lib/analytics";

export default function ThemeToggle() {
  const theme = useThemeMode();

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeMode(next);
    track(ANALYTICS_EVENTS.THEME_CHANGED, { theme: next });
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
