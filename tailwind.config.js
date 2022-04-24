module.exports = {
  content: [],
  theme: {
    fontFamily: {
      OpenSansRegular: ["OpenSansRegular"],
    },
    extend: {},
  },
  variants: {
    extend: {
      pointerEvents: ["focus"],
      textColor: [
        "active",
        "focus-within",
        "group-focus",
        "group-hover",
        "focus",
        "hover",
      ],
      backgroundColor: [
        "active",
        "group-focus",
        "focus",
        "group-hover",
        "hover",
      ],
      opacity: ["active", "group-focus", "group-hover", "focus", "hover"],
      fontSize: ["focus", "group-focus", "group-hover", "hover"],
      fill: ["focus", "group-hover", "group-focus", "hover"],
      stroke: ["focus", "group-hover", "group-focus", "hover"],
    },
  },
  plugins: [],
};
