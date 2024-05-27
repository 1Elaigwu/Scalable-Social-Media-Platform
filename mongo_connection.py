import pymongo # type: ignore
import time

mongo_uri = "mongodb://localhost:27017/"
max_retry_count = 5

def connect_with_retry():
    retry_count = 0
    connected = False
    while not connected and retry_count < max_retry_count:
        try:
            client = pymongo.MongoClient(mongo_uri)
            # Attempt to access a collection to ensure connection
            client.list_database_names()
            print("Connected to MongoDB!")
            connected = True
            return client
        except pymongo.errors.ConnectionFailure as e:
            print(f"Error connecting to MongoDB: {str(e)}")
            retry_count += 1
            wait_time = 2 ** retry_count  # Exponential backoff
            print(f"Retrying in {wait_time} seconds...")
            time.sleep(wait_time)
    if not connected:
        print("Failed to connect to MongoDB after maximum retry attempts.")
        exit(1)  # Graceful shutdown

def main():
    client = connect_with_retry()
    # Use the connected client for MongoDB operations

if __name__ == "__main__":
    main()
