	/**  Manage FILES  **/
	
/// Créer/Ouvre un fichier

// open()
fichier = open("hello.txt", "w")
fichier.write("Hello, world!")
fichier.close()

"r"		=> Lire
"r+"	=> Lire et écrire (sans écraser)
"w"		=> Écrire (écraser)
"a"		=> Continuer d’écrire

// with  
`pour fermer automatiquement le fichier à la fin du bloc`

with open("file.txt") as fichier:
    for ligne in fichier:
        /* faire quelque chose avec une ligne */
        print(ligne)

/// Package CSV
`Offre plus de fonctionnalitéspour lire et écrire dans les fichiers .csv`

// Nouvelles fonctions:
open()		 =>	pour ouvrir 
reader()	 => pour lire
DictReader() => lis et détecte les en-têtes
writer()	 => pour écrire 

// reader()
import csv

with open('couleurs_preferees.csv') as fichier_csv:
    reader = csv.reader(fichier_csv, delimiter=',')
    for ligne in reader:
        print(ligne)

// DictReader()
Sauvegarde en tant que dictionnaires:
 - Sait que la première ligne est un en-tête
   => Utilise le nom des colonnes comme « keys »
 - Sauvegarde les autres lignes comme « values » 

with open('couleurs_preferees.csv') as fichier_csv:
	reader = csv.DictReader(fichier_csv, delimiter=',')
	for ligne in reader:
		print(ligne['nom'] + " travaille en tant que " + ligne['metier'] + " et sa couleur préférée est " + ligne['couleur_preferee'])