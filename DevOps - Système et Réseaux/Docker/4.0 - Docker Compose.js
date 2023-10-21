	/**  Docker Compose  **/

Permet d'orchestrer vos conteneurs, et ainsi de simplifier vos déploiements sur de multiples environnements

/// Installation
// Mac / Windows: 
Installation automatique Docker Dekstop

// Linux: 
=> find last version released:
"https://github.com/docker/compose/releases"
// OR
=>  Find the commande on this page:
"https://docs.docker.com/compose/install/standalone/"
(add « sudo »  at the begining)

`
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/bin/docker-compose && sudo chmod +x /usr/bin/docker-compose
`

/**   COMMANDS  **/

// RÉCUPÉRER les images de votre fichier « docker-compose.yml »  et les TÉLÉCHARGER depuis le Docker Hub
docker-compose pull

// DÉMARRER une stack Docker Compose
docker-compose up
`-d pour faire tourner les conteneurs en tâche de fond`

// ARRÊTER une stack Docker Compose
docker-compose stop
`Ne supprimera pas les différentes ressources créées par votre stack`

// SUPPRIMER l'ensemble de la stack Docker Compose
docker-compose down
`Détruira l'ensemble des ressources créées`


// Voir le STATUT d'une stack Docker Compose
docker-compose ps

// Voir les LOGS d'une stack Docker Compose
docker-compose logs -f --tail 5
`
-- taill n => affiche les derniers logs du conteneur
`
// VALIDER une stack Docker Compose
docker-compose config
`valider la syntaxe de votre fichier « docker-compose.yml » et son bon fonctionnement`


	/**   APP ARGUMENTS  **/

// image 
Spécifier l'image source pour le conteneur

// build 
Spécifier le Dockerfile source pour créer l'image du conteneur 

// volume 
Spécifier les points de montage entre le système hôte et les conteneurs

// restart 
Définir le comportement du conteneur en cas d'arrêt du processus

// environment 
Définir les variables d’environnement

// depends_on 
Dire que le conteneur dépend d'un autre conteneur

// ports 
Définir les ports disponibles entre la machine host et le conteneur