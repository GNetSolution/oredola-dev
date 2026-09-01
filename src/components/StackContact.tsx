"use client";
import { useEffect, useState } from "react";
import { useTheme, THEMES } from "@/components/ThemeProvider";
const STACK = [
  { name: "Next.js 14", use: "Ship fast", level: 95 },
  { name: "Supabase", use: "Auth + DB", level: 90 },
  { name: "OpenAI / AI SDK", use: "AI that teaches", level: 88 },
  { name: "SEO Systems", use: "Rank.ng", level: 92 },
  { name: "Tailwind + Framer", use: "Pro UI", level: 94 },
  { name: "Paystack", use: "Get paid NG", level: 85 },
];
export default function StackAndContact() {
  const { theme } = useTheme();
  const t = THEMES[theme];
  const isLight = theme === "light";
  const [time, setTime] = useState("");
  useEffect(()=>{const tick=()=>{setTime(new Date().toLocaleTimeString("en-NG",{timeZone:"Africa/Lagos", hour:"2-digit", minute:"2-digit"}) + " WAT — Lagos, NG")}; tick(); const i=setInterval(tick,10000); return ()=>clearInterval(i)},[]);
  return (
    <>
    <section className="mx-auto max-w- px-6 md:px-8 py-20 border-t" style={{ borderColor: t.border, background: t.bg }}>
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <div className="inline-flex rounded-full border px-3 py-1 text-" style={{ borderColor: t.border, background: t.card, color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}>STACK — HOW I SHIP DAILY</div>
          <h2 className="mt-4 text- md:text- font-black tracking-[-0.04em] leading-[0.95]" style={{ color: t.fg }}>Modern stack.<br/><span style={{ color: isLight? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.2)" }}>Proven in 8 products.</span></h2>
          <div className="mt-8 rounded- border p-4 font-mono text-" style={{ borderColor: t.border, background: t.card, color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.3)" }}>
            <div>✓ 8 products shipped</div><div>✓ 1000+ builders mentored</div><div>✓ Lagos time: {time}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {STACK.map(s=>(
            <div key={s.name} className="rounded- border px-5 py-4 flex items-center justify-between" style={{ borderColor: t.border, background: t.card }}>
              <div><div className="text- font-semibold" style={{ color: t.fg }}>{s.name}</div><div className="text- mt-1" style={{ color: isLight? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.3)" }}>{s.use}</div></div>
              <div className="flex items-center gap-3">
                <div className="w- h-1.5 rounded-full overflow-hidden" style={{ background: isLight? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)" }}><div className="h-full" style={{ width: `${s.level}%`, background: isLight? "#0a0a0a" : "#ffffff" }} /></div>
                <span className="font-mono text-" style={{ color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)" }}>{s.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="mx-auto max-w- px-6 md:px-8 pb-24" style={{ background: t.bg }}>
      <div className="rounded- p-8 md:p-12 flex flex-col md:flex-row justify-between gap-8" style={{ background: isLight? "#0a0a0a" : "#ffffff", color: isLight? "#ffffff" : "#000000" }}>
        <div><h2 className="text- md:text- font-black tracking-[-0.04em] leading-[0.9]">Let's ship<br/>something real.</h2><p className="mt-4 text- max-w-" style={{ color: isLight? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)" }}>All-round job — you need MVP, SEO, mentoring, or monetization.</p><div className="mt-6 text- font-mono" style={{ color: isLight? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>{time}</div></div>
        <div className="flex flex-col gap-3 md:min-w-">
          <a href="mailto:hello@oredola.dev" className="rounded-full px-8 py-4 text-center text- font-semibold" style={{ background: isLight? "#ffffff" : "#000000", color: isLight? "#000000" : "#ffffff" }}>hello@oredola.dev →</a>
          <a href="https://wa.me/234XXXXXXXX" className="rounded-full border px-8 py-4 text-center text- font-semibold" style={{ borderColor: isLight? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)", color: isLight? "#ffffff" : "#000000" }}>WhatsApp — Fast reply</a>
        </div>
      </div>
    </section>
    </>
  );
}
