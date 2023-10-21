		/**  DOCKER HUB  **/

"https://hub.docker.com/"

`Comparable à GitHub, mais spécialisé dans le stockage d'image pour Docker`

// Registry officielle de Docker
Permet de partager des images à d'autres personnes:
- Développeurs:
  => distribuer des images prêtes à l’emploi 
  => les versionner avec un système de tags
- Outils d’intégration en continu:
  => Jouer une suite de tests, sans avoir besoin d’autre chose que de Docker
- Systèmes automatisés:
  => Déployer ces applications sur vos environnements de développement et de production.

/// Créer un lien entre l'image créée précédemment et l'image que nous voulons envoyer sur le Docker Hub
docker tag IMAGE_NAME:latest YOUR_USERNAME/IMAGE_NAME:latest
// Exemple:
docker tag debian-nodejs-image:latest tomtomgt/debian-nodejs-image:latest

/// Envoyer votre image vers le Docker Hub
docker push YOUR_USERNAME/IMAGE_NAME:latest
// Exemple:
docker push tomtomgt/debian-nodejs-image:latest