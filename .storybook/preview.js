import { create } from "@storybook/theming";

const lightTheme = create({
  base: "light",
  appBg: "white",
  colorPrimary: "#FF8C69",
  colorSecondary: "#FF8C69",
  brandImage:
    "https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png",
});

const darkTheme = create({
  base: "dark",
  appBg: "white",
  colorPrimary: "#DBF785",
  colorSecondary: "#DBF785",
  appContentBg: "#707780",
  barBg: "#656B73",
  brandImage:
    "https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png",
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
};

import "../src/styles/main.css";
