import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Oredola Gbenga - Senior Web Dev x AI Engineer",
  description: "Senior Web Dev x AI Engineer - 8 products shipped, 1000+ users, $420/mo MRR. Builder of AcademiaBase, RankEngine, LearnVault.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
