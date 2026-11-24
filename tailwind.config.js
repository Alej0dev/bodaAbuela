/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blanco: "#fdfeff",
        celeste: "#2f5a96", // fondo de secciones (azul oscuro)
        claro: "#aac6e8", // celeste, solo detalles
        marino: "#2f5a96", // azul fuerte de las servilletas
        profundo: "#1f3f73", // variante oscura para texto pequeño
        tinta: "#1f2733",
      },
      fontFamily: {
        script: ['"Pinyon Script"', "cursive"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
