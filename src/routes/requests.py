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

@requests_bp.put("/requests/<int:id>")
def update_request(id):

    request_item = Request.query.get_or_404(id)

    data = request.get_json()

    request_item.title = data.get(
        "title",
        request_item.title
    )

    request_item.description = data.get(
        "description",
        request_item.description
    )

    request_item.category = data.get(
        "category",
        request_item.category
    )

    request_item.location = data.get(
        "location",
        request_item.location
    )

    request_item.status = data.get(
        "status",
        request_item.status
    )

    db.session.commit()

    return jsonify(
        request_item.to_dict()
    )

@requests_bp.delete("/requests/<int:id>")
def delete_request(id):

    request_item = Request.query.get_or_404(id)

    db.session.delete(request_item)

    db.session.commit()

    return jsonify({
        "message": "Request deleted"
    })

@requests_bp.patch(
    "/requests/<int:id>/accept"
)
def accept_request(id):

    request_item = Request.query.get_or_404(id)

    data = request.get_json()

    request_item.status = "Approved"

    request_item.volunteer_id = data[
        "volunteer_id"
    ]

    db.session.commit()

    return jsonify(
        request_item.to_dict()
    )
