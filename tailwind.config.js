module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        secondary: {
          50: "#535353",
          100: "#494949",
          200: "#3f3f3f",
          300: "#353535",
          400: "#2b2b2b",
          500: "#212121",
          600: "#171717",
          700: "#0d0d0d",
          800: "#030303",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
