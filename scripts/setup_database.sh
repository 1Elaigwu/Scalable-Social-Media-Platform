#!/bin/bash

# Set up PostgreSQL
echo "Setting up PostgreSQL..."
sudo cp "$(dirname "$0")/../config/postgresql/postgresql.conf" /etc/postgresql/12/main/postgresql.conf
sudo cp "$(dirname "$0")/../config/postgresql/pg_hba.conf" /etc/postgresql/12/main/pg_hba.conf
sudo service postgresql restart

# Set up MongoDB
echo "Setting up MongoDB..."
sudo cp "$(dirname "$0")/../config/mongodb/mongod.conf" /etc/mongod.conf
sudo service mongod restart

echo "Database setup complete."
