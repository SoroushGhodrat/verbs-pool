import { ThemeProvider, CssBaseline } from "@mui/material";
import DataTable from "./components/DataTable";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <CssBaseline />
        <Navbar />
        <DataTable />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
