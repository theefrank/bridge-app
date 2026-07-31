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

    user = db.relationship(
        "User",
        back_populates="requests"
    )

    skill = db.relationship(
        "Skill",
        back_populates="requests"
    )

    applications = db.relationship(
        "VolunteerApplication",
        back_populates="request",
        cascade="all, delete-orphan"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "status": self.status,
            "location": self.location,
            "user_id": self.user_id,
            "volunteer_id": self.volunteer_id,
            "skill_id": self.skill_id,
            "created_at": self.created_at,
            "completed_at": self.completed_at,
        }