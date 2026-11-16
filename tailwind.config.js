/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4fd1c5',
        dark: {
          900: '#05080c',
          800: '#0b0f14',
          700: '#0e141b',
          600: '#121922',
          500: '#1f2a36',
        },
        gray: {
          400: '#5f7185',
          300: '#9fb0c3',
          200: '#c4d2e0',
          100: '#e8eef5',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 15% 20%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
