module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      gold: {
        heading: "#291507",
        subheading: "#291507",
        light: "#29150799",
        lightest: "#E3E1DC",
      },
    },
    fontFamily: {
      mont: ["Montserrat"],
    },
  },
};
