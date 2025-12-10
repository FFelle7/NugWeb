const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: "#7B5CFF",
          secondary: "#A88CFF",
        },
        neon: "#80FFE1",
        surface: "#0F0D16",
        haze: "#0A0912",
        ink: "#F5F5FF",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.08)",
        glow: "0 10px 30px rgba(123, 92, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
