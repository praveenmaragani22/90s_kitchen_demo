/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mustard:  '#E8A020',
        'mustard-dark': '#C47D10',
        brick:    '#C0392B',
        'brick-dark': '#962D22',
        teal:     '#1A6B6B',
        'teal-dark': '#124D4D',
        cream:    '#F5EDD6',
        'cream-dark': '#EDE0C0',
        ink:      '#2C1A0E',
        olive:    '#6B6B2A',
      },
      fontFamily: {
        display:  ['Rozha One', 'serif'],
        slab:     ['Alfa Slab One', 'serif'],
        telugu:   ['Ramaraja', 'serif'],
        body:     ['Hind Guntur', 'sans-serif'],
      },
      backgroundImage: {
        'halftone': "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'halftone': '12px 12px',
      },
      rotate: {
        '2': '2deg',
        '-2': '-2deg',
        '3': '3deg',
        '-3': '-3deg',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
