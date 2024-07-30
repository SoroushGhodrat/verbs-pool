import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import DataTable from "./components/DataTable";
import useTheme from "./hooks/useTheme";

import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    // Check if the language is not already set in localStorage
    if (!localStorage.getItem("language")) {
      // Set language to Norwegian if not set
      localStorage.setItem("language", "norwegian");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <DataTable />
    </ThemeProvider>
  );
};

export default App;
