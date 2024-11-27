import type { Config } from "tailwindcss";

export default {
  important: true,
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          purple: "#9974F8",
          green: "#B2F142",
          red: "#FF4C47",
          yello: "#FFCA51",
        },
        shadow: {
          50: "#ffffff",
          100: "#e6e6e6",
          200: "#dcdcdc",
          300: "#bbbbbb",
          400: "#a0a0a0", // text-description
          500: "#7d7d7d",
          600: "#616161",
          700: "#3c3c3c",
          800: "#1e1e1e",
          900: "#000000",
        },
      },
      keyframes: {
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
