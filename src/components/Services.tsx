"use client";
import { motion } from "framer-motion";

const SERVICES = [
  {
    no: "01",
    sys: "BUILD",
    title: "Product engineering",
    sub: "From idea → live users",
    desc: "Production-grade Next.js architecture. Auth, payments, SEO inherent. Same stack powering 8 live products.",
    deliverables: ["App Router / RSC", "Supabase Auth + RLS", "Paystack / Stripe", "Edge deploy"],
    meta: "From $800 • 14 days",
    cta: "Start build",
  },
  {
    no: "02",
    sys: "RANK",
    title: "SEO systems",
    sub: "From zero → organic",
    desc: "My ranking engine for .ng. Keyword systems, content architecture, not blog spam.",
    deliverables: ["Search intent map", "30-day content system", "Technical audit", "Backlink protocol"],
    meta: "From $400 • 30 days",
    cta: "Audit site",
  },
  {
    no: "03",
    sys: "TEACH",
    title: "Team enablement",
    sub: "From tutorial → ship",
    desc: "Mentored 1000+ builders. Enable your team to ship without me. Live builds, reviews, teardowns.",
    deliverables: ["Live build sessions", "PR reviews", "Architecture teardown", "Shipping sprints"],
    meta: "From $300 / mo",
    cta: "Enable team",
  },
  {
    no: "04",
    sys: "MONETIZE",
    title: "Revenue infra",
    sub: "From blocked → paid",
    desc: "PayPal blocks Nigeria. I built StudentPay. Payment rails, pricing, acquisition for African founders.",
    deliverables: ["Naira + Crypto rails", "Pricing strategy", "Acquisition channels", "Portfolio systems"],
    meta: "From $200 • 7 days",
    cta: "Setup revenue",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1280px] px-6 md:px-8 py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 opacity-30" style={{ background: "var(--fg)" }} />
            <span className="font-mono text-[11px] tracking-[0.2em] opacity-40">SERVICES / SYSTEMS — ALL-ROUND</span>
          </div>
          <h2 className="mt-6 text-[36px] md:text-[56px] font-black tracking-[-0.05em] leading-[0.88]">I don't sell hours.<br/><span className="opacity-20">I ship systems.</span></h2>
        </div>
        <p className="max-w-[34ch] text-[13px] leading-[1.7] opacity-50">All-round product engineering — build, rank, teach, monetize. Four systems. Pick your constraint.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.no}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-[28px] border p-8 transition-all duration-300"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div className="absolute -top-[100px] -right-[100px] h-[260px] w-[260px] rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--glow)" }} />
            
            <div className="relative flex justify-between items-start">
              <div className="font-mono text-[11px] tracking-widest opacity-30">{s.no} / {s.sys}</div>
              <div className="rounded-full border px-3 py-1 font-mono text-[10px] opacity-50" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--card) 80%, transparent)" }}>{s.meta}</div>
            </div>

            <div className="relative mt-7">
              <h3 className="text-[22px] font-semibold tracking-tight leading-[1.1]">{s.title}</h3>
              <div className="mt-1 font-mono text-[11px] opacity-40">{s.sub}</div>
              <p className="mt-4 text-[13px] leading-[1.6] opacity-50 max-w-[36ch]">{s.desc}</p>
            </div>

            <div className="relative mt-7 flex flex-wrap gap-2">
              {s.deliverables.map((d) => (
                <span key={d} className="rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-wide opacity-60 group-hover:opacity-80 transition-colors" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 50%, transparent)" }}>
                  {d}
                </span>
              ))}
            </div>

            <div className="relative mt-8 flex items-center justify-between border-t pt-5" style={{ borderColor: "var(--border)" }}>
              <span className="font-mono text-[11px] opacity-30">SYSTEM {s.no}</span>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] text-[var(--bg)] px-5 py-2.5 text-[12px] font-semibold hover:opacity-90 transition group-hover:translate-x-0.5">
                {s.cta} <span>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
