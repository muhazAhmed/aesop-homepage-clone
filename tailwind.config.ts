import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        footerBlack: "#252525",
        subBanner: "#c2c2af",
        heroBanner: "#F6F5E8",
        textPrimary: "#FFFEF2",
      },
    },
  },
  plugins: [],
} satisfies Config;
