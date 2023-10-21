// LA CONSOLE
`Cet écran assez austère que vous obtenez après le démarrage du système est aussi un terminal. On l’a nommé historiquement une console

La console sous Linux est un périphérique gérant le clavier et l'écran de l'ordinateur et propose d'interagir avec l'utilisateur via un terminal en mode texte

la console de Linux propose 7 terminaux en mode texte, appelés aussi les terminaux physiques. 
Ils sont directement sur le clavier branché à l'ordinateur et disponibles à partir des combinaisons de touches : “CTRL+ALT+F1” … jusqu’à “CTRL+ALT+F7”.`

// EMULATEUR DE TERMINAUX
`Ce logiciel est souvent un petit programme qui se lance sur un système d'exploitation et qui permet de se connecter localement ou à distance sur le serveur à administrer. Il devient donc possible de lancer plusieurs terminaux simultanément depuis le même environnement !

Le protocole VNC (Virtual Network Computing) permet notamment de prendre la main à distance sur un ordinateur. C’est un protocole de terminal virtuel graphique.

Le protocole RDP (Remote Desktop Protocol) qui permet de se connecter sur des serveurs Windows Terminal Serveur en est un également.

PuTTY sous Windows
Terminal sous macOS
xterm sous Linux`

// LE SHELL
`Sous Linux, le shell standard est le « Bash » (pour Bourne Again Shell) écrit en C.

Pour exécuter les actions d'administration il va falloir parler le langage de Linux, c'est-à-dire utiliser un interpréteur de commandes, communément appelé shell. 

Le shell est l'outil de communication privilégié entre l'administrateur et le système.

C'est un programme qui est exécuté lors de la connexion de l'administrateur sur une console ou un terminal. Il présente une interface en mode texte qui permet de saisir des commandes.

Le rôle principal du shell est d'exécuter les commandes saisies par l'administrateur lui permettant d'effectuer des appels systèmes vers le noyau.

Mais l'interpréteur de commandes fournit également d'autres fonctionnalités essentielles permettant de faciliter la tâche de l'administrateur:
- possibilité de traiter de manière automatique les résultats des commandes saisies, 
- rediriger ces informations dans des fichiers ou vers d'autres commandes.
- L'écriture de fichiers contenant des suites de commandes, les fameux scripts sh (l'extension sh est un préfixe pour shell) ;
- L'intégration d'un langage de programmation, avec des structures conditionnelles, itératives et la gestion des variables ;
- La gestion des canaux d'entrée/sortie et des redirections via des tubes ;
- La gestion de l'exécution de commandes en substitution avec les caractères back quotes : ``

- command linecompletion: Ce mécanisme permet à l'interpréteur de commandes de compléter automatiquement une saisie à partir des premiers caractères saisis.
- signal handling: Raccourcis clavier permettant d'envoyer des signaux (forme de communication entre processus) qui permettent d'émettre et de recevoir un ordre ou une information pendant leur exécution. Exemple: l'interruption clavier (CTLR+C) permet d'émettre le signal sigint (numéro 2) qui donne l'ordre d'interruption et se termine proprement.
- exit code: Permet de récupérer le code de sortie d'un programme dans une variable nommée $?, pratique pour interpréter le code et déterminer dans quelle condition le programme s'est terminé.
`


// Authentification
`Le shell exécuté lors de la connexion d'un utilisateur sur un terminal est configuré dans le fichier  /etc/passwd`