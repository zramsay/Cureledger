/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["class", "[data-theme='dark']"], // Keeps the dark mode toggle functionality
  daisyui: {
    themes: [
      {
        light: {
          primary: "#56c5fb", // Light blue
          "primary-content": "#050f2b", // Dark blue for contrast
          secondary: "#2baceb", // Secondary blue
          "secondary-content": "#1e1e1e", // Off black
          accent: "#ffa810", // Orange accent
          "accent-content": "#ffffff", // White for text
          neutral: "#ededed", // Neutral light gray
          "neutral-content": "#050f2b", // Dark blue for contrast
          "base-100": "#ffffff", // White background
          "base-200": "#ededed", // Light gray background
          "base-300": "#56c5fb", // Light blue for subtle elements
          "base-content": "#1e1e1e", // Off black for text
          info: "#56c5fb", // Matches primary light blue
          success: "#34EEB6", // Unchanged
          warning: "#ffa810", // Matches orange
          error: "#FF8863", // Unchanged

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#050f2b", // Dark blue
          "primary-content": "#56c5fb", // Light blue
          secondary: "#2c2f33", // Off black
          "secondary-content": "#56c5fb", // Light blue for contrast
          accent: "#fd9905", // Golden-orange accent
          "accent-content": "#1e1e1e", // Off black for text
          neutral: "#1e1e1e", // Off black for background
          "neutral-content": "#56c5fb", // Light blue for text
          "base-100": "#2c2f33", // Dark background
          "base-200": "#050f2b", // Darker blue for contrast
          "base-300": "#2baceb", // Secondary blue for accents
          "base-content": "#56c5fb", // Light blue for text
          info: "#56c5fb", // Matches light blue
          success: "#34EEB6", // Unchanged
          warning: "#ffa810", // Matches orange
          error: "#FF8863", // Unchanged

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
