import * as React from "react";
import Image from "next/image";
import Head from "next/head";


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
import {styled} from "@mui/system";

const BannerDiv = styled("div")(({theme}) => ({
  width : "100%",
  height : "55vh",
  minHeight : "400px",
  background : theme.palette.mode === "dark" ? "linear-gradient(#313131ff, #31313144)" : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff",
  position : "relative",
  display : "flex",
  justifyContent : "center",
  paddingTop : "2rem"
}))

const ContentContainer = styled(Grid)(({theme}) => ({
  gap : 275,
  paddingBottom : "5rem",
  [theme.breakpoints.down("sm")] : {
    gap : 250
  }
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

const StyledButtonGroup = styled(ButtonGroup)(({theme}) => ({
  display : "flex",
  justifyContent : "center",
  flexWrap : "wrap"
}))

const letters = ["P", "o", "r", "t", "f", "o","l","i","o", ""]


function HomePage() {

  const theme = useTheme();
  const [authorImgLoaded, setAuthorImageLoaded] = React.useState<boolean>(false);
  const [titleLetters, setTitleLetters] = React.useState<number>(-1);
  let title = "";
  for (let i = 0; i < titleLetters; i++) {
    title += letters[i];
  }

  React.useEffect(() => {
    if (titleLetters === letters.length-1) return;
    setTimeout(() => {
      if (titleLetters === letters.length) return;
      setTitleLetters(prev => (prev+1) % letters.length)
    }, 250)
  }, [titleLetters])



  return (
    <>
    <Head>
      <title>Muhammad Rowaha | Home</title>
    </Head> 

    <Container>
      <ContentContainer container>
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
              {title}
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
            style={{ color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa"}}
          >
            Hi, I am
            <span style={{color : theme.palette.secondary.main}}> Muhammad Rowaha,</span>
          </Typography>
          <Typography
            variant="h2"
            textAlign="center"
            style={{ color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa"}}
          >
            an expert in
          </Typography>
          <LoopTitles 
            delay={1500}
            titles={["Software Engineering", "Computer Science", "Full Stack Development"]}
          />
          <Typography variant="h5" textAlign="center" style={{ color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa"}} >
            I am an enthusiastic B.Sc Computer Engineering Student with strong academic, co-curricular achievements and industrial experience. 
            <Button
              variant="text"
              startIcon={<FileDownloadIcon />}
              href="/mrowaha_resume.pdf"
              download="Muhammad_Rowaha_Resume"
            >
              View My Resume
            </Button>
          </Typography>
          <Divider style={{margin : "1rem 0"}} />
          <Typography variant="body2" textAlign="center"  
            style={{ color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa", marginBottom : 5}}
          >
            Helpful Links:
          </Typography>

          <StyledButtonGroup variant="text" size="small">
            <Button>
              Education
            </Button>
            <Button>
              Experience
            </Button>
            <Button>
              Skills
            </Button>
            <Button>
              Projects
            </Button>
            <Button>
              Contact
            </Button>
          </StyledButtonGroup>
        </Grid>
      </ContentContainer>
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