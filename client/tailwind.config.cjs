/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      default: "1194px",
    },
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand, sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },

      colors: {
        "black-01": "#253D4E",
        "gray-01": "#939393",
        "gray-02": "#E9ECF4",
        "green-01": "#27CA7D",
        "green-02": "#D4EEE2",
        "orange-01": "#F59758",
        "orange-02": "#F2EBD9",
        "yellow-01": "#FDC040",
        "blue-01": "#67BCEE",
        "blue-02": "#D9F2F9",
        "pink-01": "#F74B81",
        "pink-02": "#F4EAEA",
        "red-01": "#F74B4B",
      },

      screens: {
        xs: "375px",
      },

      backgroundImage: {
        // "hero-pattern": 'url("./background.png")',
      },

      fontSize: {
        heading: "56px",
        "heading-2": "42px",
      },
    },
  },

  plugins: [],
};
