#!/bin/bash

# Deploy services using Docker Compose
echo "Deploying services using Docker Compose..."
cd ../config/docker
docker-compose up -d

# Deploy to Kubernetes
echo "Deploying services to Kubernetes..."
cd ../kubernetes
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

echo "Deployment complete."
