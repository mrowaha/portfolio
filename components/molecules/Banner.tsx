import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Grid
} from "@mui/material";
import {styled} from "@mui/system"; 
import { useAtom } from "jotai";
import { titleAtom } from "@/store";

const BannerDiv = styled(Box)(({theme}) => ({
  width : "100%",
  height : "55vh",
  minHeight : "400px",
  background : `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  border : "5px solid black",
  position : "relative",
  display : "flex",
  justifyContent : "center",
  paddingTop : "2rem"
}));

const BannerTitle = styled(Typography)(({theme}) => ({
  fontFamily : "Caveat  ",
  [theme.breakpoints.down("sm")] : {
    fontSize : "20vw"
  },
  letterSpacing : 5,
  color : "#fff"
}))

const BannerImageContainer = styled(Box)(({theme}) => ({
  width : "30%",
  [theme.breakpoints.down("lg")] : {
    width: "40%"
  },
  [theme.breakpoints.down("md")] : {
    width : "60%",
  },
  [theme.breakpoints.down("sm")] : {
    width : "80%"
  },
  maxWidth : "400px",
  aspectRatio : "1 / 1",
  borderRadius : "50%",
  position : "absolute",
  top : "100%",
  left : "50%",
  transform : "translate(-50%, -50%)",
  background : theme.palette.mode === "dark" ? "#313131ff" : "white",
  border : "5px solid black",
  zIndex : 10,
  display : "flex",
  justifyContent : "center",
  alignItems : "center"

}))

const BannerImage = styled(Image)(({theme}) => ({
  borderRadius : "50%",
  width : "20%",
  aspectRatio : "1/1",
  objectFit : "cover"
}))


export default function Banner({onResize}: {onResize: (height: number) => void}) {

  const containerRef = useRef();
  const bannerRef = useRef();
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setPageTitle("Portfolio");
      }
    })
    intersectionObserver.observe(bannerRef.current!);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        onResize(entry.contentRect.height);
      }
    })
    observer.observe(containerRef.current!);
    return () => {
      observer.unobserve(containerRef.current!);
      intersectionObserver.unobserve(bannerRef.current!);
    }
  }, [])

  return (
  <BannerDiv ref={bannerRef}>
    <BannerImageContainer ref={containerRef}>
      <BannerImage
        fill
        src="/rowaha_banner.jpg"
        alt="author image"
      />
    </BannerImageContainer>
    <BannerTitle variant="h1">
      Portfolio
    </BannerTitle>
  </BannerDiv>
  )
}