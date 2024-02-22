import * as React from "react";
import Title, { TitleProps } from "../atoms/Title";
import { useTheme } from "@mui/material";
import { useAtom } from "jotai";
import { paddingTopAtom } from "@/store";

export interface SectionProps extends TitleProps, React.PropsWithChildren{
  id: string;
}
 
function Section({children, id, ...titleProps}: SectionProps, sectionRef : any) {

  const theme = useTheme();
  const [paddingTop, _] = useAtom(paddingTopAtom);

  return (
    <section id={id} style={{paddingTop}} ref={sectionRef}>
      <div 
        style={{width: "100%", height: 1, backgroundColor: theme.palette.secondary.main, marginTop: "0.25rem", marginBottom: "0.5rem"}}
      />
      <Title 
        {...titleProps}
      />
      <div 
        style={{width: "100%", height: 1, backgroundColor: theme.palette.secondary.main, marginTop: "0.25rem", marginBottom: "0.5rem"}}
      />
      {children}
    </section>
  )
}

export default React.forwardRef(Section);