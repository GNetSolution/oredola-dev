import { NextRequest, NextResponse } from "next/server"
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const { url } = await req.json()
  if (!url?.startsWith("http")) {
    return NextResponse.json({ logs: ["> error: URL must start with https://"] })
  }

  try {
    const controller = new AbortController()
    setTimeout(() => controller.abort(), 8000)
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "RankEngine/1.0 (oredola.dev)" },
      cache: "no-store",
    })
    const html = await res.text()

    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || ""
    const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g,"").trim())
    const metaDesc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)?.[1] || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i)?.[1] || ""
    const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1] || ""
    const hasViewport = /<meta[^>]*name=["']viewport["']/i.test(html)
    const hasSchema = /application\/ld\+json/i.test(html)
    const hasFAQ = /FAQPage/i.test(html)
    const imgWithoutAlt = (html.match(/<img[^>]*>/gi) || []).filter(img =>!/alt=/i.test(img)).length
    const internalLinks = (html.match(new RegExp(`href=["'][^"']*${new URL(url).hostname}`, "gi")) || []).length

    const logs: string[] = []
    logs.push(`> fetched ${url} — ${html.length} bytes • status ${res.status}`)
    logs.push(`> title: ${title.length} chars — "${title.slice(0,70)}" ${title.length>60? "→ TOO LONG (fix to 50-60)" : title.length<30? "→ TOO SHORT" : "→ OK"}`)
    logs.push(`> h1: ${h1Matches.length} found — ${h1Matches[0]? `"${h1Matches[0].slice(0,60)}"` : "MISSING H1"} ${h1Matches.length!==1? `→ need exactly 1 H1 (found ${h1Matches.length})` : "→ OK"}`)
    logs.push(`> meta desc: ${metaDesc.length} chars — ${metaDesc? `"${metaDesc.slice(0,70)}..."` : "MISSING → add 140-160 chars with CTA"}`)
    logs.push(`> canonical: ${canonical? canonical : "MISSING → add canonical link"}`)
    logs.push(`> mobile: ${hasViewport? "viewport OK" : "MISSING viewport meta → not mobile friendly"}`)
    logs.push(`> schema: ${hasSchema? "ld+json found" : "NO schema"} | FAQ schema: ${hasFAQ? "found" : "missing → add FAQPage for featured snippet"}`)
    logs.push(`> images: ${imgWithoutAlt} without alt → add alt="${url} related keyword"`)
    logs.push(`> internal links to self: ${internalLinks} → aim 5+ to your own products (/products/*)`)

    let score = 100
    if (title.length > 60 || title.length < 30) score -= 15
    if (h1Matches.length!== 1) score -= 20
    if (!metaDesc) score -= 20
    if (!hasSchema) score -= 10
    if (imgWithoutAlt > 0) score -= 5
    if (!hasViewport) score -= 15
    logs.push(`> score: ${Math.max(0,score)}/100 — ${score<75? "3-4 critical fixes to rank" : score<90? "1-2 tweaks to rank" : "good to rank globally"}`)

    return NextResponse.json({ logs, real: true })
  } catch (e:any) {
    return NextResponse.json({ logs: [`> fetch failed for ${url}`, `> ${e.message}`, `> tip: site may block bots or needs https://`, `> try oredola.dev, academiabase.com`] })
  }
}