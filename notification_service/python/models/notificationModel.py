from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime

client = MongoClient('mongodb://localhost:27017/')
db = client['notification_database']
notifications = db['notifications']

def create_notification(user_id, message):
    notification = {
        "notification_id": ObjectId(),
        "user_id": ObjectId(user_id),
        "message": message,
        "read": False,
        "created_at": datetime.utcnow()
    }
    return notifications.insert_one(notification)

def mark_as_read(notification_id):
    return notifications.update_one({"notification_id": ObjectId(notification_id)}, {"$set": {"read": True}})
