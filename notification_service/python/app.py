from flask import Flask
from routes import notification_routes

app = Flask(__name__)
app.register_blueprint(notification_routes, url_prefix='/notifications')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)
