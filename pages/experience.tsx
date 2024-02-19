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
import Title from "@/components/atoms/Title";

const experiences : ExperienceCardProps[] = [
  {
    img: 0,
    company: "Layermark",
    role: "Software Developer",
    date: "April 2023 - Feb 2024",
    work: [
      "Developed user interfaces with DevExtreme and AntDesign for  web  and  native  applications  meeting  specific industrial settings.",
      "Developed Python modules-Opencv video processing, pdfgeneration, Yolov5 ai models, and WebSockets APIs-for versatile usage in different apps.",
      "Used native Browser APIs to develop a framework agnostic abstraction over Tensorflow & ONNX AI components for use in different projects such as face-recognition and OCR.",
      "Built  in-house  library  providing adapters for React'scomponent state to Bpmn-js XML generation.",
      "Implemented a plugin architecture  for  extending  component  state's and creating new Bpmn elements"
    ]
  },
  {
    img: 1,
    company: "Layermark",
    role: "Application Developer",
    date: "Jan 2023 - April 2023",
    work: [
      "Responsible  for documenting and researching areas  of improvement in an existing MFC-based app.",
      "Replaced  a CNTK-based AI  model  with  a Yolov5-based one, and employed IPC abstractions, named pipes, sockets,and  process  forking,  for seamless yet loosely  coupled integration.",
      "Implemented TOML-based app configurations-user specificand  default-for  more user-friendly and personalized experience.",
      "Wrote GUI module extensions using Tkinter, andintegrated Strategies (ZMQ, Boost ASIO) for reusable andscalable Python modules"
    ]
  },
  {
    img: 2,
    company: "Otsimo",
    role: "Full Stack Developer",
    date: "June 2023 - August 2023",
    work: [
      "Implemented  a  Go  &  gRPC microservice  for  migrating  an existing file-based ticket system to MongoDB.",
      "Crafted a command-line migration tool for seamless transition while preserving backward compatibility.",
      "Created  an  admin  frontend  using  React, MUI,  and  Redux, adhering to established designs for a cohesive user experience."
    ]
  }
]

function ExperiencePage () {

  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  const experienceCards = React.useMemo(() => {
    return experiences.map((itemProps) => 
      <Grid item xs={12}>
        <ExperienceCard {...itemProps} key={0} />
      </Grid>
    )
  }, []);

  React.useEffect(() => {
    setPageTitle("Experience")
  }, [])
  
  return (
    <>
      <Head>
        <title>Muhammad Rowaha | Experience</title>
      </Head>

        <Title 
          title="Experience"
        />
        <Grid container gap={2} justifyContent="center">
          {React.Children.toArray(experienceCards)}
        </Grid>
    </>
  )
}

export default ExperiencePage;