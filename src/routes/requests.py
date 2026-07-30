from flask import Blueprint, jsonify
from app.models.request import Request

requests_bp = Blueprint(
    "requests",
    __name__
)

@requests_bp.get("/requests")
def get_requests():

    requests = Request.query.all()

    return jsonify([
        request.to_dict()
        for request in requests
    ])
@requests_bp.get("/requests/<int:id>")
def get_request(id):

    request = Request.query.get_or_404(id)

    return jsonify(request.to_dict())

@requests_bp.post("/requests")
def create_request():

    data = request.get_json()

    request_item = Request(
        title=data["title"],
        description=data["description"],
        category=data["category"],
        location=data["location"],
        user_id=data["user_id"],
        skill_id=data["skill_id"]
    )

    db.session.add(request_item)

    db.session.commit()

    return jsonify(
        request_item.to_dict()
    ), 201