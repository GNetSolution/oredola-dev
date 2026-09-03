"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme, THEMES } from "@/components/ThemeProvider";

const PIPELINE = [
  { step: "01", name: "Next.js 14", role: "Frontend • RSC • Edge", status: "active", metric: "95%", bar: 95 },
  { step: "02", name: "Supabase", role: "Auth • DB • Realtime", status: "active", metric: "90%", bar: 90 },
  { step: "03", name: "OpenAI SDK", role: "Agents • Tools • RAG", status: "building", metric: "88%", bar: 88 },
  { step: "04", name: "SEO Engine", role: "Rank.ng • Schema • Sitemap", status: "live", metric: "92%", bar: 92 },
  { step: "05", name: "Framer", role: "Motion • Gesture • 3D", status: "active", metric: "94%", bar: 94 },
  { step: "06", name: "Paystack", role: "Payments • Webhooks", status: "live", metric: "85%", bar: 85 },
];

export default function StackAndContact() {
  const { theme } = useTheme();
  const t = THEMES[theme];
  const isLight = theme === "light";
  const [time, setTime] = useState("");
  const [active, setActive] = useState(0);
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-NG", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" }) + " WAT");
    tick(); const i = setInterval(tick, 1000); return () => clearInterval(i);
  }, []);
  return (
    <section id="stack" className="relative mx-auto max-w- px-6 md:px-10 py-24 border-t" style={{ borderColor: t.border, background: t.bg }}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text- font-medium" style={{ borderColor: t.border, background: t.card, color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> HOW I SHIP — DAILY PIPELINE
          </div>
          <h2 className="mt-6 text- md:text- font-black tracking-[-0.06em] leading-[0.85]" style={{ color: t.fg }}>
            Ship fast.<br />
            <span style={{ color: isLight? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.18)" }}>Stay live.</span>
          </h2>
        </div>
        <div className="md:text-right">
          <div className="text- font-mono tracking-widest" style={{ color: isLight? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)" }}>LAGOS — {time}</div>
          <div className="mt-2 text- max-w- leading-[1.6]" style={{ color: isLight? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.45)" }}>8 products • 1000+ builders mentored • 99.9% uptime. This is the actual stack I use daily.</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
        <div className="relative rounded- border overflow-hidden" style={{ background: "#0a0a0a", borderColor: isLight? "#0a0a0a" : t.border }}>
          <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28ca42]" />
              <div className="ml-4 text- font-mono text-white/40">pipeline.config.ts — production</div>
            </div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /><span className="text- font-mono text-white/50">LIVE</span></div>
          </div>
          <div className="p-2">
            {PIPELINE.map((p, i) => (
              <button key={p.name} onClick={() => setActive(i)} className="w-full text-left rounded- px-5 py-4 flex items-center justify-between transition-all duration-200" style={{ background: active===i? "rgba(255,255,255,0.07)" : "transparent", border: `1px solid ${active===i? "rgba(255,255,255,0.12)" : "transparent"}` }}>
                <div className="flex items-center gap-4">
                  <div className="font-mono text- w-6" style={{ color: active===i? "#fff" : "rgba(255,255,255,0.25)" }}>{p.step}</div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <div className="text-[13.5px] font-semibold" style={{ color: active===i? "#fff" : "rgba(255,255,255,0.85)" }}>{p.name}</div>
                      <div className={`h-1 w-1 rounded-full ${p.status==="active"? "bg-emerald-400" : p.status==="live"? "bg-blue-400" : "bg-yellow-400"}`} />
                      <div className="text- font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>{p.status}</div>
                    </div>
                    <div className="text- font-mono mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{p.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:block w- h-1 rounded-full overflow-hidden bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: `${p.bar}%` }} transition={{ duration: 0.8, delay: i*0.05 }} className="h-full bg-white" /></div>
                  <div className="font-mono text- w-8 text-right" style={{ color: active===i? "#fff" : "rgba(255,255,255,0.4)" }}>{p.metric}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="px-6 py-4 border-t font-mono text- space-y-1" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.3)" }}>
            <div className="text-white/30">{`> deploying ${PIPELINE[active].name.toLowerCase()}...`}</div>
            <div className="text-emerald-400">{`> ${PIPELINE[active].name.toLowerCase()} :: ${PIPELINE[active].role.toLowerCase()} • ready`}</div>
            <div className="text-white/20">{`> 8 products • 1000+ users • $420/mo MRR`}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="rounded- border p-7" style={{ background: t.card, borderColor: t.border }}>
            <div className="text- font-mono tracking-widest" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.35)" }}>PROOF — NOT PROMISES</div>
            <div className="mt-6 grid grid-cols-3 gap-6">
              <div><div className="text- font-black tracking-tight" style={{ color: t.fg }}>8</div><div className="text- font-mono mt-1" style={{ color: isLight? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.35)" }}>Products<br />shipped</div></div>
              <div><div className="text- font-black tracking-tight" style={{ color: t.fg }}>1000+</div><div className="text- font-mono mt-1" style={{ color: isLight? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.35)" }}>Builders<br />mentored</div></div>
              <div><div className="text- font-black tracking-tight text-emerald-500">99.9%</div><div className="text- font-mono mt-1" style={{ color: isLight? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.35)" }}>Uptime<br />last 90d</div></div>
            </div>
            <div className="mt-8 rounded- border p-4 font-mono text- leading-5" style={{ borderColor: t.border, background: isLight? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)", color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)" }}>
              <div>→ AcademiaBase: 2.3k users • AI research</div>
              <div>→ RankEngine: 890 users • SEO infra</div>
              <div>→ StudentPay: 1.2k users • Payments</div>
            </div>
          </div>
          <div className="rounded- p-8 text-white" style={{ background: "#0a0a0a" }}>
            <h3 className="text- font-black tracking-[-0.03em] leading-[0.9]">Let's ship<br />something real.</h3>
            <p className="mt-3 text- leading-[1.5] text-white/50 max-w-">MVP, SEO, mentoring, or monetization — I'm in Lagos, shipping daily. Reply in &lt; 2h.</p>
            <div className="mt-8 flex flex-col gap-3">
              <a href="mailto:hello@oredola.dev" className="rounded-full bg-white text-black px-6 py-3.5 text-center text- font-semibold hover:opacity-90 transition">hello@oredola.dev →</a>
              <a href="https://wa.me/234XXXXXXXX" className="rounded-full border border-white/15 text-white px-6 py-3.5 text-center text- font-semibold hover:bg-white/5 transition">WhatsApp — Fast reply</a>
            </div>
            <div className="mt-6 font-mono text- text-white/25">{time} • Available for freelance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
