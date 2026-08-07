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
        130: "130%",
        180: "180%",
      },
      zIndex: {
        9: 9,
      },
      margin: {
        top: ".3125rem",
      },
      spacing: {
        "screen-x": "1.25rem",
        "screen-x-md": "2.6666666667vw",
        "screen-x-lg": "4.0509259259vw",
        top: "1.25rem",
        "top-md": "2.5rem",
        "top-lg": "6.5476190476vh",
      },
      fontSize: {
        description: ".875rem",
      },
      padding: {
        nav: ".25rem",
        "nav-lg": ".375rem",
      },
    },
  },
  plugins: [],
};
