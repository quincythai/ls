import { createTheme, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App.tsx";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "16px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "15px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "15px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
  },
  components: {
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: "var(--color-neutral-400)",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: "34px",
          height: "34px",
          color: "var(--color-neutral-200)",
          "&.Mui-active": {
            color: "var(--color-lafayette-900)",
          },
          "&.Mui-completed": {
            color: "var(--color-lafayette-700)",
          },
          "&.Mui-active .MuiStepIcon-text": {
            font: "600 12px Inter",
            fill: "white",
          },
          "&.Mui-completed .MuiStepIcon-root": {
            font: "600 10px Inter",
            fill: "white",
          },
        },
        text: {
          font: "500 12px Inter",
          fill: "var(--color-neutral-400)",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          width: "52px",
        },
        line: {
          border: "none",
          height: "2px",
          borderRadius: "2px",
          backgroundColor: "var(--color-neutral-300)",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          color: "black",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
          border: "none",
          borderImage: "none",
          backgroundColor: "var(--color-neutral-100)",
          "&.MuiInputBase-input": {
            border: "none !important",
            outline: "none !important",
            backgroundColor: "var(--color-neutral-100) !important",
          },
        },
        standard: {
          border: "none",
          borderImage: "none",
          backgroundColor: "var(--color-neutral-100)",
        },
        outlined: {
          border: "none",
          borderImage: "none",
          backgroundColor: "var(--color-neutral-100)",
        },
        nativeInput: {
          border: "none",
          borderImage: "none",
          backgroundColor: "var(--color-neutral-100)",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </StrictMode>,
);
