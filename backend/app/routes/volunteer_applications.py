from flask import Blueprint, request, jsonify

from flask_jwt_extended import get_jwt_identity

from app.extensions import db

from app.models.volunteer_application import VolunteerApplication

from app.utils.decorators import (

    login_required,

    admin_required

)

volunteer_applications_bp = Blueprint(

    "applications",

    __name__,

    url_prefix="/applications"

)

@applications_bp.get("/")
@login_required
def get_applications():

    applications = VolunteerApplication.query.all()

    return jsonify(

        [

            application.to_dict()

            for application

            in applications

        ]

    )

@applications_bp.post("/")
@login_required
def apply():

    data = request.get_json()

    application = VolunteerApplication(

        volunteer_id=get_jwt_identity(),

        request_id=data["request_id"],

        message=data.get("message")

    )

    db.session.add(application)

    db.session.commit()

    return jsonify(

        application.to_dict()

    ),201