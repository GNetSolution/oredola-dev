"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ORBITS = [
  { id: "Next", label: "Next.js 14", orbit: 95, duration: 18, color: "#000", bg: "#ffffff", angle: 0, dir: 1 },
  { id: "S", label: "Supabase", orbit: 95, duration: 20, color: "#fff", bg: "#3ecf8e", angle: 180, dir: -1 },
  { id: "T", label: "Tailwind", orbit: 165, duration: 26, color: "#fff", bg: "#06b6d4", angle: 60, dir: 1 },
  { id: "TS", label: "TypeScript", orbit: 165, duration: 28, color: "#fff", bg: "#3178c6", angle: 240, dir: -1 },
  { id: "V", label: "Vercel", orbit: 240, duration: 36, color: "#fff", bg: "#000000", angle: 120, dir: 1 },
  { id: "AI", label: "OpenAI", orbit: 240, duration: 32, color: "#fff", bg: "#a855f7", angle: 300, dir: -1 },
];

const STACKS = [
  { name: "Next.js 14", role: "Frontend", desc: "App Router, RSC, Server Actions. Edge-first.", icon: "▲" },
  { name: "Supabase", role: "Backend", desc: "PostgreSQL, Auth, RLS, Realtime.", icon: "S" },
  { name: "Tailwind", role: "Design", desc: "Token-driven, constraint-based.", icon: "~" },
  { name: "TypeScript", role: "Language", desc: "Strict, end-to-end type safety.", icon: "TS" },
  { name: "Vercel", role: "Platform", desc: "Edge network, ISR, observability.", icon: "V" },
  { name: "OpenAI", role: "Intelligence", desc: "Embeddings, RAG, function calling.", icon: "AI" },
];

// UPDATE THESE LINKS
const LINKS = {
  linkedin: "https://www.linkedin.com/in/oredola-gbenga-a-3388b7390", // <-- your LinkedIn
  github: "https://github.com/GNetSolution",
  x: "https://x.com/oredola",
  email: "hello@oredola.dev",
  whatsapp: "https://wa.me/2349034555644?text=Hi%20Gbenga%2C%20I%20want%20to%20schedule%20a%2020-min%20audit%20for%20my%20product", // <-- put your WhatsApp number
};

export default function StackContact() {
  const [active, setActive] = useState<string | null>(null);
  const [time, setTime] = useState("");
  useEffect(()=>{
    const t=()=>{
      const now = new Date();
      const hh = now.toLocaleTimeString("en-GB",{timeZone:"Africa/Lagos", hour:"2-digit", minute:"2-digit", hour12:false});
      setTime(`${hh} WAT • Remote`);
    }; 
    t(); 
    const id=setInterval(t, 10000);
    return ()=>clearInterval(id);
  },[]);

  return (
    <>
    <section id="stack" className="mx-auto max-w-[1280px] px-6 md:px-8 py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
    <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
         <div className="font-mono text-[11px] tracking-[0.2em] opacity-50">STACK / ORBITING — PRODUCTION GRADE</div>
         <div className="font-mono text-[10px] opacity-40 flex items-center gap-3">
           <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/> 100 Lighthouse</span>
           <span>•</span><span>Edge</span><span>•</span><span>Offline-capable</span><span>•</span><span>{time}</span>
         </div>
       </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
        <div className="relative h-[600px] rounded-[32px] border overflow-hidden" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--card) 70%, var(--bg))" }}>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -inset-[120px] rounded-full blur-[40px]" style={{ background: "var(--glow)" }} />
            <div className="h-[80px] w-[80px] rounded-[20px] bg-[var(--fg)] shadow-[0_0_80px_rgba(255,255,255,0.2)] grid place-items-center relative">
              <div className="h-2 w-2 rounded-full bg-[var(--bg)] animate-pulse" />
            </div>
          </div>

          {[95,165,240].map(r=>(
            <div key={r} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: r*2, height: r*2, border: `1px solid var(--border)` }} />
          ))}

          {ORBITS.map(o=>{
            const to = o.dir===1 ? o.angle + 360 : o.angle - 360;
            return (
              <motion.div
                key={o.id}
                className="absolute left-1/2 top-1/2"
                initial={{ rotate: o.angle }}
                animate={{ rotate: to }}
                transition={{ duration: o.duration, repeat: Infinity, ease: "linear" }}
                style={{ width: o.orbit*2, height: o.orbit*2, marginLeft: -o.orbit, marginTop: -o.orbit }}
              >
                <div className="absolute" style={{ left: o.orbit*2 - 22, top: o.orbit - 22 }}>
                  <motion.div
                    initial={{ rotate: -o.angle }}
                    animate={{ rotate: -to }}
                    transition={{ duration: o.duration, repeat: Infinity, ease: "linear" }}
                    onHoverStart={()=>setActive(o.id)}
                    onHoverEnd={()=>setActive(null)}
                  >
                    <div className="h-[46px] w-[46px] rounded-full border-2 border-white/20 grid place-items-center text-[12px] font-black shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer hover:scale-110 transition-transform" style={{ background: o.bg, color: o.color }}>
                      {o.id}
                    </div>
                    {active===o.id && <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[var(--fg)] text-[var(--bg)] px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap shadow-lg z-10">{o.label}</div>}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}

          <div className="absolute bottom-4 left-5 right-5 flex justify-between font-mono text-[9px] tracking-widest opacity-30">
            <span>ORBITING • COMPOSABLE • ZERO BLOAT</span>
            <span>{time}</span>
          </div>
        </div>

        <div className="space-y-3">
          {STACKS.map((s,i)=>(
            <motion.div key={s.name} initial={{opacity:0, x:8}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.04}} whileHover={{x:-2}} className="group rounded-[18px] border p-4 flex gap-3 transition-all" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
              <div className="h-9 w-9 rounded-full bg-[var(--fg)] text-[var(--bg)] grid place-items-center text-[11px] font-bold group-hover:scale-105 transition-transform">{s.icon}</div>
              <div><div className="text-[13px] font-semibold flex items-center gap-2">{s.name} <span className="rounded-full border px-2 py-0.5 text-[8px] font-mono tracking-widest opacity-50" style={{ borderColor: "var(--border)" }}>{s.role.toUpperCase()}</span></div><div className="text-[11px] opacity-60 leading-[1.4] mt-1">{s.desc}</div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section id="contact" className="mx-auto max-w-[1280px] px-6 md:px-8 pb-28" style={{ background: "var(--bg)" }}>
      <div className="relative overflow-hidden rounded-[36px] border p-8 md:p-12" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="absolute -right-[200px] -top-[200px] h-[500px] w-[500px] rounded-full blur-[80px]" style={{ background: "var(--glow)" }} />
        <div className="relative grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] opacity-50">CONTACT / AVAILABILITY — REMOTE • WAT (UTC+1)</div>
            <h2 className="mt-6 text-[38px] md:text-[60px] font-[800] tracking-[-0.04em] leading-[0.88]">Build systems,<br/><span className="opacity-20">not just sites.</span></h2>
            <p className="mt-5 max-w-[44ch] text-[13.5px] leading-[1.7] opacity-60">Remote product engineering for founders globally. From learning tools to revenue systems. Production-grade execution, not tutorials. Based in Lagos, shipping worldwide.</p>
            <div className="mt-8 flex items-center gap-3 font-mono text-[11px] opacity-40"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /><span>Available for select global projects</span><span>•</span><span>Response &lt; 2h</span></div>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`mailto:${LINKS.email}`} className="group flex items-center justify-between rounded-full bg-[var(--fg)] text-[var(--bg)] px-7 py-4 text-[14px] font-semibold hover:opacity-90 transition"><span>{LINKS.email}</span><span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--bg)] text-[var(--fg)] group-hover:translate-x-0.5 transition-transform">→</span></a>
            
            {/* WHATSAPP AUDIT */}
            <a href={LINKS.whatsapp} target="_blank" className="flex items-center justify-between rounded-full border px-7 py-4 text-[13px] font-medium opacity-90 hover:opacity-100 transition" style={{ borderColor: "#25D366", background: "color-mix(in srgb, #25D366 10%, var(--card))" }}>
              <span className="flex items-center gap-2"><span className="text-[16px]">💬</span> Schedule a 20-min audit on WhatsApp</span><span className="text-[#25D366]">↗</span>
            </a>

            <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px]">
              <a href={LINKS.github} target="_blank" className="rounded-full border px-3 py-2.5 text-center opacity-50 hover:opacity-80 transition" style={{ borderColor: "var(--border)" }}>GitHub</a>
              <a href={LINKS.x} target="_blank" className="rounded-full border px-3 py-2.5 text-center opacity-50 hover:opacity-80 transition" style={{ borderColor: "var(--border)" }}>X</a>
              <a href={LINKS.linkedin} target="_blank" className="rounded-full border px-3 py-2.5 text-center bg-[var(--fg)] text-[var(--bg)] font-semibold hover:opacity-90 transition" style={{ borderColor: "var(--border)" }}>LinkedIn ↗</a>
            </div>
            <div className="mt-3 font-mono text-[10px] opacity-30">{time} • Remote — Global • Lagos base • WhatsApp preferred</div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-2 font-mono text-[10px] tracking-widest opacity-20"><span>© 2025 OREDOLA GBENGA AUGUSTINE — PRODUCT ENGINEER • REMOTE • LAGOS → GLOBAL</span><span>WHATSAPP AUDIT • LINKEDIN • NAVY MODE</span></div>
    </section>
    </>
  );
}
