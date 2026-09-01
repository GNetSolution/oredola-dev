"use client";
import { motion } from "framer-motion";
import { useTheme, THEMES } from "@/components/ThemeProvider";
const SERVICES = [
  { id: "01", cat: "BUILD", title: "Ship your product in 14 days", desc: "Next.js + Supabase + Paystack + SEO. From Figma to live users.", deliver: ["Live MVP", "Paystack + Auth", "SEO ready", "Deployed"], price: "From $800", time: "14 days" },
  { id: "02", cat: "RANK", title: "Rank on Google Nigeria", desc: "I rank my own products. RankEngine + NaijaSEO Kit + content system.", deliver: ["Keyword research.ng", "30-day content plan", "On-page audit", "Backlink strategy"], price: "From $400", time: "30 days" },
  { id: "03", cat: "TEACH", title: "Mentor your team / students", desc: "Mentored 1000+ builders. I teach your team to ship with AI + SEO.", deliver: ["Live build sessions", "Code reviews", "Product teardown", "Ship together"], price: "From $300/mo", time: "Ongoing" },
  { id: "04", cat: "EARN", title: "Monetize skills in Nigeria", desc: "PayPal blocks us. I built StudentPay. Accept Naira + Crypto.", deliver: ["Payment setup", "Pricing strategy", "Client acquisition", "Portfolio review"], price: "From $200", time: "7 days" },
];
export default function Services() {
  const { theme } = useTheme();
  const t = THEMES[theme];
  const isLight = theme === "light";
  return (
    <section id="services" className="mx-auto max-w- px-6 md:px-8 py-24 border-t" style={{ borderColor: t.border, background: t.bg }}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex rounded-full border px-3 py-1 text-" style={{ borderColor: t.border, background: t.card, color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}>SERVICES — ALL-ROUND MENTOR</div>
          <h2 className="mt-4 text- md:text- font-black tracking-[-0.04em] leading-[0.9]" style={{ color: t.fg }}>I don't just build.<br/><span style={{ color: isLight? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.2)" }}>I teach you to build.</span></h2>
        </div>
        <p className="max-w- text- leading-6" style={{ color: isLight? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.4)" }}>All-round job = I can build for you, rank for you, and teach your team.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICES.map((s,i)=>(
          <motion.div key={s.id} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group relative rounded- border p-7 md:p-8" style={{ borderColor: t.border, background: t.card }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text- tracking-widest" style={{ color: isLight? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.2)" }}>{s.id} / {s.cat}</span>
              <span className="rounded-full px-3 py-1 text- font-semibold" style={{ background: isLight? "#0a0a0a" : "#ffffff", color: isLight? "#ffffff" : "#000000" }}>{s.time}</span>
            </div>
            <h3 className="mt-6 text- font-bold tracking-tight leading-[1.1]" style={{ color: t.fg }}>{s.title}</h3>
            <p className="mt-3 text- leading-[1.6]" style={{ color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)" }}>{s.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.deliver.map(d=>(<span key={d} className="rounded-full border px-3 py-1 text-" style={{ borderColor: t.border, background: isLight? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)", color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.5)" }}>{d}</span>))}
            </div>
            <div className="mt-8 flex items-center justify-between border-t pt-5" style={{ borderColor: t.border }}>
              <span className="text- font-semibold" style={{ color: t.fg }}>{s.price}</span>
              <a href="#contact" className="rounded-full border px-4 py-2 text-" style={{ borderColor: t.border, color: t.fg }}>Start →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
