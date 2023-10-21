"https://console.developers.google.com/apis/dashboard?project=localisationgt"

"https://console.developers.google.com/apis/credentials?project=localisationgt"

"https://console.cloud.google.com/apis/dashboard?project=helpful-compass-298914"

Obtenir une clé:
https://console.developers.google.com/flows/enableapi?apiid=maps_backend&keyType=CLIENT_SIDE&reusekey=true&hl=fr&pli=1


/// key API:
// Localisation GT
"https://console.cloud.google.com/apis/credentials?folder=&organizationId=&project=localisationgt"
Clé API 1: AIzaSyDIuAuXEU5anqQNbREmfA-36Z_hZTr-MbQ
API key 2: AIzaSyASVQPDOeFfX-pDvxkp39C7ESGdF0kv7E0

// My First Project (Android SDK)
"https://console.developers.google.com/apis/credentials?project=localisationgt"
Clé API 1: AIzaSyBs6wGScJ6Ly_BzGv4Jb91kfmVkkuvXsz0

/// CODE:
https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript

/// Coordonnées GPS:
// 6 mail des tilleuls 94250 Gentilly:
Latitute: 48.81475	/	Longitude: 2.331168

//Paris:
Latitute: 48.8566969	/	Longitude: 2.3514616

// Lyon:
Latitute: 45.7578137	/	Longitude: 4.8320114

// Santiago de Cali
Latitute: 3.4517923	/	Longitude: -76.5324943

// Sydney
Latitute: -33.8548157	/	Longitude: 151.2164539

//Options de la carte
Il existe deux options requises pour chaque carte: center et zoom.


map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});
Niveaux de zoom
La résolution initiale à laquelle afficher la carte est définie par la zoompropriété, où le zoom 0 correspond à une carte de la Terre entièrement dézoomée, et des niveaux de zoom plus élevés effectuent un zoom avant à une résolution plus élevée. Spécifiez le niveau de zoom sous forme de nombre entier.
1: Monde
5: Masse continentale / continent
10: Ville
15: Rues
20: Bâtiments