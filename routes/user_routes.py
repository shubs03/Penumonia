from flask import Blueprint
from controllers.user_controller import UserController

user_bp = Blueprint('user', __name__)

user_bp.route('/profile', methods=['GET'])(UserController.get_profile)
user_bp.route('/profile', methods=['PUT'])(UserController.update_profile)
user_bp.route('/change-password', methods=['POST'])(UserController.change_password)

