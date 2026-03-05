from dataclasses import dataclass, field

"""
The solution proposed, suggests that one artist
should have many albums, but one album should 
belong to one artist.
"""


@dataclass
class Album:
    """
    An album can only belong to one artist
    """
    id: int | None
    title: str
    release_year: str
    artist_id: int  = field(default=None)
    artist_name : str = field(default=None)


@dataclass
class Artist:
    """
    An artist can have multiple albums
    """
    id: int
    name: str
    genre: str
    albums: list["Album"] | None
