from lib.entities import Album

class AlbumRepository:
    def __init__(self, db_conn):
        self.conn = db_conn

    def all(self) -> list[Album]:
        query = """
        SELECT albums.id,
        artists.name as artist_name,
        albums.title as album_title,
        albums.release_year
        FROM artists
        left join albums
        on albums.artist_id = artists.id
        """
        query_result = self.conn.execute(query)
        if query_result is None: # need a way to handle this
            return query_result
        albums = []
        for row in query_result:
            print(f"\n{row}\n")
            album = Album(row["id"], row["album_title"], row["release_year"], None)
            album.artist_name = row["artist_name"]
            albums.append(album)
        return albums

    def find_album(self, id) -> Album | None:
        query = """
        SELECT albums.id,
        albums.title as album_title,
        artists.name as artist_name,
        albums.release_year 
        FROM artists
        inner join albums
        on albums.artist_id = artists.id
        where albums.id = %s
        """
        query_result = self.conn.execute(query, [id])
        if query_result is None or len(query_result) == 0:
            return None
        
        row = query_result[0]
        # if row is None:
        #     print("schema here", row)
        #     return None

        album = Album(row["id"], row["album_title"], row["release_year"],  None )
        album.artist_name = row["artist_name"]
        album.release_year = album.release_year
        return album

    def create_album(self, artist_name, album: Album) -> bool:
        id_query = """ select id from artists where artists.name = %s"""
        insert_query  = """
        insert into albums (title, release_year, artist_id)
        values (%s, %s, %s)
        """
        artist_id = self.conn.execute(id_query, [artist_name])
        if len(artist_id) == 0:
            return False

        print(f"\n\n artist id -> {artist_id}")

        insert = self.conn.execute(insert_query, [ album.title, album.release_year, artist_id[0]["id"]])
        print("insert from db", insert)
        return True

def main():
    from lib.database_connection import DatabaseConnection
    db_conn = DatabaseConnection()
    db_conn.DEV_DATABASE_NAME = "music_library"
    db_conn.connect()
    db_conn.seed("seeds/music_library.sql")
    repo = AlbumRepository(db_conn)
    res = repo.all()
    for r in res:
        print(f"\n {r}\n")

    al = repo.find_album(1)
    print("\nsearch results for album 1")
    print(al)

    bum = Album(None, "Undercurrent", "1962-01-01")
    artist = 'Conways Game'
    created = repo.create_album(artist, bum)
    if not created:
        print("artist doesnt exist")

if __name__ == "__main__":
    main()
