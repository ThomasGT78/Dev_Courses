function init () {
    tableauVilles()
    //$("#btValider").on("click", valider)
}; //init

                /*******************
                *   PLUGIN VILLES  *
                *******************/

            
function tableauVilles () {
    var communesJson = $.get("../ressources/json/1000communes.json" , "json");

    communesJson.done(
        function (data){
            var tabRow = $("<tr>")      	// création de la ligne de Titre du tableau
            var tabHeadVille = $("<th>")    	// création des colonnes Titres Ville, CP et GPS
            var tabHeadCP = $("<th>")       	//
            var tabHeadGPS = $("<th>")      	// 

            tabHeadVille.html("Villes");		//met les valeur de json dans les colonnes
            tabHeadCP.html("Code Postal");  	//
            tabHeadGPS.html("Coordonées GPS");	//

            tabRow.append(tabHeadVille)     	// on insert chaque colonne à la ligne
            tabRow.append(tabHeadCP)        	//
            tabRow.append(tabHeadGPS)       	//

            $("#titreTableauVille").append(tabRow);

            for (i = 0; i < data.length; i++) {
                var tabRow = $("<tr>")      // création de la ligne pour 1 ville
                var tabDataVille = $("<td>")    // création des colonnes Ville, CP et GPS
                var tabDataCP = $("<td>")       //
                var tabDataGPS = $("<td>")      // 

                tabDataVille.html(data[i].ville_nom_reel);  //met les valeur de json dans les colonnes
                tabDataCP.html(data[i].ville_code_postal);  //
                tabDataGPS.html(`Longitude : ${data[i].ville_longitude_deg} / Latitude : ${data[i].ville_latitude_deg}`);   //

                tabRow.append(tabDataVille)     // on insert chaque colonne à la ligne
                tabRow.append(tabDataCP)        //
                tabRow.append(tabDataGPS)       //

                $("#villes").append(tabRow);     // on insert la ligne et ses colonnes dans le tableau
            } // for

            $('#table_id').DataTable();			/// appel du PLUGIN
        }  // function data
        
    )  // communesJson.done

    communesJson.fail(
        function () {
            $("#lblMessage").html("Erreur de chargement du fichier des Villes")
        }
    )  // communesJson.fail

}  // function tableauVilles

$(document).ready(init)

/* PLUGIN *

$(document).ready(function () {
    $('#table_id').DataTable();
});

*/