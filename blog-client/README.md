



## 🧭 Post Service – Logical Component Hierarchy

                                     app
                                      │
            ┌─────────────────────────┴─────────────────────────┐
        postList                                               postCreate
          │                                                      
    ┌─────┴──────┐                                        
commentList   commentCreate


### Description:
- **app:** Main application entry point.
- **postList:** Handles GET /posts.
- **postCreate:** Handles POST /posts.
- **commentList:** Handles GET /posts/:postId/comments.
- **commentCreate:** Handles POST /posts/:postId/comments.

