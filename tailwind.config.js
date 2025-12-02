/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          900: '#0a0a12',
          800: '#141428',
          700: '#1e1e3f',
        },
        starlight: {
          100: '#e0e7ff',
          200: '#c7d2fe',
          500: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
        serif: ['New York', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
