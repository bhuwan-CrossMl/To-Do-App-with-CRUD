import React from 'react'
import {
    Box,
  Container,
  Typography
  } from "@mui/material";
  import Link from "next/link";



const contact = () => {
  return (
    <Container component="main" maxWidth="xl">
    <Box  sx={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'center'}} minHeight="700px">
      <Typography variant="h4">Food Website</Typography>
      <Typography variant="h6">Best Food In India</Typography>
      <Link href="/menu">
        <button>ORDER NOW</button>
      </Link>
    </Box>
  </Container>
  )
}

export default contact







