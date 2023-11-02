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
        'BannerMobile': "url('../src/assets/imgs-design/relevo-fluido-mobile.webp')",
        'Banner': "url('../src/assets/imgs-design/relevo-fluido.jpeg')",
        'Picture-Profile': "url('../src/assets/imgs-janilton/foto-header.png')",
        'Picture-Profile-Mobile': "url('../src/assets/imgs-janilton/foto-header.webp')"
      },
      fontFamily: {
        Roboto: ['Roboto, sans-serif'],
        Montserrat: ['Montserrat, sans-serif']
      }
    },
  },
  plugins: [],
}

