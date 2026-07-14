/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "rgba(235, 89, 57, 1)",
        dark: "rgba(13, 13, 13, 1)",
        accent: "rgba(183, 171, 152, 1)",
        "accent-light": "rgba(184, 172, 153, 0.5)",
        "dark-gray": "rgba(77, 77, 77, 1)",
      },
      fontFamily: {
        display: ["Avant Garde", "sans-serif"],
        sans: ["Nunito Sans", "sans-serif"],
      },
      screens: {
        lg: "1200px",
      },
      letterSpacing: {
        tight: "-.03em",
        widest: ".5em",
      },
      lineHeight: {
        110: "110%",
        180: "180%",
      },
    },
  },
  plugins: [],
};
