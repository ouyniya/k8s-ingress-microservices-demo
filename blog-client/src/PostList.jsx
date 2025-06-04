import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPost = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card text-start"
        style={{marginBottom: "20px" }}
      >
        <div
          className="card-body d-flex flex-column justify-content-between
        "
        >
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div
      className="d-flex flex-row flex-wrap justify-content-start gap-3"
    >
      {renderedPost}
    </div>
  );
}
export default PostList;
