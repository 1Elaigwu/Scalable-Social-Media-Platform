#!/bin/bash

# Set up Elasticsearch
echo "Setting up Elasticsearch..."
sudo cp "$(dirname "$0")/../config/elasticsearch/elasticsearch.yml" /etc/elasticsearch/elasticsearch.yml
sudo service elasticsearch restart

echo "Elasticsearch setup complete."
