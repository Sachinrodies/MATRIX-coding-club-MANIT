/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'matrix-green': {
          100: '#E6F4D7',
          200: '#D1EAB0',
          300: '#BDDF8A',
          400: '#A8D563',
          500: '#9ACD32', // Primary
          600: '#7BA428',
          700: '#5D7B1E',
          800: '#3E5214',
          900: '#1F290A',
        },
        'matrix-dark': {
          100: '#D9D9D9',
          200: '#B3B3B3',
          300: '#8C8C8C',
          400: '#666666',
          500: '#404040',
          600: '#333333',
          700: '#262626',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
        'tech-blue': '#3B82F6',
        'contest-purple': '#8B5CF6',
        'announce-orange': '#F97316',
        'success': '#10B981',
        'warning': '#FBBF24',
        'error': '#EF4444',
      },
      fontFamily: {
        'code': ['Fira Code', 'monospace'],
        'sans': ['Inter', 'Segoe UI', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      },
      animation: {
        'matrix-flow': 'matrix-flow 20s linear infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'matrix-flow': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'matrix-pattern': 'linear-gradient(to right, rgba(154, 205, 50, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(154, 205, 50, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'matrix-grid': '20px 20px',
      },
    },
  },
  plugins: [],
};