﻿DROP DATABASE IF EXISTS cours;
CREATE DATABASE cours DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE cours;

SET FOREIGN_KEY_CHECKS = 0;

-- Structure de la table 'utilisateurs'
DROP TABLE IF EXISTS utilisateurs;
CREATE TABLE IF NOT EXISTS utilisateurs (
  pseudo varchar(50) NOT NULL,
  mdp varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  qualite varchar(50) DEFAULT NULL,
  PRIMARY KEY  (pseudo),
  UNIQUE KEY email (email)
) ENGINE=InnoDB;

-- Structure de la table 'pays'
DROP TABLE IF EXISTS pays;
CREATE TABLE IF NOT EXISTS pays (
  id_pays char(4) NOT NULL,
  nom_pays varchar(50) NOT NULL,
  PRIMARY KEY  (id_pays)
) ENGINE=InnoDB;

-- Structure de la table 'villes'
DROP TABLE IF EXISTS villes;
CREATE TABLE IF NOT EXISTS villes (
  cp varchar(5) NOT NULL,
  nom_ville varchar(50) NOT NULL,
  site varchar(50) default NULL,
  photo varchar(50) default NULL,
  id_pays char(4) NOT NULL,
  PRIMARY KEY  (cp),
  KEY Index_id_pays (id_pays)
) ENGINE=InnoDB;

-- Structure de la table 'clients'
DROP TABLE IF EXISTS clients;
CREATE TABLE IF NOT EXISTS clients (
  id_client int(5) NOT NULL auto_increment,
  nom varchar(50) NOT NULL,
  prenom varchar(50) default NULL,
  adresse varchar(100) default NULL,
  date_naissance date default NULL,
  cp char(5) NOT NULL,
  PRIMARY KEY  (id_client),
  KEY Index_cp (cp)
) ENGINE=InnoDB;

-- Structure de la table 'cdes'
DROP TABLE IF EXISTS cdes;
CREATE TABLE IF NOT EXISTS cdes (
  id_cde int(5) NOT NULL auto_increment,
  date_cde date NOT NULL,
  id_client int(5) NOT NULL,
  PRIMARY KEY  (id_cde),
  KEY FK_cdes_client (id_client)
) ENGINE=InnoDB;

-- Structure de la table 'produits'
DROP TABLE IF EXISTS produits;
CREATE TABLE IF NOT EXISTS produits (
  id_produit int(5) NOT NULL auto_increment,
  designation varchar(50) NOT NULL,
  prix double(7,2) NOT NULL,
  qte_stockee int(5) default 0,
  photo varchar(50) default NULL,
  categorie varchar(50) default NULL,
  PRIMARY KEY  (id_produit)
) ENGINE=InnoDB;

-- Structure de la table 'ligcdes'
DROP TABLE IF EXISTS ligcdes;
CREATE TABLE IF NOT EXISTS ligcdes (
  id_cde int(5) NOT NULL,
  id_produit int(5) NOT NULL,
  qte int(5) NOT NULL,
  PRIMARY KEY  (id_cde,id_produit),
  KEY FK_ligcdes_id_produit (id_produit)
) ENGINE=InnoDB;

-- Structure de la table 'vendeurs'
DROP TABLE IF EXISTS vendeurs;
CREATE TABLE  vendeurs (
  id_vendeur int(10) unsigned NOT NULL AUTO_INCREMENT,
  nom varchar(45) NOT NULL,
  chef int(10) unsigned NOT NULL DEFAULT '0',
  cp char(5) NOT NULL,
  PRIMARY KEY (id_vendeur),
  KEY FK_vendeurs_cp (cp),
  KEY FK_vendeurs_id_vendeur (chef)
) ENGINE=InnoDB;

-- Structure de la table 'vendeurs_villes'
DROP TABLE IF EXISTS vendeurs_villes;
CREATE TABLE IF NOT EXISTS vendeurs_villes (
  id_vendeur int(10) unsigned NOT NULL auto_increment,
  cp varchar(5) NOT NULL,
  date_debut date NOT NULL,
  date_fin date NOT NULL,
  PRIMARY KEY  (id_vendeur,cp,Date_debut),
  KEY cp (cp)
) ENGINE=InnoDB;

-- Structure de la table 'ventes'
DROP TABLE IF EXISTS ventes;
CREATE TABLE IF NOT EXISTS ventes (
  id_vendeur int(10) unsigned NOT NULL default '0',
  id_produit int(10) unsigned NOT NULL default '0',
  vente int(10) unsigned NOT NULL default '0',
  date_vente date default NULL,
  PRIMARY KEY  (id_vendeur,id_produit,vente)
) ENGINE=InnoDB;

-- Structure de la table 'ventes_croisees'
DROP TABLE IF EXISTS ventes_croisees;
CREATE TABLE IF NOT EXISTS ventes_croisees (
  nom_vendeur varchar(50) NOT NULL,
  designation varchar(50) NOT NULL,
  vente int(10) unsigned NOT NULL default '0',
  PRIMARY KEY  (nom_vendeur,designation)
) ENGINE=InnoDB;