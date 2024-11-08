import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import useTheme from "../../hooks/useTheme";

interface ToggleThemeModeProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * `ToggleThemeMode` is a functional component that provides a button for toggling between light and dark themes.
 * It uses the `useTheme` hook to generate a theme based on the `darkMode` prop.
 * When the button is clicked, it toggles the `darkMode` state and the icon changes to reflect the current theme.
 *
 * @param {boolean} darkMode - A boolean prop indicating whether dark mode is enabled.
 * @param {function} setDarkMode - A function for setting the `darkMode` state.
 * @returns A button that toggles the theme between light and dark modes.
 */

const ToggleThemeMode: React.FC<ToggleThemeModeProps> = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={handleThemeChange} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </ThemeProvider>
  );
};

export default ToggleThemeMode;
