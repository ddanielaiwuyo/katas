DROP TABLE IF EXISTS artists_albums;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS artists;

CREATE TABLE IF NOT EXISTS artists (
	id serial primary key,
	name varchar(200) not null,
	genre varchar(200) not null,
	created_at timestamp default localtimestamp
);

CREATE TABLE IF NOT EXISTS albums (
	id serial primary key,
	title varchar(200) not null,
	release_year date not null,
	artist_id int not null references artists(id) on delete cascade,
	created_at timestamp default localtimestamp
);

insert into artists(name, genre)
values('Pixies', 'Rock'),
('Bill Evans', 'Jazz');


insert into albums(title, release_year, artist_id)
values ('Doolittle', '1990-01-01', 1),
('Everybody Still Digs Bill Evans', '2000-01-01', 2),
('Late Nights', '2026-01-22', 2);
