/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["variant", [".dark &", '[data-kb-theme="dark"] &']],
  content: ["./src/**/*.{html,js,jsx,ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--kb-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--kb-accordion-content-height)" },
          to: { height: 0 },
        },
        "content-show": {
          from: { opacity: 0, transform: "scale(0.96)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        "content-hide": {
          from: { opacity: 1, transform: "scale(1)" },
          to: { opacity: 0, transform: "scale(0.96)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 800ms ease-in forwards",
        pulseWhite: "pulseWhite 2s infinite",
        pulseBlack: "pulseBlack 2s infinite",
        textPulse: "textPulse 3s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "content-show": "content-show 0.2s ease-out",
        "content-hide": "content-hide 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        pulseWhite: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
          },
          "71%": {
            boxShadow: "0 0 0 5px rgba(255, 255, 255, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)",
          },
        },
        pulseBlack: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(0,0,100)",
          },
          "70%": {
            boxShadow: "0 0 0 5px rgba(0,0,0,50)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(0,0,0,100)",
          },
        },

        textPulse: {
          "0%": {
            opacity: 0.5,
          },
          "50%": {
            opacity: 1.0,
          },
          "100%": {
            opacity: 0.5,
          },
        },
      },
      fontFamily: {
        sans: [
          ' ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
        ],
        mono: ["var(--font-Roboto_Mono)"],
      },
      typography: ({ theme }) => ({}),
    },
  },
  darkMode: ["selector", "[data-theme*='dark']"],
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
