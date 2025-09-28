import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer, Container } from "@redefinition/ui";

export const metadata: Metadata = {
  title: "Redefinition Tech Inc",
  description: "A small lab building useful AI and software",
};

import { Sora, Inter } from "next/font/google";

const sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${sora.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Header
          siteLinks={[
            { href: "/portfolio", label: "Portfolio" },
            { href: "/about", label: "About" },
            { href: "/news", label: "News" },
            { href: "/contact", label: "Contact" },
          ]}
          familyLinks={[
            { href: "https://entitysignals.com", label: "Entity Signals" },
            { href: "https://signalsgeo.com", label: "Signals GEO" },
          ]}
        />
        <Container className="py-10">{children}</Container>
        <Footer />
      </body>
    </html>
  );
}


