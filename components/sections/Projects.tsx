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
import ProjectCard, { ProjectCardProps } from "../molecules/ProjectCard";
import Section from "../molecules/Section";


const projects : ProjectCardProps[] = [
    {
      description: `Conducted requirements elicitation with Figma mockups and UML
      diagrams such as Activity & Class Diagrams.
      Developed a robust, containerized backend with an object store for media
      & a secure app protected with multiple JWT signing keys and API keys.
      Developed both admin & user apps following best practices of API layers,
      customs hooks, stage management, & auth`,
      name: "Campus Connect",
      stack: ["Java", "Spring", "Typescript", "Nextjs", "PostreSQL", "TurboRepo", "MinIO", "Docker"],
      idx: 3,
      link: [
        {name: "Backend Repository", href: "https://github.com/mrowaha/CampusConnect.api"},
        {name: "Frontend Repository", href: "https://github.com/mrowaha/CampusConnect.web"}
      ]
    },
    {
      description: `Developed an app for art enthusiasts to host art auctions, webinars, art
      wishlists & collections.
      The highlight of the project is a basic custom ORM for the backend to
      support triggers, views, aggregations, & models from abstract base classes`,
      name: "Bilart",
      stack: ["Python", "Typescript", "Nextjs", "FastAPI", "PostgreSQL"],
      idx: 4,
      link: [
        {name: "Mono Repository", href: "https://github.com/mrowaha/bilart"}
      ]
    },
    {
      description: `Created a framework agnostic tree animator with support including drag,
      zoom, scroll, & snapshot into JSON, with no third-party libraries`,
      name: "N-Children Tree Animator",
      stack : ["Typescript", "CSS", "Nextjs"],
      idx: 5,
      link: [
        {name: "Try it out", href: "https://categories-iota.vercel.app/"},
        {name: "Repository", href: "https://github.com/mrowaha/n-children-tree-animator"}
      ]
    },
    {
        "description": `Developed an Android application to record lectures and access them as
        text, share or edit them. Highlights of the project is no external third party
        library, custom protocol over TCP sockets, multithreaded custom server
        and an object store supporting binary files`,
        "name": "Notes Muscle",
        "stack": [
            "Java",
            "JDBC",
            "Swing",
            "MySQL",
            "Android",
            "XML"
        ],
        idx: 0,
        link: [{name: "Server Code", href: "https://github.com/mrowaha/notes-muscle-server"}, {name: "App Code", href: "https://github.com/mrowaha/notes-muscle-client"}]
    },
    {
        "description": "Designed and implemented a canonical MIPS pipelined programmable processor implemented on Basys-3 FPGA Board. The project is akin to a simple virtual machine. Completed as a course project for Digital Design",
        "name": "MIPS Pipelined Processor",
        "stack": [
            "SystemVerilog",
            "MIPS",
            "Basys3",
            "FPGA"
        ],
        idx: 1,
        link: [{name: "Vivado Solution", href: "https://github.com/mrowaha/mips-pipelined-processor"}]
    }, 
    {
        "description": "Designed and implemented a portfolio website with Nextjs and MUI components. Built an easily maintainable and scalable system using incremental static generation and Firebase real-time database. Also included features such as responsiveness, in-app pdf viewing, and custom emailing service",
        "name": "Portfolio",
        "stack": [
            "Nextjs",
            "MUI",
            "Framer-Motion",
            "Jotai",
            "Firebase",
            "Vercel"
        ],
        idx: 2,
        link: [{name: "Nextjs Application", href: "https://github.com/mrowaha/portfolio"}]
    }
]

function ProjectsPage() {

  const theme = useTheme();
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  const sectionRef = React.useRef();

  return (
    <Section
      id="projects"
      title="Projects"
      ref={sectionRef}
    >
      <Container>
        <Grid container gap={2} justifyContent="center">
          {
            React.Children.toArray(
              projects.map(props => (
                <Grid item xs={24}>
                  <ProjectCard {...props} />
                </Grid>
              )) 
            )
          }
        </Grid>
      </Container>
    </Section>
  )
}

export default ProjectsPage;