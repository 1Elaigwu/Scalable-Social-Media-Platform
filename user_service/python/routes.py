from flask import Blueprint, request, jsonify
import psycopg2

user_routes = Blueprint('user_routes', __name__)

conn = psycopg2.connect(
    dbname="users_db",
    user="postgres",
    password="password",
    host="localhost"
)
cur = conn.cursor()

@user_routes.route('/users', methods=['GET'])
def get_users():
    cur.execute("SELECT * FROM users")
    users = cur.fetchall()
    return jsonify(users)

@user_routes.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    cur.execute("INSERT INTO users (username, email, password_hash) VALUES (%s, %s, %s)", (data['username'], data['email'], data['password_hash']))
    conn.commit()
    return 'User created', 201
