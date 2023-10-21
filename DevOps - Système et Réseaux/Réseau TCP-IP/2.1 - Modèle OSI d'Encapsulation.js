		/**  Modèle OSI  **/

// Encapsulation
`Processus d'assemblage des règles/consignes d'uniformisation (normes et protocoles) classées par « couche »
- Ces règles nécessaires pour communiquer un message sur un réseau doivent être envoyées dans le paquet contenant le message en question. 
Paquet = Message + Consignes (classées par couches)
- Chaque “élément intermédiaire” du réseau (routeur, switch, application destinataire...), piochera dans ce paquet les consignes qui lui sont destinées`

Le Modèle OSI à 7 couches:
1 - Physique
`Encodage du signal, câblage et connecteurs, spécifications physiques`
2 - Liaison de données
`Adresse localement les interfaces, livre les informations localement, methode MAC`
3 - Réseau
`Adresse les interfaces globalement et détermine les meilleurs chemins à travers un inter-réseau`
4 - Transport
`Établit maintien et termine des sessions entre des périphériques terminaux`
5 - Session
`Établit des sessions entre des applications`
6 - Présentation
`Encode, chiffre et compresse les données utiles`
7 - Application
`Services applicatifs au plus proche des utilisateurs`

		/**  Modèle TCP/IP  **/

`Ne comporte que 4 couches. Il est beaucoup moins complexe et plus applicable à la réalité que le modèle OSI`
- Accès au Réseau (=> Physique + Liaison de données)
- Internet (=> Réseau)
- Transport (=> Transport)
- Application (=> Application + Présentation + Session)

Ce modèle porte le nom des 2 protocoles les plus importants qui le constituent:
// Le protocole IP
Couche Internet => couche 3 (Réseau) du modèle OSI

// Le protocole TCP (Transmission Control Protocol)
("Protocole de Contrôle de Transmission")
Couche Transport => couche 4 (Transport) du modèle OSI
`Son rôle est d’établir des règles permettant de transporter un message de la source à la destination, en s’assurant que rien n’ait été perdu en route`