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
        navy:    "#1a2744",
        magenta: "#fe019a",
        gold:    "#C9A84C",
        offwhite:"#F9F8F6",
        cgray:   "#6B7280",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      borderRadius: {
        btn:  "7px",
        card: "10px",
        badge:"20px",
      },
      maxWidth: {
        content: "1200px",
        prose:   "640px",
      },
    },
  },
  plugins: [],
};

export default config;
