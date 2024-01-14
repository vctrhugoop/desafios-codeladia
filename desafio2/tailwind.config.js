/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-michael-jordan": "url('/src/assets/image-michael-jordan.png')",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
