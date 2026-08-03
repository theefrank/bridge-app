from datetime import datetime, timedelta, timezone
from functools import wraps

import jwt
from flask import jsonify, request
from werkzeug.security import check_password_hash, generate_password_hash

from app import app, db
from app.models import Application, Request, Review, Skill, User


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        auth_header = request.headers.get("Authorization", "")

        print("AUTH HEADER:", auth_header)

        if auth_header.startswith("Bearer "):
            token = auth_header.split(" ", 1)[1]
        elif auth_header:
            token = auth_header

        print("TOKEN:", token)

        if not token:
            return jsonify({"error": "Token is missing"}), 401

        try:
            payload = jwt.decode(
                token,
                app.config["JWT_SECRET_KEY"],
                algorithms=["HS256"],
            )

            print("PAYLOAD:", payload)

            current_user = User.query.get(int(payload["sub"]))

            if not current_user:
                return jsonify({"error": "Session expired. Please log in again."}), 401

        except (jwt.InvalidTokenError, ValueError, KeyError) as e:
            print("JWT ERROR:", repr(e))
            return jsonify({"error": "Token is invalid"}), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


@app.route("/auth/register", methods=["POST"])
def register():
    payload = request.get_json(silent=True) or {}
    if not payload.get("username") or not payload.get("email") or not payload.get("password"):
        return jsonify({"error": "username, email and password are required"}), 400

    if User.query.filter((User.email == payload["email"]) | (User.username == payload["username"])).first():
        return jsonify({"error": "User already exists"}), 400

    user = User(
        username=payload["username"],
        email=payload["email"],
        password_hash=generate_password_hash(payload["password"]),
        role=payload.get("role", "user"),
        full_name=payload.get("full_name") or payload.get("username"),
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered", "user": user.to_dict()}), 201


@app.route("/auth/login", methods=["POST"])
def login():
    payload = request.get_json(silent=True) or {}

    print("Payload:", payload)

    user = User.query.filter_by(email=payload.get("email")).first()

    print("User found:", user)
    if user:
        print("Stored email:", user.email)
        print(
            "Password check:",
            check_password_hash(
                user.password_hash,
                payload.get("password", "")
            ),
        )

    if not user or not check_password_hash(
        user.password_hash,
        payload.get("password", "")
    ):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode(
        {
            "sub": str(user.id),
            "exp": datetime.now(timezone.utc) + timedelta(hours=2),
        },
        app.config["JWT_SECRET_KEY"],
        algorithm="HS256",
    )

    return jsonify({
        "token": token,
        "user": user.to_dict(),
    })


@app.route("/users", methods=["GET"])
@token_required
def list_users(current_user):
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])


@app.route("/users/<int:user_id>", methods=["PUT"])
@token_required
def update_user(current_user, user_id):
    user = User.query.get_or_404(user_id)
    payload = request.get_json(silent=True) or {}

    if payload.get("username"):
        user.username = payload["username"]
    if payload.get("email"):
        user.email = payload["email"]
    if payload.get("role"):
        user.role = payload["role"]
    if payload.get("full_name") is not None:
        user.full_name = payload["full_name"]
    if payload.get("location") is not None:
        user.location = payload["location"]
    if payload.get("bio") is not None:
        user.bio = payload["bio"]

    if payload.get("skills") is not None:
        skills_data = payload["skills"]
        if isinstance(skills_data, str):
            skill_names = [name.strip() for name in skills_data.split(",") if name.strip()]
        else:
            skill_names = [str(name).strip() for name in skills_data if str(name).strip()]

        user.skills.clear()
        for skill_name in skill_names:
            skill = Skill.query.filter_by(name=skill_name).first()
            if not skill:
                skill = Skill(name=skill_name, description=f"Skill added for {user.username}", category="Community")
                db.session.add(skill)
                db.session.flush()
            user.skills.append(skill)

    profile_fields = [user.full_name or user.username, user.location, user.bio]
    user.profile_completed = all(field and str(field).strip() for field in profile_fields)

    db.session.commit()
    return jsonify(user.to_dict())


@app.route("/users/<int:user_id>", methods=["DELETE"])
@token_required
def delete_user(current_user, user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted"})


@app.route("/skills", methods=["GET"])
def list_skills():
    skills = Skill.query.all()
    return jsonify([skill.to_dict() for skill in skills])


@app.route("/skills", methods=["POST"])
@token_required
def create_skill(current_user):
    payload = request.get_json(silent=True) or {}
    if not payload.get("name"):
        return jsonify({"error": "name is required"}), 400
    skill = Skill(name=payload["name"], description=payload.get("description"), category=payload.get("category"))
    db.session.add(skill)
    db.session.commit()
    return jsonify(skill.to_dict()), 201


@app.route("/skills/<int:skill_id>", methods=["PUT"])
@token_required
def update_skill(current_user, skill_id):
    skill = Skill.query.get_or_404(skill_id)
    payload = request.get_json(silent=True) or {}
    if payload.get("name"):
        skill.name = payload["name"]
    if payload.get("description") is not None:
        skill.description = payload["description"]
    if payload.get("category") is not None:
        skill.category = payload["category"]
    db.session.commit()
    return jsonify(skill.to_dict())


@app.route("/skills/<int:skill_id>", methods=["DELETE"])
@token_required
def delete_skill(current_user, skill_id):
    skill = Skill.query.get_or_404(skill_id)
    db.session.delete(skill)
    db.session.commit()
    return jsonify({"message": "Skill deleted"})


@app.route("/requests", methods=["GET"])
def list_requests():
    requests = Request.query.all()
    return jsonify([request.to_dict() for request in requests])


@app.route("/requests", methods=["POST"])
@token_required
def create_request(current_user):
    payload = request.get_json(silent=True) or {}
    if not payload.get("title") or not payload.get("description") or not payload.get("skill_id"):
        return jsonify({"error": "title, description and skill_id are required"}), 400
    request_item = Request(
        title=payload["title"],
        description=payload["description"],
        location=payload.get("location"),
        user_id=current_user.id,
        skill_id=payload["skill_id"],
        status=payload.get("status", "pending"),
    )
    db.session.add(request_item)
    db.session.commit()

    print("Saved request ID:", request_item.id)
    print("Saved for user:", request_item.user_id)
    print("=" * 40)

    return jsonify(request_item.to_dict()), 201


@app.route("/requests/<int:request_id>", methods=["PUT"])
@token_required
def update_request(current_user, request_id):
    user_request = Request.query.get_or_404(request_id)

    if user_request.user_id != current_user.id:
        return jsonify({"error": "Unauthorized"}), 403

    data = request.get_json()   # <-- Flask request object

    user_request.title = data.get("title", user_request.title)
    user_request.description = data.get(
        "description",
        user_request.description,
    )
    user_request.location = data.get(
        "location",
        user_request.location,
    )

    if data.get("skill_id"):
        user_request.skill_id = data["skill_id"]

    db.session.commit()

    return jsonify(user_request.to_dict()), 200


@app.route("/requests/<int:request_id>", methods=["DELETE"])
@token_required
def delete_request(current_user, request_id):
    request = Request.query.get_or_404(request_id)

    if request.user_id != current_user.id:
        return jsonify({"error": "Unauthorized"}), 403

    db.session.delete(request)
    db.session.commit()

    return jsonify({
        "message": "Request deleted successfully."
    }), 200


@app.route("/reviews", methods=["GET"])
def list_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])


@app.route("/reviews", methods=["POST"])
@token_required
def create_review(current_user):
    payload = request.get_json(silent=True) or {}
    if not payload.get("request_id") or not payload.get("rating"):
        return jsonify({"error": "request_id and rating are required"}), 400
    review = Review(
        rating=payload["rating"],
        comment=payload.get("comment"),
        user_id=current_user.id,
        request_id=payload["request_id"],
    )
    db.session.add(review)
    db.session.commit()
    return jsonify(review.to_dict()), 201


@app.route("/reviews/<int:review_id>", methods=["PUT"])
@token_required
def update_review(current_user, review_id):
    review = Review.query.get_or_404(review_id)
    payload = request.get_json(silent=True) or {}
    if payload.get("rating") is not None:
        review.rating = payload["rating"]
    if payload.get("comment") is not None:
        review.comment = payload["comment"]
    db.session.commit()
    return jsonify(review.to_dict())


@app.route("/reviews/<int:review_id>", methods=["DELETE"])
@token_required
def delete_review(current_user, review_id):
    review = Review.query.get_or_404(review_id)
    db.session.delete(review)
    db.session.commit()
    return jsonify({"message": "Review deleted"})


@app.route("/applications", methods=["GET"])
@token_required
def list_applications(current_user):
    applications = Application.query.filter_by(user_id=current_user.id).order_by(Application.applied_at.desc()).all()
    return jsonify([application.to_dict() for application in applications])


@app.route("/applications", methods=["POST"])
@token_required
def create_application(current_user):
    payload = request.get_json(silent=True) or {}
    required = ("opportunity_id", "opportunity_title", "message")
    if any(not payload.get(field) for field in required):
        return jsonify({"error": "opportunity_id, opportunity_title and message are required"}), 400

    existing = Application.query.filter_by(
        user_id=current_user.id,
        opportunity_id=str(payload["opportunity_id"]),
    ).first()
    if existing:
        return jsonify({"error": "You have already applied for this opportunity"}), 409

    application = Application(
        opportunity_id=str(payload["opportunity_id"]),
        opportunity_title=payload["opportunity_title"],
        location=payload.get("location"),
        message=payload["message"].strip(),
        user_id=current_user.id,
    )
    db.session.add(application)
    db.session.commit()
    return jsonify(application.to_dict()), 201

@app.route("/dashboard", methods=["GET"])
@token_required
def dashboard(current_user):
    today = datetime.utcnow().date()  # noqa: DTZ003

    requests_today = Request.query.filter(
        Request.user_id == current_user.id,
        db.func.date(Request.created_at) == today
    ).count()

    applications_today = Application.query.filter(
        Application.user_id == current_user.id,
        db.func.date(Application.applied_at) == today
    ).count()

    reviews_today = Review.query.filter(
        Review.user_id == current_user.id,
        db.func.date(Review.created_at) == today
    ).count()

    return jsonify({
        "requestsCreated": Request.query.filter_by(user_id=current_user.id).count(),
        "applications": Application.query.filter_by(user_id=current_user.id).count(),
        "reviews": Review.query.filter_by(user_id=current_user.id).count(),

        "requestsToday": requests_today,
        "applicationsToday": applications_today,
        "reviewsToday": reviews_today,
    })

@app.route("/my-requests", methods=["GET"])
@token_required
def my_requests(current_user):
    requests = (
        Request.query
        .filter_by(user_id=current_user.id)
        .order_by(Request.created_at.desc())
        .all()
    )

    print("Current user:", current_user.id)
    print("Requests found:", len(requests))

    for request in requests:
        print(request.id, request.title, request.user_id)

    return jsonify([request.to_dict() for request in requests])

@app.route("/activity", methods=["GET"])
@token_required
def activity(current_user):
    activities = []

    user_requests = (
        Request.query.filter_by(user_id=current_user.id)
        .order_by(Request.created_at.desc())
        .limit(5)
        .all()
    )

    for user_request in user_requests:
        activities.append({
        "title": f"Created request: {user_request.title}",
        "description": user_request.status.capitalize(),
        "created_at": user_request.created_at.isoformat(),
    })

    applications = (
        Application.query.filter_by(user_id=current_user.id)
        .order_by(Application.applied_at.desc())
        .limit(5)
        .all()
    )

    for application in applications:
        activities.append({
            "title": f"Applied for {application.opportunity_title}",
            "description": application.status,
            "created_at": application.applied_at.isoformat(),
        })

    reviews = (
        Review.query.filter_by(user_id=current_user.id)
        .order_by(Review.created_at.desc())
        .limit(5)
        .all()
    )

    for review in reviews:
        activities.append({
            "title": "Submitted a review",
            "description": f"{review.rating}/5 stars",
            "created_at": review.created_at.isoformat(),
        })

    activities.sort(
        key=lambda activity: activity["created_at"],
        reverse=True,
    )

    return jsonify(activities[:6])

@app.route("/opportunities", methods=["GET"])
def opportunities():

    requests = (
        Request.query
        .filter_by(status="pending")
        .all()
    )

    return jsonify([
        request.to_dict()
        for request in requests
    ])    
