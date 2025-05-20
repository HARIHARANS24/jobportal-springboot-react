import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({ open: false, severity: "success", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlert({ open: true, severity: "error", message: "Please fill all fields." });
      return;
    }

    // TODO: Add actual contact form submission logic (API call etc)
    console.log("Contact form submitted:", formData);

    setAlert({ open: true, severity: "success", message: "Message sent successfully!" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" sx={{ color: "#1565c0", fontWeight: "bold" }}>
          Contact Us
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full Name"
          name="name"
          fullWidth
          required
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email Address"
          name="email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Your Message"
          name="message"
          multiline
          rows={5}
          fullWidth
          required
          margin="normal"
          value={formData.message}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            bgcolor: "#1565c0",
            "&:hover": { bgcolor: "#0d3c75" },
            fontWeight: "600",
            textTransform: "none",
            py: 1.5,
          }}
        >
          Send Message
        </Button>
      </Box>

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setAlert((prev) => ({ ...prev, open: false }))}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
