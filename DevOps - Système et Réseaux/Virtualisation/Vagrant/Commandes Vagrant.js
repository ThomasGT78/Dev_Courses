		/**  Vagrant  **/
`To create Virtual Machines quickly`


/// Vagrant box
`Image of a VM with a specific OS installed`


/// INITIATE VM
// vagrant init
`Create an init file called « Vagrantfile »` 

/// Configure Vagrantfile
`Set the box that will be used for the new VM`

// Modifier la box de l'OS utiliser 
`(Here we use Linux)`
config.vm.box = "base"
=> change to :
config.vm.box = "ubuntu/focal64"

// décommenter la ligne 46:
=> Donner le chemin du dossier sur l'ordi à synchroniser
=> Donner le nom (si on veut)du dossier de la machine virtuelle
config.vm.synced_folder "./share", "/vagrant_data"

// décommenter la ligne 26:
config.vm.network "forwarded_port", guest: 80, host: 8080


/// Manage VM
// vagrant up
`=>Check if a box is installed
	if not	=> Download the box
			=> Install the box
=> Start the machine`

// vagrant halt	
`Stop the VM`

// vagrant destroy
`Destroy the VM`

// vagrant ssh		
`Ouvrir une session pour accéder à la machine virtuelle`
/* Attention Erreur: voir fichier Droit private_key */

// Exit
`Fermer la connection ssh`

// vagrant suspend
`Mettre en pause la machine virtuelle`

// vagrant resume
`Réactiver une machine virtuelle mise en pause`

// vagrant reload
`recharge après modif dans Vagrantfile`

// vagrant provision
`recharge après modif du fichier provison.sh`


/// ERREURS
set VAGRANT_PREFER_SYSTEM_BIN=0

Remove-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

/// Démontage de la box
vagrant halt

vagrant destroy

// Suppresion des logiciels inutiles
sudo apt autoremove -y

<!-- <?php echo $client->getId() == $invoice->getClient()->getId()? "selected": "" ?> -->

clientDao