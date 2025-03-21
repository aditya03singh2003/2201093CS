// src/pages/TopUsers.tsx
import { useEffect, useState } from "react";
import { getUsers, getPostsByUser } from "../services/api";
import { UsersResponse } from "../types/types";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
  Container,
  Paper,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person"; // Optional: Add an icon

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState<{ user: { id: string; name: string }; postCount: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users: UsersResponse = await getUsers();
        console.log("Users API response:", users); // Debug log

        const userPostCounts = await Promise.all(
          Object.entries(users).map(async ([userId, userName]) => {
            const posts = await getPostsByUser(userId);
            console.log(`Posts for ${userName}:`, posts); // Debug log
            return { user: { id: userId, name: userName }, postCount: posts.length };
          })
        );

        const sortedUsers = userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
        setTopUsers(sortedUsers);
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load data. Check console for details.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" mt={4}>
        {error}
      </Typography>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center" mt={4} sx={{ fontWeight: "bold" }}>
        Top Users
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <List>
          {topUsers.map(({ user, postCount }, index) => (
            <ListItem key={user.id} divider sx={{ py: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <PersonIcon /> {/* Optional: Add an icon */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${index + 1}. ${user.name}`}
                secondary={`${postCount} posts`}
                primaryTypographyProps={{ variant: "h6", fontWeight: "medium" }}
                secondaryTypographyProps={{ variant: "body1", color: "text.secondary" }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TopUsers;