from flask import Blueprint, request, jsonify
from controllers.commentController import get_comments, create_comment

comment_routes = Blueprint('comment_routes', __name__)

@comment_routes.route('/', methods=['GET'])
def get_comments_route():
    return get_comments()

@comment_routes.route('/', methods=['POST'])
def create_comment_route():
    return create_comment(request)
