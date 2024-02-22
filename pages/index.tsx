import * as React from "react";
import Head from "next/head";

import {
  Container,
  Grid,
  useTheme,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import {styled} from "@mui/system";


import Banner from "@/components/molecules/Banner";
import Intro from "@/components/molecules/Intro";
import ExperiencePage from "@/components/sections/Experience";
import EducationPage from "@/components/sections/Education";
import ProjectsPage from "@/components/sections/Projects";


const ContentContainerGrid = styled(Grid)(({theme}) => ({
  paddingBottom : "5rem"
}))

function HomePage() {

  const theme = useTheme();
  const [introMarginTop, setIntroMarginTop] = React.useState("200px");

  const handleResize = React.useCallback((height: number) => {
    setIntroMarginTop(`${(height / 2) + 20}px`)
  }, []);

  return (
    <>
    <Head>
      <title>Muhammad Rowaha | Home</title>
    </Head> 

    <Container>
      <ContentContainerGrid container>
        <Grid item xs={24}>
          <Banner
            onResize={handleResize}
          />
        </Grid>
        <Grid item xs={24} sx={{marginTop: introMarginTop}}>
          <Divider />
          <Intro />
          <Divider />
          <Paper elevation={20} sx={{marginTop: "2rem", padding: "1rem"}}>
            <ExperiencePage />
            <EducationPage />
            <ProjectsPage />
          </Paper>
        </Grid>
      </ContentContainerGrid>
    </Container>
    </>
    
  )
}

export default HomePage;