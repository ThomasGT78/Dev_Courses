// Doc Ionic Framework
"https://ionicframework.com/docs"
"https://ionicframework.com/docs/intro/next#build-your-first-app"
"https://ionicframework.com/react#demo"
/* 
Ionic fonctionne avec des intégrations pour les 3 grands frameworks JavaScript:
	Angular (initialement)
	React
	Vue
*/

// Installer Ionic
"https://ionicframework.com/docs/intro/cli"
"https://ionicframework.com/docs/react/quickstart"

npm install -g @ionic/cli native-run cordova-res
// npm install -g @ionic/cli:		installer Ionic CLI
// native-run:		utilisé pour exécuter des binaires natifs sur les appareils et simulateurs / émulateurs (facultative)
// cordova-res:		utilisé pour générer des icônes d'applications natives et des écrans de démarrage (facultative)
/* 
-g signifie installer globalement . Lorsque les packages sont installés globalement, des EACCESerreurs d'autorisation peuvent se produire.
Envisagez de configurer npm pour qu'il fonctionne globalement sans autorisations élevées. VoirRésolution des erreurs d'autorisation pour plus d'informations. 
*/

/// ionic start photo-gallery tabs --type=react
// Créer une application Ionic React qui utilise le modèle de démarrage «Onglets»
/// --capacitor
// fonctionnalité native
ionic start myApp tabs --type react --capacitor
ionic start photo-gallery tabs --type=react --capacitor

// entrer dans le dossier de l'App
cd myApp

// Lancer l'Application
ionic serve

/// CORDOVA EMULATOR

npm install -g cordova
ionic cordova run android
cordova create myapp
=> puis sortir les fichiers de myapp dans le root
cordova platform add android
cordova build android
=> modifier xml, widget id: io.ionic.starter

io.ionic.starter
io.ionic.photogallery

// ionic cordova emulate android
// cordova prepare android

/// CAPACITOR EMULATOR
A executer dans le doddsier de l'App (cd chemin/myApp)
npm install @capacitor/core @capacitor/cli
npx cap init
=> App name: photo-gallery
=> id: io.ionic.photogallery
npm run build
npx cap add android


ionic cap copy
ionic cap sync
npx cap open android
