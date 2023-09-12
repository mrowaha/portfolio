import Head from "next/head";
import Image from "next/image";

import * as React from "react";
import { useAtom } from "jotai";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Alert,
  useTheme
} from "@mui/material";
import {styled} from "@mui/material";

import { titleAtom } from "@/store";

const StyledCard = styled(Card)(({theme}) => ({
  background : theme.palette.mode === "dark" ? "linear-gradient(#313131ff, #31313144)" : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center"
}))

interface Experience {
  company : string;
  role : string;
  work : string[];
}

function ExperiencePage (props : Experience[]) {

  console.log(props);
  const theme = useTheme();
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Experience")
  }, [])
  

  return (
    <>
      <Head>
        <title>Muhammad Rowaha | Experience</title>
      </Head>

      <Container >
        <Alert severity="warning" sx={{width : {md : "30%"},  marginBottom : 2}}>View Resume/LinkedIn For More Details</Alert>
        <Grid container gap={2} justifyContent="center">
          {
            React.Children.toArray(
              Object.entries(props).map(([key, value]) => {
                return (
                  <Grid item xs={12} md={5}>
                    <StyledCard>
                      <div style={{width : "100%", display : "flex", justifyContent : "center"}}>
                        <Image 
                          src={`/experience/${key}.png`}
                          alt="experience logo"
                          width={140}
                          height={140}
                          style={{border : `3px solid ${theme.palette.secondary.main}`}}
                        />               
                      </div>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="primary" textAlign="center">
                          {value.role}
                        </Typography>
                        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} >
                          <span style={{fontWeight : "bold"}} >At: </span>{value.company}
                        </Typography>
                        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} fontWeight="bold">
                          Work:
                        </Typography>
                        {
                          React.Children.toArray(
                            value.work.map(workStr => (
                              <Typography variant="body2">
                                - {workStr}
                              </Typography>
                            ))                            
                          )
                        }
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
  const res = await fetch("https://mrowaha-portfolio-default-rtdb.firebaseio.com/experience.json");
  const data = await res.json();

  const arr = Object.entries(data).map(([key, value]) => value)
  return {
    props : {...arr},
    revalidate : 60 * 60 * 24
  }
}

export default ExperiencePage;