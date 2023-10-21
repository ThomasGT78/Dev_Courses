		/**  DOCKER  **/

performance, la légèreté et la modularité des conteneurs Docker

// À quoi ça sert ?
`
- Mettre en place un déploiement de votre application efficace et adaptable, sur n'importe quel serveur.
- Préparer des environnements de développement faciles à déployer grâce aux conteneurs.
- Permettre de résoudre des problèmes de compatibilité avec votre code
`

/**   Machine Virtuelle  **/
Virtualisation lourde => recrée un système complet dans le système hôte, pour qu’il ait ses propres ressources.
	=> Isolation totale avec le système hôte cependant
// Contraintes :
  ❌ Prend du temps à démarrer
  ❌ Réserve les ressources (CPU/RAM) du système hôte

// Avantages :
  ✅ Totalement isolée du système hôte
  ✅ Ressources attribuées lui sont totalement réservées
  ✅ Installer différents OS (Linux, Windows, BSD, Mac...)

/**  Conteneur  **/
=> `Permettent de réduire les coûts, d'augmenter la densité de l'infrastructure, tout en améliorant le cycle de déploiement.`
Enveloppe virtuelles, système de virtualisation plus léger.
Processus ou un ensemble de processus isolés du reste du système, tout en étant légers.
Permet de faire de la virtualisation légère
	- Ne virtualise pas les ressources => Partage les ressources avec le système hôte
	- Il ne crée qu'une isolation des processus

// Avantages :
  ✅ Ne réservez que les ressources nécessaires
  ✅ Démarrez rapidement vos conteneurs
  ✅ Donnez plus d'autonomie à vos développeurs

// Contraintes :
Pas adapté:
  => Faire persister de grandes quantités de mémoire disque
  => Assurer une grande continuité de service

/// Utilisation :
Création d'environnements locaux
Permet à la CI/CD de créer rapidement des espaces isolés pour faire tourner vos tests

// Exemples d'Utilisation :
- Isoler rapidement des tests/builds d'application
- Ajouter des ressources disponibles en production
- Créer des environnements dynamiques pour répondre à des besoins métier

/// Stateless et Immutabilité
