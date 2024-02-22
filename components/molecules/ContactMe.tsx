import {
  ButtonGroup,
  Typography,
  Button,
  useTheme
} from "@mui/material";
import {styled} from "@mui/system";

import EmailIcon from '@mui/icons-material/Email';
import { Github, Instagram, LinkedIn } from "@/util/icons";

const StyledButtonGroup = styled(ButtonGroup)(({theme}) => ({
  display : "flex",
  justifyContent : "center",
  flexWrap : "wrap"
}))

export default function ContactMe() {

  const theme = useTheme();

  return (
    <div>
      <Typography variant="body2" textAlign="center"  
        style={{ color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa", marginBottom : 5}}
      >
        Contact Me:
      </Typography>
      
      <StyledButtonGroup variant="text" size="small"> 
        <Button
          href="mailto:ashfaqrowaha@gmail.com"
          sx={{textTransform: "none"}}
          startIcon={<EmailIcon />}
        >
          ashfaqrowaha@gmail.com
        </Button>
        <Button
          href="https://www.linkedin.com/in/mrowaha"
          sx={{textTransform: "none"}}
          startIcon={<LinkedIn fill={theme.palette.primary.main} />}
        >
          www.linkedin.com/in/mrowaha
        </Button>
        <Button
          href="https://www.github.com/mrowaha"
          sx={{textTransform: "none"}}
          startIcon={<Github fill={theme.palette.primary.main} />}
        >
          www.github.com/mrowaha
        </Button>
        <Button
          href="https://www.instagram.com/mrowaha/"
          sx={{textTransform: "none"}}
          startIcon={<Instagram fill={theme.palette.primary.main} />}
        >
          www.instagram.com/mrowaha
        </Button>
      </StyledButtonGroup>
      </div>
  )

}