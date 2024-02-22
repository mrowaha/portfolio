import * as React from "react";
import {
  Menu
} from "@mui/material";

import PortfolioMenuItem, {MenuItemProps} from "../atoms/PortfolioMenuItem";

export interface PortfolioMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void | Promise<void>;
}

const menus : MenuItemProps[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Experience",
    href: "#experience"
  },
  {
    title: "Education",
    href: "#education"
  },
  {
    title: "Projects",
    href: "#projects"
  }
]

export default function PortfolioMenu(props: PortfolioMenuProps) {

  const open = Boolean(props.anchorEl);
  const menuItems = React.useMemo(() => {
    return menus.map((itemProps, idx) => <PortfolioMenuItem key={idx} onClick={props.onClose} {...itemProps} />)
  }, []);

  return (
      <Menu
        anchorEl={props.anchorEl}
        open={open}
        onClose={props.onClose}
      >
        {React.Children.toArray(menuItems)}
      </Menu>    
  )
}