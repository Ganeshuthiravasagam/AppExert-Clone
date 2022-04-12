module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  important: true,
  theme: {
    extend: {
      colors: {
          100: '#ffe6e8',
          200: '#ffbac3',
          300: '#ff91a4',
          400: '#ff6987',
          500: '#f73e69',
          600: '#eb144c',
          700: '#c40840',
          800: '#9e0035',
          900: '#78002c',
          'custom-green': '#66bb6a',
          'dark-blue': '#374151',
          'light-blue':'#F8FAFA',
          'blue': '#1F2937',
      },
      fontFamily: {
        header: ['Mouser', 'sans-serif'],
        text: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
