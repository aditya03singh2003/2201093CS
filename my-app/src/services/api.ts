// src/services/api.ts
import axios from "axios";
import { ACCESS_TOKEN } from "./auth"; 

const BASE_URL = "/api"; // Updated to use proxy

// Configure axios instance with auth header
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data.users;
};

export const getPostsByUser = async (userId: string) => {
  const response = await api.get(`/users/${userId}/posts`);
  return response.data.posts;
};

export const getCommentsByPost = async (postId: number) => {
  const response = await api.get(`/posts/${postId}/comments`);
  return response.data.comments;
};