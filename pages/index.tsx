import * as React from "react";
import Image from "next/image";
import Head from "next/head";

import {
  Container,
  Grid,
  Box,
  CircularProgress,
  Typography
} from "@mui/material";

import {styled} from "@mui/system";
import {motion} from "framer-motion";

const BannerDiv = styled("div")(({theme}) => ({
  width : "100%",
  height : "55vh",
  minHeight : "250px",
  background : theme.palette.mode === "dark" ? "linear-gradient(#313131ff, #31313100)" : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff",
  position : "relative",
  display : "flex",
  justifyContent : "center",
  paddingTop : "2rem"
}))

const ImageContainer = styled(Box)(({theme}) => ({
  width : "30%",
  [theme.breakpoints.down("md")] : {
    width : "80%",
  },
  maxWidth : "400px",
  aspectRatio : "1 / 1",
  borderRadius : "50%",
  position : "absolute",
  top : "100%",
  left : "50%",
  transform : "translate(-50%, -50%)",
  background : theme.palette.mode === "dark" ? "#313131ff" : "white",
  border : theme.palette.mode === "dark" ? "6px solid #dfdfdfff" : "6px solid #313131aa",
  zIndex : 10,
  display : "flex",
  justifyContent : "center",
  alignItems : "center"
}))

const StyledImage = styled(Image)(({theme}) => ({
  borderRadius : "50%",
  width : "20%",
  aspectRatio : "1/1",
  objectFit : "cover"
}))

const BannerTitle = styled(Typography)(({theme}) => ({
  fontFamily : "Caveat",
  [theme.breakpoints.down("sm")] : {
    fontSize : "20vw"
  },
  letterSpacing : 5,
  color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa"
}))

const letters = ["P", "o", "r", "t", "f", "o","l","i","o"]

function HomePage() {

  const [authorImgLoaded, setAuthorImageLoaded] = React.useState<boolean>(false);
  const [titleLetters, setTitleLetters] = React.useState<number>(-1);
  let title = "";
  for (let i = 0; i < titleLetters; i++) {
    title += letters[i];
  }

  React.useEffect(() => {
    setTimeout(() => {
      if (titleLetters === letters.length) return;
      setTitleLetters(prev => prev+1)
    }, 250)
  }, [titleLetters])

  return (
    <>
    <Head>
      <title>Muhammad Rowaha | Home</title>
    </Head>
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <BannerDiv>
            <ImageContainer>
              <StyledImage 
                fill
                src="/rowaha_banner.jpg"
                alt="author image"
                onLoadingComplete={() => setAuthorImageLoaded(true)}
                sx={{
                  opacity: authorImgLoaded ? 1 : 0,
                  transitionDuration: "2000ms",
                  transitionProperty: "opacity",
                  transitionTimingFunction: "ease-out",
                }}
              />
              {!authorImgLoaded &&
                <CircularProgress 
                  size={80}
                  thickness={3}
                  color="secondary"
                />
              }
            </ImageContainer>
            <BannerTitle variant="h1">
              {title}
            </BannerTitle>
          </BannerDiv>
        </Grid>
      </Grid>
    </Container>
    </>
    
  )
}

export default HomePage;