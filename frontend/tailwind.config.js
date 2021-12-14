module.exports = {
  // mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#ffffff !important',
            },
            h2: {
              color: '#ffffff !important',
            },
            h3: {
              color: '#ffffff !important',
            },
          },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        inria: ['"Inria Sans"', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
