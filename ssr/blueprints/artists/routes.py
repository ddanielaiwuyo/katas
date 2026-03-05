from flask import Blueprint

bp = Blueprint("artists", __name__, url_prefix="/artists")

@bp.route("/", methods=["GET"])
def show_users():
    return {'stats': 200}

@bp.route("/", methods=["POST"])
def create_user():
    return {'stats': 201}

