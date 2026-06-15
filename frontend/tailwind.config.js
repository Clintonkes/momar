module.exports = {
  content: [
    "./index.html",
    "./*.{js,jsx,ts,tsx}",
    "./Pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef9e7',
          100: '#fdf0c5',
          200: '#fbe18a',
          300: '#f8ce4a',
          400: '#e8b82a',
          500: '#d4a017',
          600: '#b8860b',
          700: '#8b6914',
          800: '#6b4f0c',
          900: '#4a3609',
        },
        gold: {
          50: '#fefce8',
          100: '#fdf0c5',
          200: '#fbe18a',
          300: '#f8ce4a',
          400: '#e8b82a',
          500: '#d4a017',
          600: '#b8860b',
          700: '#8b6914',
          800: '#6b4f0c',
          900: '#4a3609',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
