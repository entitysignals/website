module.exports = {
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
        "accent-shade": "var(--color-accent-shade)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        accentTint: "var(--color-accent-tint)",
        accentShade: "var(--color-accent-shade)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
      borderRadius: {
        DEFAULT: "var(--radius-12)",
        lg: "var(--radius-16)",
        xl: "var(--radius-24)",
      },
      spacing: {
        2: "var(--space-2)",
        4: "var(--space-4)",
        8: "var(--space-8)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        24: "var(--space-24)",
        32: "var(--space-32)",
        48: "var(--space-48)",
        64: "var(--space-64)",
      },
      transitionTimingFunction: {
        short: "var(--ease-short)",
      },
      fontFamily: {
        "heading": ["var(--font-sora)", "system-ui", "sans-serif"],
        "body": ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "xs": ["0.75rem", { lineHeight: "1rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "base": ["1rem", { lineHeight: "1.5rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "7xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-sm": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.025em" }],
        "display": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
    },
  },
};


