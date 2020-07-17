import { createText, createBox } from "@shopify/restyle";

// const palette = {
//   purpleLight: "#8C6FF7",
//   purplePrimary: "#5A31F4",
//   purpleDark: "#3F22AB",

//   greenLight: "#56DCBA",
//   greenPrimary: "#0ECD9D",
//   greenDark: "#0A906E",

//   black: "#0B0B0B",
//   white: "#F0F2F3",
// };

const theme = {
  colors: {
    primary: "#2CB9B0",
    button: "#0C0D34",
    buttonlight: "rgba(87, 43, 0, 0.08)",
    title: "rgb(12,13,52)",
    text: "rgba(12,13,52, 0.7)",
    white: "#EEE",
    grey: "rgba(12,13,52, 0.05)",
    lightgrey: "rgba(90,90,90, 1)",
    darkgrey: "rgba(40,40,40, 1)",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 40,
    xl: 75,
  },
  imageColor: {
    light: "#AAA",
    medium: "black",
    dark: "black",
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "lightgrey",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "title",
      textAlign: "center",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "title",
      textAlign: "center",
      margin: "m",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
      margin: "s",
    },
    button: {
      fontFamily: "SFProText-Regular",
      fontSize: 15,
      color: "text",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
