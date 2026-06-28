/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./quest/*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#f1e6c9",
        parchmentDark: "#e3d3a4",
        ink: "#2c241b",
        emerald: "#1f4d3b",
        emeraldDark: "#143329",
        gold: "#b5872f",
        goldBright: "#d9a93a",
        runeBlue: "#2f5d8a",
        danger: "#7a2c2c"
      }
    }
  },
  plugins: []
};
// this defines colors to use later on