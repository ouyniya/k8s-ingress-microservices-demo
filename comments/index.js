const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const { type } = require("os");

const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  res.send(commentsByPostId[id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");

  const { content } = req.body;
  const { id } = req.params;

  if (!content) {
    res.status(400).send("No content");
  }

  const comments = commentsByPostId[id] || [];

  comments.push({ id: commentId, content, status: "pending" }); // comment moderator (1)

  commentsByPostId[id] = comments;

  await axios.post("http://event-bus-srv:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: id,
      status: "pending", // comment moderator (1)
    },
  });

  res.status(201).send(comments);
});

app.delete("/posts/:id/comments", (req, res) => {
  const { id } = req.params;

  commentsByPostId[id] = null;

  res.status(200).send("deleted");
});

app.post("/events", async (req, res) => {
  console.log("Received Event", req.body.type);

  // comment moderator (4)
  const { type, data } = req.body;

  if (type === "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;

    // comment moderator (5)
    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("Server is running on PORT 4001");
});
