"use client";

import { Theme } from "@radix-ui/themes";
import { type ReactNode } from "react";
import { useThemeMode } from "./useThemeMode";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const appearance = useThemeMode();

  return (
    <Theme
      appearance={appearance}
      accentColor="gray"
      grayColor="sand"
      radius="small"
    >
      {children}
    </Theme>
  );
}
