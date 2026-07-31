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

@skills_bp.put("/<int:id>")
@admin_required
def update_skill(id):

    skill = Skill.query.get_or_404(id)

    data = request.get_json()

    skill.name = data.get(
        "name",
        skill.name
    )

    skill.category = data.get(
        "category",
        skill.category
    )

    skill.description = data.get(
        "description",
        skill.description
    )

    db.session.commit()

    return jsonify(
        skill.to_dict()
    )
@skills_bp.delete("/<int:id>")
@admin_required
def delete_skill(id):

    skill = Skill.query.get_or_404(id)

    db.session.delete(skill)

    db.session.commit()

    return jsonify({

        "message":"Skill deleted"

    })