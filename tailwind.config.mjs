/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#013cae',
          dark: '#001c52',
          light: '#0a4fc7',
          navy: '#001c52',
        },
        accent: {
          DEFAULT: '#ffdc4b',
          dark: '#e6c300',
          light: '#ffe87a',
        },
        dark: '#212934',
      },
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
