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

const StyledCard = styled(Stack)(({theme}) => ({
  background : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border :"2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center",
  width: "100%",
  // @ts-ignore
  alignItems: "flex-start"
}))

export interface ExperienceCardProps {
  img: number;
  role: string;
  company: string;
  date: string;
  work: string[];
}


export default function ExperienceCard(props: ExperienceCardProps) {
  
  const theme = useTheme();

  return (
    <StyledCard direction={{ sm: 'column', md: 'row' }} gap={2} divider={<Divider orientation="vertical" flexItem />}>
      <Box sx={{
        display: {xs : "flex", md: "block"}, 
        justifyContent: {xs: "center"}, 
        width: {xs: "100%", md: "auto"}
      }}>
        <Image 
          src={`/experience/${props.img}.png`}
          alt="experience logo"
          width={140}
          height={140}
          style={{border : `3px solid ${theme.palette.secondary.main}`, borderRadius: "10px", margin: "0 auto"}}
        />               
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
          {props.role}
        </Typography>
        <Typography style={{color : theme.palette.secondary.main, textTransform: "uppercase", fontWeight: "bold"}} >
          {props.company}
        </Typography>
        <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} >
          {props.date}
        </Typography>
        <Accordion sx={{background: "linear-gradient(90deg, #690169, #d6023b)"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{fill: "#fff"}}/>}
          >
          <Typography variant="h6" sx={{color: "#fff"}}>Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {
                React.Children.toArray(
                  props.work.map(work => 
                  <ListItem>
                    <ListItemText 
                      primary={<Typography color="#fff">{work}</Typography>}
                    />
                  </ListItem>)
                )
              }
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </StyledCard>
  )
}