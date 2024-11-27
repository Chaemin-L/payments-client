import type { Config } from "tailwindcss";

export default {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B2F142",
        background: "#202028",
        gray: "#202028", // card background
        lightGray: "#2C2C35",
        description: "#9A9AA0",
        badge: "#2C2C35",
      },
    },
  },
  plugins: [],
} satisfies Config;
