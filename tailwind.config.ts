import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: "#061016",
          panel: "rgba(12, 24, 34, 0.78)",
          cyan: "#55e6ff",
          mint: "#6ef5b3",
          violet: "#9f7aea",
          amber: "#ffd166"
        }
      },
      boxShadow: {
        glow: "0 0 38px rgba(85, 230, 255, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
