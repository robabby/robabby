import { useSyncExternalStore } from "react";

export type Mode = "light" | "dark";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Mode {
  return (
    (document.documentElement.dataset.theme as Mode | undefined) ?? "dark"
  );
}

function getServerSnapshot(): Mode {
  return "dark";
}

export function setThemeMode(next: Mode) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* storage unavailable */
  }
}

export function useThemeMode(): Mode {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
