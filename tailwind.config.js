/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1: '#ccc',
        },
      },
      padding: {
        18: '4.5rem',
      },
      fontSize: {
        '20px': '1.25rem',
        '28px': '1.75rem',
      },
    },
  },
  plugins: [],
}
