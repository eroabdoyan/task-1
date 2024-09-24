/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '460px'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)', },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-12deg)', },
        },
        spin: {
          '0%': { opacity: '1', transform: 'rotate(0deg)' },
          '100%': { opacity: '1', transform: 'rotate(360deg)', },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s forwards',
        'fade-out': 'fadeOut 1s forwards',
        'scale-in': 'scaleIn 0.5s forwards',
        'spin': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}