"use client";
import { motion } from "framer-motion";
import { THEMES, useTheme, Theme } from "./ThemeProvider";

const ORDER: Theme[] = ["dark", "light", "navy", "sage"];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex items-center gap-1 rounded-full border bg-[#101012]/90 backdrop-blur-xl p-1 shadow-[0_10px_40px_rgba(0,0,0,0.4)] border-white/10">
      {ORDER.map((t) => {
        const active = theme === t;
        const cfg = THEMES[t];
        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-medium tracking-wide transition-all ${
              active ? "bg-white text-black" : "text-white/50 hover:text-white/80 hover:bg-white/10"
            }`}
            title={cfg.label}
          >
            <span className={`h-2 w-2 rounded-full ${active ? "bg-black" : cfg.dot}`} />
            {cfg.label}
            {active && <motion.div layoutId="theme-dot" className="absolute inset-0 -z-10 rounded-full bg-white" />}
          </button>
        );
      })}
    </div>
  );
}
