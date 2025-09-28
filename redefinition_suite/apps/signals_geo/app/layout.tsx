import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer, Container } from "@redefinition/ui";
import { Sora, Inter } from "next/font/google";

const sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Signals GEO",
  description: "Instant view of AI and search readiness",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${sora.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Header
          companyName="Signals GEO"
          siteLinks={[
            { href: "/score", label: "Score" },
            { href: "/report", label: "Report" },
            { href: "/pricing", label: "Pricing" },
            { href: "/docs", label: "Docs" },
            { href: "/changelog", label: "Changelog" },
            { href: "/account", label: "Account" },
          ]}
          familyLinks={[
            { href: "https://redefinition.tech", label: "Redefinition Tech" },
            { href: "https://entitysignals.com", label: "Entity Signals" },
          ]}
        />
        <Container className="py-10">{children}</Container>
        <Footer />
      </body>
    </html>
  );
}


