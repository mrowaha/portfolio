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
import Section from "../molecules/Section";
import EducationCard, { EducationCardProps } from "../molecules/EducationCard";

const educations : EducationCardProps[] = [
 {    
      idx: 0,
      coursework: `Operating Systems (C, POSIX),
      Database Systems (SQL), Object Oriented Software
      Engineering (Java, UML), Programming Languages (Lex,
      Yacc), Data Structures and Algorithms (C++, Java), Digital
      Design and Computer Organization (SystemVerilog, MIPS
      Assembly`,
      "from": "Bilkent University, Ankara",
      "highlights": "Full Merit Scholarship Recipient, Honor and High Honor Student",
      "level": "Bachelors in Computer Engineering",
      date: "Sep 2021"
  },
  {
    idx: 1,
    "coursework": "Physics, Chemistry, Mathematics, Computer Science",
    "from": "Lahore Grammer School for Boys, Lahore",
    "highlights": "Full Merit Scholarship Recipient, 4 A*s, Prefect(monitor)",
    "level": "Advanced Level",
    date: "Sep 2019 - June 2021"
  }
]

const StyledCard = styled(Card)(({theme}) => ({
  background : theme.palette.mode === "dark" ? "linear-gradient(#313131ff, #31313144)" : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center"
}))


function EducationPage() {
  
  const theme = useTheme();
  const sectionRef = React.useRef();

  return (
    <Section
      id="education"
      title="Education"
      ref={sectionRef}
    >
        <Grid container gap={2} justifyContent="center">
          {
            React.Children.toArray(
              educations.map((props) => {
                return (
                  <Grid item xs={24}>
                    <EducationCard {...props} />
                  </Grid> 
                )
              })
            )
          }
        </Grid>
    </Section>
  )
}

export default EducationPage;