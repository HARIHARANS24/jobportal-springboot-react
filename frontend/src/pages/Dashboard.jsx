import * as React from "react";
import { Box, Tab, Typography, Button } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import Create from "./Create";

export default function EmployerDashboard() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Header with title and Home button */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 2,
          bgcolor: "#1565c0",
          color: "white",
          borderRadius: 1,
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Create New Job 
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to="/"
          sx={{
            borderColor: "white",
            color: "white",
            "&:hover": {
              bgcolor: "white",
              color: "#1565c0",
              borderColor: "#1565c0",
            },
          }}
        >
          Home
        </Button>
      </Box>

      {/* Tabs */}
      <Box sx={{ width: "100%", maxWidth: 900, mx: "auto" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              bgcolor: "#e3f2fd",
              borderRadius: 1,
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="Employer Dashboard Tabs"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Create Post" value="1" />
              {/* You can add more tabs here in future */}
            </TabList>
          </Box>

          <TabPanel value="1" sx={{ p: 0, mt: 3 }}>
            <Create />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
