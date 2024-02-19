import { Typography } from "@mui/material";

export interface TitleProps {
  title : string;
}

export default function Title(props: TitleProps) {
  return (
    <Typography fontSize="2em" className="gradient-text">{props.title}</Typography>
  )
}