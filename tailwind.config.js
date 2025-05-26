/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      colors: {
        luxury: {
          gold: '#c6a355',
          lightGold: '#e9d5aa',
          purple: {
            light: '#a78bfa',
            DEFAULT: '#7c3aed',
            dark: '#4c1d95'
          }
        },
      },
    },
  },
  plugins: [],
};