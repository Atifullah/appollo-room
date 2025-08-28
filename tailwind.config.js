/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "400px",
        xxs: "375px",
      },
      colors: {
        cream: "#EADBCE",
      },
      backgroundImage: {
        "buy-img":
          "url('https://hously-react.vercel.app/static/media/01.22de4da0428b035e9d2b.jpg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      // ✅ THIS PART WAS MISSING
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};
