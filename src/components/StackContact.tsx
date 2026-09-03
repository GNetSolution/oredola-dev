"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme, THEMES } from "@/components/ThemeProvider";

const STACK = [
  { name: "Next.js 14", desc: "App Router • RSC • Edge", level: 95, icon: "N", color: "#000" },
  { name: "Supabase", desc: "Auth • Postgres • Realtime", level: 90, icon: "S", color: "#3ECF8E" },
  { name: "OpenAI SDK", desc: "GPT-4o • Embeddings • Tools", level: 88, icon: "A", color: "#74AA9C" },
  { name: "SEO Systems", desc: "Rank.ng • Indexing • Schema", level: 92, icon: "◍", color: "#FF6B00" },
  { name: "Framer Motion", desc: "Gestures • Layout • 3D", level: 94, icon: "F", color: "#0055FF" },
  { name: "Paystack", desc: "Checkout • Split • Webhooks", level: 85, icon: "P", color: "#0BA4DB" },
];

export default function StackAndContact() {
  const { theme } = useTheme();
  const t = THEMES[theme];
  const isLight = theme === "light";
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-NG", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit", second: "2-digit" }) + " WAT");
    tick(); const i = setInterval(tick, 1000); return () => clearInterval(i);
  }, []);
  return (
    <section id="stack" className="relative mx-auto max-w- px-6 md:px-10 py-24 md:py-32 border-t" style={{ borderColor: t.border, background: t.bg }}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text- font-medium tracking-wide" style={{ borderColor: t.border, background: isLight? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)", color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.5)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> STACK — HOW I SHIP DAILY
          </div>
          <h2 className="mt-5 text- md:text- font-black tracking-[-0.05em] leading-[0.9]" style={{ color: t.fg }}>
            Modern stack.<br />
            <span style={{ color: isLight? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.22)" }}>Proven in 8 products.</span>
          </h2>
        </div>
        <p className="max-w- text- leading-[1.7]" style={{ color: isLight? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.45)" }}>
          Not tutorial stack. Real infrastructure powering AcademiaBase (2.3k users), RankEngine, StudentPay — live, monetized, and ranking on Google Nigeria.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
        <div className="relative rounded- border overflow-hidden p-8 md:p-10 min-h- flex flex-col justify-between" style={{ background: isLight? "#ffffff" : "#0a0a0a", borderColor: t.border, boxShadow: isLight? "0 20px 80px -20px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.03) inset" : "0 20px 80px -20px rgba(0,0,0,0.6)" }}>
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(${t.fg} 1px, transparent 1px), linear-gradient(90deg, ${t.fg} 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
          <div className="relative z-10 flex justify-between items-start">
            <div className="rounded-full border px-3 py-1 text- font-mono tracking-widest" style={{ borderColor: t.border, color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.35)", background: isLight? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)" }}>ORBIT • LIVE</div>
            <div className="text- font-mono" style={{ color: isLight? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.3)" }}>{time}</div>
          </div>
          <div className="relative z-10 flex-1 flex items-center justify-center my-10">
            <div className="relative h- w-">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h- w- rounded-full border border-dashed" style={{ borderColor: isLight? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h- w- rounded-full border" style={{ borderColor: isLight? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h- w- rounded-full" style={{ background: isLight? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)", border: `1px solid ${t.border}` }} />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                {[STACK[0], STACK[2], STACK[4]].map((s, i) => {
                  const angle = (i * 120);
                  return (
                    <div key={s.name} className="absolute left-1/2 top-1/2" style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-180px)` }}>
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} className="h- w- rounded-full flex items-center justify-center text- font-black shadow-[0_10px_30px_rgba(0,0,0,0.15)] border backdrop-blur-xl" style={{ background: isLight? "#0a0a0a" : "#ffffff", color: isLight? "#ffffff" : "#000000", borderColor: isLight? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.1)" }}>{s.icon}</motion.div>
                    </div>
                  );
                })}
              </motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                {[STACK[1], STACK[3], STACK[5]].map((s, i) => {
                  const angle = (i * 120 + 30);
                  return (
                    <div key={s.name} className="absolute left-1/2 top-1/2" style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)` }}>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="h- w- rounded-full flex items-center justify-center text- font-bold border backdrop-blur-xl" style={{ background: t.card, color: t.fg, borderColor: t.border, boxShadow: isLight? "0 4px 12px rgba(0,0,0,0.06)" : "0 4px 20px rgba(0,0,0,0.3)" }}>{s.icon}</motion.div>
                    </div>
                  );
                })}
              </motion.div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h- w- rounded-full flex items-center justify-center font-mono text- font-bold tracking-[0.2em] border shadow-[0_8px_30px_rgba(0,0,0,0.12)]" style={{ background: isLight? "#0a0a0a" : "#ffffff", color: isLight? "#ffffff" : "#000000", borderColor: isLight? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.06)" }}>STACK</div>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-3 gap-3 rounded- border p-3" style={{ background: isLight? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)", borderColor: t.border }}>
            <div><div className="text- font-mono" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.35)" }}>SHIPPED</div><div className="text- font-bold" style={{ color: t.fg }}>8 products</div></div>
            <div><div className="text- font-mono" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.35)" }}>BUILDERS</div><div className="text- font-bold" style={{ color: t.fg }}>1000+</div></div>
            <div><div className="text- font-mono" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.35)" }}>UPTIME</div><div className="text- font-bold" style={{ color: "#22c55e" }}>99.9%</div></div>
          </div>
        </div>
        <div className="space-y-3">
          {STACK.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="group relative rounded- border p-5 flex items-center justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]" style={{ background: t.card, borderColor: t.border }}>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text- font-black border" style={{ background: isLight? "#0a0a0a" : "#ffffff", color: isLight? "#ffffff" : "#000000", borderColor: t.border }}>{s.icon}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-[13.5px] font-semibold tracking-tight" style={{ color: t.fg }}>{s.name}</div>
                    <div className="h-1 w-1 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text- mt-0.5 font-mono" style={{ color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)" }}>{s.desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden md:block w- h-1.5 rounded-full overflow-hidden" style={{ background: isLight? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.08)" }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} transition={{ duration: 1, delay: 0.3 + i * 0.05 }} viewport={{ once: true }} className="h-full rounded-full" style={{ background: t.fg }} />
                </div>
                <div className="text- font-mono font-medium min-w- text-right" style={{ color: t.fg }}>{s.level}%</div>
              </div>
            </motion.div>
          ))}
          <div className="mt-6 rounded- border p-4 flex items-center justify-between" style={{ background: isLight? "#0a0a0a" : "#ffffff", borderColor: isLight? "#0a0a0a" : "#ffffff", color: isLight? "#ffffff" : "#000000" }}>
            <div className="text- font-medium">Available for freelance — reply in &lt; 2h • Lagos, NG</div>
            <a href="#contact" className="rounded-full px-4 py-1.5 text- font-semibold" style={{ background: isLight? "#ffffff" : "#000000", color: isLight? "#000000" : "#ffffff" }}>Let's talk →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
