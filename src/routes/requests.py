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