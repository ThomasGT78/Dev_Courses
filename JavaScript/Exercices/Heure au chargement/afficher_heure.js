			/************************************************
			*	AFFICHER L'HEURE Au CHARGEMENT DE LA PAGE	*
			************************************************/


           /// Fonction pour récupérer l'heure actuelle
function getHeure() {
    let maintenant = new Date();                // récupère l'heure du système
    return maintenant.getHours() + ":" + maintenant.getMinutes() + ":" + maintenant.getSeconds();
    // renvoi un string contenant:    heures : minutes : secondes
	
} /// getHeure

// -------------------------
		   

		/// Lance la fonction au chargement de la page
window.onload = function () {
    document.getElementById("pHeure").innerHTML = "Il est " + getHeure();
};