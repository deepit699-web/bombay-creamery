import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#651D32",
        deepwine: "#3D1421",
        vanilla: "#FFF8EC",
        ivory: "#F7F0E5",
        chocolate: "#40251F",
        gold: "#C6A36A"
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
      boxShadow: { soft: "0 18px 60px rgba(61,20,33,.10)" }
    }
  },
  plugins: []
};
export default config;
