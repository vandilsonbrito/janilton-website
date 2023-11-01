/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
    "./dist/*.{html, jsx}",
    "./components/*/*.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Banner': "url('../src/assets/imgs-design/relevo-fluido.jpeg')",
        'Picture-profile': "url('../src/assets/imgs-janilton/header-img.png')"
      },
      fontFamily: {
        Roboto: ['Roboto, sans-serif'],
        Montserrat: ['Montserrat, sans-serif']
      }
    },
  },
  plugins: [],
}

