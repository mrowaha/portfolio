import Image from "next/image";
import React from "react";

import {
  CircularProgress
} from "@mui/material";
import {styled} from "@mui/material";

interface DomainImageStyles {
  background? : string;
  border? : string;
}

export interface DomainImageProps extends DomainImageStyles {
  src : string;
  alt : string;
  progressSize? : number;
  progressThickness? : number;
  circle? : boolean;
}

// /** @ts-ignore */
const StyledImage = styled(Image)<{circle? : boolean}>((props) => ({
  width : "100%",
  height : "100%",
  borderRadius : props.circle ? "50%" : "none"
}))

export function DomainImage(props : DomainImageProps) {


  return (
    <>
      <StyledImage
        alt={props.alt}
        src={props.src}
        width={0}
        height={0}
        sizes="100vw"
        circle={props.circle}
      />
    </>
  )
}