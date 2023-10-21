		/**  Routeurs  **/

Lorsqu’un paquet est envoyé d’un réseau IP vers un autre, il passe obligatoirement par un routeur

/// La table de routage
Le routeur a autant d’adresses IP que de réseaux auxquels il est connecté

// Paramétrer la table de routage
- Activer les interfaces réseau du routeur
`Il faut activer individuellement les interfaces (port physique RJ45)`
- Configurer une adresse IP à chacune des interfaces activées
`Par convention, on a tendance à affecter au routeur une adresse en fin de plage IP`
- Vérifier et éventuellement modifier la table de routage
`Les routes vers les réseaux directement connectés sont toujours générées automatiquement. 
Pour les routes vers les réseaux distants, cela dépendra de la configuration de vos routeurs. 
  => Peut se faire automatiquement.
  => Si non, il faut ajouter les routes manuellement (voir documentation de configuration de vos équipements + apprendre à utiliser l’interface en ligne de commandes)`