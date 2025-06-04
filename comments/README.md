# 💬 Comments Service Microservice

This microservice handles creating and retrieving comments. It exposes a simple RESTful API to allow clients to add new comments and fetch all existing comments.

| Method | Endpoint             | Body?                | Description         |
|--------|-----------------------|---------------------|------|
| POST   | /posts/:id/comments   | { content: string } | Create a comment associated with the given post ID |
| GET    | /posts/:id/comments   | -                   | Retrieve comments associated with the given post ID |


## Response

```json
[
  {
    "id": "6b0f",
    "content": "This is a comment",
  },
  {
    "id": "8e29",
    "content": "Another comment",
  }
]
```



## 🛠 Technologies Used

- Node.js / Express 
- JSON-based API
- RESTful API


## 📚 Notes

- Each comment must include a non-empty title string.
- No authentication is required for this basic version.