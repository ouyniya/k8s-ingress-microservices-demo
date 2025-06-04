import "./App.css";
import CommentCreate from "./CommentCreate";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <>
      <div>
        <h1>┊┊🌸 NysDev's Blog 🌸┊┊</h1>
        <br />
        <h2>╰┈➤ Create a post</h2>
        <PostCreate />
        <br />
        <h2>Posts</h2>
        <PostList />
      </div>
    </>
  );
}

export default App;
