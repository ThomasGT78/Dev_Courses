"https://github.com/react-native-maps/react-native-maps/blob/HEAD/docs/installation.md"
/// Instalation
// Via la commande, entrer dans le dossier des projets:
cd C:\Thomas\Projet_React\react_native_projets

// créer nouveau projet
expo init map-app

// Allez dans le dossier du projet
cd map-app

// Ajout de la bibliothèque pour les Maps.
yarn add react-native-maps -E

// Lancer l'App
yarn android (--no-jetifier)

// Pour Android: ajoutez la ligne suivante dans votre AndroidManifest.xml
C:\Thomas\Projet_React\react_native_projets\map-app\android\app\src\debug\AndroidManifest.xml

<uses-permission android:name="android.permission.INTERNET" />

C:\Thomas\Projet_React\react_native_projets\map-app\android\app\src\main
<meta-data android:name="com.google.android.geo.API_KEY" android:value="AIzaSyBs6wGScJ6Ly_BzGv4Jb91kfmVkkuvXsz0"/> 

/// Liste des Components API map:
"https://www.npmjs.com/package/react-native-maps"

// Aide problème
"https://github.com/react-native-maps/react-native-maps/blob/HEAD/docs/installation.md"

react-native unlink react-native-map

"https://dzone.com/articles/how-to-integrate-google-maps-in-react-native"

"https://developers.google.com/maps/documentation/android-sdk/get-api-key"