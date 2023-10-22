		/**  Arborescance Linux  **/

Elle est définie dans une norme: la FHS (Filesystem Hierarchy Standard)

/
`La racine (plus haut niveau de dossier)`

/boot
`Noyau Linux (permet le démarrage de Linux)`

/bin
`Commandes, programmes (exécutables)`

/dev
`Fichiers contenant les périphériques. Contient des sous-dossiers qui « représentent » chacun un périphérique`

/etc
`Fichiers de configuration`

/home: 
`Repertoire personnels des utilisateurs: stocker ses fichiers personels `

/lib
`Contient les bibliothèques partagées (généralement des fichiers.so) utilisées par les programmes`

/media
`Contient les périphériques amovibles (carte mémoire SD, clé USB...). « Montage » d'un sous-dossier pour chaque nouveau périférique branché`

/ mnt : 
`Un peu comme /media mais pour un usage plus temporaire`

/opt
`Utilisé pour les add-ons de programmes`

/proc
` contient des informations système`

/root
`Dossier personnel « super utilisateur » , réservé aux tâches d'administration`
  => ne pas stocker de fichiers pour root
  => ne pas gérer une boite de messagerie pour root

/sbin
`Contient des programmes système importants`

/tmp
`dossier temporaire utilisé par les programmes pour stocker des fichiers`

/usr
`Un des plus gros dossiers, y vont s'installer la plupart des programmes demandés par l'utilisateur`

/var
`Contient des données « variables », souvent des logs (traces écrites de ce qui s'est passé récemment sur l'ordinateur)`

/sys
`Vitrines virtuel maintenue en mémoir par Linux, permet à l'administrateur Linux de modifier le contenu des fichier et d'intervenir en direct sur le comportement du système.`

// usage
shareable
unshareable
static
variable