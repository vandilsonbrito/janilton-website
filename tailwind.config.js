/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
    "./dist/*.{html, jsx}",
    "./components/*/*.jsx",
    "./pages/*/*.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BannerMobile': "url('../src/assets/imgs-design/relevo-fluido-mobile.webp')",
        'Banner': "url('../src/assets/imgs-design/relevo-fluido.webp')",
        'Picture-Profile': "url('../src/assets/imgs-janilton/foto-header.webp')",
        'Picture-Profile-Mobile': "url('../src/assets/imgs-janilton/foto-header-mobile.webp')"
      },
      fontFamily: {
        Montserrat: ['Montserrat, sans-serif'],
        
      },
      colors: {
        'main-blue': '#2b2da1'
      }
    },
  },
  plugins: [],
}

