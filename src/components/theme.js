const breakpoints = ["40em", "52em", "64em", "80em"];

// Breakpoints
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints,
  colors: {
    white: "#ffffff"
  }
};
