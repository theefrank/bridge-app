from flask import Blueprint, request, jsonify

from app.extensions import db

from app.models.skill import Skill

from app.utils.decorators import admin_required

skills_bp = Blueprint(
    "skills",
    __name__,
    url_prefix="/skills"
)
