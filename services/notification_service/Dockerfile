# Use an official Node.js image as the base image
FROM node:18.19.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3003

# Define the command to run the application
CMD ["node", "server.js"]
