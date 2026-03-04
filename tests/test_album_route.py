from playwright.sync_api import Page, expect
import os
from pathlib import Path

def test_get_album(my_conn, page, test_web_address):
    # This is the only place we force an absolute path for music_db.sql
    # seed_file = Path(__file__).parent.parent / "seeds" / "music_db.sql"
    my_conn.seed("seeds/music_db.sql")
    # db_connection.seed(str(seed_file))

    # Continue with your Playwright test
    page.goto(f"http://{test_web_address}/albums/1")

    content = page.content()
    print(content)
    album_title_element = page.locator(".album-title")
    release_year_el = page.locator(".album-release-year")
    artist = page.locator(".artist")
    genre = page.locator(".artist-genre")
    release_year_el = page.locator(".album-release-year")

    expect(album_title_element).to_have_text("Title: Doolittle")
    expect(genre).to_contain_text("Rock")
    expect(artist).to_have_text("Artist: Pixies")
    
