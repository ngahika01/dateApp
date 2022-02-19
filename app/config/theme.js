import { DarkTheme, DefaultTheme } from "react-native-paper";

const theme = {
  dark: false,
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: "#A020F0",
    accent: "#ffffff",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    placeholder: "#5C5C5C",
    text: "#5C5C5C",
    warning: "#ffcc00",
  },
  animation: {
    scale: 1.0,
  },
};
const darkmodeTheme = {
  dark: true,
  ...DarkTheme,
  mode: "adaptive",
  roundness: 10,
  colors: {
    ...DarkTheme.colors,
  },
};
export { theme, darkmodeTheme };
