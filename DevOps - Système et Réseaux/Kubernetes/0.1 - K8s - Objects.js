		/**  OBJECTS KUBERNETES  **/

Objets existent pour simplifier (dissimuler la complexité) de la gestion d’un parc de conteneurs.


// Node : 
`Machine ou unité de travail du cluster Kubernetes, peut être:
	=> physiques
	=> virtuelles
	=> instances cloud`

// Pod : 
`L'unité la plus petite de K8s, 
=> Encapsule les conteneurs formant votre application conteneurisée 
	=> Partageant ainsi la même stack réseau 
	=> Chaque pod a une adresse IP unique 
	=> Partagent leur stockage (a un volume partagé) 
		=> Tous les conteneurs du pod peuvent accéder aux volumes partagés, pour partager plus facilement des données).`

// Replicas : 
`Nombre d'instances d'un Pod`

// ReplicaSet : 
`S'assure que les réplicas spécifiés sont actifs`

// Deployment : 
`Défini l'état désiré et fournit des mises à jour déclaratives de vos Pods et ReplicaSets`

// Service : 
`Un service peut être défini comme un ensemble logique de pods exposés en tant que service réseau
=> Un niveau d'abstraction au-dessus du pod
=> Fournit une adresse IP et un nom DNS unique pour un ensemble de pods
=> Très facile de gérer la configuration de Load Balancing (équilibreur de charge) 
	=> permet aux pods de scaler plus facilement`

// Endpoint : 
`Représente l'adresse IP et le port d'un service 
=> automatiquement créé lors de la création d'un service avec les pods correspondants.`