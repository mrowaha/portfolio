import Link from "next/link";
import * as React from "react";
import { createPortal } from "react-dom";
import { 
  Fab,
  useTheme
} from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';

import {motion,} from "framer-motion";
import { LinkedIn } from "@/util/icons";
import { GitHub } from "@mui/icons-material";

export default function Contact() {

  const theme = useTheme();
  const constraintsRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <>
      {
      createPortal(
        <motion.div
          ref={constraintsRef}
          style={{
            position : "fixed",
            bottom : 0,
            top : 0,
            left : 0,
            display : "flex",
            alignItems : "end",
            zIndex : 999
          }}
        >
          <motion.div 
            drag="y"
            dragConstraints={constraintsRef}          
            initial={{
              padding : "5px",
              backgroundColor : theme.palette.mode === "dark" ? "#ffffff22" : "#31313155",
              borderTopRightRadius : "20px",
              borderBottomRightRadius : "20px",
              marginBottom : 10,
              display : "flex",
              flexDirection : "column",
              gap : 4
            }}
          > 
          <Link href="https://github.com/mrowaha">
              <Fab size="small" color="secondary">
                <GitHub fill="#fff" />
              </Fab>
          </Link>
          <Link href="https://www.linkedin.com/in/mrowaha/">
            <Fab size="small" color="secondary">
              <LinkedIn fill="#fff"/>
            </Fab>
          </Link>
        </motion.div>
      </motion.div>,
      document.getElementById("contact-portal")!
      )}
    </>
  )
}