import { Typography } from "@mui/material";

export interface TitleProps {
  title : string;
  type?: "normal" | "small";
}

export default function Title(props: TitleProps) {
  return (
    <Typography sx={{
      typography: {
        xs: "h6",
        sm: "h5",
        md: "h4"
      }
    }} className={
      props.type ? props.type === "normal" ? "gradient-text"
      : "gradient-text-small"
      : "gradient-text" 
    }
    textAlign="center"
    >{props.title}</Typography>
  )
}