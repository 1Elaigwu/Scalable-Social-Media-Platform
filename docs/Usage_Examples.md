## Usage Examples

### User Registration
- **Endpoint**: POST /api/users/register
- **Request**:
  ```json
  {
    "username": "example_user",
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```

### Create a Post
- **Endpoint**: POST /api/posts
- **Request**:
  ```json
  {
    "user_id": "123",
    "content": "Excited to share our latest project!",
    "media": []
  }
  ```

### Add a Comment
- **Endpoint**: POST /api/posts/{post_id}/comments
- **Request**:
  ```json
  {
    "user_id": "456",
    "content": "Great job! Can't wait to try it out."
  }
  ```

### Retrieve Notifications
- **Endpoint**: GET /api/notifications?user_id=123
- **Response**:
  ```json
  [
    {
      "id": "1",
      "message": "You have a new follower!",
      "timestamp": "2024-05-28T10:00:00Z"
    }
  ]
  ```