import os
from flask import Flask, request, render_template
from lib.database_connection import get_flask_database_connection
from lib.album_repository import AlbumRepository

# Create a new Flask app
app = Flask(__name__)

@app.route('/emoji', methods=['GET'])
def get_emoji():
    return render_template('emoji.html', emoji=':)')

@app.route("/albums/<int:id>", methods=["GET"])
def get_album(id):
    conn = get_flask_database_connection(app)
    album_repo = AlbumRepository(conn)
    album_artist = album_repo.find_album_artist(id)

    return render_template("album.html", album=album_artist[0])


from example_routes import apply_example_routes
apply_example_routes(app)

if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
