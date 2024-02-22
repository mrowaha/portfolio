import Link from "next/link";
import {
  Typography,
  Button,
  useTheme
} from "@mui/material";

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Intro() {

  const theme = useTheme();

  return (
    <>
      <Typography
        sx={{
          typography : {
            xs: "h4",
            sm : "h3",
            lg : "h2"
          },
          textAlign : "center"
        }}
        style={{ color : "#313131aa"}}
      >
        Hi, I am
        <span style={{color : theme.palette.secondary.main}}> Muhammad Rowaha</span>
      </Typography>
    
      <Typography sx={{
        typography : {
          xs: "body1",
          sm : "h6",
          lg : "h5"
        },
      }} textAlign="center" style={{ color : "#313131aa"}} >
        An enthusiastic full-stack software engineer developing
        solutions for improved efficiency
      </Typography>

      <Typography sx={{
        typography : {
          xs: "body1",
          sm : "h6",
          lg : "h5"
        },
      }} textAlign="center" style={{color : theme.palette.primary.main}}>
          My Resume
          <br/>
          <Button
            size="small"
            startIcon={<FileDownloadIcon />}
            href="/mrowaha_resume.pdf"
            download="Muhammad_Rowaha_Resume"
          >
            Download
          </Button>

        <Link href="/resume">
          <Button
            size="small"
            startIcon={<VisibilityIcon />}
          >
            View
          </Button>
        </Link>
      </Typography>
    </>
  )
}