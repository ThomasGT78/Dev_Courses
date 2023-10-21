-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 03 fév. 2021 à 11:02
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cours`
--

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `ca_total`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `ca_total` (
`CA Total` double(19,2)
);

-- --------------------------------------------------------

--
-- Structure de la table `cdes`
--

CREATE TABLE `cdes` (
  `id_cde` int(5) NOT NULL,
  `date_cde` date NOT NULL,
  `id_client` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id_client` int(5) NOT NULL,
  `nom` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `adresse` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `cp` char(5) COLLATE utf8_unicode_ci NOT NULL,
  `date_française` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `clients_parisiens`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `clients_parisiens` (
`nom` varchar(50)
,`prenom` varchar(50)
,`cp` char(5)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `clients_parisiens_villes`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `clients_parisiens_villes` (
`nom` varchar(50)
,`prenom` varchar(50)
,`nom_ville` varchar(50)
,`cp` varchar(5)
);

-- --------------------------------------------------------

--
-- Structure de la table `compte_courant`
--

CREATE TABLE `compte_courant` (
  `id_compte` int(10) UNSIGNED NOT NULL,
  `titulaire` varchar(45) NOT NULL,
  `solde` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `compte_epargne`
--

CREATE TABLE `compte_epargne` (
  `id_compte` int(10) UNSIGNED NOT NULL,
  `titulaire` varchar(45) NOT NULL,
  `solde` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `fourchettes`
--

CREATE TABLE `fourchettes` (
  `plancher` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `plafond` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `libelle` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ligcdes`
--

CREATE TABLE `ligcdes` (
  `id_cde` int(5) NOT NULL,
  `id_produit` int(5) NOT NULL,
  `qte` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `mois`
--

CREATE TABLE `mois` (
  `id_mois` tinyint(2) UNSIGNED NOT NULL,
  `num_mois` int(2) UNSIGNED NOT NULL,
  `nom_mois` varchar(9) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `mois_bis`
--

CREATE TABLE `mois_bis` (
  `id_mois` tinyint(2) UNSIGNED NOT NULL,
  `num_mois` int(2) UNSIGNED NOT NULL,
  `nom_mois` varchar(9) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `mois_view`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `mois_view` (
`num_mois` int(2) unsigned
,`nom_mois` varchar(9)
);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
  `id_pays` char(4) COLLATE utf8_unicode_ci NOT NULL,
  `nom_pays` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pays_bis`
--

CREATE TABLE `pays_bis` (
  `id_pays` char(4) COLLATE utf8_unicode_ci NOT NULL,
  `nom_pays` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id_produit` int(5) NOT NULL,
  `designation` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `prix` double(7,2) NOT NULL,
  `qte_stockee` int(5) DEFAULT 0,
  `photo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `categorie` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `pseudo` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `mdp` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `qualite` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `vendeurs`
--

CREATE TABLE `vendeurs` (
  `id_vendeur` int(10) UNSIGNED NOT NULL,
  `nom` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `chef` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `cp` char(5) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `vendeurs_villes`
--

CREATE TABLE `vendeurs_villes` (
  `id_vendeur` int(10) UNSIGNED NOT NULL,
  `cp` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ventes`
--

CREATE TABLE `ventes` (
  `id_vendeur` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `id_produit` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `vente` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `date_vente` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ventes_croisees`
--

CREATE TABLE `ventes_croisees` (
  `nom_vendeur` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `designation` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `vente` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `villes`
--

CREATE TABLE `villes` (
  `cp` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `nom_ville` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `site` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `photo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_pays` char(4) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `villes_bis`
--

CREATE TABLE `villes_bis` (
  `cp` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `nom_ville` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `site` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `photo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_pays` char(4) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la vue `ca_total`
--
DROP TABLE IF EXISTS `ca_total`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ca_total`  AS SELECT sum(`l`.`qte` * `p`.`prix`) AS `CA Total` FROM (`produits` `p` join `ligcdes` `l` on(`p`.`id_produit` = `l`.`id_produit`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `clients_parisiens`
--
DROP TABLE IF EXISTS `clients_parisiens`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `clients_parisiens`  AS SELECT `clients`.`nom` AS `nom`, `clients`.`prenom` AS `prenom`, `clients`.`cp` AS `cp` FROM `clients` WHERE `clients`.`cp` like '75%' ;

-- --------------------------------------------------------

--
-- Structure de la vue `clients_parisiens_villes`
--
DROP TABLE IF EXISTS `clients_parisiens_villes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `clients_parisiens_villes`  AS SELECT `c`.`nom` AS `nom`, `c`.`prenom` AS `prenom`, `v`.`nom_ville` AS `nom_ville`, `v`.`cp` AS `cp` FROM (`clients` `c` join `villes` `v` on(`c`.`cp` = `v`.`cp`)) WHERE `v`.`cp` like '75%' ;

-- --------------------------------------------------------

--
-- Structure de la vue `mois_view`
--
DROP TABLE IF EXISTS `mois_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mois_view`  AS SELECT `mois`.`num_mois` AS `num_mois`, `mois`.`nom_mois` AS `nom_mois` FROM `mois` ;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cdes`
--
ALTER TABLE `cdes`
  ADD PRIMARY KEY (`id_cde`),
  ADD KEY `FK_cdes_client` (`id_client`);

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`),
  ADD KEY `Index_cp` (`cp`);

--
-- Index pour la table `compte_courant`
--
ALTER TABLE `compte_courant`
  ADD PRIMARY KEY (`id_compte`);

--
-- Index pour la table `compte_epargne`
--
ALTER TABLE `compte_epargne`
  ADD PRIMARY KEY (`id_compte`);

--
-- Index pour la table `fourchettes`
--
ALTER TABLE `fourchettes`
  ADD PRIMARY KEY (`plancher`,`plafond`);

--
-- Index pour la table `ligcdes`
--
ALTER TABLE `ligcdes`
  ADD PRIMARY KEY (`id_cde`,`id_produit`),
  ADD KEY `FK_ligcdes_id_produit` (`id_produit`);

--
-- Index pour la table `mois`
--
ALTER TABLE `mois`
  ADD PRIMARY KEY (`id_mois`),
  ADD UNIQUE KEY `num_mois` (`num_mois`),
  ADD UNIQUE KEY `nom_mois` (`nom_mois`);

--
-- Index pour la table `mois_bis`
--
ALTER TABLE `mois_bis`
  ADD PRIMARY KEY (`id_mois`),
  ADD UNIQUE KEY `num_mois` (`num_mois`),
  ADD UNIQUE KEY `nom_mois` (`nom_mois`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`id_pays`),
  ADD UNIQUE KEY `idx_nom_pays_uni` (`nom_pays`);

--
-- Index pour la table `pays_bis`
--
ALTER TABLE `pays_bis`
  ADD PRIMARY KEY (`id_pays`),
  ADD UNIQUE KEY `idx_nom_pays_uni` (`nom_pays`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id_produit`),
  ADD UNIQUE KEY `idx_designation_uni` (`designation`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`pseudo`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `vendeurs`
--
ALTER TABLE `vendeurs`
  ADD PRIMARY KEY (`id_vendeur`),
  ADD KEY `FK_vendeurs_cp` (`cp`),
  ADD KEY `FK_vendeurs_id_vendeur` (`chef`);

--
-- Index pour la table `vendeurs_villes`
--
ALTER TABLE `vendeurs_villes`
  ADD PRIMARY KEY (`id_vendeur`,`cp`,`date_debut`),
  ADD KEY `cp` (`cp`);

--
-- Index pour la table `ventes`
--
ALTER TABLE `ventes`
  ADD PRIMARY KEY (`id_vendeur`,`id_produit`,`vente`);

--
-- Index pour la table `ventes_croisees`
--
ALTER TABLE `ventes_croisees`
  ADD PRIMARY KEY (`nom_vendeur`,`designation`);

--
-- Index pour la table `villes`
--
ALTER TABLE `villes`
  ADD PRIMARY KEY (`cp`),
  ADD KEY `Index_id_pays` (`id_pays`);

--
-- Index pour la table `villes_bis`
--
ALTER TABLE `villes_bis`
  ADD PRIMARY KEY (`cp`),
  ADD KEY `Index_id_pays` (`id_pays`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cdes`
--
ALTER TABLE `cdes`
  MODIFY `id_cde` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `id_client` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `compte_courant`
--
ALTER TABLE `compte_courant`
  MODIFY `id_compte` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `compte_epargne`
--
ALTER TABLE `compte_epargne`
  MODIFY `id_compte` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `mois`
--
ALTER TABLE `mois`
  MODIFY `id_mois` tinyint(2) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `mois_bis`
--
ALTER TABLE `mois_bis`
  MODIFY `id_mois` tinyint(2) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id_produit` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `vendeurs`
--
ALTER TABLE `vendeurs`
  MODIFY `id_vendeur` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `vendeurs_villes`
--
ALTER TABLE `vendeurs_villes`
  MODIFY `id_vendeur` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cdes`
--
ALTER TABLE `cdes`
  ADD CONSTRAINT `FK_cdes_client` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `FK_clients_cp` FOREIGN KEY (`cp`) REFERENCES `villes` (`cp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ligcdes`
--
ALTER TABLE `ligcdes`
  ADD CONSTRAINT `FK_ligcdes_cde` FOREIGN KEY (`id_cde`) REFERENCES `cdes` (`id_cde`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ligcdes_produit` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id_produit`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `vendeurs`
--
ALTER TABLE `vendeurs`
  ADD CONSTRAINT `FK_vendeurs_cp` FOREIGN KEY (`cp`) REFERENCES `villes` (`cp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_vendeurs_id_vendeur` FOREIGN KEY (`chef`) REFERENCES `vendeurs` (`id_vendeur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `vendeurs_villes`
--
ALTER TABLE `vendeurs_villes`
  ADD CONSTRAINT `FK_vv_cp` FOREIGN KEY (`cp`) REFERENCES `villes` (`cp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_vv_vendeur` FOREIGN KEY (`id_vendeur`) REFERENCES `vendeurs` (`id_vendeur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ventes`
--
ALTER TABLE `ventes`
  ADD CONSTRAINT `FK_ventes_vendeur` FOREIGN KEY (`id_vendeur`) REFERENCES `vendeurs` (`id_vendeur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `villes`
--
ALTER TABLE `villes`
  ADD CONSTRAINT `FK_villes_pays` FOREIGN KEY (`id_pays`) REFERENCES `pays` (`id_pays`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
