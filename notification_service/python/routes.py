from flask import Blueprint, request, jsonify
from controllers.notificationController import get_notifications, create_notification

notification_routes = Blueprint('notification_routes', __name__)

@notification_routes.route('/', methods=['GET'])
def get_notifications_route():
    return get_notifications()

@notification_routes.route('/', methods=['POST'])
def create_notification_route():
    return create_notification(request)
