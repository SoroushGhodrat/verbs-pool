import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import DataTable from "./components/DataTable";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataTable />
    </ThemeProvider>
  );
}

export default App;
