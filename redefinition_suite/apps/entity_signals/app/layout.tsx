import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer, Container } from "@redefinition/ui";
import Script from "next/script";
import { Sora, Inter } from "next/font/google";
import CookieBanner from "./components/CookieBanner";

const sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const GA_ID = "G-C21QSBLG5E";

export const metadata: Metadata = {
  title: "Entity Signals",
  description: "Raise your AI discoverability and search health",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${sora.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {/* Google Analytics 4 - gtag.js */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Header
          companyName="Entity Signals"
          logoSrc="/images/logo.png"
          logoAlt="Entity Signals Logo"
          theme="green-glass"
          siteLinks={[
            { href: "/services", label: "Services" },
            { href: "/methods", label: "Method" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
          ]}
          familyLinks={[
            { href: "https://redefinition.tech", label: "Redefinition Tech" },
            { href: "https://signalsgeo.com", label: "Signals GEO" },
          ]}
        />
        {children}
        <Footer
          extraLinks={[
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
            { href: "/contact", label: "Contact" },
            { href: "/editorial-policy", label: "Editorial Policy" },
          ]}
          companyLine="Redefinition Technologies Inc. • Richmond BC • +1 604-906-6333"
        />
        <CookieBanner />
      </body>
    </html>
  );
}


