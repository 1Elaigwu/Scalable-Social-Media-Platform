from flask import jsonify, request
from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime

client = MongoClient('mongodb://localhost:27017/')
db = client['social_media_platform']
notifications = db['notifications']

def get_notifications():
    all_notifications = list(notifications.find())
    return jsonify(all_notifications)

def create_notification(req):
    data = req.get_json()
    notification = {
        "userId": ObjectId(data['userId']),
        "message": data['message'],
        "createdAt": datetime.utcnow()
    }
    notifications.insert_one(notification)
    return jsonify(notification), 201
