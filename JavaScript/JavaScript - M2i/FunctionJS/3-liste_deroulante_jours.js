function init () {
	var options = "";

	var tJours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");

	for (var i = 0; i < tJours.length; i++) {
		options += "<option>" + tJours[i] + "</option>";
	}
	document.getElementById("liste").innerHTML = options;
} // init

document.onload (init);