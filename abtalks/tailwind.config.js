/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        cyan: '#00ffcc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        digital: ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 255, 204, 0.5), inset 0 0 15px rgba(0, 255, 204, 0.2)',
        'neon-purple': '0 0 15px rgba(139, 92, 246, 0.5), inset 0 0 15px rgba(139, 92, 246, 0.2)',
      },
      textShadow: {
        'glow': '0 0 10px rgba(0, 255, 204, 0.8)',
      }
    },
  },
  plugins: [],
}