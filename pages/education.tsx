import Head from "next/head";
import * as React from "react";

import {
  Container,
  Stack
} from "@mui/material";

import { useAtom } from "jotai";

import { titleAtom } from "@/store";

function EducationPage() {
   
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
        <Stack direction="column">
          <h1>Hello</h1>
          <h1>World</h1>
        </Stack>
      </Container>
    </>
  )
}

export default EducationPage;