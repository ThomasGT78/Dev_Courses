		/**  COMPONENT KUBERNTES  **/
`
Kubernetes suit l’architecture master-slave, 
=> Master existe principalement pour gérer votre cluster Kubernetes
=> Slaves (workers ou minions) 
	- Là que pour fournir de la capacité 
	- n'ont pas le pouvoir d'ordonner à une autre node ce qu'il peut ou ne peut pas faire.
`
/**  Les composants du Master  **/

// kube-apiserver : 
`Point d'entrée exposant l'API HTTP Rest de k8s depuis le maître du cluster Kubernetes. 
Différents outils et bibliothèques peuvent facilement communiquer avec l'API`

// kube-scheduler : 
`Responsable de la répartition et l'utilisation de la charge de travail sur les nœuds du cluster selon les ressources nécessaires et celles disponibles`

// kube-controller-manager : 
`Responsable de la plupart des collecteurs qui récupèrent des informations du cluster tout en effectuant des actions de correctives en cas de besoin, en apportant des modifications pour amener l'état actuel du serveur à l'état souhaité. 
Composé de plusieurs contrôleurs, avec différents rôles: 
  => Contrôleur de réplication: 
	- s'assure que vous avez le nombre désiré de répliques sur vos pods, 
  => Contrôleur de Endpoints
  => Contrôleur d’espace de noms
  => Contrôleur de compte de service`
  
// cloud-controller-manager : 
`Mêmes actions que le « kube-controller-manager »  mais pour des fournisseurs de cloud sous-jacents (AWS, Azure, Google Cloud Platform...)`

// etcd : 
`Stocke les informations de configuration pouvant être utilisées par chacun des node du cluster. 
  => Informations conservées sous forme de « clé et valeurs »  à haute disponibilité`

/**  Les composants du Workers  **/

// kubelet : 
`Agent qui s'exécute dans chaque « node »  chargé de relayer les informations au Master. 
  => Interagit avec la base de données etcd du Master pour récupérer des informations afin de connaître les tâches à effectuer. 
  => Assume la responsabilité de maintenir en bon état de fonctionnement les conteneurs d'un pod 
  => S'assure qu'ils tournent conformément à la spécification
  => Il ne gère pas les conteneurs qui n'ont pas été créés par Kubernetes
  => Il communique avec le Master et redémarre le conteneur défaillant en cas de crash`
  
// kube-proxy : 
`Active l'abstraction réseau du Service Kubernetes en maintenant les règles du réseau.
Permet l'exposition des services vers l'extérieur.`

// Environnement d'exécution de conteneurs : 
`Il faut aussi une solution d'exécution d'applications conteneurisées. Plusieurs moteurs d'exécution du conteneur peuvent être utilisés: Docker, rkt...`