/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-1": "#191729",
        "color-2": "#2C2856",
        "color-3": "#4C4B59",
        "color-4": "#3D3966",
        "color-5": "#252442",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "0%": {
            borderColor: "transparent",
          },
          "50%": {
            borderColor: "rgb(23 37 84)",
          },
          "100%": {
            borderColor: "transparent",
          },
        },
      },
      animation: {
        typing: "typing 3.5s steps(30, end), blink .7s infinite",
        onlyBlink: "blink .7s infinite",
      },
    },
  },
  plugins: [],
};
