import Image from "next/image";

import {
  Card,
  CardContent,
  Typography,
  useTheme
} from "@mui/material";
import {styled} from "@mui/system";

const StyledCard = styled(Card)(({theme}) => ({
  background : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border :"2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center"
}))

export interface ExperienceCardProps {
  img: number;
  role: string;
  company: string;
}


export default function ExperienceCard(props: ExperienceCardProps) {
  
  const theme = useTheme();

  return (
  <StyledCard>
    <div style={{width : "100%", display : "flex", justifyContent : "center"}}>
      <Image 
        src={`/experience/${props.img}.png`}
        alt="experience logo"
        width={140}
        height={140}
        style={{border : `3px solid ${theme.palette.secondary.main}`}}
      />               
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" color="primary" textAlign="center">
        {props.role}
      </Typography>
      <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} >
        <span style={{fontWeight : "bold"}} >At: </span>{props.company}
      </Typography>
      <Typography style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} fontWeight="bold">
        Work:
      </Typography>
    </CardContent>
  </StyledCard>
  )
}