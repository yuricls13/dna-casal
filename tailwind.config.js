/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#6366f1',
          pink: '#ec4899',
          dark: '#1a1a1a',
          light: '#f9fafb',
        }
      }
    },
  },
  plugins: [],
}