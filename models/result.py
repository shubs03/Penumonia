from extensions import db
from datetime import datetime
import json

class Result(db.Model):
    __tablename__ = 'results'
    
    id = db.Column(db.Integer, primary_key=True)
    xray_id = db.Column(db.Integer, db.ForeignKey('xrays.id'), nullable=False)
    diagnosis = db.Column(db.String(50), nullable=False)  # 'positive' or 'negative'
    confidence = db.Column(db.Float, nullable=False)  # Confidence score (0-100)
    areas = db.Column(db.Text, nullable=True)  # JSON string of affected areas
    processing_time = db.Column(db.Float, nullable=False)  # Processing time in seconds
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def set_areas(self, areas_list):
        self.areas = json.dumps(areas_list)
    
    def get_areas(self):
        return json.loads(self.areas) if self.areas else []
    
    def to_dict(self):
        return {
            'id': self.id,
            'xray_id': self.xray_id,
            'diagnosis': self.diagnosis,
            'confidence': self.confidence,
            'areas': self.get_areas(),
            'processing_time': self.processing_time,
            'created_at': self.created_at.isoformat()
        }

