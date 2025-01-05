js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'data-blue': 'hsl(var(--data-blue))',
        'data-purple': 'hsl(var(--data-purple))',
        'data-cyan': 'hsl(var(--data-cyan))',
        'data-green': 'hsl(var(--data-green))',
      }
    }
  },
  plugins: [],
}