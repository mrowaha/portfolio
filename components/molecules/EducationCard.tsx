import * as React from "react";
import Image from "next/image";

import {
  Typography,
  Stack,
  useTheme,
  Divider,
  Accordion,
  List,
  ListItem,
  ListItemText,
  Box
} from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from "@mui/system";
import { DomainImage } from "./DomainImage";

const StyledCard = styled(Stack)(({theme}) => ({
  background : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border :"2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center",
  width: "100%",
  // @ts-ignore
  alignItems: "flex-start"
}))

export interface EducationCardProps {
  level : string;
  highlights : string;
  coursework : string;
  from : string; 
  date: string;
  idx: number;
}

export default function EducationCard(props: EducationCardProps) {
  
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
            src={`/education/${props.idx}.png`}
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
          {props.level}
        </Typography>
        <Typography style={{color : theme.palette.secondary.main, textTransform: "uppercase", fontWeight: "bold"}} >
          {props.from}
        </Typography>
        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} >
          {props.date}
        </Typography>
        <Accordion sx={{background: "linear-gradient(90deg, #690169, #d6023b)"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{fill: "#fff"}}/>}
          >
          <Typography variant="h6" sx={{color: "#fff"}}>Coursework</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="#fff">
              {props.coursework}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{background: "linear-gradient(90deg, #690169, #d6023b)", width: "100%"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{fill: "#fff"}}/>}
          >
          <Typography variant="h6" sx={{color: "#fff"}}>Highlights</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="#fff">
              {props.highlights}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </StyledCard>
  )
}