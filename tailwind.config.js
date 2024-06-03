/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-yellow':
          'radial-gradient(circle, rgba(253,229,152), transparent 70%)',
        'custom-gradient-red':
          'radial-gradient(circle, rgba(255,85,85), transparent 70%)',
      },
      colors: {
        primary: {
          DEFAULT: '#ff5555',
          50: '#F7C6C6',
          100: '#F5B4B4',
          200: '#F09090',
          300: '#EC6C6C',
          400: '#E74848',
          500: '#DA1E37',
          600: '#B61818',
          700: '#841212',
          800: '#530B0B',
          900: '#210404',
        },
      },
    },
    fontFamily: {
      clash: ['Clash Display', 'sans-serif'],
    },
  },
  plugins: [],
};
