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