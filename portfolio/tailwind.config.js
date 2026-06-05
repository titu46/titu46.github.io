/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff2d2d',
        'primary-dark': '#8b0000',
        dark: '#050505',
        'dark-secondary': '#0f0f0f',
        'dark-tertiary': '#1a1a1a',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 45, 45, 0.5)',
        'glow-lg': '0 0 40px rgba(255, 45, 45, 0.6)',
        'glow-intense': '0 0 60px rgba(255, 45, 45, 0.8)',
      },
    },
  },
  plugins: [],
}
