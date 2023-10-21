
-- Création de la Base de Données

-- SET AUTOCOMMIT = 0
-- SET GLOBAL time_zone = 'Europe/Paris';

DROP DATABASE IF EXISTS qrmiam_new;
CREATE DATABASE qrmiam_new DEFAULT CHARACTER SET utf8mb4;

USE qrmiam_new;
-- SET FOREIGN_KEY_CHECKS = 0;

-- TINYINT UNSIGNED
-- DEFAULT NOW()

-- Create Table "users"
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_login VARCHAR (20) UNIQUE NOT NULL,
    first_name VARCHAR (20) NOT NULL,
    last_name VARCHAR (20) NOT NULL,
    nick_name VARCHAR (16),
    password VARCHAR (25) NOT NULL,
    registered_date DATETIME NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "contacts"
DROP TABLE IF EXISTS contacts;
CREATE TABLE IF NOT EXISTS contacts (
    contact_id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    cell_phone VARCHAR (13) NOT NULL,
	country_code VARCHAR (3) NOT NULL,
    fix_phone CHAR (10),
    PRIMARY KEY (contact_id),
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "addresses"
DROP TABLE IF EXISTS addresses;
CREATE TABLE IF NOT EXISTS addresses (
    address_id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    rue VARCHAR (60) NOT NULL,
    ville VARCHAR (30) NOT NULL,
    CP CHAR (5),
    country VARCHAR (30) NOT NULL,
    address_type VARCHAR (11) NOT NULL,
    PRIMARY KEY (address_id),
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "etablishments"
DROP TABLE IF EXISTS etablishments;
CREATE TABLE IF NOT EXISTS etablishments (
    etab_id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    etab_name VARCHAR (20) NOT NULL,
    etab_color VARCHAR (15) NOT NULL DEFAULT 'black',
	etab_size TINYINT NOT NULL DEFAULT 30,
    etab_font VARCHAR (20) NOT NULL DEFAULT 'Arial',
    PRIMARY KEY (etab_id),
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "documents"
DROP TABLE IF EXISTS documents;
CREATE TABLE IF NOT EXISTS documents (
    doc_id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    file_path TINYBLOB NOT NULL,
    doc_order TINYINT UNSIGNED NOT NULL,
    is_banner TINYINT UNSIGNED NOT NULL DEFAULT 0,
	banner_link TINYBLOB NOT NULL,
	show_from TIME,
	show_to TIME,
	title VARCHAR(20),
    color_title VARCHAR (15) NOT NULL DEFAULT 'black',
    PRIMARY KEY (doc_id),
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "qr_codes"
DROP TABLE IF EXISTS qr_codes;
CREATE TABLE IF NOT EXISTS qr_codes (
    qr_id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    qr_path TINYBLOB NOT NULL,
	qr_link TINYBLOB NOT NULL,
    PRIMARY KEY (qr_id),
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "memberships_details"
DROP TABLE IF EXISTS memberships_details;
CREATE TABLE IF NOT EXISTS memberships_details (
    membership_id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    statut VARCHAR(15) NOT NULL,
	membership_start_date DATETIME,
	membership_end_date DATETIME,
	product_id SMALLINT,
    PRIMARY KEY (membership_id),
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
	FOREIGN KEY (product_id) REFERENCES products(product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "products"
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
    product_id SMALLINT UNSIGNED AUTO_INCREMENT,
    product_name VARCHAR(20) NOT NULL,
    product_path TINYBLOB NOT NULL,
	product_price DECIMAL (5,2) UNSIGNED NOT NULL,
	product_type VARCHAR (15),
	validity VARCHAR (7),
    PRIMARY KEY (product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "orders"
DROP TABLE IF EXISTS orders;
CREATE TABLE IF NOT EXISTS orders (
    order_id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    order_date DATETIME NOT NULL DEFAULT NOW(),
	total_price DECIMAL (6,2) UNSIGNED NOT NULL,
    PRIMARY KEY (order_id),
	FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "lines_order"
DROP TABLE IF EXISTS lines_order;
CREATE TABLE IF NOT EXISTS lines_order (
    order_id SMALLINT UNSIGNED AUTO_INCREMENT,
    product_id SMALLINT UNSIGNED NOT NULL,
    quantity TINYINT UNSIGNED NOT NULL,
	unity_price DECIMAL (5,2) UNSIGNED NOT NULL,
	FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
	FOREIGN KEY (product_id) REFERENCES products(product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create Table "statistics"
DROP TABLE IF EXISTS statistics;
CREATE TABLE IF NOT EXISTS statistics (
    stat_id SMALLINT UNSIGNED AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    stat_date DATE NOT NULL DEFAULT NOW(),
	stat_hour TINYINT UNSIGNED NOT NULL,
	nb_views TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (stat_id),
	FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ALTER TABLE statistics
-- ADD 
-- FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

SET FOREIGN_KEY_CHECKS = 1;