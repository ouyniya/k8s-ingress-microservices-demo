const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

const events = [];

app.post("/events", async (req, res) => {
  const event = req.body;

  events.push(event);

  const endpoints = [
    "http://posts-clusterip-srv:4000/events",
    "http://comments-srv:4001/events",
    "http://query-srv:4002/events",
    "http://moderation-srv:4003/events",
  ];

  const promises = endpoints.map(url =>
    axios.post(url, event).catch(err => ({ error: err.message }))
  );

  const results = await Promise.allSettled(promises);

  results.forEach((r, i) => {
    if (r.status === "rejected" || r.value?.error) {
      console.error(`Error posting to ${endpoints[i]}:`, r.reason?.message || r.value.error);
    }
  });
  
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, '0.0.0.0', () => {
  console.log('Listening on port 4005');
});