/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#040B1C', // Deep navy/black
        primary: '#3B82F6',   // Blue
        secondary: '#06B6D4', // Cyan
        accent: '#8B5CF6',    // Purple
        card: '#0F172A',      // Dark card bg
        'card-hover': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #06B6D4, #3B82F6, #8B5CF6)',
      }
    },
  },
  plugins: [],
}
