import * as React from "react";
import Link from "next/link";

import {
  Typography,
  Stack,
  useTheme,
  Divider,
  Accordion,
  Box,
  Badge
} from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from "@mui/system";
import { DomainImage } from "./DomainImage";
import LaunchIcon from '@mui/icons-material/Launch';
const StyledCard = styled(Stack)(({theme}) => ({
  background : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border :"2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center",
  width: "100%",
  // @ts-ignore
  alignItems: "flex-start"
}))

export interface ProjectCardProps {
  description : string;
  name : string;
  stack : string[];
  idx: number;
  link: {name : string, href: string}[];
}
export default function ProjectCard(props: ProjectCardProps) {
  
  const theme = useTheme();

  return (
    <StyledCard direction={{ sm: 'column', md: 'row' }} gap={2} divider={<Divider orientation="vertical" flexItem />}>
      <Box sx={{
        display: {xs : "flex", md: "block"}, 
        justifyContent: {xs: "center"}, 
        width: {xs: "100%", md: "auto"},
      }}>
        <Box sx={{width: {xs: "70%", md: 140}, aspectRatio: {xs: "16 / 9", md: "1 / 1"}}}>
          <DomainImage 
            src={`/projects/${props.idx}.png`}
            alt='education logo'
          />
        </Box>  
      </Box>
      <Box sx={{
        flexGrow: 1,
        display: {xs : "flex", md: "block"}, 
        justifyContent: {xs: "center"},
        alignItems: {xs: "center"},
        flexDirection: {xs: "column"}, 
        width: {xs: "100%", md: "auto"}
      }}>
        <Typography gutterBottom variant="h5" color="primary" textAlign="center" sx={{width: "fit-content"}}>
          {props.name}
        </Typography>
        {
          props.link.map(({name, href}) => (
            <span style={{marginRight: "0.75rem"}}>
              <Link
                href={href}
              >
                <Badge
                  badgeContent={<LaunchIcon fontSize="small"/>}
                >
                  <Typography>{name}</Typography>
                </Badge>
              </Link>
            </span>
          ))
        }

        <Accordion sx={{background: "linear-gradient(90deg, #690169, #d6023b)", width: "100%"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{fill: "#fff"}}/>}
          >
          <Typography variant="h6" sx={{color: "#fff"}}>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="#fff">
              {props.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{background: "linear-gradient(90deg, #690169, #d6023b)", width: "100%"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{fill: "#fff"}}/>}
          >
          <Typography variant="h6" sx={{color: "#fff"}}>Stack</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="#fff">
              {props.stack.join(", ")}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </StyledCard>
  )
}