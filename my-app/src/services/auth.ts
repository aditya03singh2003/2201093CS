// src/services/auth.ts
import axios from "axios";

const BASE_URL = "http://20.244.56.144/test";

// Hardcoded credentials (replace with your actual values)
const COMPANY_DETAILS = {
  companyName: "Afford Medical",
  clientID: "d21b9898-930c-45d4-8181-9ffea7142395",
  clientSecret: "RhqlpkJNsEfwoOQg",
  ownerName: "Aditya Singh",
  ownerEmail: "aditya.2201093cs@iiitbh.ac.in",
  rollNo: "2201093CS"
};

let accessToken: string | null = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTY2MzYzLCJpYXQiOjE3NDI1NjYwNjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQyMWI5ODk4LTkzMGMtNDVkNC04MTgxLTlmZmVhNzE0MjM5NSIsInN1YiI6ImFkaXR5YS4yMjAxMDkzY3NAaWlpdGJoLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIE1lZGljYWwiLCJjbGllbnRJRCI6ImQyMWI5ODk4LTkzMGMtNDVkNC04MTgxLTlmZmVhNzE0MjM5NSIsImNsaWVudFNlY3JldCI6IlJocWxwa0pOc0Vmd29PUWciLCJvd25lck5hbWUiOiJBZGl0eWEgU2luZ2giLCJvd25lckVtYWlsIjoiYWRpdHlhLjIyMDEwOTNjc0BpaWl0YmguYWMuaW4iLCJyb2xsTm8iOiIyMjAxMDkzQ1MifQ.tRMEtg6vRRzL7oAVAvVybvp3oRDFOawpxOObS3-L2P4";

// src/services/auth.ts
export const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTY2MzYzLCJpYXQiOjE3NDI1NjYwNjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQyMWI5ODk4LTkzMGMtNDVkNC04MTgxLTlmZmVhNzE0MjM5NSIsInN1YiI6ImFkaXR5YS4yMjAxMDkzY3NAaWlpdGJoLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIE1lZGljYWwiLCJjbGllbnRJRCI6ImQyMWI5ODk4LTkzMGMtNDVkNC04MTgxLTlmZmVhNzE0MjM5NSIsImNsaWVudFNlY3JldCI6IlJocWxwa0pOc0Vmd29PUWciLCJvd25lck5hbWUiOiJBZGl0eWEgU2luZ2giLCJvd25lckVtYWlsIjoiYWRpdHlhLjIyMDEwOTNjc0BpaWl0YmguYWMuaW4iLCJyb2xsTm8iOiIyMjAxMDkzQ1MifQ.tRMEtg6vRRzL7oAVAvVybvp3oRDFOawpxOObS3-L2P4";
// Function to refresh the token
export const getAuthToken = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, COMPANY_DETAILS);
    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
};

// Function to get the current token (refresh if needed)
export const getCurrentToken = async () => {
  if (!accessToken) {
    return await getAuthToken();
  }
  return accessToken;
};