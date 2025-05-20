import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const roles = [
  { value: "employer", label: "Employer" },
  { value: "employee", label: "Employee" },
];

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("employee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation example
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: Add your sign-up logic here (API call, etc)
    console.log({ role, name, email, password });
    // On success:
    // navigate('/employee/feed') or '/employer/dashboard' depending on role
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            select
            label="I am a"
            fullWidth
            required
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Full Name"
            fullWidth
            required
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Sign Up
          </Button>
        </Box>
        <Typography sx={{ mt: 2 }}>
          Already have an account?{" "}
          <MuiLink component={Link} to="/signin" sx={{ color: "#ff6f00", fontWeight: "bold" }}>
            Sign In
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
