	/************************************
	*	 Résoudre erreur vagrant ssh	*
	************************************/
	
"vagrant@127.0.0.1: Permission denied (publickey)."


=> Dans le navigateur windows, aller clicker droit sur le fichier « private_key » dans:

cheminProjet\.vagrant\machines\default\virtualbox

// Ex:
C:\Thomas Dev\Projet_Symfony\vagrant-lamp\.vagrant\machines\default\virtualbox

=> propriétés => Sécurité => Avancé
=> Désactiver les héritages
=> Supprimmer toutes les autorisations hérités de cet objet.
=> Ajouter
=> Sélectionner un principal
	=> Nom de l'objet à sélectionner: "Thomas" 
	=> Verifier les noms 
	=> OK