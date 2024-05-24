from flask import jsonify, request # type: ignore

def register_user(request):
    # Registration logic here
    return jsonify({'message': 'User registered'})

def login_user(request):
    # Login logic here
    return jsonify({'message': 'User logged in'})
