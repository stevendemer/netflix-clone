module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "576px",
      tablet: "768px",
      laptop: "992px",
      desktop: "1200px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
  },
  extend: {
    colors: {
      red: "#e50914",
      gray: "	#564d4d",
      black: "rgb(0, 0, 0 )",
      "dark-red": "#831010",

      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
