import * as React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import {
  Container,
  Grid,
  Box,
  CircularProgress,
  Typography,
  useTheme,
  Divider,
  Button,
  ButtonGroup
} from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {styled} from "@mui/system";

import { useAtom } from "jotai";
import { titleAtom } from "@/store";

import EmailIcon from '@mui/icons-material/Email';
import { Github, Instagram, LinkedIn } from "@/util/icons";

const BannerDiv = styled("div")(({theme}) => ({
  width : "100%",
  height : "55vh",
  minHeight : "400px",
  background : `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  border : "5px solid black",
  position : "relative",
  display : "flex",
  justifyContent : "center",
  paddingTop : "2rem"
}))

const BannerTitle = styled(Typography)(({theme}) => ({
  fontFamily : "Caveat  ",
  [theme.breakpoints.down("sm")] : {
    fontSize : "20vw"
  },
  letterSpacing : 5,
  color : "#fff"
}))

const ImageContainer = styled(Box)(({theme}) => ({
  width : "30%",
  [theme.breakpoints.down("md")] : {
    width : "45%",
  },
  [theme.breakpoints.down("sm")] : {
    width : "80%"
  },
  maxWidth : "400px",
  aspectRatio : "1 / 1",
  borderRadius : "50%",
  position : "absolute",
  top : "100%",
  left : "50%",
  transform : "translate(-50%, -50%)",
  background : theme.palette.mode === "dark" ? "#313131ff" : "white",
  border : "5px solid black",
  zIndex : 10,
  display : "flex",
  justifyContent : "center",
  alignItems : "center"

}))


const ContentContainerGrid = styled(Grid)(({theme}) => ({
  gap : 275,
  paddingBottom : "5rem",
  [theme.breakpoints.down("sm")] : {
    gap : 250
  }
}))


const StyledImage = styled(Image)(({theme}) => ({
  borderRadius : "50%",
  width : "20%",
  aspectRatio : "1/1",
  objectFit : "cover"
}))


const StyledButtonGroup = styled(ButtonGroup)(({theme}) => ({
  display : "flex",
  justifyContent : "center",
  flexWrap : "wrap"
}))


function HomePage() {

  const theme = useTheme();
  const [pageTitle, setPageTitle] = useAtom(titleAtom);
  const [authorImgLoaded, setAuthorImageLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setPageTitle("Home")
  }, [])

  return (
    <>
    <Head>
      <title>Muhammad Rowaha | Home</title>
    </Head> 

    <Container>
      <ContentContainerGrid container>
        <Grid item xs={24}>
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
              Portfolio
            </BannerTitle>
          </BannerDiv>
        </Grid>
        <Grid item xs={24}>
          <Divider />
          <Typography 
            sx={{
              typography : {
                xs : "h2",
                lg : "h1"
              },
              textAlign : "center"
            }}
            style={{ color : "#313131aa"}}
          >
            Hi, I am
            <span style={{color : theme.palette.secondary.main}}> Muhammad Rowaha</span>
          </Typography>
          <Typography variant="h5" textAlign="center" style={{ color : "#313131aa"}} >
            An enthusiastic full-stack software engineer developing
            solutions for improved efficiency
          </Typography>
          <Typography variant="h5" textAlign="center" style={{color : theme.palette.primary.main}}>
            My Resume
            <br/>
            <Button
              size="small"
              startIcon={<FileDownloadIcon />}
              href="/mrowaha_resume.pdf"
              download="Muhammad_Rowaha_Resume"
            >
              Download
            </Button>
            <Link href="/resume">
              <Button
                size="small"
                startIcon={<VisibilityIcon />}
              >
                View
              </Button>
            </Link>
          </Typography>
          {/* Contact Links */}
          <Divider style={{margin : "1rem 0"}} />
          <Typography variant="body2" textAlign="center"  
            style={{ color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa", marginBottom : 5}}
          >
            Contact Me:
          </Typography>
          
          <StyledButtonGroup variant="text" size="small"> 
            <Button
              href="mailto:ashfaqrowaha@gmail.com"
              sx={{textTransform: "none"}}
              startIcon={<EmailIcon />}
            >
              ashfaqrowaha@gmail.com
            </Button>
            <Button
              href="https://www.linkedin.com/in/mrowaha"
              sx={{textTransform: "none"}}
              startIcon={<LinkedIn fill={theme.palette.primary.main} />}
            >
              www.linkedin.com/in/mrowaha
            </Button>
            <Button
              href="https://www.github.com/mrowaha"
              sx={{textTransform: "none"}}
              startIcon={<Github fill={theme.palette.primary.main} />}
            >
              www.github.com/mrowaha
            </Button>
            <Button
              href="https://www.instagram.com/mrowaha/"
              sx={{textTransform: "none"}}
              startIcon={<Instagram fill={theme.palette.primary.main} />}
            >
              www.instagram.com/mrowaha
            </Button>
          </StyledButtonGroup>

          <Divider style={{margin : "1rem 0"}} />
          <Typography variant="body2" textAlign="center"  
            style={{ color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa", marginBottom : 5}}
          >
            Explore Further:
          </Typography>

          <StyledButtonGroup variant="text" size="small">
            <Button>
              <Link
                href="/education"
              >
                Education
              </Link>
            </Button>
            <Button>
              <Link
                href="/experience"
              >
                Experience
              </Link>
            </Button>
            <Button>
              <Link
                href="/projects"
              >
                Projects
              </Link>
            </Button>
          </StyledButtonGroup>
        </Grid>
      </ContentContainerGrid>
    </Container>
    </>
    
  )
}

interface LoopTitlesProps {
  delay : number;
  titles : string[];
}

function LoopTitles (props : LoopTitlesProps) {

  const theme = useTheme();
  const [currentTextIndex, setCurrentTextIndex] = React.useState<number>(-1);
  const loopTextRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (loopTextRef.current === null) {
      setCurrentTextIndex(0);
      return;
    }

    const titleInterval = setInterval(() => {
      let children = loopTextRef.current?.children!;
      if (currentTextIndex !== -1) {
        children[currentTextIndex].className = ""
      }
      children[(currentTextIndex + 1) % props.titles.length].className = "show";
      setCurrentTextIndex(prev => (prev+1) % props.titles.length)
    }, props.delay)

    return () => clearInterval(titleInterval)
  }, [currentTextIndex, props.delay, props.titles])
  
  return (
    <div ref={loopTextRef} className="loopText">
    {
      React.Children.toArray(
        props.titles.map(title => (
          <Typography variant="h1" 
            style={{
              color : theme.palette.error.main,
              fontFamily : "Caveat",
              textAlign : "center"
            }}
          >
            {title}                  
          </Typography>
        ))  
      )
    }
  </div>
  )
}

export default HomePage;