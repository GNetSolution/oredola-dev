"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme, THEMES } from "@/components/ThemeProvider";

const STACK = [
  { name: "Next.js 14", use: "Ship fast", level: 95, icon: "N" },
  { name: "Supabase", use: "Auth + DB", level: 90, icon: "S" },
  { name: "OpenAI / AI SDK", use: "AI that teaches", level: 88, icon: "A" },
  { name: "SEO Systems", use: "Rank.ng", level: 92, icon: "R" },
  { name: "Tailwind + Framer", use: "Pro UI", level: 94, icon: "F" },
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
    <section className="relative mx-auto max-w- px-6 md:px-8 py-20 border-t overflow-hidden" style={{ borderColor: t.border, background: t.bg }}>
      <div className="relative grid grid-cols-1 md:grid-cols-[340px_1fr_380px] gap-10 items-start z-10">

        {/* LEFT - SEPARATE ORBIT - CLEAN BOX */}
        <div className="relative rounded- border h- flex items-center justify-center overflow-hidden" style={{ borderColor: t.border, background: t.card }}>
          <div className="absolute h- w- rounded-full border border-dashed opacity-[0.12]" style={{ borderColor: t.fg }} />
          <div className="absolute h- w- rounded-full border opacity-[0.08]" style={{ borderColor: t.fg }} />

          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute h- w-">
            {[STACK[0], STACK[2], STACK[4]].map((s, idx) => {
              const angle = idx * 120;
              return (
                <div key={s.name} className="absolute left-1/2 top-1/2" style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-150px)` }}>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="h-9 w-9 rounded-full border flex items-center justify-center text- font-black shadow-md" style={{ background: isLight? "#0a0a0a" : "#fff", color: isLight? "#fff" : "#000", borderColor: t.border }}>{s.icon}</motion.div>
                </div>
              );
            })}
          </motion.div>

          <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="absolute h- w-">
            {[STACK[1], STACK[3], STACK[5]].map((s, idx) => {
              const angle = idx * 120;
              return (
                <div key={s.name} className="absolute left-1/2 top-1/2" style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-100px)` }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="h-7 w-7 rounded-full border flex items-center justify-center text- font-bold" style={{ background: isLight? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)", color: t.fg, borderColor: t.border }}>{s.icon}</motion.div>
                </div>
              );
            })}
          </motion.div>

          <div className="h-14 w-14 rounded-full border flex items-center justify-center font-mono text- font-bold" style={{ background: isLight? "#fff" : "#000", borderColor: t.border, color: t.fg, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>STACK</div>
        </div>

        {/* MIDDLE */}
        <div>
          <div className="inline-flex rounded-full border px-3 py-1 text-" style={{ borderColor: t.border, background: t.card, color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)" }}>STACK — HOW I SHIP DAILY</div>
          <h2 className="mt-4 text- md:text- font-black leading-[0.95]" style={{ color: t.fg }}>Modern stack.<br/><span style={{ color: isLight? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.25)" }}>Proven in 8 products.</span></h2>
          <p className="mt-3 text- leading-[1.6]" style={{ color: isLight? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.45)" }}>Not tutorial stack. This is what I use to ship AcademiaBase, RankEngine, StudentPay — all live with real users.</p>
          <div className="mt-6 rounded- border p-4 font-mono text- leading-6" style={{ borderColor: t.border, background: t.card, color: isLight? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.4)" }}>
            <div>✓ 8 products shipped</div><div>✓ 1000+ builders mentored</div><div>✓ Lagos time: {time || "Loading..."}</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid gap-2.5">
          {STACK.map((s) => (
            <div key={s.name} className="rounded- border px-4 py-3.5 flex items-center justify-between" style={{ borderColor: t.border, background: t.card }}>
              <div><div className="text- font-semibold" style={{ color: t.fg }}>{s.name}</div><div className="text- mt-0.5" style={{ color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.35)" }}>{s.use}</div></div>
              <span className="font-mono text-" style={{ color: t.fg }}>{s.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
