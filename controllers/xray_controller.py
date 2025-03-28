from flask import request, jsonify, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
from werkzeug.utils import secure_filename
from models.user import User
from models.xray import Xray
from models.result import Result
from extensions import db
from services.ml_service import MLService
import os
import uuid
import time

class XrayController:
    @staticmethod
    def allowed_file(filename):
        return '.' in filename and \
               filename.rsplit('.', 1)[1].lower() in current_app.config['ALLOWED_EXTENSIONS']
    
    @staticmethod
    @jwt_required()
    def upload_xray():
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        # Check if the post request has the file part
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'}), 400
        
        file = request.files['file']
        
        # If user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        
        if file and XrayController.allowed_file(file.filename):
            # Generate a secure filename with UUID to prevent collisions
            original_filename = secure_filename(file.filename)
            file_extension = original_filename.rsplit('.', 1)[1].lower()
            unique_filename = f"{uuid.uuid4().hex}.{file_extension}"
            
            # Create upload directory if it doesn't exist
            os.makedirs(current_app.config['UPLOAD_FOLDER'], exist_ok=True)
            
            # Save the file
            file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], unique_filename)
            file.save(file_path)
            
            # Create Xray record
            try:
                new_xray = Xray(
                    filename=unique_filename,
                    original_filename=original_filename,
                    file_path=file_path,
                    file_size=os.path.getsize(file_path),
                    file_type=file_extension,
                    user_id=current_user_id
                )
                
                db.session.add(new_xray)
                db.session.commit()
                
                # Process the X-ray with ML model
                start_time = time.time()
                ml_service = MLService()
                prediction = ml_service.predict(file_path)
                processing_time = time.time() - start_time
                
                # Create Result record
                new_result = Result(
                    xray_id=new_xray.id,
                    diagnosis=prediction['diagnosis'],
                    confidence=prediction['confidence'],
                    processing_time=processing_time
                )
                
                if prediction['diagnosis'] == 'positive' and 'areas' in prediction:
                    new_result.set_areas(prediction['areas'])
                
                db.session.add(new_result)
                db.session.commit()
                
                return jsonify({
                    'message': 'X-ray uploaded and analyzed successfully',
                    'xray': new_xray.to_dict()
                }), 201
                
            except Exception as e:
                db.session.rollback()
                return jsonify({'error': str(e)}), 500
        
        return jsonify({'error': 'File type not allowed'}), 400
    
    @staticmethod
    @jwt_required()
    def get_user_xrays():
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        # Get all X-rays for the current user
        xrays = Xray.query.filter_by(user_id=current_user_id).order_by(Xray.created_at.desc()).all()
        
        return jsonify({
            'xrays': [xray.to_dict() for xray in xrays]
        }), 200
    
    @staticmethod
    @jwt_required()
    def get_xray(xray_id):
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        # Get the X-ray
        xray = Xray.query.get(xray_id)
        
        if not xray:
            return jsonify({'error': 'X-ray not found'}), 404
        
        # Check if the X-ray belongs to the current user
        if xray.user_id != current_user_id:
            return jsonify({'error': 'Unauthorized access to X-ray'}), 403
        
        return jsonify({
            'xray': xray.to_dict()
        }), 200

