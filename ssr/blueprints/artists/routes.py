from flask import Blueprint, render_template, request

bp = Blueprint("artists", __name__, url_prefix="/artists")

@bp.route("/", methods=["GET"])
def show_users():
    return render_template("index.html")

@bp.route("/new", methods=["GET", "POST"])
def create_user():
    if request.method == "GET":
        print("get meth on /new")
        return render_template("artists/new_artist.html")

    artist_name = request.form["artist_name"]
    genre = request.form["genre"]

    print("post form request:", artist_name, genre)
    isValid, msg = validate_values(artist_name, genre)

    if not isValid:
        return render_template("artists/new_artist.html", errors=msg), 400
    return {'stats': 201}


def validate_values(name ,genre) -> tuple[bool, str] :
    if len(name.strip()) <= 2 :
        return (False, "Artist name should not be empty or less than 2 charcaters")
    elif len(genre.strip()) <= 2 :
        return (False, "Genre should not be empty or less than 2 characters")

    # would be nice to check if it already exists in the database
    return (True, "Successfully")
