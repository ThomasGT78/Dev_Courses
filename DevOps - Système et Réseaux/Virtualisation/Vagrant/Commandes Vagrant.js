/// créer un fichier Vagrantfile
vagrant init

// Modifier la box de l'OS utiliser
config.vm.box = "base"
=>
// Utiliser Linux
config.vm.box = "ubuntu/focal64"


// décommenter la ligne 46:
// Donner le chemin du dossier sur l'ordi à synchroniser
// Donner le nom (si on veut)du dossier de la machine virtuelle
config.vm.synced_folder "./share", "/vagrant_data"

// décommenter la ligne 26:
config.vm.network "forwarded_port", guest: 80, host: 8080


/// Lancer l'installation de la box / lancer la machine virtuelle
vagrant up
vagrant halt	/// Arrêter la machine virtuelle
vagrant destroy	/// Détruire la machine virtuelle
vagrant ssh		/// Ouvrir une session pour accéder à la machine virtuelle
/* Attention Erreur: voir fichier Droit private_key */

vagrant suspend	/// Mettre en pause la machine virtuelle
vagrant resume	/// Réactiver une machine virtuelle mise en pause
Exit	/// Fermer la connection ssh

vagrant reload	/// recharge après modif dans Vagrantfile
vagrant provision	/// recharge après modif du fichier provison.sh


// ERREURS
set VAGRANT_PREFER_SYSTEM_BIN=0

Remove-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

/// Démontage de la box
vagrant halt

vagrant destroy

// Suppresion des logiciels inutiles
sudo apt autoremove -y

<!-- <?php echo $client->getId() == $invoice->getClient()->getId()? "selected": "" ?> -->

clientDao