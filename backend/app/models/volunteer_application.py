from datetime import datetime

from app.extensions import db


class VolunteerApplication(db.Model):
    __tablename__ = "volunteer_applications"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    status = db.Column(
        db.String(20),
        default="Pending"
    )

    message = db.Column(
        db.Text
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    volunteer_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    request_id = db.Column(
        db.Integer,
        db.ForeignKey("requests.id"),
        nullable=False
    )

    volunteer = db.relationship(
        "User",
        back_populates="applications"
    )

    request = db.relationship(
        "Request",
        back_populates="applications"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "status": self.status,
            "message": self.message,
            "volunteer_id": self.volunteer_id,
            "request_id": self.request_id,
            "created_at": self.created_at,
        }
    