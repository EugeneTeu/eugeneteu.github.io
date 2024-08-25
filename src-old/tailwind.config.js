/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 800ms ease-in forwards",
        pulseWhite: "pulseWhite 2s infinite",
        pulseBlack: "pulseBlack 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        pulseWhite: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
          },
          "71%": {
            boxShadow: "0 0 0 5px rgba(255, 255, 255, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)",
          },
        },
        pulseBlack: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(0,0,100)",
          },
          "70%": {
            boxShadow: "0 0 0 5px rgba(0,0,0,50)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(0,0,0,100)",
          },
        },
      },

      backgroundImage: {
        hero: "url('/src/assets/profile-1.jpg')",
      },
      fontFamily: {
        sans: [
          ' ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
        ],
        mono: ["var(--font-Roboto_Mono)"],
      },
      typography: ({ theme }) => ({}),
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
