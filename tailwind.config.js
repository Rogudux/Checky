/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        checky: {
          green: "#7AC940",
          bg: "#F9FAF7",
          text: "#2E2E2E",
          muted: "#6B7280",
          border: "#E5E7EB",
        },
        "loyalty-accent": "#7AC940",
        "tickets-accent": "#7C3AED",
        "tickets-bg": "#0F0A1E",
      },
      fontFamily: {
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
