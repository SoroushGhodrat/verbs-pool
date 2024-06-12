import { createTheme, responsiveFontSizes } from "@mui/material";

/**
 * `useTheme` is a custom hook that generates a theme based on the provided `darkMode` state.
 * It uses the `createTheme` function from MUI to create a theme with a palette that depends on `darkMode`.
 * If `darkMode` is true, the palette mode is set to "dark". Otherwise, it's set to "light".
 * The theme is then passed to `responsiveFontSizes` to make the font sizes responsive.
 *
 * @param {boolean} darkMode - A boolean state indicating whether dark mode is enabled.
 * @returns A theme with responsive font sizes and a palette mode based on `darkMode`.
 */

const useTheme = (darkMode: boolean) => {
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: "#f44336",
      },
      warning: {
        main: "#ff9800",
      },
      info: {
        main: "#2196f3",
      },
      success: {
        main: "#4caf50",
      },
      background: {
        default: "#f5f5f5", // your default background color
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#333",
          },
          h1: {
            fontSize: "2rem", // your default h1 size
          },
          h2: {
            fontSize: "1.5rem", // your default h2 size
          },
          // ... other h tags
          body1: {
            fontSize: "1.5rem", // your default p size
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};

export default useTheme;
