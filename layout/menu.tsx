import Link from "next/link";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {styled} from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

interface MenuDrawerProps {
  open : boolean;
  toggleDrawer : (open : boolean) => void;
}

const StyledLink = styled(Link)(({theme}) => ({
  display : "flex",
  flexDirection : "row",
  rowGap : 2,
  justifyContent : "left",
  alignItems : "center",
  width : "100%"
}))

export default function MenuDrawer(props : MenuDrawerProps) {
  const list = () => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={() => props.toggleDrawer(false)}
      onKeyDown={() => props.toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <StyledLink href="/">
            <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItemButton>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink href="/education">
            <ListItemButton>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Education"/>
            </ListItemButton>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink href="/experience">
            <ListItemButton>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Experience"/>
            </ListItemButton>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink href="/skills">
            <ListItemButton>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Skills"/>
            </ListItemButton>
          </StyledLink>
        </ListItem>        
        <ListItem disablePadding>
          <StyledLink href="/projects">
            <ListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary="Projects"/>
            </ListItemButton>
          </StyledLink>
        </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem disablePadding>
            <StyledLink href="/contact">
              <ListItemButton>
                  <ListItemIcon>
                    <ContactSupportIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact Me" />
              </ListItemButton>
            </StyledLink>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="top"
      open={props.open}
      onClose={() => props.toggleDrawer(false)}
    >
      {list()}
    </Drawer>
  )

}