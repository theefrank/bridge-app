from app.extensions import db

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)

    requests = db.relationship(
        "Request",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    applications = db.relationship(
        "VolunteerApplication",
        back_populates="volunteer",
        cascade="all, delete-orphan"
    )
