import axios from "axios";
import { useState } from "react";

function PostCreate() {
  const [title, setTitle] = useState("");

  const hdlTitle = (e) => {
    setTitle(e.target.value);
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();

    try {
      if (title.trim() !== "") {
        await axios.post("http://posts.com/posts/create", {
          title,
        });
        window.location.reload(false);
      } else {
        alert("No post content");
      }

      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={hdlSubmit}>
      <div className="form-group">
        <div className="d-flex">
          <div className="p-2 flex-fill">
            <label className="col-form-label">Title</label>
          </div>
          <div className="p-2 flex-fill">
            <input
              value={title}
              onChange={(e) => hdlTitle(e)}
              className="form-control"
            />
          </div>
          <div className="p-2 flex-fill">
            <button className="btn btn-danger">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default PostCreate;
