module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          DEFAULT: '#080c18',
          50: '#0d1326',
          100: '#101827',
          200: '#141c2f',
          300: '#1a2238',
          400: '#1e2a42',
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 20s ease-in-out -7s infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(34, 211, 238, 0.15)',
        'glow': '0 0 25px -5px rgba(34, 211, 238, 0.2)',
        'glow-lg': '0 0 40px -5px rgba(34, 211, 238, 0.25)',
        'glow-violet': '0 0 25px -5px rgba(129, 140, 248, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
      },
    },
  },
  plugins: [],
};