/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07100d",
        card: "#0b1712",
        'card-border': "#22342b",
        primary: {
          DEFAULT: "#8df7b5",
          dark: "#68e096",
          light: "#b2fad0"
        },
        surface: {
          50: "#f6faf8",
          100: "#eaf3ee",
          200: "#d3e6db",
          300: "#accfb9",
          400: "#7fb293",
          500: "#5c9472",
          600: "#46775a",
          700: "#385e48",
          800: "#2d4b3b",
          900: "#10251b",
          950: "#07100d"
        },
        textMuted: "#879a91"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"SFMono-Regular"', 'Consolas', 'monospace']
      }
    },
  },
  plugins: [],
}
