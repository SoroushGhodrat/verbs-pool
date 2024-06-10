import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";
import DataTable from "./components/DataTable";
import useTheme from "./hooks/useTheme";
import ToggleThemeMode from "./components/UI/ToggleThemeMode";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToggleThemeMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <DataTable />
    </ThemeProvider>
  );
};

export default App;
