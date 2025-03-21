// src/types/types.ts
export interface User {
    id: string;
    name: string;
  }
  
export interface UsersResponse {
    [userId: string]: string; 
}
export interface Post {
    id: number;
    userid: number;
    content: string;
    commentCount?: number; 
  }
  
  export interface Comment {
    id: number;
    postid: number;
    content: string;
  }