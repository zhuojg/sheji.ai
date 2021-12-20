module.exports = {
  // mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Inria Sans"', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      inter: ['Inter', 'sans-serif'],
      inria: ['"Inria Sans"', 'sans-serif'],
    },
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
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
