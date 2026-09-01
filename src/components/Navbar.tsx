"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [time, setTime] = useState("--:--");
  const [openK, setOpenK] = useState(false);

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit", hour12: false }));
    update();
    const id = setInterval(update, 1000);
    const onKey = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpenK(v=>!v); } if(e.key==="Escape") setOpenK(false); };
    window.addEventListener("keydown", onKey);
    return () => { clearInterval(id); window.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 flex h-[56px] items-center justify-between border-b bg-[var(--bg)]/80 backdrop-blur-[20px] px-6 md:px-8" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="h-7 w-7 rounded-full bg-[var(--fg)] text-[var(--bg)] flex items-center justify-center text-[12px] font-black group-hover:scale-105 transition-transform">O</div>
            <span className="text-[14px] font-medium tracking-tight">oredola.dev</span>
            <span className="hidden md:inline-flex ml-1 rounded-full border px-2 py-0.5 text-[9px] font-mono tracking-widest opacity-50" style={{ borderColor: "var(--border)" }}>PRO</span>
          </a>
          <nav className="hidden md:flex gap-6 text-[13px] font-medium opacity-60">
            <a href="#products" className="hover:opacity-100 transition">Products</a>
            <a href="#services" className="hover:opacity-100 transition">Services</a>
            <a href="#stack" className="hover:opacity-100 transition">Stack</a>
            <a href="#contact" className="hover:opacity-100 transition">Contact</a>
          </nav>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="hidden md:flex items-center gap-2.5 rounded-full border px-3.5 py-1.5" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--card) 60%, transparent)" }}>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span className="text-[11px] font-medium">Available • Remote</span>
            </span>
            <span className="h-3 w-px" style={{ background: "var(--border)" }} />
            <span className="font-mono text-[11px] tracking-wide opacity-60">{time} WAT</span>
          </span>

          <button onClick={() => setOpenK(true)} className="hidden md:flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-mono opacity-60 hover:opacity-100 transition" style={{ borderColor: "var(--border)" }}>
            <span>⌘</span>K
          </button>

          <a href="#contact" className="rounded-full bg-[var(--fg)] text-[var(--bg)] px-4 py-2 text-[12.5px] font-semibold hover:opacity-90 transition">Let's talk</a>
        </div>
      </header>

      <AnimatePresence>
      {openK && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/70 backdrop-blur-[12px] p-4" onClick={() => setOpenK(false)}>
          <motion.div initial={{scale:0.96,y:10}} animate={{scale:1,y:0}} exit={{scale:0.96,y:10}} className="w-full max-w-[560px] rounded-[20px] border shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden bg-[var(--card)]" style={{ borderColor: "var(--border)" }} onClick={e=>e.stopPropagation()}>
            <div className="flex items-center gap-3 border-b px-5 py-4" style={{ borderColor: "var(--border)" }}>
              <span className="opacity-30">⌕</span>
              <input autoFocus placeholder="Jump to product, service, stack..." className="w-full bg-transparent text-[14px] outline-none placeholder:opacity-30" />
              <span className="rounded px-1.5 py-0.5 text-[10px] font-mono opacity-30" style={{ background: "var(--border)" }}>ESC</span>
            </div>
            <div className="p-2">
              {[
                {k:"P", label:"Products", sub:"8 shipped", href:"#products"},
                {k:"S", label:"Services", sub:"Build / Rank / Teach / Earn", href:"#services"},
                {k:"T", label:"Stack", sub:"Orbiting production-grade", href:"#stack"},
                {k:"C", label:"Contact", sub:"Response <2h", href:"#contact"},
              ].map(item=>(
                <a key={item.k} href={item.href} onClick={()=>setOpenK(false)} className="flex items-center justify-between rounded-[12px] px-4 py-3 hover:opacity-100 opacity-80 group transition" style={{ background: "transparent" }}>
                  <div className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-full text-[11px] font-mono" style={{ background: "var(--border)" }}>{item.k}</span><span className="text-[13px] font-medium">{item.label}</span></div>
                  <span className="text-[11px] opacity-50">{item.sub}</span>
                </a>
              ))}
            </div>
            <div className="border-t px-5 py-2.5 flex justify-between text-[10px] font-mono opacity-40" style={{ borderColor: "var(--border)" }}><span>↑↓ navigate • ↵ select</span><span>{time} • remote • available</span></div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
