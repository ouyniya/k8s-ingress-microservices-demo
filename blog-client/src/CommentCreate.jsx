import axios from "axios";
import { useState } from "react";

function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const hdlContent = (e) => {
    setContent(e.target.value);
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();

    try {
      if (content.trim() !== "") {
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
          content,
        });
      } else {
        alert("No Comment content");
      }

      setContent("");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={hdlSubmit}>
      <div className="form-group p-2 bg-danger-subtle rounded-2">
          <div className="p-2 flex-fill">
            <label className="col-form-label fw-semibold">New Comment</label>
          </div>
          <div className="p-2 flex-fill">
            <textarea
              value={content}
              onChange={(e) => hdlContent(e)}
              className="form-control"
            />
          </div>
          <div className="p-2 flex-fill">
            <button className="btn btn-danger">Submit</button>
          </div>
        </div>

    </form>
  );
}
export default CommentCreate;
