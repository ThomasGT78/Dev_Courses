DROP DATABASE IF EXISTS formation_sql;
CREATE DATABASE formation_sql DEFAULT CHARACTER SET utf8;

USE formation_sql;

CREATE TABLE IF NOT EXISTS album (
    id SMALLINT UNSIGNED AUTO_INCREMENT,
    title VARCHAR  (60) NOT NULL,
    artist VARCHAR (50) NOT NULL,
    genre VARCHAR (50),
    pist_number TINYINT UNSIGNED NOT NULL DEFAULT 0,
    release_date YEAR  NOT NULL,
    size_in_mo SMALLINT UNSIGNED,
    album_length TIME,
    PRIMARY KEY (id)
);

INSERT INTO
    album (title, artist, genre, pist_number, release_date)
VALUES
    ('These Days', 'Bon Jovi', 'Rock', '15', '1995'),
    ('Jazz','Queen', 'Rock', '12', '1978'),
    ('The Virgins', 'The Virgins', 'Rock', '10', '2004');

SELECT * FROM album;

-- Mise à jour --

UPDATE album SET size_in_mo = 305
WHERE artist = 'Queen';

-- Affichage du Tableau --

SELECT * FROM album;