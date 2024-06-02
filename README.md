# Scalable Social Media Platform

## Overview
The Scalable Social Media Platform is designed to efficiently handle a large user base and high volumes of data. It leverages modern technologies and architectural patterns to ensure scalability, performance, and reliability. The platform is built using a microservices architecture, with dedicated services for users, posts, comments, and notifications. Each service utilizes appropriate databases and technologies to optimize performance and scalability. The platform supports horizontal scaling, high availability, and robust security measures to protect user data and maintain system integrity.

## Documentation

- [Overview](docs/Overview.md)
- [Key Features](docs/Key_Features.md)
- [API Documentation](docs/API_Documentation.md)
- [Architecture Design](docs/Architecture_Design.md)
- [Technical Implenentation](docs/Technical_Implenentation.md)
- [Setup Instructions](docs/Setup_Instructions.md)
- [Configuration](docs/Configuration.md)
- [Key Features](docs/Key_Features.md)
- [Usage Examples](docs/usage_Examples.md)
- [Performance](docs/performance.md)
- [Limitations and Recommendaations](docs/Limitations_and_Recommendaations.md)

## Key Features
- **Scalability**: Horizontal scaling with sharding and load balancing
- **High Availability**: Master-slave and multi-master replication setups
- **Performance**: In-memory caching with Redis and efficient indexing with Elasticsearch
- **Security**: Data encryption and strict access control mechanisms


## API Documentation Overview
- **User Service API**: Endpoints for user management, including registration, login, profile updates, and user search.
- **Post Service API**: API endpoints for creating, retrieving, updating, and deleting posts.
- **Comment Service API**: API endpoints for adding, retrieving, updating, and deleting comments on posts.
- **Notification Service API**: Endpoints for managing user notifications, such as sending and retrieving notifications.

## Architecture Design Overview

### Microservices
- **User Service**: Manages user authentication, profiles, and interactions.
- **Post Service**: Handles the creation, retrieval, and management of posts.
- **Comment Service**: Manages comments on posts.
- **Notification Service**: Handles the sending and retrieval of notifications for user activities.

### Databases
- **PostgreSQL**: Used for relational data storage, particularly for user information.
- **MongoDB**: Utilized for storing posts, comments, and notifications due to its flexible schema capabilities.
- **Redis**: Employed for caching frequently accessed data to improve performance.

### Search
- **Elasticsearch**: Integrated for full-text search capabilities, enabling efficient and scalable search functionality across the platform.

## Technical Implementation

### Database Schemas
The platform uses both SQL and NoSQL databases, each with their respective schemas tailored to the needs of different services.

- **PostgreSQL**: Contains schemas for user data including authentication details and profiles.
- **MongoDB**: Holds schemas for posts, comments, and notifications, allowing flexible and scalable data storage.

### Caching
Redis is employed to cache frequently accessed data, significantly improving the platform's performance. This reduces the load on the primary databases and ensures quicker data retrieval.

### Search Indexing
Elasticsearch is integrated for its robust full-text search capabilities. It indexes data from both MongoDB and PostgreSQL, enabling efficient and scalable search functionality across the platform.

### CI/CD Pipeline
The platform uses GitHub Actions for continuous integration and deployment. This ensures that all code changes are automatically tested and deployed, maintaining the platform's reliability and performance.

### Monitoring
Prometheus and Grafana are used for monitoring system performance. They provide real-time metrics and visualizations, helping to quickly identify and resolve any issues that arise.

## Setup Instructions
To set up the platform locally or in a production environment, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/1Elaigwu/social-media-platform.git
cd social-media-platform
```

### Setup and configure the databases:

- **PostgreSQL**: Edit the configuration files in `config/postgresql/`.
- **MongoDB**: Edit the configuration files in `config/mongodb/`.
- **Redis**: Edit the configuration files in `config/redis/`.

### Build and run the Docker containers:

```bash
docker-compose up --build
```

### Apply database migrations:

- **PostgreSQL**:
```bash
docker exec -it <postgresql_container_id> psql -U postgres -f /database/postgres_schema.sql
```

- **MongoDB**:
```bash
docker exec -it <mongodb_container_id> mongo /database/mongodb_schema.js
```

### Start the microservices:

```bash
cd services/user_service && npm install && npm start
cd services/post_service && npm install && npm start
cd services/comment_service && npm install && npm start
cd services/notification_service && npm install && npm start
```

### Access the platform:

- The application should now be accessible at http://localhost:3000.

## Code Snippets

### User Registration (User Service)
```javascript
// userController.js
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

### Creating a Post (Post Service)
```javascript
// postController.js
const createPost = async (req, res) => {
  const { userId, content } = req.body;
  try {
    const post = new Post({ userId, content });
    await post.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

### Adding a Comment (Comment Service)
```javascript
// commentController.js
const addComment = async (req, res) => {
  const { postId, userId, content } = req.body;
  try {
    const comment = new Comment({ postId, userId, content });
    await comment.save();
    res.status(201).json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

### Sending a Notification (Notification Service)
```javascript
// notificationController.js
const sendNotification = async (req, res) => {
  const { userId, message } = req.body;
  try {
    const notification = new Notification({ userId, message });
    await notification.save();
    res.status(201).json({ message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```
## Usage Examples
User Registration:
Endpoint: POST /api/users/register
Example Request:
```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "securepassword"
}
```

Create a Post:
Endpoint: POST /api/posts
Example Request:
```json
{
  "user_id": "123",
  "content": "Excited to share our latest project!"
}
```

Add a Comment:
Endpoint: POST /api/posts/{post_id}/comments
Example Request:
```json
{
  "user_id": "456",
  "content": "Great job! Can't wait to try it out."
}
```

Retrieve Notifications:
Endpoint: GET /api/notifications?user_id=123
Example Response:
```json
[
  {
    "id": "1",
    "message": "You have a new follower!",
    "timestamp": "2024-05-28T10:00:00Z"
  }
]
```

## Contrubuion
Contributions to enhance the system or improve documentation are welcome. Please submit pull requests or raise issues for discussion.

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute the code as long as you include the original license in your distribution.