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
  Chip,
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


interface Project {
  description : string;
  name : string;
  stack : string[];
}

function ProjectsPage(props : Project[]) {
  console.log(props);
  const theme = useTheme();
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Projects")
  }, [])

  return (
    <>
      <Head>
        <title>Muhammad Rowaha | Projects</title>
      </Head>

      <Container>
        <Grid container gap={2} justifyContent="center">
          {
            React.Children.toArray(
              Object.entries(props).map(([key, value]) => {
                return (
                  <Grid item xs={12} md={5}>
                    <StyledCard>
                      <div style={{width : "100%", display : "flex", justifyContent : "center"}}>
                        <Image 
                          src={`/projects/${key}.png`}
                          alt="project logo"
                          width={140}
                          height={140}
                          style={{border : `3px solid ${theme.palette.secondary.main}`}}
                        />               
                      </div>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="primary" textAlign="center">
                          {value.name}
                        </Typography>
                        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} >
                          <span style={{fontWeight : "bold"}}>Description: </span>{value.description}
                        </Typography>
                        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa", fontWeight : "bold"}} component="span">
                          Stack:
                        </Typography>
                        {
                          React.Children.toArray(
                            value.stack.map(tool => <Chip label={tool} color="error" style={{margin : "0.1rem"}} variant="outlined"/>)
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
  const res = await fetch("https://mrowaha-portfolio-default-rtdb.firebaseio.com/projects.json")
  const data = await res.json();

  const arr = Object.entries(data).map(([key, value]) => value)
  return {
    props : {...arr},
    revalidate : 60 * 60 * 24
  }
}

export default ProjectsPage;