import * as React from "react";
import { 
  Typography,
  Container,
  IconButton,
  Switch
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { ThemeManagerContext } from "@/pages/_theme";

import MenuDrawer from "./menu";

const AppContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width : "100vw",
  height : "100vh",
  position : "relative",
}));

const Header = styled('div')(({theme}) => ({
  color: theme.palette.mode === "dark" ? "#fff" : theme.palette.text.primary,
  backgroundColor: theme.palette.mode === "dark" ? "#31313180" : "#dfdfdf20",
  backdropFilter: "saturate(50%) blur(12px)",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.07) 0px 1px 3px 0px, rgba(0, 0, 0, 0.45) 0px 1px 1px 0px inset;",
  display : "flex",
  flexDirection : "row",
  alignItems : "center",
  justifyContent : "space-between",
  padding : "0 0.25rem"
}))


const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 30,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 26,
    height: 26,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
export function Layout(props : any) {

  const themeCtxManager = React.useContext(ThemeManagerContext);
  const [menuDrawer, setMenuDrawer] = React.useState<boolean>(false);

  return (
    <AppContainer>
      <Header>
        <IconButton
          onClick={() => setMenuDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
          >
            Hello
          </Typography>
        </Container>
        <ThemeSwitch
          defaultChecked
          onChange={() => themeCtxManager?.setIsDarkMode(prev => !prev)}
        />
      </Header>
      {props.children}
      <MenuDrawer 
        open={menuDrawer}
        toggleDrawer={(open) => setMenuDrawer(open)}
      />
    </AppContainer>
  )
}