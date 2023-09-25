/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gyungju-grayscale": "url('../gyungju-grayscale.jpg')",
        "gyungju-color": "url('../gyungju-color.JPG')",
      },
      colors: {
        "color-1": "#000928",
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
        twinkle: {
          "0%": {
            opacity: 0,
            // boxShadow: "0px 0px 30px white",
          },
          "50%": {
            // boxShadow: "0px 0px 30px #d3bd3d",
          },
          "100%": {
            opacity: 1,
            // boxShadow: "0px 0px 30px white",
          },
        },
      },
      animation: {
        typing: "typing 3.5s steps(30, end), blink .7s infinite",
        onlyBlink: "blink .7s infinite",
        twinkle: "twinkle 1s infinite alternate",
      },
    },
  },
  plugins: [],
};
