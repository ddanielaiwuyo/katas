from playwright.sync_api import Page, expect

def test_get_album(my_conn, page, test_web_address):
    my_conn.seed("seeds/music_db.sql")

    page.goto(f"http://{test_web_address}/albums/1")

    content = page.content()
    album_title_element = page.locator(".album-title")
    release_year_el = page.locator(".album-release-year")
    artist = page.locator(".artist")
    genre = page.locator(".artist-genre")
    release_year_el = page.locator(".album-release-year")

    expect(album_title_element).to_have_text("Title: Doolittle")
    expect(genre).to_contain_text("Rock")
    expect(artist).to_have_text("Artist: Pixies")
    
