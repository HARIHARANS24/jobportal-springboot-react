import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button, Link as MuiLink } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your sign-in logic here
    console.log({ email, password });
    // On success:
    // navigate('/employee/feed') or '/employer/dashboard' based on user role
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(21, 101, 192, 0.2)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, color: "#1565c0", fontWeight: "bold" }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#1565c0",
              "&:hover": { bgcolor: "#0d3c75" },
              textTransform: "none",
              fontWeight: "600",
              py: 1.5,
            }}
          >
            Sign In
          </Button>
        </Box>
        <Typography sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <MuiLink component={Link} to="/signup" sx={{ color: "#ff6f00", fontWeight: "bold" }}>
            Sign Up
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignIn;
