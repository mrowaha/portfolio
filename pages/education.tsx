import Head from "next/head";
import Image from "next/image";
import * as React from "react";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme
} from "@mui/material";
import {styled} from "@mui/material";

import { useAtom } from "jotai";

import { titleAtom } from "@/store";

interface Education {
  level : string;
  highlights : string;
  coursework : string;
  from : string;
}

const StyledCard = styled(Card)(({theme}) => ({
  background : theme.palette.mode === "dark" ? "linear-gradient(#313131ff, #31313144)" : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center"
}))


function EducationPage(props : Education[]) {
  
  const theme = useTheme();
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Education")
  }, [])
  
  return (
    <>
      <Head>
        <title>Muhammad Rowaha | Education</title>
      </Head>

      <Container>
        <Grid container gap={2} justifyContent="center">
          {
            React.Children.toArray(
              Object.entries(props).map(([key, value]) => {
                console.log(value);
                return (
                  <Grid item xs={12} md={5}>
                    <StyledCard>
                      <div style={{width : "100%", display : "flex", justifyContent : "center"}}>
                        <Image 
                          src={`/education/${key}.png`}
                          alt="education logo"
                          width={140}
                          height={140}
                        />               
                      </div>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} textAlign="center">
                          {value.level}
                        </Typography>
                        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} >
                          <span style={{fontWeight : "bold"}}>From: </span>{value.from}
                        </Typography>
                        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} >
                          <span style={{fontWeight : "bold"}}>Highlights: </span>{value.highlights}
                        </Typography>
                        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} >
                          <span style={{fontWeight : "bold"}}>Coursework: </span>{value.coursework}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                )
              })
            )
          }
        </Grid>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://mrowaha-portfolio-default-rtdb.firebaseio.com/education.json");
  const data = await res.json();

  const arr = Object.entries(data).map(([key, value]) => value)
  return {
    props : {...arr},
    revalidate : 60 * 60 * 24
  }
}

export default EducationPage;