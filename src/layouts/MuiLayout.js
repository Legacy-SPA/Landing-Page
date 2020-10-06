import React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import "./styles.css"
/*
  Theme guide: https://material-ui.com/customization/default-theme/
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0F1124",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#704EF6",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#181B32",
    },
    background: {
      default: "#ffffff",
      paper: "#0F1124",
    },
  },

  typography: {
    fontFamily: "'Spartan', sans-serif",
    fontStyle: "normal",
    fontDisplay: "swap",
    h1: {
      fontSize: "32px",
      fontWeight: 100,
    },
    h2: {
      fontSize: "21px",
      fontWeight: 100,
      objectFit: "contain",
    },
    h6: {
      fontSize: "0.9375rem",
      fontWeight: 100,
      lineHeight: 2,
      objectFit: "contain",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.67,
    },
    subtitle2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.67,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: 2,
    },
    button: {
      fontSize: "16px",
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shadows: ["none", "0 7px 20px 0 #32325d26"],
})

const MuiLayout = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default MuiLayout
