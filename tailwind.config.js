/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050505',
          secondary: '#0A0A0A',
          surface: '#111111',
          surfaceHover: '#171717',
          border: '#222222',
          borderSubtle: '#1A1A1A',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A1A1A1',
          muted: '#666666',
        },
        accent: {
          DEFAULT: '#C8FF00',
          muted: 'rgba(200, 255, 0, 0.12)',
          glow: 'rgba(200, 255, 0, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
      },
      boxShadow: {
        'accent-glow': '0 0 25px rgba(200, 255, 0, 0.25)',
        'accent-glow-lg': '0 0 45px rgba(200, 255, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
