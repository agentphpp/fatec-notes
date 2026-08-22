import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe7fe',
          200: '#bcd2fd',
          300: '#8db3fb',
          400: '#588cf6',
          500: '#3b6fed',
          600: '#2955d6',
          700: '#2443ad',
          800: '#233b89',
          900: '#20356d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.brand.600'),
            a: { textDecoration: 'none', fontWeight: '500' },
            'a:hover': { textDecoration: 'underline' },
          },
        },
        invert: {
          css: {
            '--tw-prose-links': theme('colors.brand.400'),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
