"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  { id:1, cat: "LEARN", name: "AcademiaBase", desc: "AI research hub for students. Find papers, summarize, cite. Built for my 1000+ students.", users: "2.3k", tag: "For Students", color: "#06b6d4", status: "live", year: "2024" },
  { id:2, cat: "LEARN", name: "ExamAI", desc: "JAMB/WAEC past questions + AI tutor that actually teaches, not dumps answers.", users: "3.1k", tag: "For Students", color: "#10b981", status: "live", year: "2024" },
  { id:3, cat: "LEARN", name: "LearnVault", desc: "My second brain for mentoring. Notes → flashcards → AI quiz. My teaching OS.", users: "1.8k", tag: "For Learners", color: "#8b5cf6", status: "live", year: "2023" },
  { id:4, cat: "SHIP", name: "ShipFast NG", desc: "Next.js boilerplate I use daily. Supabase + Paystack + SEO. Ship in 48h.", users: "420", tag: "For Builders", color: "#3b82f6", status: "live", year: "2024" },
  { id:5, cat: "SHIP", name: "TutorOS", desc: "Run tutoring as a business. Scheduling, payments, students. How I scaled to 1000+.", users: "310", tag: "For Mentors", color: "#6366f1", status: "beta", year: "2025" },
  { id:6, cat: "EARN", name: "RankEngine", desc: "SEO toolkit for .ng domains. Keyword audit, content AI. From ranking my own products.", users: "890", tag: "For Founders", color: "#f97316", status: "live", year: "2024" },
  { id:7, cat: "EARN", name: "NaijaSEO Kit", desc: "My exact 30-day ranking checklist. Templates + keywords + content system.", users: "560", tag: "For Founders", color: "#eab308", status: "live", year: "2023" },
  { id:8, cat: "EARN", name: "StudentPay", desc: "Accept Naira + Crypto. 1% fee. Built because PayPal blocks Nigeria.", users: "1.2k", tag: "For Freelancers", color: "#ec4899", status: "building", year: "2025" },
];

const FILTERS = ["All", "LEARN", "SHIP", "EARN"] as const;

export default function Products() {
  const [active, setActive] = useState<typeof FILTERS[number]>("All");
  const filtered = active==="All" ? PRODUCTS : PRODUCTS.filter(p=>p.cat===active);

  return (
    <section id="products" className="relative mx-auto max-w-[1280px] px-6 md:px-8 py-24 border-t" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="text-[34px] md:text-[48px] font-[800] tracking-[-0.04em] leading-[0.95]">Product Factory</h2>
          <p className="mt-3 text-[13.5px] opacity-50 max-w-[52ch]">8 products shipped across LEARN → SHIP → EARN. Built in Lagos, used by 1000+ builders globally. Navy = default focus mode.</p>
        </div>
        <div className="flex items-center gap-1 rounded-full border p-1 self-start md:self-auto" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
          {FILTERS.map(f=>(
            <button key={f} onClick={()=>setActive(f)} className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition ${active===f ? "bg-[var(--fg)] text-[var(--bg)]" : "opacity-50 hover:opacity-80"}`}>{f}</button>
          ))}
        </div>
      </div>

      {/* FIXED: 2-col even grid, not 12-col mess */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((p,i)=>(
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, delay: i*0.02 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-[22px] border p-6 flex flex-col justify-between min-h-[200px] transition-all"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <div className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(500px at 0% 0%, ${p.color}12, transparent 70%)` }} />
              
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full grid place-items-center text-[13px] font-bold border" style={{ backgroundColor: `${p.color}14`, borderColor: `${p.color}30`, color: p.color }}>{p.name[0]}</div>
                    <div>
                      <h3 className="text-[16px] font-semibold tracking-tight leading-none">{p.name}</h3>
                      <div className="mt-1.5 flex items-center gap-2 text-[10px] font-mono opacity-40"><span>{p.cat}</span><span>•</span><span>{p.year}</span><span>•</span><span>{p.users} users</span></div>
                    </div>
                  </div>
                  <div className={`h-2.5 w-2.5 rounded-full ${p.status==="live" ? "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]" : p.status==="beta" ? "bg-amber-400" : "opacity-30 bg-[var(--fg)]"}`} />
                </div>

                <p className="mt-5 text-[13.5px] leading-[1.6] opacity-60 line-clamp-3">{p.desc}</p>
              </div>

              <div className="relative mt-6 flex items-center justify-between">
                <span className="rounded-full border px-3 py-1 text-[11px] opacity-60" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 60%, transparent)" }}>{p.tag}</span>
                <span className="text-[13px] opacity-20 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all">↗</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-full border px-5 py-2.5 text-[11px] font-mono opacity-40" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <span>8 products • {active} • {filtered.length} showing • even 2-col bento</span>
        <span className="hidden md:inline">navy default • light = paper • hover lift</span>
      </div>
    </section>
  );
}
