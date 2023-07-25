/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      animation: {
        "bounce-slow": "bounce 1.5s linear infinite",
      },
      fontFamily: {
        lilita: ["Lilita One", "sans"],
        mochiy: ["Rubik Mono One"],
      },
    },
  },
  plugins: [],
};
