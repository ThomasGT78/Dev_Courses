		/**  Create my Image  **/

// Liste of Official images to use as base
"https://hub.docker.com/search/?type=image&image_filter=official&q="

/// Dockerfile

// Create Dockerfile
In a new project folder
	=> create a new file named « Dockerfile » 
	
// Create .dockerignore
new file named .dockerignore
`permet de ne pas copier certains fichiers et/ou dossiers dans notre conteneur lors de l’exécution de l'instruction ADD`
	
// Enter the file and write instructions:
FROM alpine:3.14
`Get an existing image named « alpine:3.14 » 
To use it as a base to creat ours`


`Command to print « Hello World »`
CMD [ "echo", "Hello World!" ]

// In the Terminal write command
docker build -t [image_new_name] .
`
-t	=> to rename the image
.	=> to build the image in the reference folder (repository where is the Dockerfile) like at the root of the project

Quand la commande docker build est executés:
	=> Docker va crée un conteneur pour chaque instruction, 
	=> résultat sauvegardé dans une layer
=> Résultat final = Ensemble de layers qui construisent une image Docker complète.

Avantages: 
- Si une layer ne bouge pas entre deux builds, Docker ne la reconstruira pas. 
- Seules les layers situées après une layer qui se reconstruit seront elles aussi reconstruites.

=> Créer de nouvelles images très rapidement, sans devoir attendre indéfiniment le build de votre image.
`

// Visualize the image
docker image

// Start the image
docker run [image_new_name]

