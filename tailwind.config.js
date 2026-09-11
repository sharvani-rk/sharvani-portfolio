/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        pastel: {
          lavender: {
            bg: '#FAF5FF',
            subtle: '#F3E8FF',
            border: '#E9D5FF',
            text: '#7E22CE',
            accent: '#9333EA',
          },
          blue: {
            bg: '#F0F9FF',
            subtle: '#E0F2FE',
            border: '#BAE6FD',
            text: '#0369A1',
            accent: '#0284C7',
          },
          mint: {
            bg: '#F0FDF4',
            subtle: '#DCFCE7',
            border: '#BBF7D0',
            text: '#15803D',
            accent: '#16A34A',
          },
          peach: {
            bg: '#FFF1F2',
            subtle: '#FFE4E6',
            border: '#FECDD3',
            text: '#BE123C',
            accent: '#E11D48',
          },
          yellow: {
            bg: '#FEFCE8',
            subtle: '#FEF9C3',
            border: '#FEF08A',
            text: '#A16207',
            accent: '#CA8A04',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'modal': '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
