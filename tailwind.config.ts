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
        bg: "#0D0D1A",
        "bg-alt": "#13131F",
        cream: "#F0EAD6",
        muted: "#B0A898",
        gold: "#C9A84C",
        violet: "#7B4FBF",
        "violet-light": "#9B6FDF",
        positive: "#4CAF7D",
        negative: "#E05252",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
