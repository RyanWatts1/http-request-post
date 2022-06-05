import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <p onClick={() => navigate(`/${post.id}`)}> {post.title}</p>
      ))}
    </div>
  );
}

