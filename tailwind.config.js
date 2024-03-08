const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#999999',
          DEFAULT: '#000000',
          dark: '#4D4D4D',
          100: '#F5F5F5',
          200: '#E6E6E6',
          300: '#CCCCCC',
          400: '#999999',
          500: '#777576',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      }
    },
    keyframes: {
      'open-menu': {
        '0%': { transform: 'scaleY(0)' },
        '80%': { transform: 'scaleY(1.2)' },
        '100%': { transform: 'scaleY(1)' },
      },
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
    }
  },
  plugins: [],
};
