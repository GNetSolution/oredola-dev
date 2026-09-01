export const dynamic = 'force-dynamic'

import Link from "next/link"
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import StackContact from "@/components/StackContact";

export default function Page(){
  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-white selection:text-black antialiased">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10">
        <Hero/>
        <Products/>
        <Services/>
        <StackContact/>

        {/* SEO FOOTER — 5 internal links for 98/100 */}
        <div className="border-t border-white/10 mt-20 py-10">
          <div className="mx-auto max-w- px-6 md:px-10 flex flex-wrap gap-4 text- font-mono text-white/40">
            <Link href="/products/rankengine" className="hover:text-white underline">RankEngine — SEO Engine (890)</Link>
            <span className="text-white/10">•</span>
            <Link href="/products/academiabase" className="hover:text-white underline">AcademiaBase — AI Research Hub (2.3k)</Link>
            <span className="text-white/10">•</span>
            <Link href="/products/naijaseo-kit" className="hover:text-white underline">NaijaSEO Kit (560)</Link>
            <span className="text-white/10">•</span>
            <Link href="/products/learnvault" className="hover:text-white underline">LearnVault (1.8k)</Link>
            <span className="text-white/10">•</span>
            <Link href="/products/examai" className="hover:text-white underline">ExamAI (3.1k)</Link>
            <span className="ml-auto text-">© 2025 oredola.dev • Built in Lagos, works globally</span>
          </div>
        </div>

      </div>
    </div>
  )
}
