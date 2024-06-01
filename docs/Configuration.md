## Configuration

### Environment Variables
- **DB_HOST**: Database host address
- **DB_PORT**: Database port
- **DB_USER**: Database username
- **DB_PASSWORD**: Database password
- **REDIS_HOST**: Redis host address
- **REDIS_PORT**: Redis port
- **ELASTICSEARCH_HOST**: Elasticsearch host address

### Docker Compose
Use `docker-compose.yml` to define and configure services:
```yaml
version: '3'
services:
  user_service:
    build: ./user_service
    environment:
      - DB_HOST=${DB_HOST}
      - DB_PORT=${DB_PORT}
      - DB_USER=${DB_USER}
      - DB_PASSWORD=${DB_PASSWORD}
  post_service:
    build: ./post_service
    environment:
      - DB_HOST=${DB_HOST}
      - DB_PORT=${DB_PORT}
      - DB_USER=${DB_USER}
      - DB_PASSWORD=${DB_PASSWORD}
  ...
networks:
  default:
    external:
      name: my-network
```

### Kubernetes Config
Define Kubernetes manifests:

- **Deployment**: deployments/service-deployment.yaml
- **Service**: services/service.yaml
- **ConfigMap**: config/configmap.yaml
- **Secret**: secrets/secret.yaml

Example Deployment Manifest
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        env:
        - name: DB_HOST
          valueFrom:
            configMapKeyRef:
              name: database-config
              key: db_host
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: database-secrets
              key: db_password
        ports:
        - containerPort: 8080`
```