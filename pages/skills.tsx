import Head from "next/head";

import * as React from "react";
import { useAtom } from "jotai";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";
import {styled} from "@mui/material";


import { titleAtom } from "@/store";

const StyledCard = styled(Card)(({theme}) => ({
  background : theme.palette.mode === "dark" ? "linear-gradient(#313131ff, #31313144)" : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center",
  height : 350,
  overflowY : "scroll"
}))


interface Skill {
  type : string;
  stack : string[];
}

function SkillsPage(props : Skill[]) {

  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Skills")
  }, [])
  
  return (
    <>
      <Head>
        <title>Muhammad Rowaha | Skills</title>
      </Head>    

      <Container>
        <Grid container gap={2} justifyContent="center">
          {
            React.Children.toArray(
              Object.entries(props).map(([key, value]) => {
                return (
                  <Grid item xs={12} md={5}>
                    <StyledCard>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="primary" textAlign="center">
                          {value.type}
                        </Typography>
                        <div style={{display : "flex", flexDirection : "column", alignItems : "center", gap : 5}}>
                          {
                            React.Children.toArray(
                              value.stack.map(tool => <Chip label={tool} color="error" variant="outlined"  />)
                            )
                          }
                        </div>
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
  const res = await fetch("https://mrowaha-portfolio-default-rtdb.firebaseio.com/skills.json");
  const data = await res.json();

  const arr = Object.entries(data).map(([key, value]) => value)
  return {
    props : {...arr},
    revalidate : 60 * 60 * 24
  }
}


export default SkillsPage;