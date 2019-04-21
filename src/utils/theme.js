// https://styled-system.com
// Breakpoints
const breakpoints = ["40em", "52em", "64em", "80em"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

// Space
const space = [0, 4, 8, 16, 32, 64, 128];
space.small = space[1];
space.medium = space[2];
space.large = space[3];

// Font sizes
const fontSizes = [12, 14, 16, 20, 24, 32];
fontSizes.body = fontSizes[2];
fontSizes.display = fontSizes[5];

export default {
  breakpoints,
  space,
  fontSizes,
  colors: {
    blue: "#3495E8",
    darkBlue: "#12344F",
    lightGray: "#F8F8F8",
    gray: "#A3A3A3",
    purple: "#7768AF",
    darkPurple: "#52428E",
    green: "#3EB270",
    darkGreen: "#207E49",
    yellow: "#FFC107"
  }
};
