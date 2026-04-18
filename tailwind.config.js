/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          mainBG: "#F1EFE8", // The soft warm base
          border: "#D3D1C7",     // Accessible borders
          muted: "#6B6A63",   // Secondary info (roles, timestamps)
         pageTint: "#F5F3FF",  // Page tints / Badge fills
          btn: "#7C3AED", // Buttons / Active states / Primary icons
          sidebar: "#2E1065", // Sidebar / Navigation / Dark text
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),
  require("tailwindcss-animate"),],
}