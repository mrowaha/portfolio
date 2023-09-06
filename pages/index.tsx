import * as React from "react";
import { Button } from "@mui/material";

import { ThemeManagerContext } from "@/theme";

function HomePage() {
  const themeManagerContext = React.useContext(ThemeManagerContext);

  return (
    <Button 
      variant="contained"
      color="secondary"
      onClick={() => themeManagerContext?.setIsDarkMode(prev => !prev)}
    >
      Hello
    </Button>  
  )
}

export default HomePage;