"use client";
import { motion } from "framer-motion";
import { useTheme, THEMES } from "@/components/ThemeProvider";
const PRODUCTS = [
  { name: "AcademiaBase", desc: "AI-powered research hub for African students. Find papers, cite, summarize.", users: "2.3k", tag: "AI + EDU", color: "#06b6d4", status: "live" as const },
  { name: "LearnVault", desc: "Your second brain for learning. Notes, flashcards, AI quizzes.", users: "1.8k", tag: "Learning OS", color: "#8b5cf6", status: "live" as const },
  { name: "RankEngine", desc: "SEO toolkit that ranks.ng domains. Keywords, audit, content AI.", users: "890", tag: "SEO SaaS", color: "#f97316", status: "live" as const },
  { name: "ExamAI", desc: "JAMB/WAEC past questions with AI tutor. 10k+ questions.", users: "3.1k", tag: "AI Tutor", color: "#10b981", status: "beta" as const },
  { name: "NaijaSEO Kit", desc: "Templates + checklist to rank on Google Nigeria in 30 days.", users: "560", tag: "SEO", color: "#eab308", status: "live" as const },
  { name: "StudentPay", desc: "Accept crypto & Naira for student services. 1% fee.", users: "1.2k", tag: "Fintech", color: "#ec4899", status: "building" as const },
  { name: "ShipFast NG", desc: "Next.js boilerplate with Paystack, Supabase, SEO baked in.", users: "420", tag: "Boilerplate", color: "#3b82f6", status: "live" as const },
  { name: "TutorOS", desc: "Run your own tutoring business. Scheduling, payments, students.", users: "310", tag: "SaaS", color: "#6366f1", status: "beta" as const },
];
export default function Products() {
  const { theme } = useTheme();
  const t = THEMES[theme];
  const isLight = theme === "light";
  return (
    <section id="products" className="mx-auto max-w- px-6 md:px-8 py-24 border-t" style={{ borderColor: t.border, background: t.bg }}>
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="inline-flex rounded-full border px-3 py-1 text-" style={{ borderColor: t.border, background: t.card, color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}>PRODUCT FACTORY — 8 SHIPPED</div>
          <h2 className="mt-4 text- md:text- font-black tracking-[-0.04em] leading-[0.9]" style={{ color: t.fg }}>Products that<br/><span style={{ color: isLight? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.2)" }}>students actually use</span></h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRODUCTS.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="group relative rounded- border p-5 hover:-translate-y-1 transition-all duration-300" style={{ borderColor: t.border, background: t.card }}>
            <div className="flex items-center justify-between mb-4">
              <div className="h-8 w-8 rounded-full grid place-items-center text- font-bold" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}>{p.name[0]}</div>
              <span className={`h-2 w-2 rounded-full ${p.status==="live"?"bg-emerald-400":p.status==="beta"?"bg-yellow-400":"bg-gray-400"}`} />
            </div>
            <h3 className="text- font-semibold tracking-tight" style={{ color: t.fg }}>{p.name}</h3>
            <p className="mt-2 text- leading-[1.5] line-clamp-2" style={{ color: isLight? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.4)" }}>{p.desc}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="rounded-full border px-2.5 py-1 text- font-mono" style={{ borderColor: t.border, background: isLight? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.06)", color: isLight? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)" }}>{p.tag}</span>
              <span className="text- font-mono" style={{ color: isLight? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.2)" }}>{p.users} users</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
