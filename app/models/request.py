from datetime import datetime
from app.extensions import db

class Request(db.Model):
    __tablename__ = "requests"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(120), nullable=False)

    description = db.Column(db.Text, nullable=False)

    category = db.Column(db.String(80), nullable=False)

    status = db.Column(
        db.String(20),
        default="Pending"
    )

    location = db.Column(db.String(120))

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    completed_at = db.Column(
        db.DateTime,
        nullable=True
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    volunteer_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=True
    )

    skill_id = db.Column(
        db.Integer,
        db.ForeignKey("skills.id"),
        nullable=False
    )