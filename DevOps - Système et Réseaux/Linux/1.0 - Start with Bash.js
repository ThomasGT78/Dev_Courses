// Normes POSIX de définition des commandes (Utility Conventions)
Les commandes doivent être définies telles que :
- le nom de la commande doit comporter entre 2 et 9 caractères 
- le nom de la commande doit comporter uniquement des caractères minuscules et des chiffres 
- les options de la commande doivent être définies avec un seul caractère alphanumérique 
- les options doivent être précédées du caractère « - »
etc...

// 1ère info du prompt du SHELL

seb@thor:~$ 

- connecté avec l'utilisateur « seb » 
- « @ » est un séparateur
- sur un équipement dont le "hostname" est thor
- « : » est un séparateur
- « ~ » symbolise le répertoire personnel de l'utilisateur (« home », « Mes documents ) sur lequel je me situe 
- « $ » est le "delimiter", il m'indique que je suis un utilisateur non privilégié.
  « # » Indique Avec le compte « root » 

// $PS1 
Toute cette configuration est stockée dans un fichier et dans une variable gérée par le shell Bash: « $PS1 »

/* pour modifier le prompt il faut modifier les donnés de PS1 en écrivant dans le terminal*/
export PS1= "\u@\h:\w\$"
/* ou dans le fichier .bashrc pour un effet permanent */

