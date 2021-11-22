module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xxs: ".63rem",
      },
      colors: {
        heliotrope: "#9B63F8",
        perfume: "#CDB1FB",
        selago: "#FAF7FE",
        revolver: "#211536",
        scarletgum: "#351767",
        amethyst: "#8E69CC",
      },
      width: {
        "51/100": "51%",
        "12/25": "48.5%",
      },
      height: {
        112: "28rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@themesberg/flowbite/plugin"),
  ],
};
