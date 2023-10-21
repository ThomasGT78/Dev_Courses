		/**  IMPORT PACKAGE & MODULE  **/

	/**  PACKAGE  **/
`Un package est un dossier contenant un fichier nommé __init__.py. Ce fichier est utilisé pour initialiser le package, et peut contenir du code d'initialisation si nécessaire.
Un package contient des modules (fichiers contenant du code)
`

/// CREATE PERSONAL PACKAGE
In a directory, create a file named « __init__.py »

`All modules must be placed in this folder to be called`

/// INSTALL EXISTING PUPLIC PACKAGES
`Il esxiste une multitude de packages déjà créés et prêts à être utilisés pour résoudre des problèmes spécifiques`
"https://pypi.org/"


// INSTALL package 
`Avec la commande « pip »  dans le TERMINAL:
C'est un gestionnaire de packages Python qui permet de télécharger, installer et gérer des packages`
pip install package_name

// Voir les packages déjà installés
pip freeze

// UNINSTALL package 
pip uninstall package_name

/// IMPORT PACKAGE

// Importer TOUS les éléments d'un package
import package_name
resultat = package_name.module_name.ma_fonction()

/* Pour utiliser les méthodes sans avoir besoin du préfixe */
from package_name import *
resultat = module_name.ma_fonction()

// Importer TOUS les éléments d'un module d'un package
import package_name.module_name
resultat = package_name.module_name.ma_fonction()

// Importer UN élément spécifique d'un module d'un package
from package_name.module_name import ma_fonction

resultat = package_name.module_name.ma_fonction()


/// SOME PBLIC PACKAGES
// Requests
`Package HTTP élégant et simple pour Python. Fréquemment utilisé pour les appels d’interface REST`
// Beautiful Soup
`Package pour récupérer des données de fichiers HTML et XML`
// Pandas
`Outil open source rapide, puissant et accessible pour l’analyse et la manipulation de données`
// Numpy
`Math stuff`

/// VERSIONING
`Pour faciliter le suivi des versions de chacun. 
Les versions sont gérées selon un format strict:`
2.6.3
major.minor.patch

// patch
`Si correction de bug rétrocompatible`

// minor
`Si élément de nouvelle fonctionnalité rétrocompatible`

// major
`Si pas rétrocompatible(« breaking change »): le changement de version peut “casser” un script Python donné. 
Nécessité de réécrire le script en tenant compte des changements`

// Installer différentes version d'un package
pip install requests==2.1.0
`Installera la version 2.1.0`

pip install requests~=2.2
`Installera  la version la plus élevée disponible au-dessus de 2.2
Mais pas 3.0  ni les versions ultérieures`

 pip install requests~=2.1.0
`Installera la version la plus élevée disponible au-dessus de 2.1.0
Mais pas la version 2.2.0  ni les versions ultérieures`

 pip install requests>2.5.0
`Installera la version la plus élevée disponible au-dessus de 2.5.0`

 pip install "requests>2.4.0,<2.6.0"
 /* Attention: "" et , à inclure */
`Installera la version la plus élevée disponible entre 2.4.0 et 2.6.0 (inférieur, donc non inclus)`