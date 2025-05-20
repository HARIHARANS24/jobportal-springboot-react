import React from "react";
import { Typography, Button, Container, Box, Grid, Paper, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Free to Use",
    description: "Hire or get hired without any charges or fees. We believe in empowering talent and businesses alike.",
  },
  {
    title: "Trusted Employers",
    description: "All employers are verified to ensure quality opportunities for our job seekers.",
  },
  {
    title: "Personalized Job Feed",
    description: "Get job recommendations tailored to your skills and preferences.",
  },
  {
    title: "Easy Communication",
    description: "Chat directly with potential employers or candidates inside our platform.",
  },
];

const steps = [
  "Create your profile (Employer or Employee).",
  "Post a job or browse available jobs.",
  "Apply or connect with the right candidates.",
  "Hire or get hired quickly and easily.",
];

const testimonials = [
  {
    name: "Jane Doe",
    role: "Software Engineer",
    feedback:
      "This platform helped me find my dream job within weeks. The process was smooth and efficient!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Mark Smith",
    role: "HR Manager",
    feedback:
      "We hired multiple talented developers through this site. It’s easy to use and free — highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh", pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            sx={{ color: "#1565c0", fontWeight: "bold", mb: 2 }}
          >
            Get Hired or Hire People for Free!
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#333", maxWidth: 600, mx: "auto", mb: 4 }}
          >
            Connect talented professionals with top companies and employers, all at zero cost.
          </Typography>
          <Box>
            <Button
              variant="outlined"
              sx={{
                color: "#1565c0",
                borderColor: "#1565c0",
                mr: 2,
                px: 4,
                py: 1.5,
                fontWeight: "600",
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#ff6f00",
                  borderColor: "#ff6f00",
                  color: "#fff",
                },
              }}
            >
              <Link to="/employer/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                Hire Talent
              </Link>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#1565c0",
                borderColor: "#1565c0",
                px: 4,
                py: 1.5,
                fontWeight: "600",
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#ff6f00",
                  borderColor: "#ff6f00",
                  color: "#fff",
                },
              }}
            >
              <Link to="/employee/feed" style={{ textDecoration: "none", color: "inherit" }}>
                Get Job Now
              </Link>
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Box mb={8}>
          <Typography variant="h4" sx={{ color: "#1565c0", fontWeight: "bold", mb: 4 }} align="center">
            Why Choose Us?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    "&:hover": { boxShadow: "0 8px 16px rgba(21, 101, 192, 0.3)" },
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1, color: "#1565c0" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* How It Works Section */}
        <Box mb={8} textAlign="center">
          <Typography variant="h4" sx={{ color: "#1565c0", fontWeight: "bold", mb: 4 }}>
            How It Works
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {steps.map((step, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={3}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "#fff",
                    minHeight: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "600", color: "#333" }}>
                    {`${idx + 1}. ${step}`}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box mb={8} textAlign="center">
          <Typography variant="h4" sx={{ color: "#1565c0", fontWeight: "bold", mb: 6 }}>
            What People Are Saying
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map(({ name, role, feedback, avatar }, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={5}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: "#fff",
                    minHeight: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  }}
                >
                  <Avatar
                    src={avatar}
                    alt={name}
                    sx={{ width: 64, height: 64, mb: 2, border: "2px solid #1565c0" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", color: "#555", mb: 2 }}
                  >
                    "{feedback}"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#1565c0" }}>
                    {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call To Action Section */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h5" sx={{ color: "#1565c0", fontWeight: "bold", mb: 2 }}>
            Ready to start your journey?
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1565c0",
              px: 5,
              py: 1.8,
              fontWeight: "600",
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0d3c75",
              },
            }}
          >
            <Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>
              Sign Up Now
            </Link>
          </Button>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            mt: 8,
            pt: 4,
            borderTop: "1px solid #ddd",
            textAlign: "center",
            color: "#777",
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            &copy; {new Date().getFullYear()} JobPortal Inc. All rights reserved.
          </Typography>
          <Typography variant="body2">
            <Link to="/about" style={{ color: "#1565c0", textDecoration: "none", marginRight: 16 }}>
              About Us
            </Link>
            <Link to="/contact" style={{ color: "#1565c0", textDecoration: "none" }}>
              Contact
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
