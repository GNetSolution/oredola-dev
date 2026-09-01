import "./globals.css";
import type { Metadata, Viewport } from "next"
import FAQSchema from "@/components/FAQSchema"
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata: Metadata = {
  title: "Oredola Gbenga — Web Dev × AI Engineer × SEO — 8 shipped",
  description: "Senior Web Dev × AI Engineer × SEO. Built 8 products, 1000+ users, $420/mo MRR. Building AI Tools & SEO Systems that rank globally.",
  metadataBase: new URL("https://oredola.dev"),
  alternates: { canonical: "https://oredola.dev" },
  openGraph: {
    title: "Oredola Gbenga — Web Dev × AI Engineer × SEO",
    description: "Senior Web Dev × AI Engineer. 8 products, 1000+ users. Building SEO Systems that rank.",
    url: "https://oredola.dev",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070a",
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Person",
          "name":"Oredola Gbenga",
          "alternateName":["Oredola","Oredola Dev","Gbenga Oredola"],
          "url":"https://oredola.dev",
          "jobTitle":["Software Developer","Web Developer","AI Engineer","SaaS Builder","Technical Writer"],
          "description":"Oredola Gbenga is a Software Developer, Web Developer, AI Engineer and Technical Writer building AI Tools & SaaS for African students",
          "address":{"@type":"PostalAddress","addressLocality":"Lagos","addressCountry":"NG"},
          "sameAs":[
            "https://github.com/oredolagbenga",
            "https://linkedin.com/in/oredolagbenga",
            "https://x.com/oredola_gbenga"
          ],
          "knowsAbout":["Software Development","Web Development","AI Tools","SaaS","Next.js","SEO","EdTech"]
        })}} />
      </head>
      <body className="bg-[#05070a] text-white antialiased">
        <ThemeProvider>
          <FAQSchema />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}