		/**  INSTALLER DOCKER  **/

/// Docker Desktop (Linux, Mac ou Windows) ;


// Create Account
"https://hub.docker.com/"

// Download the desktop application

=> Linux
"https://docs.docker.com/desktop/get-started/"
"https://docs.docker.com/desktop/install/linux-install/"

=> Windows
"https://docs.docker.com/desktop/install/windows-install/"

// Lancer 
wsl --update

/// Docker Community Edition (Linux) ;
// Mettre à jour votre système et installer les prérequis:
`
sudo apt-get update && sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common
`
// Add Docker repository
`
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
`
// Installer Docker sur notre machine
sudo apt update && sudo apt-get install docker-ce docker-ce-cli containerd.io

// Get access to the daemon
sudo usermod -aG docker your-user

