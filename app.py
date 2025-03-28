from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, jwt, migrate
from routes.auth_routes import auth_bp
from routes.user_routes import user_bp
from routes.xray_routes import xray_bp
from models.user import User
from models.xray import Xray
from models.result import Result

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    
    # Enable CORS
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    
    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(user_bp, url_prefix='/api/users')
    app.register_blueprint(xray_bp, url_prefix='/api/xrays')
    
    # Create database tables
    @app.before_first_request
    def create_tables():
        db.create_all()
    
    @app.route('/')
    def index():
        return {"message": "Welcome to PneumoDetect API"}
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)

