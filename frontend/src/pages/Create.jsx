import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = { profile: "", exp: "", techs: [], desc: "" };

const skillSet = [
  { name: "Javascript" },
  { name: "Java" },
  { name: "Python" },
  { name: "Django" },
  { name: "Rust" },
];

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!form.profile.trim()) tempErrors.profile = "Job profile is required";
    if (form.exp === "") tempErrors.exp = "Years of Experience is required";
    else if (isNaN(form.exp) || Number(form.exp) < 0)
      tempErrors.exp = "Please enter a valid non-negative number";
    if (!form.desc.trim()) tempErrors.desc = "Job description is required";
    if (form.techs.length === 0)
      tempErrors.techs = "Please select at least one skill";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to submit");
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/employee/feed");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting form");
      });
  };

  const handleTechChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setForm((prev) => ({ ...prev, techs: [...prev.techs, value] }));
    } else {
      setForm((prev) => ({
        ...prev,
        techs: prev.techs.filter((tech) => tech !== value),
      }));
    }
  };

  return (
    <Paper sx={{ padding: "2%", maxWidth: 600, margin: "3% auto" }} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Job Profile"
            variant="outlined"
            required
            value={form.profile}
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            fullWidth
            error={!!errors.profile}
            helperText={errors.profile}
          />

          <TextField
            label="Years of Experience"
            variant="outlined"
            type="number"
            inputProps={{ min: 0 }}
            required
            value={form.exp}
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
            fullWidth
            error={!!errors.exp}
            helperText={errors.exp}
          />

          <TextField
            label="Job Description"
            variant="outlined"
            required
            multiline
            rows={4}
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            fullWidth
            error={!!errors.desc}
            helperText={errors.desc}
          />

          <Box>
            <Typography variant="h6" gutterBottom>
              Required Skills
            </Typography>
            <FormGroup>
              {skillSet.map(({ name }, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      value={name}
                      checked={form.techs.includes(name)}
                      onChange={handleTechChange}
                    />
                  }
                  label={name}
                />
              ))}
            </FormGroup>
            {errors.techs && (
              <FormHelperText error sx={{ ml: 1 }}>
                {errors.techs}
              </FormHelperText>
            )}
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{ py: 1.5, fontWeight: "600" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
