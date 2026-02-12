import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#6FA7C5",
        },
        seashell: "#FFF4EB",
        "air-force-blue": "#6C8FAE",
        "steel-blue": "#7DA1B5",
        silver: "#BEB6B6",
        "powder-petal": "#F9E6DD",
      },
      fontFamily: {
        'rapid-response': ['RapidResponse', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
