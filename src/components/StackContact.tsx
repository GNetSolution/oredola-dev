"use client";
import { motion } from "framer-motion";
import { useTheme, THEMES } from "@/components/ThemeProvider";

const STACK = [
  { name: "Next.js 14", sub: "App Router • RSC • Edge", pct: 95, icon: "N" },
  { name: "Supabase", sub: "Auth • Postgres • Realtime", pct: 90, icon: "S" },
  { name: "OpenAI SDK", sub: "GPT-4o • Tools", pct: 88, icon: "A" },
  { name: "SEO Systems", sub: "Rank.ng • Schema", pct: 92, icon: "◍" },
  { name: "Framer Motion", sub: "Motion • 3D • Gestures", pct: 94, icon: "F" },
  { name: "Paystack", sub: "Checkout • Webhooks", pct: 85, icon: "P" },
];

export default function StackContact() {
  const { theme } = useTheme();
  const t = THEMES[theme];
  const isLight = theme === "light";

  return (
    <section id="stack" className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: t.border, background: t.bg }}>
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text- font-medium" style={{ borderColor: t.border, background: t.card, color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.5)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> HOW I SHIP — STACK
        </div>
        <h2 className="mt-5 text- md:text- font-black tracking-[-0.05em] leading-[0.9]" style={{ color: t.fg }}>
          Modern stack.<br /><span style={{ color: isLight? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.22)" }}>Proven in production.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">

        {/* LEFT - SEPARATE ORBIT - BEAUTIFUL */}
        <div className="relative rounded- border h- overflow-hidden flex items-center justify-center" style={{ background: isLight? "#fff" : "#0a0a0a", borderColor: t.border, boxShadow: isLight? "0 12px 40px rgba(0,0,0,0.06)" : "0 12px 40px rgba(0,0,0,0.4)" }}>
          {/* Rings */}
          <div className="absolute rounded-full border border-dashed" style={{ width: 340, height: 340, borderColor: isLight? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)" }} />
          <div className="absolute rounded-full border" style={{ width: 220, height: 220, borderColor: isLight? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)" }} />

          {/* Orbiting Icons - Single Clean Ring */}
          <motion.div className="absolute" style={{ width: 340, height: 340 }} animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            {STACK.map((s, i) => {
              const angle = (i / STACK.length) * 360;
              return (
                <div key={s.name} className="absolute left-1/2 top-1/2" style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-170px)` }}>
                  <motion.div className="w-9 h-9 rounded-full border flex items-center justify-center text- font-black shadow-sm" style={{ background: isLight? "#0a0a0a" : "#fff", color: isLight? "#fff" : "#000", borderColor: t.border }} animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                    {s.icon}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Center */}
          <div className="relative z-10 w-16 h-16 rounded-full border flex items-center justify-center text- font-bold tracking-widest shadow-md" style={{ background: t.card, borderColor: t.border, color: t.fg }}>STACK</div>

          {/* Bottom label */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text- font-mono rounded-full border px-3 py-2" style={{ borderColor: t.border, background: isLight? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)", color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.35)" }}>
            <span>6 core tools • 360° orbit</span><span className="text-emerald-500">● live</span>
          </div>
        </div>

        {/* RIGHT - STACK LIST - MODERN PROFESSIONAL */}
        <div className="grid gap-3">
          {STACK.map((s) => (
            <div key={s.name} className="group rounded- border px-5 py-4 flex items-center justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all" style={{ background: t.card, borderColor: t.border }}>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full border flex items-center justify-center text- font-black" style={{ background: isLight? "#0a0a0a" : "#fff", color: isLight? "#fff" : "#000", borderColor: t.border }}>{s.icon}</div>
                <div>
                  <div className="text-[13.5px] font-semibold" style={{ color: t.fg }}>{s.name}</div>
                  <div className="text- font-mono mt-0.5" style={{ color: isLight? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.4)" }}>{s.sub}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-1 rounded-full overflow-hidden hidden md:block" style={{ background: isLight? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)" }}>
                  <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: t.fg }} />
                </div>
                <span className="text- font-mono" style={{ color: t.fg }}>{s.pct}%</span>
              </div>
            </div>
          ))}
          <div className="mt-3 rounded- p-4 text- flex justify-between items-center" style={{ background: isLight? "#0a0a0a" : "#fff", color: isLight? "#fff" : "#000" }}>
            <span>8 products shipped • 1000+ builders • Lagos, NG</span>
            <span className="opacity-60">Available for work →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
