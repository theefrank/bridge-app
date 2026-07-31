from flask import Blueprint, request, jsonify

from app.extensions import db

from app.models.skill import Skill

from app.utils.decorators import admin_required

skills_bp = Blueprint(
    "skills",
    __name__,
    url_prefix="/skills"
)
@skills_bp.get("/<int:id>")
def get_skill(id):

    skill = Skill.query.get_or_404(id)

    return jsonify(
        skill.to_dict()
    )

@skills_bp.post("/")
@admin_required
def create_skill():

    data = request.get_json()

    skill = Skill(

        name=data["name"],

        category=data["category"],

        description=data.get("description")

    )

    db.session.add(skill)

    db.session.commit()

    return jsonify(
        skill.to_dict()
    ),201

