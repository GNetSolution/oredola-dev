"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useTheme, THEMES } from "@/components/ThemeProvider"

export const dynamic = 'force-dynamic'

const checks = [
  { label: "Title tag", desc: "50-60 chars, keyword first" },
  { label: "H1", desc: "One H1, primary keyword" },
  { label: "Meta description", desc: "155 chars, click-worthy" },
  { label: "Canonical", desc: "Avoid duplicate content" },
  { label: "Mobile / viewport", desc: "viewport meta, responsive" },
  { label: "Schema / FAQ", desc: "FAQPage for snippet" },
  { label: "Internal links", desc: "5+ links to /products/*" },
]

export default function RankEnginePage() {
  const { theme } = useTheme()
  const t = THEMES[theme]
  const isLight = theme === "light"

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 20, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 20, damping: 25 })

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 100)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 60)
    }
    window.addEventListener("mousemove", handle)
    return () => window.removeEventListener("mousemove", handle)
  }, [mouseX, mouseY])

  const [url, setUrl] = useState("")
  const [logs, setLogs] = useState(["> rankengine real audit — v2", "> 890 sites audited • built in Lagos → works globally", "> enter URL and press Audit"])
  const [loading, setLoading] = useState(false)
  const [hasAudited, setHasAudited] = useState(false)

  const audit = async () => {
    if(!url) return setLogs(["> error: enter https://...", "> e.g. https://oredola.dev"])
    setLoading(true)
    setLogs([`> auditing ${url}...`, "> fetching HTML from server (real)..."])
    try {
      const res = await fetch("/api/audit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) })
      const json = await res.json()
      setLogs(json.logs)
      setHasAudited(true)
    } catch {
      setLogs(["> network error — try again"])
    }
    setLoading(false)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND — same as HeroPro */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{ background: t.bg }} />
        <div className="absolute inset-0" style={{
          opacity: isLight? 0.04 : 0.12,
          backgroundImage: `linear-gradient(${isLight? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"} 1px, transparent 1px), linear-gradient(90deg, ${isLight? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }} />
        <div className={`absolute left-[-5%] top-[5%] h- w- rounded-full ${isLight? "bg-[#a8bbff]/30" : "bg-[#1e3a8a]/40"}`} />
        <motion.div style={{ x: springX, y: springY }} className={`absolute right-[-5%] top-[20%] h- w- rounded-full ${isLight? "bg-[#7fa0ff]/25" : "bg-[#2a4db7]/40"}`} />
      </div>

      <div className="relative mx-auto max-w- px-6 md:px-10 py-16 md:py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border backdrop-blur px-3 py-1 text- font-mono" style={{ borderColor: t.border, background: isLight? "white" : "rgba(0,0,0,0.2)", color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          RankEngine • REAL AUDIT • 890 live • global
          <span className="ml-2 hidden md:inline text- opacity-60">built in Lagos → works anywhere</span>
        </div>

        <div className="mt-10 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          {/* LEFT — Headline + Audit */}
          <div>
            <h1 className="font-black leading-[0.85] tracking-[-0.05em] text- md:text-">
              <span className="block" style={{ color: t.fg }}>Rank Higher.</span>
              <span className="block" style={{ color: isLight? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.35)" }}>Anywhere.</span>
            </h1>
            <p className="mt-6 max-w- text- leading-[1.6]" style={{ color: isLight? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)" }}>
              Real engine — fetches your HTML and checks title, H1, meta, canonical, schema. Built for builders — from <Link href="/" className="underline" style={{ color: t.fg }}>oredola.dev</Link> to global.
            </p>

            {/* Terminal */}
            <div className="mt-8 rounded- border backdrop-blur-2xl overflow-hidden" style={{ background: isLight? "#ffffff" : "rgba(0,0,0,0.4)", borderColor: t.border, boxShadow: isLight? "0 20px 60px -20px rgba(0,0,0,0.15)" : "0 30px 100px -20px rgba(0,0,0,0.8)" }}>
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: t.border, background: isLight? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)" }}>
                <div className="flex gap-1.5"><div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" /><div className="h-2.5 w-2.5 rounded-full bg-[#28ca42]" /></div>
                <div className="text- font-mono tracking-wide" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)" }}>rankengine — REAL AUDIT</div>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="p-5">
                <div className="flex gap-2">
                  <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://oredola.dev" className="flex-1 rounded-full border px-4 py-2.5 text- outline-none" style={{ background: isLight? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.06)", borderColor: t.border, color: t.fg }} />
                  <button onClick={audit} disabled={loading} className="rounded-full px-6 py-2.5 text- font-bold transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50" style={{ background: isLight? "#0a0a0a" : "#fef9e8", color: isLight? "#fff" : "#000" }}>{loading? "Auditing..." : "Audit — Free"}</button>
                </div>
                <div className="mt-4 min-h- max-h- rounded- p-4 space-y-1 font-mono text- overflow-auto" style={{ background: isLight? "#0a0a0a" : "#05070a", border: `1px solid ${t.border}` }}>
                  {logs.map((l,i)=><motion.div key={i} initial={{ opacity:0, x:-5 }} animate={{ opacity:1, x:0 }} className={i===logs.length-1? "text-emerald-400" : "text-white/50"}>{l}</motion.div>)}
                </div>
                <div className="mt-3 flex gap-3 text- font-mono" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)" }}>
                  <span>Try:</span>
                  <button onClick={()=>setUrl("https://oredola.dev")} className="underline hover:opacity-70">oredola.dev</button>
                  <button onClick={()=>setUrl("https://academiabase.com")} className="underline hover:opacity-70">academiabase.com</button>
                  <button onClick={()=>setUrl("https://vercel.com")} className="underline hover:opacity-70">vercel.com</button>
                </div>

                {hasAudited && (
                  <div className="mt-6 rounded-full border px-4 py-3 flex items-center justify-between" style={{ background: "#fef9e8", borderColor: "#000", color: "#000" }}>
                    <span className="text- font-semibold">Found fixes? I can ship them for you — from Lagos to global.</span>
                    <Link href="/#contact" className="ml-3 rounded-full bg-black text-white px-4 py-1.5 text- font-bold">Fix my SEO → Contact Oredola</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — Checks */}
          <div className="space-y-4">
            <div className="rounded- border backdrop-blur p-5" style={{ background: isLight? "#ffffff" : "rgba(0,0,0,0.3)", borderColor: t.border }}>
              <div className="text- font-mono tracking-widest" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)" }}>WHAT IT CHECKS • REAL • 7</div>
              <div className="mt-4 space-y-2">
                {checks.map(c=>(
                  <div key={c.label} className="flex items-center justify-between rounded- border px-3.5 py-2.5" style={{ background: isLight? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)", borderColor: t.border }}>
                    <div><div className="text- font-semibold" style={{ color: t.fg }}>{c.label}</div><div className="text-" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)" }}>{c.desc}</div></div>
                    <div className="h-5 w-5 rounded-full bg-emerald-400/20 flex items-center justify-center text- text-emerald-600">✓</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded- border p-4" style={{ background: isLight? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)", borderColor: t.border }}>
                <div className="text- font-mono" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)" }}>Origin story</div>
                <div className="mt-2 text- leading-snug" style={{ color: t.fg }}>Started with <Link href="/products/naijaseo-kit" className="underline">NaijaSEO Kit (560)</Link> → now 890 live audits.</div>
              </div>
              <div className="rounded- border p-4" style={{ background: isLight? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)", borderColor: t.border }}>
                <div className="text- font-mono" style={{ color: isLight? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)" }}>Proof</div>
                <div className="mt-2 text- leading-snug" style={{ color: t.fg }}><Link href="/products/academiabase" className="underline">AcademiaBase (2.3k)</Link> ranked "AI research hub" in 14 days using this.</div>
              </div>
            </div>

            <div className="rounded- border p-4" style={{ background: "#fef9e8", borderColor: "#000", color: "#000" }}>
              <div className="text- font-mono opacity-60">FAQ • featured snippet ready</div>
              <div className="mt-2 text- leading-snug"><b>Is RankEngine only for Nigeria?</b> No. Built in Lagos, works globally. Same checks Google uses from SEO tool Nigeria to AI SEO tool USA.</div>
              <Link href="/#contact" className="mt-3 inline-block text- font-bold underline">Talk to builder →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}