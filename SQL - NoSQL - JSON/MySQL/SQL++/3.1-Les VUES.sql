						/****************
						*	LES VUES	*
						****************/
   
CREATE OR REPLACE VIEW clients_parisiens_et_villes
AS SELECT nom, prenom, c.cp, nom_ville
FROM clients c, villes v
WHERE c.cp = v.cp
AND c.cp LIKE '75%';
--> SELECT * FROM clients_parisiens_et_villes;


CREATE OR REPLACE VIEW clients_parisiens AS SELECT * FROM clients WHERE cp LIKE '75%';
--> SELECT * FROM clients_parisiens c;


CREATE OR REPLACE VIEW clients_parisiens_non_maj AS SELECT id_client, concat(nom, ' ') as nom, prenom, adresse, date_naissance, cp FROM clients WHERE cp LIKE '75%';
SELECT * FROM clients_parisiens_non_maj c;


CREATE OR REPLACE VIEW clients_parisiens_reduit AS SELECT id_client, nom, prenom FROM clients WHERE cp LIKE '75%';
SELECT * FROM clients_parisiens_reduit c;


CREATE OR REPLACE VIEW clients_parisiens_reduit_maj AS SELECT id_client, nom, cp FROM clients WHERE cp LIKE '75%';
SELECT * FROM clients_parisiens_reduit_maj c;

CREATE OR REPLACE VIEW clients_parisiens_pour_parisiens AS SELECT * FROM clients WHERE cp LIKE '75%' WITH CHECK OPTION;
SELECT * FROM clients_parisiens_pour_parisiens c;

SELECT * FROM clients;

insert into clients_parisiens_reduit_maj values(null, 'zzz' , '75011');
insert into clients_parisiens_reduit values(null, 'le nom' , 'le prenom');
insert into clients_parisiens values(null, 'yyy','yyy','adr', '2020-01-01', '75011');
insert into clients_parisiens_pour_parisiens values(null, 'lil','lil','adr', '2020-01-01', '59000');
insert into clients_parisiens_non_maj values(null, 'yyy','yyy','adr', '2020-01-01', '75011');
