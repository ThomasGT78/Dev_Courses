		/**  MODULE  **/


	/**  MODULE  **/
	
Un module est un fichier contenant du code qui peut être importé dans d'autres fichiers


/// CREATE MY MODULE
`Create a file .py (it can be placed in a package if any exist)
=> Entre your code in functions to call them from another file`

/// IMPORT MY MODULE OR ANY PUBLIC MODULE
`Avec un fichier nommé mon_module.py`
// Importer TOUS les éléments d'un module
import mon_module
resultat = mon_module.ma_fonction()

/* Pour utiliser les méthodes sans avoir besoin du préfixe */
from mon_module import *
resultat = ma_fonction()


// Importer UN élément spécifique d'un module
from mon_module import ma_fonction
resultat = ma_fonction()

// Importer PLUSIEURS éléments spécifiques d'un module
from mon_module import ma_fonction1, ma_fonction2


/// Quelques modules publiques

// os
