# 📝 Post Service Microservice

This microservice handles creating and retrieving posts. It exposes a simple RESTful API to allow clients to add new posts and fetch all existing posts.

| Method | Endpoint | Body?                 | Description                     |
|--------|----------|-----------------------|---------------------------------|
| POST   | /posts   | { title: string }     | Create a new post               |
| GET    | /posts   | -                     | Retrieve a list of all posts    |


## 🛠 Technologies Used

- Node.js / Express 
- JSON-based API
- RESTful API


## 📚 Notes

- Each post must include a non-empty title string.
- No authentication is required for this basic version.