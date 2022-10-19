/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        rubik: ['"Rubik"', "sans-serif"],
      },
      colors: {
        primary: "#131B27",
      },
      screens: { tablet: "790px", "2k": "2048px", "4k": "3048px" },
    },
  },
  plugins: [],
};
