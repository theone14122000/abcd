import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    colors: {
      brand: { /* your existing brand colors */ }
    },
    animation: {
      "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
      "slide-up": "slideUp 0.7s ease-out forwards",
      "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    keyframes: {
      fadeInLeft: {
        "0%": { opacity: "0", transform: "translateX(-20px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      slideUp: {
        "0%": { opacity: "0", transform: "translateY(30px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
  },
}
}
export default config;
