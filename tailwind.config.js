/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'paper': '#F3F3F3',
        'void': '#050505',
        'sonic-orange': '#FF4D00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
        'snow': 'snow 10s linear infinite',
        'swing': 'swing 4s ease-in-out infinite',
        'elastic-drop': 'elastic-drop 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'curtain-up': 'curtain-up 1s cubic-bezier(0.76, 0, 0.24, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        snow: {
          '0%': { transform: 'translateY(-10vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh)', opacity: '0.3' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
        'elastic-drop': {
          '0%': { transform: 'translateY(-300px)' },
          '40%': { transform: 'translateY(20px)' },
          '60%': { transform: 'translateY(-10px)' },
          '80%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'curtain-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      }
    },
  },
  plugins: [],
}