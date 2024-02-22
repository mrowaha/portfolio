import dynamic from "next/dynamic";

import * as React from "react";
import { 
  Container,
  Stack,
  Typography,
  Box,
  useTheme
} from "@mui/material";
import { styled } from '@mui/system';
import { useAtom } from "jotai";

import { paddingTopAtom, titleAtom } from "@/store";
import Navbar from "@/components/molecules/Navbar";
import JumpTo from "@/components/molecules/JumpTo";
import ContactMe from "@/components/molecules/ContactMe";

const DynamicContact = dynamic(
  () => import("./contact"),
  {ssr : false}
)

const AppContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width : "100%"
}));


const Footer = styled("footer")(({theme}) => ({
  width : "100%",
  color : theme.palette.mode === "dark" ? "#fff" : theme.palette.text.primary,
  backgroundColor: theme.palette.mode === "dark" ? "#31313180" : "#dfdfdf20",
  borderTop : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff" 
}))


export function Layout(props : any) {

  const theme = useTheme();
  const [title, _] = useAtom(titleAtom);
  const [paddingTop, setPaddingTop] = useAtom(paddingTopAtom);

  const navbarRef = React.useRef<React.ElementRef<"header">>();
  React.useEffect(() => {
    const boundingRect = navbarRef.current!.getBoundingClientRect();
    setPaddingTop(`${boundingRect.height + 10}px`)
  }, [])

  return (
    <>
      <DynamicContact />
      <Navbar 
        logo="/rowaha-logo.png"
        title={title}
        ref={navbarRef}
      />
      <AppContainer sx={{paddingTop}}>
        <Container>
          {props.children}
        </Container>
        <Footer>
          <Stack
            sx={{width: "100%"}}
            alignItems="center"
            direction="column"
            gap={2}
          >
            <ContactMe />
            <JumpTo />
            <Typography 
              variant="body2"
              sx={{
                backgroundColor : "inherit",
                color: theme.palette.secondary.main
              }}
            >
              Copyright &copy; Muhammad Rowaha 2023
            </Typography>
          </Stack>
        </Footer>
      </AppContainer>
    </>
  )
}