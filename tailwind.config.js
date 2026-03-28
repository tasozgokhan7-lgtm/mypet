/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D6A4F',
          dark: '#1B4332',
          light: '#52B788',
        },
        accent: {
          DEFAULT: '#F4A261',
          warm: '#E76F51',
        },
        background: '#FAFAF7',
        foreground: '#1A1A2E',
        muted: '#6B7280',
        card: '#FFFFFF',
        dark: {
          DEFAULT: '#0F2318',
          2: '#162D20',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        btn: '50px',
        xl2: '20px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(45, 106, 79, 0.08)',
        'card-hover': '0 20px 60px rgba(45, 106, 79, 0.14)',
        'pill': '0 4px 16px rgba(0,0,0,0.08)',
        'pill-hover': '0 8px 24px rgba(45, 106, 79, 0.20)',
        'phone': '0 40px 80px rgba(27, 67, 50, 0.30)',
      },
      animation: {
        'phone-float': 'phoneFloat 5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        'orb1': 'orbFloat1 8s ease-in-out infinite',
        'orb2': 'orbFloat2 10s ease-in-out infinite',
        'orb3': 'orbFloat3 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};