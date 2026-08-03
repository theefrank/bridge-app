import os

from app import app, db
from app.models import User, Skill, Request, Review
from werkzeug.security import generate_password_hash

with app.app_context():
    db.drop_all()
    db.create_all()

    should_seed_demo_data = os.getenv("SEED_DEMO_DATA", "false").lower() in {"1", "true", "yes", "on"}

    if not should_seed_demo_data:
        print("Database initialized successfully. No demo data was created.")
        raise SystemExit(0)

    admin = User(username="admin", email="admin@example.com", password_hash=generate_password_hash("admin123"), role="admin")
    volunteer = User(username="volunteer", email="volunteer@example.com", password_hash=generate_password_hash("volunteer123"), role="user")
    db.session.add_all([admin, volunteer])
    db.session.flush()

    skill1 = Skill(name="Web Development", description="Build websites", category="Tech")
    skill2 = Skill(name="Teaching", description="Tutor students", category="Education")
    db.session.add_all([skill1, skill2])
    db.session.flush()

    request1 = Request(title="Need a landing page", description="Create a simple landing page for a local event", location="Nairobi", user_id=admin.id, skill_id=skill1.id)
    request2 = Request(title="Need English tutoring", description="Support a student with reading practice", location="Kisumu", user_id=volunteer.id, skill_id=skill2.id)
    db.session.add_all([request1, request2])
    db.session.flush()

    review1 = Review(rating=5, comment="Excellent support", user_id=volunteer.id, request_id=request1.id)
    review2 = Review(rating=4, comment="Helpful and responsive", user_id=admin.id, request_id=request2.id)
    db.session.add_all([review1, review2])
    db.session.commit()
    print("Demo seed data created successfully")
