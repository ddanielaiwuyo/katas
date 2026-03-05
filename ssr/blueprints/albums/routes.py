from dataclasses import asdict
from flask import Blueprint, jsonify, render_template, request, current_app
from lib.database_connection import get_flask_database_connection
from lib.album_repostiory2 import AlbumRepository

bp = Blueprint("albums", __name__, url_prefix="/albums")


@bp.route("/<int:id>", methods=["GET"])
def get_album(id):
    conn=  get_flask_database_connection(current_app)
    album_repo = AlbumRepository(conn)
    album = album_repo.find_album(id)

    err_fmt = "Could not find album with and id of {}"
    if album is None:
        return render_template("albums/404.html", err_msg=err_fmt.format(id))

    response_format = request.args.get("format")
    if response_format == "json":
        return jsonify(asdict(album))

    return render_template("albums/album.html", album=album)


@bp.route("/", methods=["GET"])
def get_albums():
    conn=  get_flask_database_connection(current_app)
    album_repo = AlbumRepository(conn)
    albums = album_repo.all()

    if request.args.get("format") == "json":
        return jsonify([asdict(album) for album in albums])

    return render_template("albums/all_albums.html", albums=albums)
