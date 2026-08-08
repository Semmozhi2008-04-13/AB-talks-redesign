/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px',      // Mobile-first base
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#8B5CF6',
      },
    },
  },
  plugins: [],
}