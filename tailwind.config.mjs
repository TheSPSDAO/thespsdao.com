// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,astro}"],
  theme: {
    // Using CSS variables directly for colors in components
    // Tailwind v4 supports CSS variables and nesting out of the box
    colors: {
      primary: "rgb(var(--primary-color) / <alpha-value>)",
      secondary: "rgb(var(--secondary-color) / <alpha-value>)",
      "dark-bg": "rgb(var(--dark-bg-color) / <alpha-value>)",
      "darker-bg": "rgb(var(--darker-bg-color) / <alpha-value>)",
      "light-text": "rgb(var(--light-text-color) / <alpha-value>)",
      "gray-text": "rgb(var(--gray-text-color) / <alpha-value>)",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
    },
    // Other theme configurations:
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      DEFAULT: "0.625rem", // 10px
      lg: "1.25rem", // 20px
      full: "9999px",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shine: "shine 3s infinite",
        "blue-fire": "blue-fire 4s ease-in-out infinite alternate",
        flicker: "flicker 0.5s ease-in-out infinite alternate",
        "glow-pulse": "glow-pulse 3s infinite",
      },
      transitionDuration: {
        400: "400ms",
        800: "800ms",
      },
    },
  },
};
