
-- Contraintes pour les tables exportees

ALTER TABLE `cours`.`produits` ADD UNIQUE INDEX `idx_designation_uni`(`designation`);

ALTER TABLE `cours`.`pays` ADD UNIQUE INDEX `idx_nom_pays_uni`(`nom_pays`);


-- Contraintes pour la table cdes

ALTER TABLE cdes
  ADD CONSTRAINT FK_cdes_client FOREIGN KEY (id_client) REFERENCES clients (id_client) ON DELETE CASCADE ON UPDATE CASCADE;

-- Contraintes pour la table clients

ALTER TABLE clients
  ADD CONSTRAINT FK_clients_cp FOREIGN KEY (cp) REFERENCES villes (cp) 
  ON DELETE CASCADE ON UPDATE CASCADE;

-- Contraintes pour la table ligcdes

ALTER TABLE ligcdes
  ADD CONSTRAINT FK_ligcdes_produit FOREIGN KEY (id_produit) REFERENCES produits (id_produit) 
  ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE ligcdes
  ADD CONSTRAINT FK_ligcdes_cde FOREIGN KEY (id_cde) REFERENCES cdes (id_cde) 
  ON DELETE CASCADE ON UPDATE CASCADE;

-- Contraintes pour la table vendeurs

ALTER TABLE vendeurs
  ADD CONSTRAINT FK_vendeurs_cp FOREIGN KEY (cp) REFERENCES villes (cp) 
  ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE vendeurs
  ADD CONSTRAINT FK_vendeurs_id_vendeur FOREIGN KEY (chef) REFERENCES vendeurs (id_vendeur) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Contraintes pour la table vendeurs_villes

ALTER TABLE vendeurs_villes
  ADD CONSTRAINT FK_vv_vendeur FOREIGN KEY (id_vendeur) REFERENCES vendeurs (id_vendeur) 
  ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE vendeurs_villes 
  ADD CONSTRAINT FK_vv_cp FOREIGN KEY (cp) REFERENCES villes (cp) 
  ON DELETE CASCADE ON UPDATE CASCADE;

-- Contraintes pour la table ventes

ALTER TABLE ventes
  ADD CONSTRAINT FK_ventes_vendeur FOREIGN KEY (id_vendeur) REFERENCES vendeurs (id_vendeur) 
  ON DELETE CASCADE ON UPDATE CASCADE;

-- Contraintes pour la table villes

ALTER TABLE villes
  ADD CONSTRAINT FK_villes_pays FOREIGN KEY (id_pays) REFERENCES pays (id_pays) 
  ON DELETE CASCADE ON UPDATE CASCADE;
  
SET FOREIGN_KEY_CHECKS = 1;