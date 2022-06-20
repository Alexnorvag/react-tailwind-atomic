module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      colors: {
        "prussian-blue": "#0b3954",
        "ukranian-blue": {
          DEFAULT: "#a3d9ff",
          50: "#a3d9ff80",
        },
        "glassy-dark": {
          10: "#0000001a",
          20: "#00000033",
          80: "#000000cc",
        },
      },
      boxShadow: {
        "dark-medium": "0px 2px 4px 0px rgba(0, 0, 0, 0.5)",
        "dark-slight": "0px 2px 10px 0px rgba(0, 0, 0, 0.38)",
        "light-medium": "0px 10px 24px 0px rgba(221, 221, 221, 0.5)",
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fade 0.5s ease-out",
      },
    },
  },
};
