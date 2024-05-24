from flask import Blueprint, request, jsonify # type: ignore
from bson.objectid import ObjectId # type: ignore
from pymongo import MongoClient # type: ignore
from datetime import datetime

client = MongoClient('mongodb://localhost:27017/')
db = client['post_database']
posts = db['posts']

post_blueprint = Blueprint('posts', __name__)

@post_blueprint.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    user_id = data.get('user_id')
    content = data.get('content')
    media = data.get('media', [])

    post = {
        "post_id": ObjectId(),
        "user_id": ObjectId(user_id),
        "content": content,
        "media": media,
        "likes": 0,
        "comments": [],
        "created_at": datetime.utcnow()
    }

    result = posts.insert_one(post)
    new_post = posts.find_one({"_id": result.inserted_id})

    return jsonify(new_post), 201

@post_blueprint.route('/posts', methods=['GET'])
def get_all_posts():
    all_posts = posts.find()
    post_list = [post for post in all_posts]
    return jsonify(post_list), 200

@post_blueprint.route('/posts/<post_id>', methods=['GET'])
def get_post_by_id(post_id):
    post = posts.find_one({"post_id": ObjectId(post_id)})

    if not post:
        return jsonify({"message": "Post not found"}), 404

    return jsonify(post), 200

@post_blueprint.route('/posts/<post_id>/comments', methods=['POST'])
def add_comment(post_id):
    data = request.get_json()
    user_id = data.get('user_id')
    content = data.get('content')

    comment = {
        "comment_id": ObjectId(),
        "user_id": ObjectId(user_id),
        "content": content,
        "created_at": datetime.utcnow()
    }

    result = posts.update_one(
        {"post_id": ObjectId(post_id)},
        {"$push": {"comments": comment}}
    )

    if result.matched_count == 0:
        return jsonify({"message": "Post not found"}), 404

    post = posts.find_one({"post_id": ObjectId(post_id)})
    return jsonify(post), 200
