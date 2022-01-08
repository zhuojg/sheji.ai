module.exports = {
  content: ['./app/**/*.{ts,tsx,css}'],
  theme: {
    fontFamily: {
      sans: ['"Noto Sans SC"', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
