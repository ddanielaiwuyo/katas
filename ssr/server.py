import os
from flask import Flask
from blueprints.artists.routes import bp as artist_blueprint
from blueprints.albums.routes import bp as album_blueprint

# from dataclasses import asdict
# from flask import Flask, jsonify, request, render_template
# from lib.database_connection import get_flask_database_connection
# from lib.album_repostiory2 import AlbumRepository

app = Flask(__name__)

app.register_blueprint(artist_blueprint)
app.register_blueprint(album_blueprint)

if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
