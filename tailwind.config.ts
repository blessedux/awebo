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
      },
      fontFamily: {
        'rapid-response': ['RapidResponse', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
