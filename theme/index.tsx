import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d6023b"
    },
    secondary: {
      main: "#690169"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 475,
      md: 675,
      lg: 1075,
      xl: 1536,
    },
  },
});


export function MuiThemeProvider(props : any) {
  
  return (
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
  )
}