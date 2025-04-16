import { createTheme, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { menuClasses } from "@mui/material/Menu";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import { Icon } from "@iconify/react";
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
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          transitionDuration: "0s",
          borderRadius: "0px",
          fontSize: "15px",
          textTransform: "none",
          "&:disabled": {
            backgroundColor: "var(--color-neutral-200)",
          },
          variants: [
            {
              props: { variant: "gray" },
              style: {
                fontWeight: "600",
                color: "black",
                backgroundColor: "var(--color-neutral-300)",
                "&:hover": {
                  backgroundColor: "var(--color-neutral-200)",
                },
                "&:active": {
                  backgroundColor: "var(--color-neutral-200)",
                },
              },
            },
            {
              props: { variant: "lafayette" },
              style: {
                fontWeight: "600",
                color: "var(--color-lafayette-500)",
                backgroundColor: "var(--color-lafayette-900)",
                "&:hover": {
                  color: "var(--color-lafayette-900)",
                  backgroundColor: "var(--color-lafayette-500)",
                },
                "&:active": {
                  color: "var(--color-lafayette-900)",
                  backgroundColor: "var(--color-lafayette-500)",
                },
              },
            },
            {
              props: { variant: "outlined" },
              style: {
                fontWeight: "700",
                color: "var(--color-lafayette-900)",
                border: "1px solid var(--color-lafayette-900)",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "var(--color-lafayette-200)",
                },
                "&:active": {
                  backgroundColor: "var(--color-lafayette-200)",
                },
              },
            },
          ],
        },
      },
    },
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
          fontWeight: "700",
          color: "black",
          "&.Mui-focused": {
            color: "black",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
        disableUnderline: true,
        classes: {
          root: "!mt-0",
          iconOpen: "!text-lafayette-500",
        },
        MenuProps: {
          transitionDuration: 0,
          sx: {
            [`& .${menuClasses.paper}`]: {
              borderRadius: "0px",
              boxShadow: "none",
              border: "1px solid var(--color-lafayette-900)",
              borderTop: "none",
              background: "var(--color-neutral-100)",
            },
            [`& .${menuClasses.list}`]: {
              paddingTop: "0px",
              paddingBottom: "0px",
              "& li": {
                paddingTop: "12px",
                paddingBottom: "12px",
              },
              "& li:focus": {
                background: "transparent",
              },
              "& li:hover": {
                background: "color-mix(in srgb, var(--color-lafayette-200) 50%, transparent)",
              },
              "& li.Mui-selected": {
                background: "var(--color-lafayette-200)",
              },
            },
          },
        },
        IconComponent: (props) => (
          <div {...props} style={{ 
            marginRight: "12px",
            width: "16px",
            height: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Icon icon="mdi:chevron-down" className="!min-w-6 !min-h-6" />
          </div>
      ),
      },
      styleOverrides: {
        root: {
          marginTop: "0px",
          "& .MuiSelect-icon": {
            color: "var(--color-lafayette-900)",
          },
          "& .MuiSelect-standard": {
            padding: "12px 16px",
            borderRadius: "0px",
            backgroundColor: "var(--color-lafayette-500)",
            "&[aria-expanded='true']": {
              backgroundColor: "var(--color-lafayette-900)",
              color: "var(--color-lafayette-500)",
            },
          },
          "&.Mui-disabled .MuiSelect-standard": {
            backgroundColor: "color-mix(in srgb, var(--color-lafayette-500) 40%, transparent)",
          },
          "&.Mui-disabled .MuiSelect-icon": {
            color: "color-mix(in srgb, var(--color-lafayette-900) 40%, transparent)",
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        orientation: "vertical",
        classes: {
          root: "!space-y-5",
        },
      },
      styleOverrides: {
        vertical: {
          [`& .${toggleButtonClasses.root}`]: {
            border: "2px solid var(--color-neutral-200)",
            padding: "24px 16px",
            borderRadius: 0,
            textTransform: "none",
            fontWeight: "600",
            fontSize: "15px",
            color: "var(--color-lafayette-900)",
            "&:hover": {
              border: "2px solid color-mix(in srgb, var(--color-lafayette-200) 50%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--color-lafayette-200) 50%, transparent)",
            },
            "&.Mui-selected": {
              border: "2px solid var(--color-lafayette-200)",
              backgroundColor: "var(--color-lafayette-200)",
            },
            "&.Mui-selected:hover": {
              border: "2px solid var(--color-lafayette-200)",
              backgroundColor: "var(--color-lafayette-200)",
            },
          },
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
