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
    },
  });

  return responsiveFontSizes(theme);
};

export default useTheme;