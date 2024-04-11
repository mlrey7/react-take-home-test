import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#FFC245",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        menuTabRoundRight: "-3px 3px #FFC245",
        menuTabRoundLeft: "3px 3px #FFC245",
      },
      keyframes: {
        menuTabFirst: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        menuTabFirst: "menuTabFirst ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
