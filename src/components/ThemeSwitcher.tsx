"use client";
import { useTheme, THEMES, Theme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex items-center gap-1.5 rounded-full border bg-black/70 backdrop-blur-xl p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.4)]" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
      {(Object.keys(THEMES) as Theme[]).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`h-8 w-8 rounded-full text- font-bold tracking-widest transition-all duration-200 flex items-center justify-center ${theme === t? "scale-110 ring-2 ring-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "opacity-60 hover:opacity-100 hover:scale-105"}`}
          style={{ background: THEMES[t].bg, color: THEMES[t].fg, border: `1px solid ${THEMES[t].border}` }}
          title={THEMES[t].label}
        >
          {t[0].toUpperCase()}
        </button>
      ))}
      <span className="ml-1 mr-1 text- font-mono opacity-40 hidden md:block">{theme}</span>
    </div>
  );
}
