		/**  Fonctionnement d'un réseau  **/

/// Adresse MAC
`Permet de connaître les émetteurs et récepteurs des messages`
Identifie la carte réseau d'une machine 
 - Non modifiable car associée à une carte réseau dès sa fabrication en usine
 - Unique au monde
 - Écrite en héxadécimal, sur 6 octets, en 2 parties de 3 octets:
  => La 1ère: identifie le fabricant de la carte réseau
  => La 2ème identifie la carte réseau elle-même

// Vérifier l'adresses MAC associée à sa machine
Dans le Terminal, écrire la commande :
ipconfig /all

// vérifier le fabricant de ma carte réseau
"https://dnschecker.org/mac-lookup.php?"

/// Envoyer des messages (générer un paquet)
- Au sein d’un réseau local: 
 => Se fait grâce à l’adresse MAC (Le Switch reconnaît les adresse MAC)
 => A besoin d’affecter une adresse IP aux machines

/// Adresse IP
`Nécessaire pour acheminer des messages entre des réseaux différents`
IPv4 : Adresse écrite sur 4 octets 
	32 bits => 4 294 967 296 adresses possibles)
IPv6 : Adresse écrite sur 6 octets 
	128 bits => + de 340 282 milliard³ d'adresses possibles
 - publique ou privée:
  => privée : utilisées sur les LAN
  => publiques : souvent réservées aux opérateurs de télécommunication sur les réseaux de type MAN/WAN
 - Modifiable, c’est à nous de la définir
 - Écrite sur 4 octets en décimal (0 à 255)
  => 1er octet : adresse du réseau
  => les 3 suivant : adresse de la machine

// Le masque
Délimiteur entre la partie réseau et la partie machine
172.16.254.1/8	
`Numéro après le /		=> ici le 8 (=> 255.0.0.0)
/16 => 255.255.0.0
/24 => 255.255.255.0
Notation CIDR (Classless Inter-Domain Routing)
Signifie que les 8 premiers bits (172) sont ceux qui identifient le réseau, 
Et donc que les 24 derniers (16.254.1) identifient la machine`
=> L'adresse réseau est donc 172.0.0.0 
=> L’adresse de diffusion (ou de broadcast), est 172.255.255.255
  `Sert à envoyer un message à toutes les machines d’un réseau en même temps`
(Ces 2 adresses sont non attribuables sur le réseau)

// Ping
`Permet d’envoyer un message de test vers une autre machine pour vérifier qu’elle répond bien`
Dans le terminal:
ping [ip_address_target_machine] 
(Ex: ping 168.130.16.1)