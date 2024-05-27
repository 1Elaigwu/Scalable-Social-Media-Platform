from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime

client = MongoClient('mongodb://localhost:27017/')
db = client['comment_database']
comments = db['comments']

def create_comment(post_id, user_id, content):
    comment = {
        "comment_id": ObjectId(),
        "post_id": ObjectId(post_id),
        "user_id": ObjectId(user_id),
        "content": content,
        "created_at": datetime.utcnow()
    }
    return comments.insert_one(comment)

def get_comments_for_post(post_id):
    return list(comments.find({"post_id": ObjectId(post_id)}))
