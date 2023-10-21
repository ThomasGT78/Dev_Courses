				/************************************
				*	 Ionic React vs React Native	*
				************************************/
"https://ionicframework.com/resources/articles/ionic-react-vs-react-native"


/// Différence entre REACT NATIVE et IONIC REACT
// Ionic React et React Native sont deux excellentes options pour créer des applications, mais elles diffèrent à certains égards importants.
// L'écosystème React dispose de deux méthodes principales pour créer des applications mobiles multiplateformes: Ionic React et React Native. Cependant, les deux projets ont des objectifs, des fonctionnalités et des capacités différents

// Alors que certains frameworks cross-platforms se contentent d'utiliser des composants web (je pense notamment à Ionic), React Native utilise les composants mobiles natifs. S'il y a bien une information à retenir sur React Native, c'est celle-là.


/// IONIC REACT
// Ionic React est un projet d'interface utilisateur open source et d'API native composé de composants d'interface utilisateur multiplateformes et de fonctionnalités natives pour la création d'applications Web iOS, Android, Electron et progressives à l'aide de React et de la technologie Web standard.

// Ionic React est la version officielle React du populaire Ionic Framework

// Alimente des applications critiques pour des entreprises comme Amtrak, AAA, Burger King, Home Depot, etc.

/// REACT NATIVE
// React Native est un projet open source publié en 2015 par Facebook dans le but d'ajouter le rendu de contrôle de l'interface utilisateur iOS et Android via React et JavaScript afin d'accélérer le développement d'applications sur Facebook. React Native peut être intégré dans des applications natives existantes ou utilisé pour créer des applications à partir de zéro.

// Étant donné que React Native n'utilise pas d'éléments DOM pour le rendu, il nécessite l'utilisation d'une bibliothèque de rendu différente de celle de React basée sur le Web traditionnelle.

// React Native est utilisé dans des entreprises telles que Shopify, Facebook et Wix.

/// Ionic React vs React Native

// Ionic React est d'abord Web, ce qui signifie qu'il implémente des modèles d'interface utilisateur iOS et Android natifs à l'aide d'une technologie Web multiplateforme basée sur des normes au lieu d'accéder directement aux contrôles de l'interface utilisateur de la plate-forme

// React Native fournit une abstraction via React qui contrôle directement les contrôles de l'interface utilisateur de la plate-forme

++++++++++ React Native
// L'approche de React Native présente certains avantages:
	// Étant donné qu'il utilise principalement des contrôles iOS et Android standard, dans certains cas, les performances peuvent être plus élevées.
	// L'interfaçage avec les contrôles d'interface utilisateur d'une application native existante est plus facile
	// Les applications créées avec React Native seront les plus proches des applications de plate-forme de stock

---------- React Native
// Il y a cependant quelques inconvénients à cette approche:
	// Les contrôles natifs sont plus difficiles à personnaliser que la plupart des développeurs et concepteurs Web habitués (applications React Native plus difficiles à concevoir avec des expériences d'interface utilisateur personnalisées)
	// React Native n'est pas un véritable environnement de navigateur 
		// =>  les techniques standard CSS, HTML et DOM ne peuvent pas être utilisées (bien que React Native ait un utilitaire de type CSS)
		// => le code Web et les bibliothèques React existants ne seront probablement pas portables vers React Native sans une personnalisation lourde
	// React Native n'utilise pas directement les outils de développement Web traditionnels, mais dispose d'un support personnalisé pour l'intégration avec un débogueur Chrome, mais nécessitera une exécution dans un émulateur ou sur un appareil contrairement à Ionic React et ne sera pas une véritable expérience de débogage de navigateur
	// React Native est une plateforme et un écosystème autonomes et doit être autonome pour réussir sur le long terme
	// Les développeurs React Native devront trouver des bibliothèques qui le prennent explicitement en charge
		
++++++++++ Ionic React
// Ionic React est le plus similaire au développement d'applications Web React traditionnelles, car les applications Ionic React sont des applications Web React: 
	// => offrira à un développeur Web une expérience de développement rapide et familière directement dans Chrome ou le navigateur de son choix
	
	// => de nombreuses applications peuvent intégrer une partie importante de leurs fonctionnalités directement dans le navigateur
	
	// => Ionic React peut également être facilement ajouté à n'importe quelle application React existante sur le Web
	
	// => Ionic React est basé sur la technologie Web et l'ensemble de la plate-forme Web, il ne nécessite pas de parier sur une nouvelle plate-forme
	
	// => React DOM est, de loin, la bibliothèque de rendu la plus populaire pour React. Selon les chiffres d'aujourd'hui (février 20), React DOM est installé 25 millions de fois par mois par rapport aux 1,4 millions de React Native, ce qui représente une différence de 18 fois
		// => Étant donné que React DOM a beaucoup plus d'utilisation, il est logique que la plupart des auteurs de bibliothèques le ciblent en premier. Ainsi, React DOM a la plus large compatibilité avec l'écosystème React
		// => Ionic React fonctionnera probablement avec n'importe quelle bibliothèque React maintenant et à l'avenir, mais React Native peut ne pas le faire
	
	// => Ionic React prend en charge les applications Web progressives de première classe, tandis que React Native ne prend pas du tout en charge les applications Web progressives officiellement.
		// => Les applications Web progressives sont une nouvelle norme pour créer des applications mobiles riches et de qualité native, mais en les distribuant via un navigateur Web au lieu d'un magasin d'applications. Les applications Web progressives présentent des avantages en termes d'engagement des utilisateurs, d'optimisation des moteurs de recherche et de partage, et sont de plus en plus populaires pour les applications grand public et d'entreprise
		// => Ionic React permettrait de créer et de distribuer une application sur les magasins d'applications iOS et Android et sur le Web en tant qu'application Web progressive en même temps et avec le même code
		
// prise en charge multiplateforme
	React Native est une bibliothèque d'interface utilisateur avec une prise en charge officielle des applications de l'App Store iOS et Android uniquement (certains projets non officiels ajoutent une prise en charge du bureau et du Web). En revanche, Ionic React prend officiellement en charge iOS, Android, Electron et le Web à l'aide de la technologie Progressive Web App.

	React Native adopte une approche «apprendre une fois, écrire n'importe où», tandis que Ionic adopte une approche «écrire une fois, exécuter n'importe où». Avec React Native, les développeurs apprennent un ensemble de concepts (dans ce cas, React avec la saveur React Native), puis créent des écrans d'interface utilisateur spécifiquement pour iOS et spécifiquement pour Android.

	En revanche, les applications Ionic React exécutent la même interface utilisateur sur toutes les plates-formes, en utilisant des utilitaires de conception Web, de CSS et de détection de plate-forme réactifs pour permettre aux développeurs de personnaliser une application pour des plates-formes spécifiques s'ils le souhaitent.

	De plus, Ionic React utilise ce que l'équipe Ionic appelle le style adaptatif pour mapper les concepts d'interface utilisateur de base tels que la navigation, les onglets, les barres d'outils et les boutons aux attentes de la plate-forme (telles que la conception de matériaux), tout en permettant une personnalisation complète du concepteur. React Native demande aux développeurs de créer des écrans spécifiquement pour chaque plate-forme.
	
=========
//Similitude: accès et fonctionnalité natifs
	Les applications Ionic React et React Native ont toutes deux un accès et des capacités natifs complets, car les deux projets créent de vrais projets d'applications natives et des binaires.