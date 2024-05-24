from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime

client = MongoClient('mongodb://localhost:27017/')
db = client['post_database']
posts = db['posts']

def create_post(user_id, content, media=[], likes=0, comments=[]):
    post = {
        "post_id": ObjectId(),
        "user_id": ObjectId(user_id),
        "content": content,
        "media": media,
        "likes": likes,
        "comments": comments,
        "created_at": datetime.utcnow()
    }
    return posts.insert_one(post)

def add_comment(post_id, user_id, content):
    comment = {
        "comment_id": ObjectId(),
        "user_id": ObjectId(user_id),
        "content": content,
        "created_at": datetime.utcnow()
    }
    return posts.update_one({"post_id": ObjectId(post_id)}, {"$push": {"comments": comment}})
