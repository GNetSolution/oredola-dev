"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme, THEMES } from "@/components/ThemeProvider";

const STACK = [
  { name: "Next.js 14", use: "Ship fast", level: 95, icon: "N" },
  { name: "Supabase", use: "Auth + DB", level: 90, icon: "S" },
  { name: "OpenAI / AI SDK", use: "AI that teaches", level: 88, icon: "O" },
  { name: "SEO Systems", use: "Rank.ng", level: 92, icon: "R" },
  { name: "Tailwind + Framer", use: "Pro UI", level: 94, icon: "T" },
  { name: "Paystack", use: "Get paid NG", level: 85, icon: "P" },
];

export default function StackAndContact() {
  const { theme } = useTheme();
  const t = THEMES[theme];
  const isLight = theme === "light";
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-NG", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" }) + " WAT — Lagos, NG");
    tick(); const i = setInterval(tick, 10000); return () => clearInterval(i);
  }, []);

  return (
    <>
      <section className="relative mx-auto max-w- px-6 md:px-8 py-20 border-t overflow-hidden" style={{ borderColor: t.border }}>
        <div className="pointer-events-none absolute right-[2%] top-[15%] h- w- hidden md:block">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
            {STACK.map((s, i) => {
              const angle = (i / STACK.length) * 360;
              const radius = 135;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <motion.div key={s.name} className="absolute left-1/2 top-1/2" style={{ x, y }} animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
                  <div className="h-9 w-9 rounded-full border flex items-center justify-center text- font-bold backdrop-blur-xl" style={{ background: isLight? "#0a0a0a" : "#fff", color: isLight? "#fff" : "#000", borderColor: t.border }}>{s.icon}</div>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h- w- rounded-full border flex items-center justify-center font-mono text- font-bold" style={{ borderColor: t.border, background: isLight? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.06)", color: t.fg }}>STACK</div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <div className="inline-flex rounded-full border px-3 py-1 text-" style={{ borderColor: t.border, background: isLight? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)", color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.5)" }}>STACK — HOW I SHIP DAILY</div>
            <h2 className="mt-4 text- md:text- font-black leading-[0.95]" style={{ color: t.fg }}>Modern stack.<br/><span style={{ color: isLight? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.2)" }}>Proven in 8 products.</span></h2>
            <p className="mt-4 text- leading-6" style={{ color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)" }}>Not tutorial stack. This is what I use to ship AcademiaBase, RankEngine, StudentPay — all live with real users.</p>
            <div className="mt-8 rounded- border p-4 font-mono text-" style={{ borderColor: t.border, background: isLight? "#fff" : "#101012", color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.3)" }}>
              <div>✓ 8 products shipped</div><div>✓ 1000+ builders mentored</div><div>✓ Lagos time: {time || "Loading..."}</div>
            </div>
          </div>
          <div className="grid gap-3">
            {STACK.map(s => (
              <div key={s.name} className="rounded- border px-5 py-4 flex justify-between items-center" style={{ borderColor: t.border, background: isLight? "#fff" : "#101012" }}>
                <div><div className="text- font-semibold" style={{ color: t.fg }}>{s.name}</div><div className="text- mt-1" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)" }}>{s.use}</div></div>
                <div className="flex items-center gap-3"><div className="w- h-1.5 rounded-full overflow-hidden" style={{ background: isLight? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)" }}><div className="h-full" style={{ width: `${s.level}%`, background: t.fg }} /></div><span className="font-mono text-" style={{ color: t.fg }}>{s.level}%</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
