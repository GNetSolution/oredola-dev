"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "navy" | "sage";

export const THEMES: Record<Theme, { label: string; bg: string; fg: string; card: string; border: string; dot: string }> = {
  dark: { label: "Dark", bg: "#05070a", fg: "#ffffff", card: "#0f0f11", border: "rgba(255,255,255,0.08)", dot: "bg-white" },
  light: { label: "Light", bg: "#fcfcfa", fg: "#0a0a0a", card: "#ffffff", border: "rgba(0,0,0,0.08)", dot: "bg-black" },
  navy: { label: "Navy", bg: "#070f26", fg: "#dbeafe", card: "#0c1738", border: "rgba(147,197,253,0.12)", dot: "bg-blue-400" },
  sage: { label: "Sage", bg: "#0e1412", fg: "#e6efe8", card: "#151f1a", border: "rgba(167,243,208,0.10)", dot: "bg-emerald-300" },
};

const ThemeCtx = createContext<{theme: Theme; setTheme: (t:Theme)=>void} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("navy");

  useEffect(() => {
    const saved = localStorage.getItem("oredola-theme") as Theme | null;
    if (saved && THEMES[saved]) setThemeState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("oredola-theme", theme);
    const t = THEMES[theme];
    document.documentElement.style.setProperty("--bg", t.bg);
    document.documentElement.style.setProperty("--fg", t.fg);
    document.documentElement.style.setProperty("--border", t.border);
    document.documentElement.style.setProperty("--card", t.card);
    document.body.style.background = t.bg;
    document.body.style.color = t.fg;
  }, [theme]);

  return <ThemeCtx.Provider value={{ theme, setTheme: setThemeState }}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme outside provider");
  return ctx;
}
