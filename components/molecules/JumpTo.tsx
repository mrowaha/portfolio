import Link from "next/link";
import {
  Typography,
  Button,
  useTheme,
  ButtonGroup
} from "@mui/material";
import {styled} from "@mui/system";
 
const StyledButtonGroup = styled(ButtonGroup)(({theme}) => ({
  display : "flex",
  justifyContent : "center",
  flexWrap : "wrap"
}))

export default function JumpTo() {

  const theme = useTheme();

  return (
    <div>
      <Typography variant="body2" textAlign="center"  
            style={{ color : theme.palette.mode === "dark" ? "#dfdfdfff" : "#313131aa", marginBottom : 5}}
          >
            Jump To:
          </Typography>

          <StyledButtonGroup variant="text" size="small">
            <Button>
              <Link
                href="/education"
              >
                Education
              </Link>
            </Button>
            <Button>
              <Link
                href="/experience"
              >
                Experience
              </Link>
            </Button>
            <Button>
              <Link
                href="/projects"
              >
                Projects
              </Link>
            </Button>
          </StyledButtonGroup>
    </div>
  )
}