import * as React from "react";
import { 
  Typography,
  Container,
  IconButton,
  Switch,
  Fab,
  Stack,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';
import { ThemeManagerContext } from "@/theme";

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
  padding : "0 0.25rem",
  marginBottom : "1rem",
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

const Title = styled(Typography)(({theme}) => ({
  letterSpacing : 5,
  fontFamily : "Caveat",
  textAlign : "center",
  [theme.breakpoints.down("md")] : {
    fontSize : "1.75rem"
  }
}))

const FabContainer = styled("div")(({theme}) => ({
  position : "absolute",
  right : 0,
  bottom : 0,
  padding : "5px",
  backgroundColor : theme.palette.mode === "dark" ? "#ffffff22" : "#31313133",
  borderTopLeftRadius : "20px",
  borderBottomLeftRadius : "20px",
  marginBottom : 10
}))


export function Layout(props : any) {

  const themeCtxManager = React.useContext(ThemeManagerContext);
  const [menuDrawer, setMenuDrawer] = React.useState<boolean>(false);
  const [contactDrawer, setContactDrawer] = React.useState<boolean>(true);

  return (
    <>
      <AppContainer>
        <Header>
          <IconButton
            onClick={() => setMenuDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Container>
            <Title
              variant="h4"
            >
              Home 
            </Title>
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

      <FabContainer>
          <Stack direction="column" gap={0.5}>
            <Fab size="small" color="secondary">
              <EmailIcon />
            </Fab>
            <Fab size="small" color="secondary">
              <SvgIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </SvgIcon>
            </Fab>
            <Fab size="small" color="secondary">
              <SvgIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </SvgIcon>
            </Fab>
          </Stack>
      </FabContainer>
    </>
  )
}