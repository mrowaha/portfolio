import Head from "next/head";

import * as React from "react";
import { useAtom } from "jotai";

import {
  Container,
  Grid,
  useTheme
} from "@mui/material";

import { titleAtom } from "@/store";
import ExperienceCard, {ExperienceCardProps} from "@/components/molecules/ExperienceCard";

const experiences : ExperienceCardProps[] = [
  {
    img: 0,
    company: "Layermark",
    role: "Software Developer"
  }
]

function ExperiencePage () {

  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  const experienceCards = React.useMemo(() => {
    return experiences.map((itemProps) => <ExperienceCard {...itemProps} key={0} />)
  }, []);

  React.useEffect(() => {
    setPageTitle("Experience")
  }, [])
  
  return (
    <>
      <Head>
        <title>Muhammad Rowaha | Experience</title>
      </Head>

      <Container >
        <Grid container gap={2} justifyContent="center">
          {experienceCards }
        </Grid>
      </Container>
    </>
  )
}

export default ExperiencePage;