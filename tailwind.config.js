/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07182d",
        harbor: "#0d2746",
        water: "#18bdf2",
        cyan: "#70e4ff",
        steel: "#5f7285",
        graphite: "#172331",
        mist: "#eef6fa",
        ice: "#f8fcff",
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["Manrope", "Avenir Next", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        deep: "0 34px 90px rgba(7, 24, 45, 0.34)",
        card: "0 18px 48px rgba(13, 39, 70, 0.12)",
        glow: "0 18px 58px rgba(24, 189, 242, 0.28)",
      },
    },
  },
  plugins: [],
};
