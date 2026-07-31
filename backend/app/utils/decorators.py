from functools import wraps

from flask import jsonify

from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
)

from app.extensions import db
from app.models.user import User

def admin_required(fn):

    @wraps(fn)
    @jwt_required()

    def wrapper(*args, **kwargs):

        user = db.session.get(
            User,
            get_jwt_identity()
        )

        if not user:

            return jsonify({
                "error": "User not found"
            }),404

        if user.role != "admin":

            return jsonify({
                "error":"Admin only"
            }),403

        return fn(*args, **kwargs)

    return wrapper

def volunteer_required(fn):

    @wraps(fn)
    @jwt_required()

    def wrapper(*args, **kwargs):

        user = db.session.get(
            User,
            get_jwt_identity()
        )

        if not user:

            return jsonify({
                "error":"User not found"
            }),404

        if user.role != "volunteer":

            return jsonify({
                "error":"Volunteer only"
            }),403

        return fn(*args, **kwargs)

    return wrapper

def login_required(fn):

    @wraps(fn)
    @jwt_required()

    def wrapper(*args, **kwargs):

        return fn(*args, **kwargs)

    return wrapper