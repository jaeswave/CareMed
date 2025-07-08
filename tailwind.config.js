/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero.png')",
        "about-bg": "url('/src/assets/images/aboutBg.png')",
        "join-bg": "url('/src/assets/images/joinBg.png')",
        "product-bg": "url('/src/assets/images/productHero.png')",
      },
      fontFamily: {
        urbanist: ["Urbanist"],
        outfit: ["Outfit"],
      },
      colors: {
        customBlue: "#083D96",
        customRed: "#E01F29",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
