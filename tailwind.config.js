const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1700px",
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      screens: {
        xl: "1706px",
      },
    },
    fontSize: {
      xs: ["0.75rem"],
      sm: ["0.875rem"],
      base: ["0.938rem"],
      lg: ["1rem"],
      xl: ["1.25rem"],
      "2xl": ["1.5rem"],
      "3xl": ["1.875rem"],
    },
    extend: {
      fontFamily: {
        sans: ["Play", "sans-serif"],
      },
      colors: {
        back: "#1b1c24",
        "light-back": "#22232f",
        "light-back-200": "#1a1b25",
        "zero-back": "#14141c",
        "a-hover": "#ffcc7e",
        orange: "#e69d5d",
        rose: "#934c4c",
        muted: "#cecfd6",
        "muted-hover": "#17171f",

        // items colors
      clip: "rgba(30, 40, 50, 1)",
      default: "hsla(0,0%,56.1%,.3)",
      lightblue: "rgba(84,202,227,.3)",
      purple: "rgba(121,58,255,.6)",
      pink: "rgba(255,71,170,0.6)",
      red: "rgba(252,53,40,0.5)",
      yellow: "rgba(255,148,22,0.5)",
      },
    },
    
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          color: (value) => ({
            colors: value,
          }),
        },
        { values: theme("colors") }
      );
    }),
  ],
};
