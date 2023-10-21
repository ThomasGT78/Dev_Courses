
"https://docs.docker.com/"

// Search for an images to use as base
docker search [image_name]
docker search nginx
// OR 
Use the Search Bar in "https://hub.docker.com/"

// Liste les images dispo sur le pc
docker images -a

-a 
`???/?`

// Liste les conteneurs dispo sur le pc
docker ps

// Download depuis dossier existant ou docker hub une image existante
docker pull [image_name]
docker pull node
`Télécharge l'image du langage Node.js`
docker pull openclassrooms/image_on_hub
`On peut aussi écrire un chemin` 

// Lancer le conteneur d'une image
docker run -it -d [image_name]
` 
-i ou -it	OU --interactive
  => Keep STDIN open even if not attached
-d	OU --detach
  => Run en arrière-plan: 
	=> ne monopolise pas le terminal, on peut écrire d'autres commandes
	=> permet de lancer plusieur conteneurs
	=> permet de gérer/arrêter les conteneurs lancé dans le même terminadockerl
`

docker run -it node
`lance le conteneur de l'image node`

// Test si Docker fonctionne bien avec des container de test
docker run hello-world
docker run -it -d ubuntu bash

// Stopper le conteneur
docker stop [conteneur_id]
`« docker ps »  permet de recupére l'id`

// Supprimer le conteneur
docker rm [conteneur_id]
`Détruit le conteneur et son contenu`

// Supprimer une image
docker image rm [image_name]
docker rmi [image_name]
`Supprime une image non utilisée par un conteneur
« rmi » = « image rm »`
docker image rm [image_name] -f
` -f	=> force la suppression d'une image active`

// Supprimer TOUTES les images 
docker rmi $(docker images -f "dangling=true" -q)
`dangling=true =>  images non étiquetées (non marquée)
-f	=> Filtre
-q	=> Affiche les ID des images filtrées`

// Nettoyer le systeme
docker system prune

`This will remove:
  - all stopped containers (not running)
  - all networks not used by at least one container
  - all dangling images (images Docker non utilisées)
  - all dangling build cache (caches utilisés pour la création d'images)
