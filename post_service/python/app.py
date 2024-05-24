from flask import Flask
from routes import post_routes

app = Flask(__name__)
app.register_blueprint(post_routes)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
