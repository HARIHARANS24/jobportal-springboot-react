import React from "react";
import { Container, Box, Typography, Divider } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" sx={{ color: "#1565c0", fontWeight: "bold" }}>
          About Us
        </Typography>
        <Divider
          sx={{
            width: 80,
            height: 4,
            bgcolor: "#ff6f00",
            mx: "auto",
            mt: 2,
            borderRadius: 2,
          }}
        />
      </Box>

      <Typography variant="h5" sx={{ mb: 3, fontWeight: "600" }}>
        Our Mission
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}>
        At JobLink, our mission is to connect talented individuals with great opportunities,
        and to empower employers to find the perfect talent — all for free. We believe in
        breaking barriers and making hiring accessible and efficient for everyone.
      </Typography>

      <Typography variant="h5" sx={{ mb: 3, fontWeight: "600" }}>
        What We Do
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}>
        We provide an easy-to-use platform that brings together employers and job seekers.
        Our portal offers job listings, company profiles, personalized feeds, and a smooth
        application process designed to help you get hired or hire faster.
      </Typography>

      <Typography variant="h5" sx={{ mb: 3, fontWeight: "600" }}>
        Our Values
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}>
        Integrity, transparency, and innovation guide everything we do. We strive to create
        a supportive community where everyone can grow their careers or businesses.
      </Typography>
    </Container>
  );
};

export default AboutUs;
