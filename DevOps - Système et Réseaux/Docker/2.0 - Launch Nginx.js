/**  Démarrez un serveur Nginx avec un conteneur Docker  **/

// Démarrer serveur Nginx du conteneur
docker run -d -p 8080:80 nginx

-p
`Définis l'utilisation de ports

=> Ici, on Transfère le trafic du port 8080 vers le port 80 du conteneur. 
Ainsi, en allant sur http://127.0.0.1:8080 
	=> page par défaut de Nginx.`

// Rentrer dans votre conteneur Docker pour y effectuer des actions
docker exec -ti ID_RETOURNÉ_LORS_DU_DOCKER_RUN bash
docker exec -ti 148ee131d44e05fa7fc4c272c7e6c40c7c368b4eeae0ea527334d9ade6a765d9 bash

-ti 
`permet d'avoir un shell bash pleinement opérationnel`

// Se rendre, dans le répertoire de index.html
cd /usr/share/nginx/html

// modifier son contenu et voir le résultat en direct à l'adresse http://127.0.0.1:8080
....?????

// Sortir du conteneur 
Ouvrir un autre terminal et fermer le conteneur
docker stop 148ee131d44e05fa7fc4c272c7e6c40c7c368b4eeae0ea527334d9ade6a765d9
