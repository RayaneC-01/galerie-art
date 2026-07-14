/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cubiste: {
          creme: '#f5f5dc',
          sombre: '#121212',
          card: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
}