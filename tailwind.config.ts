import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-text)",
        surface: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        "text-primary": "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-subtle": "var(--color-text-subtle)",
        "border-token": "var(--color-border)",
        success: "var(--color-success)",
        card: {
          DEFAULT: "var(--color-surface)",
          foreground: "var(--color-text)",
        },
        popover: {
          DEFAULT: "var(--color-surface-raised)",
          foreground: "var(--color-text)",
        },
        primary: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-background)",
        },
        secondary: {
          DEFAULT: "var(--color-surface-raised)",
          foreground: "var(--color-text)",
        },
        muted: {
          DEFAULT: "var(--color-background-soft)",
          foreground: "var(--color-text-muted)",
        },
        destructive: {
          DEFAULT: "var(--color-error)",
          foreground: "var(--color-background)",
        },
        border: "var(--color-border)",
        input: "var(--color-border)",
        ring: "var(--color-accent)",
        chart: {
          "1": "var(--color-accent)",
          "2": "var(--color-accent-soft)",
          "3": "var(--color-success)",
          "4": "var(--color-warning)",
          "5": "var(--color-error)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
       fontFamily: {
      monda: ["var(--font-monda)"],
    },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};

export default config;
