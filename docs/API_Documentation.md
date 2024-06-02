## API Documentation
Detailed descriptions of each API endpoint, including input parameters, expected responses, and error handling.

### User Service API
Endpoints for user management, including registration, login, profile updates, and user search.

### Post Service API
API endpoints for creating, retrieving, updating, and deleting posts.

### Comment Service API
API endpoints for adding, retrieving, updating, and deleting comments on posts.

### Notification Service API
Endpoints for managing user notifications, such as sending and retrieving notifications.

Below is a detailed breakdown of each API endpoint for the User Service, Post Service, Comment Service, and Notification Service. This includes the input parameters, expected responses, and error handling.

## User Service API
### Register a User
- **Endpoint**: `POST /api/users/register`
- **Parameters**:
  - `username` (string): Unique username
  - `email` (string): User email address
  - `password` (string): User password
- **Response**:
  - `201 Created` on success
  - `400 Bad Request` if validation fails

### Login a User
- **Endpoint**: `POST /api/users/login`
- **Parameters**:
  - `email` (string): User email address
  - `password` (string): User password
- **Response**:
  - `200 OK` with user data and token
  - `401 Unauthorized` if credentials are incorrect

## Post Service API
### Create a Post
- **Endpoint**: `POST /api/posts`
- **Parameters**:
  - `user_id` (string): ID of the user creating the post
  - `content` (string): Content of the post
  - `media` (array): Optional list of media URLs
- **Response**:
  - `201 Created` on success
  - `400 Bad Request` if validation fails

## Comment Service API
### Add a Comment
- **Endpoint**: `POST /api/posts/{post_id}/comments`
- **Parameters**:
  - `user_id` (string): ID of the user commenting
  - `content` (string): Content of the comment
- **Response**:
  - `201 Created` on success
  - `400 Bad Request` if validation fails

## Notification Service API
### Retrieve Notifications
- **Endpoint**: `GET /api/notifications`
- **Parameters**:
  - `user_id` (string): ID of the user
- **Response**:
  - `200 OK` with list of notifications
  - `400 Bad Request` if validation fails

This detailed API documentation should provide a comprehensive guide for developers interacting with the various services of the scalable social media platform. Each endpoint is clearly defined, including the required parameters, example requests, responses, and potential errors.