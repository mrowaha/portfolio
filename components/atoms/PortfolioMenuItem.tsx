import Link from "next/link";
import { MenuItem, Button, Typography } from "@mui/material";

export interface MenuItemProps{
  title: string;
  href: string;
  onClick?: () => void | Promise<void>;  
}

export default function PortfolioMenuItem(props: MenuItemProps) {
  return (
    <MenuItem sx={{padding: 0}}>
      <Link href={props.href}>
        <Button
          size="small"
          sx={{
            textTransform: "none", 
            margin: 0, 
            paddingLeft: "10px", 
            display: "flex", 
            justifyContent: "left", 
            width: "100%"
          }}
        >
          <Typography className="gradient-text">
            {props.title}
          </Typography>
        </Button>
      </Link>
    </MenuItem>
  )
}