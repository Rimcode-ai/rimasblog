/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F1E',
          light: '#0D1A35',
          lighter: '#162040',
          card: '#0F1929',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5D060',
          dark: '#B8860B',
          bright: '#FFD700',
          muted: '#C9A84C',
        },
        silver: {
          DEFAULT: '#C0C0C0',
          light: '#E8E8E8',
          dark: '#A0A0A0',
          muted: '#8B8B8B',
        },
        crimson: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#B91C1C',
        },
        royal: {
          DEFAULT: '#1E40AF',
          light: '#2563EB',
          bright: '#3B82F6',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212,175,55,0.2)' },
          '50%': { boxShadow: '0 0 45px rgba(212,175,55,0.6)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
