/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oo-neutral-stone": "oklch(74.612% 0.02985 79.393)",
        "oo-neutral-900": "oklch(15.907% 0.00002 271.152)",
        "oo-neutral-500": "oklch(56.584% 0.00006 271.152)",
        "oo-neutral-400": "oklch(42.024% 0.00005 271.152)",
        "oo-neutral-100": "oklch(95.514% 0.00011 271.152)",
        "oo-accent-primary": "oklch(65.166% 0.18691 33.924)",
        "oo-accent-dim": "oklch(71.619% 0.0877 73.136)",
        "oo-accent-pink": "oklch(70.684% 0.18697 33.482 / 0.502)",
        "oo-surface-cream": "oklch(74.932% 0.02982 79.394 / 0.502)",
        "oo-surface-milk": "oklch(74.932% 0.02982 79.394 / 0.149)",
        "oo-surface-soft": "oklch(74.932% 0.02982 79.394 / 0.2)",
        "oo-surface-dim": "oklch(74.932% 0.02982 79.394 / 0.302)",
      },
      fontFamily: {
        "oo-display": ["WFVisualSans", "serif", "sans-serif"],
        "oo-body": ["MonaSans", "serif", "sans-serif"],
      },
      padding: {
        "oo-hero-top": "18.6vh",
        "oo-hero-bottom": "15.8vh",
      },
      spacing: {
        "oo-screen-x": "4vw",
        "oo-screen-t": "6.5vh",
        "oo-screen-b": "9.9vh",
      },
    },
  },
  plugins: [],
};
