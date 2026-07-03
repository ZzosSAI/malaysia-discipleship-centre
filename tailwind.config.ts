import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2A44",
        gold: "#C9972B",
        cream: "#F8F1DF",
        sky: "#EAF4F7",
        earth: "#7A5632"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Cormorant Garamond", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(11, 42, 68, 0.12)",
        gold: "0 20px 45px rgba(201, 151, 43, 0.24)"
      },
      keyframes: {
        "slow-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1.02)" },
          "50%": { transform: "translate3d(-1.5%, -1%, 0) scale(1.06)" }
        },
        "wheat-sway": {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "slow-drift": "slow-drift 18s ease-in-out infinite",
        "wheat-sway": "wheat-sway 5s ease-in-out infinite",
        "fade-up": "fade-up 700ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
