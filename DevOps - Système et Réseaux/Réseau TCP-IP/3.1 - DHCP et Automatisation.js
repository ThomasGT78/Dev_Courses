	/**  DHCP  **/
`(Dynamic Host Configuration Protocol) 
(Protocole de Configuration Automatique des Hôtes)`

// Permet configurer automatiquement plusieurs éléments sur les machines:
- L'adresse IP et le masque
- L'adresse IP de la passerelle par défaut
- L'adresse IP du serveur DNS

// Permet également de centraliser la distribution des adresses IP:
  => Éviter les doublons
  => Connaître la liste des adresses IP déjà attribuées


/// Principe d'échanges DHCP Client/Serveur : 
// 1 - DHCP Discover (Découverte) : 
Quelqu’un pour m’attribuer une adresse IP ?`
  => Un client se connecte au réseau 
  => émet une requête à tout le réseau pour savoir si un serveur DHCP peut lui attribuer une adresse
  (Utilise son adresse MAC comme identification)`

// 2. DHCP Offer (Offre) : 
Voilà une adresse IP !`
  => Le serveur DHCP reçoit le message 
  => Répond en fournissant une adresse IP
  Message envoyé à destination de l’adresse MAC du client`

// 3. DHCP Request (Requête) : 
OK, je prends cette adresse IP, peux-tu le noter ?`
  => Le client accepte l’offre 
  => Demande au serveur 
   - une confirmation (message contenant tous les paramètres de configuration)
   - d’enregistrer l’IP allouée`

// 4. DHCP Ack (Acquittement) : 
C’est enregistré ! Voici les paramètres de config !`
  => Le serveur envoie le message de confirmation
  => Met à jour sa table d’allocation d’IP`

/// Table d’allocation d’IP
`Chaque adresse IP est associée à :
 - l’adresse MAC de la machine qui a récupéré cette IP
 - une Date de fin de bail (sinon reste à l'infini)`

Adresse IP	   => Adresse MAC		=> Fin de bail
192.168.0.1/24 => E3:34:12:35:FE:2A => 09/09/99 à 9h09

// Pour configurer le protocole DHCP :
  => Préciser au serveur la plage d’adresses IP qu’il peut distribuer
  => Indiquer au client que sa configuration IP se fait automatiquement.