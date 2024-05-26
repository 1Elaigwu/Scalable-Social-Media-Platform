from flask import Flask
from routes import comment_routes

app = Flask(__name__)
app.register_blueprint(comment_routes, url_prefix='/comments')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)
