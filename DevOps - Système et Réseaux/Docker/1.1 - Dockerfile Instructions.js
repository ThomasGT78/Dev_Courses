		/**  DOCKERFILE INSTRUCTIONS  **/

// Commentaire
#

// Définir l'image source
FROM 

// Exécuter des commandes dans votre conteneur
RUN

// Ajouter des fichiers dans votre conteneur
ADD
ADD . /app/
`ajouter les sources de notre application locale dans le dossier /app/ de l'image`

// Définir votre répertoire de travail (comme cd dans le terminal)
WORKDIR
WORKDIR /app
`Me positionne dans le dossier app`

// Définir le PORT d'écoute par défaut
EXPOSE 
EXPOSE 2368

// Définir quel RÉPERTOIRE PARTAGER avec votre host
VOLUME
VOLUME /app/logs

// La commande à exécuter lors du démarrage lors de l’exécution de vos conteneurs Docker
`Doit toujours être présente, et placée en dernière ligne`
CMD 
CMD npm run start

`
RUN apt-get update -yq \
&& apt-get install curl gnupg -yq \
&& curl -sL https://deb.nodesource.com/setup_10.x | bash \
&& apt-get install nodejs -yq \
&& apt-get clean -y

RUN apt update -yq \
&& apt install curl gnupg -yq \
&& curl -sL https://deb.nodesource.com/setup_10.x | bash \
&& apt install nodejs -yq \
&& apt clean -y

RUN apt-get update -yq 
RUN apt-get install curl gnupg -yq 
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash 
RUN apt-get install nodejs -yq 
RUN apt-get clean -y


RUN apt update -yq 
RUN apt install curl gnupg -yq 
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash 
RUN apt install nodejs -yq 
RUN apt clean -y
`