			/****************************
			*	Créer une App React		*
			****************************/

"https://create-react-app.dev/docs/getting-started/#quick-start"

/// INSTALLER REACT
// Ouvrir l'invite de commande (Windows+R => "cmd")

// Si React est déjà installé globalement, désinstaller le package (pour vous assurer qu'il npx utilise toujours la dernière version)
npm uninstall -g create-react-app
ou 
yarn global remove create-react-app

// Installer la dernière version de React
npm install -g create-react-app
/*ou en local, dans le dossier du projet*/
npm install create-react-app

/// CRÉER L'APP
// Se placer dans le dossier où le projet sera créer
cd C:\Thomas_Dev\Projets_NodeJs

// Créer le Projet
npx create-react-app my-app-name
ou
npm init react-app my-app-name
ou
yarn create react-app my-app-name

/* On peut utiliser un modèle perso pour le projet*/
npx create-react-app my-app --template [template-name]


// Se palcer dans le dossier du projet
cd my-app-name

// Lancer la connexion
npm start

// Ouvrez ensuite le navigateur pour voir votre application
"http://localhost:3000/"