import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {red, blue, pink} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#66bb6a",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    mode : "light",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: pink[200],
    },
    error: {
      main: "#cf6679",
    },
    background: {
      default: "#212121",
    },
    mode : "dark",
  },  
})

interface ThemeManager {
  setIsDarkMode : React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeManagerContext = React.createContext<ThemeManager | null>(null);

export function MuiThemeProvider(props : any) {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);
  
  const ctx = {
    setIsDarkMode,
  }

  const sTheme = React.useMemo(() => {
    return isDarkMode ? darkTheme : theme;
  }, [isDarkMode])

  return (
    <ThemeManagerContext.Provider value={ctx}>
      <ThemeProvider theme={sTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeManagerContext.Provider>
  )
}