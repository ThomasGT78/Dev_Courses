	/**  Commandes Basiques  **/

/// sudo
`Permet d’obtenir les droits d’administration pour effectuer une tâche qui les nécessite ; par exemple, installer un nouveau logiciel via les packages`

// sudo su
`Super User mode`

exit (ou ctrl+d)
`Exit Super User mode`

/// echo
`Permet d'afficher le contenu des variables
Le nom des variables à afficher est écrit directement à la suite de la commande sous la forme d'arguments`
echo "Hello World"
echo variable_name
echo $SHELL

// Create file and write in it
`Create file and overide`
echo "Hello World" > hello.txt 

`Create or add content`
echo "Hello World" >> hello.txt 

/// cat 
`Display file content`
cat hello.txt

/// cd [folder_name] or [path]
`Change Directory:
Go to the folder called « folder_name » with relative path or absolute_path`
cd /
cd bin
cd /usr/game
cd "/usr/game/Legend Of Tomorrow" 
/* If at least one folder has space in his name, the full path must be between "" */

/* Back to user directory */
cd /home/thomas
cd ~	/* alias for user directory in home */
cd		/* Come back to personal directory */

/// mkdir
`Make directory: to create a directory`
mkdir my_fdir_name
mkdir "My File Name"	/* Not recommended */

/// touch / type (windows)
`Creat a file`
touch new_file.py	/* Linux */
type new_file.py	/* Windows */

/// curl
`Browser: Navigate on web page and display content` 
curl localhost
curl "http://localhost/"


/// pwd
`Print Working Directory 
=> Display the directory where we are working`
/* /home/thomas */

/// which [commande]
`Connaître l'emplacement d'une commande`
which pwd
/* /bin/pwd */

/// ls / dir (windows)
List the files in a folder
`Voir détails dans « 1.3 - Cmd Infos.js »`

/// allias
`Modify in .bashrc to create shortcut commande`
alias ll = 'ls -lrtha';
`Permet d'utiliser la commande « ls -lrtha » en écrivant seulement « ls »`

/// clear / cls
`CLEAR (clean) the terminal of the previews cmd and process`

/// history
`Permett de lister l'historique des commandes précédemment utilisées. Elles sont numérotée.
« ! » + num, pour relancer la commande rapidement`
!1398

/*search in history by keyword*/
CTRL+R 
`find the latest corresponding commande
press again CTRL+R to find earlier ones`

/// Set the bash by default
???



	/**  Paramètres  **/
	
// -i
install