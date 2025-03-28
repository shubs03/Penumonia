from flask import Blueprint
from controllers.xray_controller import XrayController

xray_bp = Blueprint('xray', __name__)

xray_bp.route('/upload', methods=['POST'])(XrayController.upload_xray)
xray_bp.route('/', methods=['GET'])(XrayController.get_user_xrays)
xray_bp.route('/<int:xray_id>', methods=['GET'])(XrayController.get_xray)

