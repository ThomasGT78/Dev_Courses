		/**  Serveur DNS  **/

DNS => Domain Name System (Système de Noms de Domaine)
 - Permet d’associer une adresse IP à un nom d’hôte et/ou à un nom de domaine (Comme un annuaire)
   => Une même machine peut être associée à plusieurs noms d’hôte ou noms de domaine
 - Repose sur le protocole DNS

// 2 types de nommage pour une machine :
 - le nom de domaine
   => Pour identifier un service sur une machine (fonctionnalité: site web, stockage de fichiers...
 - le nom d’hôte, couramment appelé “hostname”
   => Pour identifier une machine

Le protocole DNS fonctionne sur le mode client-serveur : 
  => Client émet une requête vers un serveur DNS
  => Serveur répond en indiquant une correspondance Nom-IP.

/// Configuration client-serveur
- Pour répondre aux requêtes des clients qui demandent une correspondance Nom-IP
- Pour associer des noms avec des IP
(Les clients ont juste besoin de connaître l’adresse IP du serveur DNS)

Il faut configurer le serveur et les clients

// Pour configurer le serveur
 => Activez la fonction DNS 
 => Remplissez la table de correspondance Nom-IP

// Pour configurer les clients
 => Renseignez l’adresse IP du serveur DNS