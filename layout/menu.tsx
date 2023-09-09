import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

interface MenuDrawerProps {
  open : boolean;
  toggleDrawer : (open : boolean) => void;
}


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
          <ListItemButton>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Education"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Experience"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Skills"/>
          </ListItemButton>
        </ListItem>        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="Projects"/>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Me" />
            </ListItemButton>
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