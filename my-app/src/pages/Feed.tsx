// src/pages/Feed.tsx
import { useEffect, useState } from "react";
import { getUsers, getPostsByUser } from "../services/api";
import { Post } from "../types/types";

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      const allPosts = await Promise.all(
        Object.keys(users).map(async (userId) => {
          const posts = await getPostsByUser(userId);
          return posts;
        })
      );
      const sortedPosts = allPosts.flat().sort((a, b) => b.id - a.id);
      setPosts(sortedPosts);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;