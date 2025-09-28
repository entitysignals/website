import * as React from "react";
import { twMerge } from "tailwind-merge";

type Link = { href: string; label: string };

export function Header({
  companyName = "Redefinition Tech Inc.",
  logoSrc,
  logoAlt,
  theme = "glass",
  familyLinks,
  siteLinks,
}: {
  companyName?: string;
  logoSrc?: string;
  logoAlt?: string;
  theme?: "glass" | "dark" | "green-glass";
  familyLinks: Link[];
  siteLinks?: Link[];
}) {
  const headerStyles = {
    glass: "sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-[color:var(--border)]",
    dark: "sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl border-b border-gray-700/50 shadow-lg",
    "green-glass": "sticky top-0 z-50 bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 backdrop-blur-xl border-b border-emerald-900/40 shadow-lg"
  };

  const textStyles = {
    glass: {
      company: "text-2xl font-heading font-bold text-foreground hover:text-accent transition-colors duration-200",
      siteLinks: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200",
      familyLinks: "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
    },
    dark: {
      company: "text-2xl font-heading font-bold text-white hover:text-accent transition-colors duration-200",
      siteLinks: "text-sm font-medium text-white/80 hover:text-white transition-colors duration-200",
      familyLinks: "text-sm text-white/70 hover:text-white transition-colors duration-200"
    },
    "green-glass": {
      company: "text-2xl font-heading font-bold text-white hover:text-emerald-100 transition-colors duration-200",
      siteLinks: "text-sm font-medium text-white/90 hover:text-white transition-colors duration-200",
      familyLinks: "text-sm text-white/80 hover:text-white transition-colors duration-200"
    }
  };

  return (
    <header className={headerStyles[theme]}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <a 
              href="/" 
              className="flex items-center space-x-3"
            >
              {logoSrc ? (
                <>
                  <img 
                    src={logoSrc} 
                    alt={logoAlt || companyName} 
                    className="h-8 w-auto"
                  />
                  <span className={textStyles[theme].company}>
                    {companyName}
                  </span>
                </>
              ) : (
                <span className={textStyles[theme].company}>
                  {companyName}
                </span>
              )}
            </a>
            {siteLinks && siteLinks.length > 0 && (
              <nav className="hidden md:flex items-center space-x-8">
                {siteLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={textStyles[theme].siteLinks}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
          <nav className="flex items-center space-x-6">
            {familyLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={textStyles[theme].familyLinks}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Footer({
  extraLinks = [],
  companyLine,
}: {
  extraLinks?: Link[];
  companyLine?: string;
}) {
  return (
    <footer className="bg-emerald-50/85 border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-4">
          {extraLinks.length > 0 && (
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              {extraLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.label}
                </a>
              ))}
            </nav>
          )}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">© 2024 Redefinition Tech Inc. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-2">
              {companyLine ?? "Owned and operated by Redefinition Tech Inc"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge("mx-auto max-w-7xl px-6 lg:px-8", className)} {...props} />;
}

export function Button({ 
  variant = "primary", 
  size = "default",
  className, 
  children,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "group relative overflow-hidden bg-gradient-to-r from-accent/90 to-accent-shade/90 text-white border border-accent/20 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-0.5 transition-all duration-500",
    secondary: "group relative overflow-hidden bg-gradient-to-r from-[#4f46e5]/90 to-purple-600/90 text-white border border-[#4f46e5]/20 shadow-lg hover:shadow-2xl hover:shadow-[#4f46e5]/20 transform hover:-translate-y-0.5 transition-all duration-500",
    ghost: "relative text-foreground hover:bg-muted/80 border border-[color:var(--border)] hover:border-accent/30 hover:shadow-lg transition-all duration-300",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    default: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-xl",
  };

  return (
    <button
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Animated fill overlay for primary and secondary buttons */}
      {(variant === "primary" || variant === "secondary") && (
        <div 
          className={twMerge(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            variant === "primary" && "bg-gradient-to-r from-accent to-accent-shade",
            variant === "secondary" && "bg-gradient-to-r from-[#4f46e5] to-purple-600"
          )}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={twMerge(
        "w-full rounded-xl border border-[color:var(--border)] bg-background px-4 py-3",
        "text-foreground placeholder:text-muted-foreground",
        "focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent",
        "transition-colors duration-200",
        className
      )}
      {...props}
    />
  );
}

export function Section({ 
  children, 
  className,
  size = "default",
  eyebrow,
  title
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: "sm" | "default" | "lg";
  eyebrow?: string;
  title?: string;
}) {
  const sizes = {
    sm: "py-16 lg:py-20",
    default: "py-20 lg:py-24",
    lg: "py-24 lg:py-32",
  };

  return (
    <section className={twMerge(sizes[size], className)}>
      <Container>
        {(eyebrow || title) && (
          <div className="text-center mb-12">
            {eyebrow && (
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export function Hero({ 
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  className 
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={twMerge("relative overflow-hidden bg-background", className)}>
      {/* Enhanced hero background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <Container className="relative py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {eyebrow && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              {eyebrow}
            </div>
          )}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {actions && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function Card({ 
  className, 
  hover = true,
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
}) {
  return (
    <div
      className={twMerge(
        "rounded-2xl border border-[color:var(--border)] bg-card p-8",
        "shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
        hover && "transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
}

export function FeatureCard({ 
  icon,
  title, 
  description, 
  className 
}: { 
  icon?: React.ReactNode;
  title: string; 
  description: string; 
  className?: string;
}) {
  return (
    <Card className={twMerge("text-center", className)}>
      {icon && (
        <div className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
          {icon}
        </div>
      )}
      <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

export function Stat({ 
  label, 
  value,
  description,
  className 
}: { 
  label: string; 
  value: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={twMerge("text-center", className)}>
      <div className="text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-2">
        {value}
      </div>
      <div className="text-sm font-medium text-muted-foreground mb-1">
        {label}
      </div>
      {description && (
        <div className="text-xs text-muted-foreground">
          {description}
        </div>
      )}
    </div>
  );
}

export function Grid({ 
  cols = 3,
  gap = 6,
  children,
  className 
}: {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 4 | 6 | 8 | 12;
  children: React.ReactNode;
  className?: string;
}) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
  };

  const gapMap = {
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    12: "gap-12",
  };

  return (
    <div className={twMerge("grid", colsMap[cols], gapMap[gap], className)}>
      {children}
    </div>
  );
}

export function LogoRow({ 
  logos,
  className 
}: {
  logos: { name: string }[];
  className?: string;
}) {
  return (
    <div className={twMerge("flex flex-wrap justify-center items-center gap-8 opacity-60", className)}>
      {logos.map((logo, index) => (
        <div key={index} className="text-muted-foreground font-medium text-sm tracking-wide">
          {logo.name}
        </div>
      ))}
    </div>
  );
}