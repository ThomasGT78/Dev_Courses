	/**  Commandes Basiques  **/


// ls
`List the files in a folder`

ls --all => ls -a	 
`Affiche les dossiers cachés`

-F : 
`indique le type d'élément
images/		Examples@
(/: dossier - @: raccoucis`

-l : 
`liste détaillée`

-h : 
`Human readable => affiche la taille en Ko, Mo, Go…`
ls -lh

-t
`Trie par date de dernière modification`

-r
`Renverse l'ordre d'affichage des fichiers`

/* Les paramètres s'ajoutent à la suite */
-larth

// pwd
`Afficher le dossier actuel`
/* /home/thomas */

// which [commande]
`Connaître l'emplacement d'une commande`
which pwd
/* /bin/pwd */

// echo
`Permet d'afficher le contenu des variables
Le nom des variables à afficher est écrit directement à la suite de la commande sous la forme d'arguments`

echo $SHELL

// $SHELL
`Indique sur quel shell vous êtes connecté en montrant le nom de la commande lancée pour le Shell`

// /bin/bash
`Lancer l'interpréteur de commandes Bash en lui passant une option « -–version » permettant d'afficher les informations concernant ce programme`

// file
`Liste les fichiers dans un répertoire et donne des informaton à leur sujet`

// type
`Donne les informations sur le type d'une commande`
type echo

// id
`Commande externe qui permet de relever les informations concernant le compte utilisateur qui est connecté`

// du
`Disk Usage: info sur la taille occupée par les dossiers`
-h
`Human readable to display the size`

-a 
`Afficher la taille des dossiers ET des fichiers`

-s
`Avoir juste la somme totale`

// help
`Liste des commandes internes intégrées au Shell`

// help commandeName (commande interne)
`Permet de réccupérer les informations sur les options et le fonctionnement de la commande choisie`
help echos

// commandeNamme --help (commande externes)
id --help

// man
`manuelle UNIX, plus détaillé que la commande « help »`
man id

// history
`Permett de lister l'historique des commandes précédemment utilisées. Elles sont numérotée.
« ! » + num, pour relancer la commande rapidement`
!1398
!1398

/*search in history by keyword*/
CTRL+R and write the keyword
`find the latest corresponding commande
press again CTRL+R to find earlier ones`

// PATH
`Contient la liste des répertoires référençant des commandes externes
Permet de trouver les commandes qui existent dans ces répertoires sans avoir à écrire leur chemin.
Il est possible de rajouter des répertoires par la commande:`
export PATH=$PATH:/home/username/foldername(write the file path)
/* in the console (session use)*/
/* in the .bashrc folder (permanent use) */