	/**  CREATE VIRTUAL ENVIRONMENT (VE)  **/

/**  venv  **/
`module Python pour créer et gérer des environnements virtuels`

/* vérifier si bien installé */
python -m venv --help

// Create VE
python -m venv env_name

// Activate VE
`Linux / Mac OS`
source env_name/bin/activate

`Windows`
env_name\Scripts\activate.bat
OR
env_name\Scripts\activate
/* in PowerShell => exécuter la commande sans .bat 
=> VSC use PowerShell !!!
*/

// SWITCH between VE while open
`Just activate normally another one without deactivate the current one`
=> Go to project directory 1 
cd ..\project1
=> activate VE1
env_name1\Scripts\activate
// SWITCH
=> Go to project directory 2
cd ..\project2
=> activate VE2
env_name2\Scripts\activate