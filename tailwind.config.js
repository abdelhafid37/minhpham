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
        1: 1,
        9: 9,
        4: 4,
        preloader: 99999999,
      },
      margin: {
        top: ".3125rem",
        li: "1.0625rem",
      },
      spacing: {
        "screen-x": "1.25rem",
        "screen-x-md": "2.6666666667vw",
        "screen-x-lg": "4.0509259259vw",
        top: "1.25rem",
        "top-md": "2.5rem",
        "top-lg": "6.5476190476vh",
        bottom: "2rem",
        "bottom-md": "3rem",
        "bottom-lg": "9.9206349206vh",
        left: ".5rem",
        "left-md": "calc(2.6666666667vw - .75rem)",
        "left-lg": "calc(4.0509259259vw - .75rem)",
        gap: ".3125rem",
        "bottom-audio": "calc(2rem + 2.8em)",
        "bottom-audio-md": "calc(3rem + 2.8em)",
        "bottom-audio-lg": "calc(9.9206349206vh + 2.8em)",
        "screen-x-audio": "calc(1.25rem - 2.8em)",
        "screen-x-audio-md": "calc(2.6666666667vw - 2.8em)",
        "screen-x-audio-lg": "calc(4.0509259259vw - 2.8em)",
      },
      fontSize: {
        desc: ".875rem",
        "desc-lg": "1rem",
      },
      padding: {
        nav: ".25rem",
        "nav-lg": ".375rem",
        li: ".625rem",
      },
      backgroundImage: {
        "linear-gradient-to-bottom": "linear-gradient(1turn, hsla(0, 0%, 5%, 0), #0c0c0c 92.91%)",
        "linear-gradient-to-top": "linear-gradient(0deg, #0c0c0c 31.25%,hsla(0, 0%, 5%, 0) 92.91%)",
      },
      content: {
        empty: "''",
      },
    },
  },
  plugins: [],
};
