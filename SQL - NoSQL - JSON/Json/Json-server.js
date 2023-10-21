
// Installation de json-server
npm install -g json-server

// Visualiser le fichier json
json-server --watch data.json

// On peut ensuite visualiser des éléments précis des objet en utilisant l'URL:

"http://localhost:3000/"
"http://localhost:3000/users/"
"http://localhost:3000/users/?name=Jill"
"http://localhost:3000/users/?id=3"