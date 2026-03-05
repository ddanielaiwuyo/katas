import os
from dataclasses import asdict
from flask import Flask, jsonify, request, render_template
from lib.database_connection import get_flask_database_connection
from lib.album_repostiory2 import AlbumRepository

app = Flask(__name__)

@app.route("/json/albums/<int:id>", methods=["GET"])
def get_album_json(id):
    conn = get_flask_database_connection(app)
    album_repo = AlbumRepository(conn)
    album = album_repo.find_album(id)
    if album is None:
        return 404

    return jsonify(asdict(album))

# insread of opening a connection to the database for every request
# we could just use connection pools instead
@app.route("/albums/<int:id>", methods=["GET"])
def get_album(id):
    conn = get_flask_database_connection(app)
    album_repo = AlbumRepository(conn)
    album = album_repo.find_album(id)
    err_fmt = "Could not find album with and id of {}"

    print(album, type(album))
    if album is None:
        print("album is None, render 404")
        return render_template("albums/404.html", err_msg=err_fmt.format(id))

    return render_template("albums/album.html", album=album)
    


if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
