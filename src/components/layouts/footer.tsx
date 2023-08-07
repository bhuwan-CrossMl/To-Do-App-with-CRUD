import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Container,Box, Typography } from "@mui/material";



const Footer = () => {
  return (
    <>
      <Container   component="footer" maxWidth={false}  // Set maxWidth to false for full width
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 ,mt:2,mb:2}}
      >
        <Box 
          sx={{
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>

        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Bhuwan Website
        </Typography>
      </Container>
    </>
  );
};

export default Footer;