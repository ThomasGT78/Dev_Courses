			/****************
			*	Components	*
			****************/
			
/// Liste des Components Ionic :
"https://ionicframework.com/docs/components"

<IonPage>
// component that creates a div with a class of ion-page (spécifique à React)

<IonHeader>
// représente la navigation supérieure et la barre d'outils, avec "Tab 2" comme titre

<IonToolbar>
// la barre d'outils

<IonTitle>
// Le Titre

<IonContent>
// intégre les aspects visuels de notre application

<IonFab>
// Les fab sont des éléments conteneurs qui contiennent un ou plusieurs boutons fab

<IonFabButton>
// Boutons d'action flottants,représentent l'action principale dans une application

<IonImg>
// chargera une image chaque fois que la balise se trouve dans la fenêtre

<IonIcon>
// Icônes conçues pour une utilisation dans les applications, entièrement open source.
// liste: "https://ionicons.com/"
// Attention les codes components ne sont pas compatible avec React, il suffit de les stocker dans «icon» au lieu de «name» et de supprimer les tirets en les transformants en camelCase.
<ion-icon name="camera-reverse"></ion-icon>
<IonIcon icon={cameraReverse}></IonIcon>

<IonGrid>
// Puissant système de flexbox mobile pour la création de mises en page personnalisées

<IonRow>
// Components horizontal du IonGrid qui contiennent un nombre variavle de colonnes (IonCol)

<IonCol>
// Components cellulaires du système IonGrid qui va dans une IonRow


<IonActionSheet>
// boîte de dialogue qui affiche un ensemble d'options. Il apparaît au-dessus du contenu de l'application et doit être manuellement ignoré par l'utilisateur avant de pouvoir reprendre l'interaction avec l'application

