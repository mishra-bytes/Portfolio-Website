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
        surface: {
          DEFAULT: '#111111',
          raised: '#191919',
          overlay: '#1e1e1e',
          border: '#2a2a2a',
        },
        accent: {
          DEFAULT: '#a0a0a0',
          muted: '#666666',
          subtle: '#3a3a3a',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.65', fontWeight: '400' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'micro': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};