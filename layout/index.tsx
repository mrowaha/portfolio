import dynamic from "next/dynamic";

import * as React from "react";
import { 
  Container,
  Typography,
  useTheme
} from "@mui/material";
import { styled } from '@mui/system';
import { useAtom } from "jotai";

import { titleAtom } from "@/store";
import Navbar from "@/components/molecules/Navbar";

const DynamicContact = dynamic(
  () => import("./contact"),
  {ssr : false}
)

const AppContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width : "100%",
  paddingTop : "4rem",
}));


const Footer = styled("footer")(({theme}) => ({
  width : "100%",
  display : "flex",
  justifyContent : "center",
  color : theme.palette.mode === "dark" ? "#fff" : theme.palette.text.primary,
  backgroundColor: theme.palette.mode === "dark" ? "#31313180" : "#dfdfdf20",
  borderTop : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff" 
}))


export function Layout(props : any) {

  const theme = useTheme();
  const [title, _] = useAtom(titleAtom);

  return (
    <>
      <DynamicContact />
      <Navbar 
        logo="/rowaha-logo.png"
        title={title}
      />
      <AppContainer>
        <Container sx={{ marginBottom : "1rem"}}>
          {props.children}
        </Container>
        <Footer>
          <Typography 
            variant="body2"
            sx={{
              backgroundColor : "inherit",
              color: theme.palette.secondary.main
            }}
          >
            Copyright &copy; Muhammad Rowaha 2023
          </Typography>
        </Footer>
      </AppContainer>
    </>
  )
}