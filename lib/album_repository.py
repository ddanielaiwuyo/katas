from dataclasses import dataclass, field


@dataclass
class Album:
    """Represents album entity in database"""
    id: int
    title: str
    release_year: str
    artist_id: int = field(default=None)


@dataclass
class AlbumArtist:
    """
    Requests for getting albums with corresponding their
    correspondig artists, would be follow this data structure
    """
    album_id: int
    title: str
    release_year: str
    artist_name: str
    genre: str

class AlbumRepository:
    def __init__(self, conn):
        self._conn = conn

    def all(self):
        query = "SELECT * FROM albums"
        response = self._conn.execute(query)
        if response is None:
            return response

        albums = [] 
        for row in response:
            album = Album(row["album_id"], row["title"], row["release_year"], row["artist_id"])
            albums.append(album)

        return albums

    def find(self, id):
        query = "SELECT * FROM albums WHERE album_id = %s"
        params = [id]

        response = self._conn.execute(query, params)
        if response is None:
            return response

        albums = []
        for row in response:
            album = Album(row["album_id"], row["title"], row["release_year"], row["artist_id"])
            albums.append(album)

        return albums

    def find_album_artist(self, id):
        query = """
        select
            artists.artist_id,
            artists.name AS artist_name,
            artists.genre,
            albums.album_id,
            albums.title, albums.release_year
        FROM artists 
        INNER JOIN albums
        on albums.artist_id = artists.artist_id
        WHERE album_id = %s
        """

        response = self._conn.execute(query, [id])
        if response is None:
            return response # we'll actually need a better way to handle this

        results = []
        for row in response:
            album_artist = AlbumArtist(row["album_id"], row["title"], row["release_year"], row["artist_name"], row["genre"])
            results.append(album_artist)

        return results
