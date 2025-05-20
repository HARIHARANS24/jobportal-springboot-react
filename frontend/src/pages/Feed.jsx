import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts/${query}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      }
    };

    const fetchInitialPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/allPosts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
        setPosts([]);
      }
    };

    if (query.length === 0) {
      fetchInitialPosts();
    } else if (query.length > 2) {
      fetchPosts();
    }
  }, [query]);

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, flexWrap: "wrap", gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Job Feed
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to="/"
          sx={{
            borderColor: "#1565c0",
            color: "#1565c0",
            "&:hover": {
              bgcolor: "#1565c0",
              color: "white",
              borderColor: "#1565c0",
            },
          }}
        >
          Home
        </Button>
      </Box>

      <TextField
        fullWidth
        placeholder="Search job profiles or skills..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 4 }}
      />

      {posts.length === 0 ? (
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mt: 6 }}>
          No jobs found matching your criteria.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {posts.map((p) => (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "600", mb: 1 }}>
                    {p.profile}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 80 }}>
                    {p.desc}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    Years of Experience: {p.exp}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "600" }}>
                    Skills:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 0.5 }}>
                    {p.techs.map((skill, i) => (
                      <Box
                        key={i}
                        sx={{
                          bgcolor: "#e3f2fd",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: "0.85rem",
                          fontWeight: "500",
                          color: "#1565c0",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Feed;
