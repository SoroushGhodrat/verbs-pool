import { createTheme, responsiveFontSizes } from "@mui/material";

const useTheme = () => {
  const theme = createTheme({
    palette: {
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
        default: "#f5f5f5", // default background color
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#333",
          },
          h1: {
            fontSize: "2rem", // default h1 size
          },
          h2: {
            fontSize: "1.5rem", // default h2 size
          },
          // ... other h tags
          body1: {
            fontSize: "1.5rem", // default p size
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};

export default useTheme;
