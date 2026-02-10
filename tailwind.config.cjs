/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,css}'],
  theme: {
    extend: {}
  },
  corePlugins: {
    // Keep the current “朴素页面优先”的样式不被 Tailwind preflight 影响
    preflight: false
  },
  plugins: []
};
