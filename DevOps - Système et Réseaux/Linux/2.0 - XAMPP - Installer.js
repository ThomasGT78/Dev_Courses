	/**  INSTALLER XAMPP  **/
"https://ostechnix.com/install-xampp-in-linux/"

Il faut suivre une prócédure différente pour installer XAMMP:
=> non disponible sous la forme de package directement dans la distribution, 
=> non disponible sous la forme de package en dehors de la distribution

// Télécharger l'installeur
"https://www.apachefriends.org/fr/download_success.html"

/// Dans le terminal
>> cd Téléchargements
>> ls

// Donner les droits d'exécution
>> sudo chmod +x xampp-linux-x64-8.2.4-0-installer.run

// Lancer l'instaleur
sudo ./xampp-linux-x64-8.2.4-0-installer.run

// Lancer xampp (lampp)
sudo /opt/lampp/manager-linux-x64.run
(alias => xampp or lampp)

// Start a server (localhost)
sudo opt/lampp/lampp start
sudo opt/lampp/xampp start	// same
(alias => start/xampp or start/lampp)

// Stop server
sudo opt/lampp/lampp stop
sudo opt/lampp/xampp stop
(alias => stop/xampp or stop/lampp)

    /** Modify launcher name to run xammp **/
XAMMP panel control => Open Application Folder
=> Modify « manager-linux-x64.run » to something shorter:
« xmanager.run » (for exemple)


    /** Create shortcut with an alias to run xammp **/
    
=> Open Terminal
//Open .bashrc_alias file (might be empty)
sudo gedit ~/.bashrc_alias

// write the alias in the file and save it
// I create 2 to work with << lampp >> and << xampp >>
alias lampp="sudo /opt/lampp/manager-linux-x64.run"
alias xampp="sudo /opt/lampp/manager-linux-x64.run"

// Activate alias (to use directly)
source ~/.bashrc_alias


	/** Create shortcut icon *//

// Modify the file « xampp.desktop » existing
sudo gedit /usr/share/applications/xampp.desktop

// ou créate a new file « xampp-control-panel.desktop » 
sudo gedit /usr/share/applications/xampp-control-panel.desktop

// Copy-past this code in the file
[Desktop Entry]
Encoding=UTF-8
Name=XAMPP Control Panel
Comment=Start and Stop XAMPP
Exec=sudo /opt/lampp/manager-linux-x64.run
Icon=/opt/lampp/htdocs/favicon.ico
Categories=Application
Type=Application
Terminal=true
