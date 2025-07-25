const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts/create", async (req, res) => {
  try {
  const id = randomBytes(4).toString("hex"); // generate two random 4-byte hex strings
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

    await axios.post("http://event-bus-srv:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });

    res.status(201).send(posts[id]);

  } catch (error) {
    console.log(error);
  }

});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log('v55')
  console.log("Server is running on PORT 4000");
});
