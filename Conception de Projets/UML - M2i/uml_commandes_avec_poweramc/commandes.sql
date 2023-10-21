/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de création :  26/08/2016 11:43:23                      */
/*==============================================================*/


drop table if exists Client;

drop table if exists Commande;

drop table if exists LigneDeCommande;

drop table if exists Pays;

drop table if exists Produit;

drop table if exists Ville;

/*==============================================================*/
/* Table : Client                                               */
/*==============================================================*/
create table Client
(
   idClient             int not null,
   id_ville             int not null,
   nomClient            varchar(254),
   primary key (idClient)
);

/*==============================================================*/
/* Table : Commande                                             */
/*==============================================================*/
create table Commande
(
   idCommande           int not null,
   idClient             int not null,
   dateCommande         datetime,
   primary key (idCommande)
);

/*==============================================================*/
/* Table : LigneDeCommande                                      */
/*==============================================================*/
create table LigneDeCommande
(
   idCommande           int not null,
   idProduit            int not null,
   quantiteCommandee    int,
   primary key (idCommande, idProduit)
);

/*==============================================================*/
/* Table : Pays                                                 */
/*==============================================================*/
create table Pays
(
   id_pays              int not null,
   nom_pays             varchar(254),
   primary key (id_pays)
);

/*==============================================================*/
/* Table : Produit                                              */
/*==============================================================*/
create table Produit
(
   idProduit            int not null,
   designationProduit   varchar(254),
   primary key (idProduit)
);

/*==============================================================*/
/* Table : Ville                                                */
/*==============================================================*/
create table Ville
(
   id_ville             int not null,
   id_pays              int not null,
   nom_ville            varchar(254),
   primary key (id_ville)
);

alter table Client add constraint FK_dfVilleClient foreign key (id_ville)
      references Ville (id_ville) on delete restrict on update restrict;

alter table Commande add constraint FK_dfClientCommande foreign key (idClient)
      references Client (idClient) on delete restrict on update restrict;

alter table LigneDeCommande add constraint FK_association4 foreign key (idCommande)
      references Commande (idCommande) on delete restrict on update restrict;

alter table LigneDeCommande add constraint FK_association4 foreign key (idProduit)
      references Produit (idProduit) on delete restrict on update restrict;

alter table Ville add constraint FK_dfVillesPays foreign key (id_pays)
      references Pays (id_pays) on delete restrict on update restrict;

