// src/pages/TrendingPosts.tsx
import { useEffect, useState } from "react";
import { getUsers, getPostsByUser, getCommentsByPost } from "../services/api";
import { Post } from "../types/types";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      const allPosts = await Promise.all(
        Object.keys(users).map(async (userId) => {
          const posts = await getPostsByUser(userId);
          return posts;
        })
      );
      const postsWithComments = await Promise.all(
        allPosts.flat().map(async (post) => {
          const comments = await getCommentsByPost(post.id);
          return { ...post, commentCount: comments.length }; 
        })
      );
      const maxComments = Math.max(...postsWithComments.map((p) => p.commentCount || 0));
      const trending = postsWithComments.filter((p) => p.commentCount === maxComments);
      setTrendingPosts(trending);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending Posts</h1>
      <ul>
        {trendingPosts.map((post) => (
          <li key={post.id}>
            {post.content} - {post.commentCount} comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;