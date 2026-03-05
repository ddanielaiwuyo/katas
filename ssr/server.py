import os
from dataclasses import asdict
from flask import Flask, jsonify, request, render_template
from lib.database_connection import get_flask_database_connection
from lib.album_repostiory2 import AlbumRepository

app = Flask(__name__)

# insread of opening a connection to the database for every request
# we could just use connection pools instead
@app.route("/albums/<int:id>", methods=["GET"])
def get_album(id):
    conn = get_flask_database_connection(app)
    album_repo = AlbumRepository(conn)
    album = album_repo.find_album(id)

    err_fmt = "Could not find album with and id of {}"
    if album is None:
        return render_template("albums/404.html", err_msg=err_fmt.format(id))

    response_format = request.args.get("format")
    if response_format == "json":
        return jsonify(asdict(album))

    return render_template("albums/album.html", album=album)

@app.route("/albums", methods=["GET"])
def get_albums():
    conn  = get_flask_database_connection(app)
    album_repo = AlbumRepository(conn)
    albums = album_repo.all()

    if request.args.get("format") == "json":
        return jsonify([asdict(album) for album in albums])

    return render_template("albums/all_albums.html", albums=albums)




if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
