from flask import Blueprint, request, jsonify
from pymongo import MongoClient

post_routes = Blueprint('post_routes', __name__)

client = MongoClient('localhost', 27017)
db = client['posts_db']

@post_routes.route('/posts', methods=['GET'])
def get_posts():
    posts = list(db.posts.find())
    return jsonify(posts)

@post_routes.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    db.posts.insert_one(data)
    return 'Post created', 201
