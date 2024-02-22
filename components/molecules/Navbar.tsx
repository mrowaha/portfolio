import * as React from "react";
import { AppBar, Avatar, IconButton, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/system";
import PortfolioMenu from "./PortfolioMenu";

const NavbarContainer = styled(AppBar)(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "0.25rem",
  background: "linear-gradient(90deg, #fff 0%, #d6023b 75% , #690169)",
}))

export interface NavbarProps {
  logo: string;
  title: string;
}

function Navbar(props : NavbarProps, appBarRef : any) {

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);


  return (
    <NavbarContainer ref={appBarRef}>
      <div style={{display: "flex", alignItems: "flex-end", gap : 2}}>
        <Avatar 
          src={props.logo}
          sx={{
            borderRadius: 0
          }}
        />
        <Typography variant="body2" sx={{fontWeight: "bold", color: theme.palette.secondary.main, letterSpacing: 5}}>
          {props.title}
        </Typography>
      </div>
      <IconButton 
        onClick={handleClick}
        size="small"
        sx={{
          border: "1px solid #D3D3D3",
          borderRadius: "10px"
        }}
      >
        <MenuIcon style={{fill : "#D3D3D3"}} />
      </IconButton>
      
      <PortfolioMenu 
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </NavbarContainer>
  )
}

export default React.forwardRef(Navbar);