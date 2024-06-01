## Setup Instructions
Follow these steps to set up the Scalable Social Media Platform on your local environment:

### Clone Repository:
Clone the repository from GitHub to your local machine:

```bash
git clone https://github.com/1Elaigwu/social-media-platform.git
```

### Install Dependencies:
Navigate to each service directory (user_service, post_service, comment_service, notification_service) and 

### install dependencies:
```bash
cd user_service
npm install
```

Repeat this process for the other service directories.

### Database Setup:
Ensure that PostgreSQL, MongoDB, Redis, and Elasticsearch are installed and running on your system. Follow the official documentation for installation guides:

- PostgreSQL
- MongoDB
- Redis
- Elasticsearch

### Environment Configuration:
Set up environment variables for each service. These variables typically include database credentials, API keys, and any other configuration settings required by the services. You can use a .env file or set them directly in your environment.

### Build Docker Containers:
If you're using Docker, build the containers using docker-compose:
```bash
docker-compose up --build
```

This command will build the Docker containers defined in the docker-compose.yml file and start the services.

### Start Services:
Once the containers are built and running, you can access the services locally. Depending on your setup, you can use Docker and Kubernetes to manage and orchestrate the services.
