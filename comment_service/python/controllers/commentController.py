from flask import jsonify, request
from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime

client = MongoClient('mongodb://localhost:27017/')
db = client['social_media_platform']
comments = db['comments']

def get_comments():
    all_comments = list(comments.find())
    return jsonify(all_comments)

def create_comment(req):
    data = req.get_json()
    comment = {
        "postId": ObjectId(data['postId']),
        "userId": ObjectId(data['userId']),
        "content": data['content'],
        "createdAt": datetime.utcnow()
    }
    comments.insert_one(comment)
    return jsonify(comment), 201
