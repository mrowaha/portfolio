import Head from "next/head";

import * as React from "react";
import { useAtom } from "jotai";

import {
  Container,
  Stack,
  Typography,
  Button,
  IconButton,
  ButtonGroup,
  TextField,
  Snackbar,
  Alert,
  useTheme
} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from '@mui/material/SvgIcon';
import SendIcon from '@mui/icons-material/Send';
import {styled} from "@mui/system";

import { titleAtom } from "@/store";

const ContentContainer = styled(Stack)(({theme}) => ({
  background : theme.palette.mode === "dark" ? "linear-gradient(#313131ff, #31313144)" : "linear-gradient(#dfdfdf80, #dfdfdfff)",
  border : theme.palette.mode === "dark" ? "2px solid #ffffff20" : "2px solid #dfdfdfff", 
  padding : "1rem",
  alignItems : "center"
}))

interface ContactPageProps {
  facebook : string,
  email : string,
  phone : string,
  instagram : string
}

function ContactPage(props : ContactPageProps) {

  console.log(props)
  const theme = useTheme();
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  const [emailTitle, setEmailTitle] = React.useState<string>("");
  const [senderEmail, setSenderEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [emailContent, setEmailContent] = React.useState<string>("");
  const [emailSnack, setEmailSnack] = React.useState<boolean>(false);
  const [emailSnackMessage, setEmailSnackMessage] = React.useState<string>("");
  const [emailSnackSeverity, setEmailSnackSeverity] = React.useState<"error" | "success">("success");

  const handleSendEmail = () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (senderEmail.match(regex)) {
      setEmailError(false);
      fetch("/api/email", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          EmailTitle : emailTitle,
          FromEmail : senderEmail,
          Content : emailContent,
        })
      }).then(res => {
        if (res.ok) {
          setEmailSnack(true);
          setEmailSnackSeverity("success");
          setEmailSnackMessage("Email Sent");
        } else {
          setEmailSnack(false);
          setEmailSnackMessage("Internal Error");
          setEmailSnackSeverity("error");
        }
      })
      .catch(err => console.log("error"))
    } else {
      setEmailSnackSeverity("error");
      setEmailSnack(true);
      setEmailSnackMessage("Email Format Incorrect");
      setEmailError(true);
    }
  }

  React.useEffect(() => {
    setPageTitle("Contact")
  }, [])

  return (
    <>
    <Head>
      <title>Muhammad Rowaha | Contact</title>  
    </Head>    

    <Snackbar 
      open={emailSnack}
      autoHideDuration={3000}
      onClose={() => setEmailSnack(false)}
      anchorOrigin={{vertical : "bottom", horizontal : "left"}}
    >
      <Alert severity={emailSnackSeverity}>{emailSnackMessage}</Alert>
    </Snackbar>
    <Container>
      <ContentContainer direction="column" gap={4}>
        <Typography variant="h2" style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} textAlign="center" >
          Contact Me
          <Typography variant="body1" color="secondary">
            Get in touch
          </Typography>
        </Typography>
        <Typography variant="body1" style={{color : theme.palette.mode === 'dark' ? "#dfdfdfff" : "#313131aa"}} textAlign="center">
          As an aspiring Computer Science student and Software Engineering, I am always looking for opportunities to learn new skills, practicalize them and gain valuable work experience in the industry.
          My belief is that software engineering can only truly be learned by using book knowledge in real-life scenarios. <br/>
          Feel free to contact me via <span style={{fontWeight : "bold"}}>the form or any of links provided</span>  
        </Typography>
        <ButtonGroup
          variant="text"
          color="secondary"
          style={{display : "flex", flexWrap : "wrap", alignItems : "center", justifyContent : "center"}}
        >
          <Button
            startIcon={<PhoneIcon color="secondary"/>}
            href={`tel:${props.phone}`}
          >
            +{props.phone}
          </Button>
          <Button
            startIcon={<EmailIcon />}
            style={{textTransform : "none"}}
            href={`mailto:${props.email}`}
          >
            {props.email}
          </Button>
        </ButtonGroup>
        <div style={{display : "flex", alignItems : "center", justifyContent : "center"}}>
          <IconButton color="secondary" href={props.facebook}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="secondary" href={props.instagram}>
            <InstagramIcon />
          </IconButton> 
          <IconButton color="secondary" href="https://github.com/mrowaha">
            <SvgIcon style={{width : 21, aspectRatio : "1 / 1"}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </SvgIcon>  
          </IconButton>  
          <IconButton color="secondary" href="https://www.linkedin.com/in/mrowaha/">
            <SvgIcon style={{width : 21, aspectRatio : "1 / 1"}}>
              <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </SvgIcon>
          </IconButton>
        </div>
        <Typography variant="body1" color="secondary">
          or leave a message
        </Typography>
        <Container id="email" sx={{padding : {lg : "0 10rem"}, display : "flex", flexDirection : "column", gap : 2}}> 
            <TextField 
              placeholder="Title"
              fullWidth
              value={emailTitle}
              onChange={(e) => setEmailTitle(e.target.value)}
            />
            <TextField 
              placeholder="Email"
              fullWidth
              value={senderEmail}
              error={emailError}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            <TextField 
              placeholder="Content"
              fullWidth
              multiline
              minRows={3}
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />
        </Container>
        <Button
          variant="outlined"
          startIcon={<SendIcon />}
          size="small"
          onClick={handleSendEmail}
          disabled={senderEmail === "" || emailContent === "" || emailTitle === ""}
        >
          Send Message
        </Button>
      </ContentContainer>
    </Container>

    </>
  )
}

export async function getServerSideProps() {
  
  const res = await fetch("https://mrowaha-portfolio-default-rtdb.firebaseio.com/contact.json");
  const contactData = await res.json(); 

  return {
    props : {...contactData}
  }
}

export default ContactPage;