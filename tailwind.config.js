/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Nombre de la clase personalizada y su correspondiente valor CSS
        'auto-fill-240': 'repeat(auto-fill, 240px)',
      },
    },
  },
  plugins: [],
}

