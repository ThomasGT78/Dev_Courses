# # Get image based on Debian
# FROM debian:10

# # Install Node.js
# RUN apt update -yq \
# && apt install curl gnupg -yq \
# && curl -sL https://deb.nodesource.com/setup_10.x | bash \
# && apt install nodejs -yq \
# && apt clean -y

# ADD package.json /app/
# # Ajoute les sources de notre application locale dans le dossier /app/ de l'image
# ADD . /app/

# # Me positionne dans le dossier app (comme cd dans le terminal)
# WORKDIR /app

# #Iinstalle le package du projet Node.js
# RUN npm install 

# # Indique le port sur lequel votre application écoute
# EXPOSE 2368
# # Indique quel répertoire vous voulez partager avec votre host
# VOLUME /app/logs

# # La commande à exécuter lors du démarrage
# CMD npm run start

# Dans le terminal, lancer la commande:
#> docker build -t debian-nodejs-image .
#> docker run -p 2368:2368 debian-nodejs-image






# Use an official Debian-based image as the base image
FROM debian:bullseye-slim

# Update the package list
RUN apt-get update

# Install Node.js and npm using NodeSource repository
RUN apt-get install -y curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_current.x | bash - \
    && apt-get install -y nodejs\
    && apt-get clean\
    && node -v\
    && npm -v

# Set a working directory (optional)
WORKDIR /app

# Your further Dockerfile instructions here
# CMD npm run start