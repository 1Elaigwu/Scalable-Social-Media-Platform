from flask import Flask
from routes import post_routes
import os
import psycopg2
from pymongo import MongoClient

app = Flask(__name__)
app.register_blueprint(post_routes)

# PostgreSQL connection
POSTGRES_HOST = os.environ.get('POSTGRES_HOST', 'postgres')
POSTGRES_PORT = os.environ.get('POSTGRES_PORT', '5432')
POSTGRES_DB = os.environ.get('POSTGRES_DB', 'social_media_platform')
POSTGRES_USER = os.environ.get('POSTGRES_USER', 'postgres')
POSTGRES_PASSWORD = os.environ.get('POSTGRES_PASSWORD', 'postgres')

conn = psycopg2.connect(
    host=POSTGRES_HOST,
    port=POSTGRES_PORT,
    dbname=POSTGRES_DB,
    user=POSTGRES_USER,
    password=POSTGRES_PASSWORD
)

# MongoDB connection
MONGO_HOST = os.environ.get('MONGO_HOST', 'mongo')
MONGO_PORT = int(os.environ.get('MONGO_PORT', 27017))
mongo_client = MongoClient(MONGO_HOST, MONGO_PORT)
mongo_db = mongo_client[POSTGRES_DB]

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
