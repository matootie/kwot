module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "discord-blue": "#5E80D2",
        "discord-white": "#FCFCFE"
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {
      zIndex: ["hover"],
      translate: ["group-hover"]
    },
  },
  plugins: [],
};
