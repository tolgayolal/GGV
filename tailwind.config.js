module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["15px", "24px"],
      lg: ["16px", "28px"],
      xl: ["20px", "32px"],
    },
    extend: {
      fontFamily: {
        sans: ["Play", "sans-serif"],
      },
      colors: {
        back: "#1b1c24",
        "light-back": "#22232f",
        orange: "#e69d5d",
      },
    },
  },
  plugins: [],
};
