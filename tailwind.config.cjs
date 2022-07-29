const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#131313",
        "not-quite-black": "#0F0F0F",
        astral: {
          DEFAULT: "#4F4BFE",
          50: "#D5D4FF",
          100: "#C6C5FF",
          200: "#A8A6FF",
          300: "#8B88FE",
          400: "#6D69FE",
          500: "#4F4BFE",
          600: "#312DFE",
          700: "#130EFE",
          800: "#0701EC",
          900: "#0601CD",
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-in-out",
      },
      keyframes: (theme) => ({
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
