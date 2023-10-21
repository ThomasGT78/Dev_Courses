/// Importer les liens CDN sur https://reactjs.org/docs/cdn-links.html et placer les dans le <head> d'un fichier HTML
ou
/// Télécharger les bibliothèques et les stocker localement


// React: 
/* cœur de React, l'API qui permettra de gérer les composants*/

CDN:
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>

LOCAL:
<script src="../libs/react.development.js"></script>


// React DOM:
/*l'API qui est responsable de générer les composants dans le DOM, permet d’afficher des éléments React*/

CDN:
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

LOCAL:
<script src="../libs/react-dom.development.js"></script>


//Babel:
/* cet outil permet d'utiliser les dernières syntaxes de JS dans le navigateur (ES6+)*/

CDN:
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>

DOWNLOAD:
Go to the link and save under...
"https://unpkg.com/babel-standalone@6.26.0/babel.min.js"

Install via NPM: 
npm install --save @babel/standalone

LOCAL:
<script src="../libs/babel.min.js"></script>


// ATTENTION!!! NE PAS UTILISER BABEL SI...

Si vous utilisez Babel en production, vous ne devriez normalement pas utiliser @babel/standalone. Au lieu de cela, vous devez utiliser un système de construction fonctionnant sur Node.js, tel que Webpack, Rollup ou Parcel, pour transpiler votre JS à l'avance.

Cependant, il existe des cas d'utilisation valides pour @babel/standalone :

-Il fournit un moyen simple et pratique de créer des prototypes avec Babel. En utilisant @babel/standalone, vous pouvez commencer à utiliser Babel avec une simple balise de script dans votre code HTML.
-Les sites qui compilent le JavaScript fourni par les utilisateurs en temps réel, comme JSFiddle , JS Bin , le REPL sur le site Babel , JSitor , etc.
-Applications qui intègrent directement un moteur JavaScript tel que V8 et qui souhaitent utiliser Babel pour la compilation
-Les applications qui souhaitent utiliser JavaScript comme langage de script pour étendre l'application elle-même, y compris tous les avantages fournis par ES2015.
-Autres environnements non-Node.js ( ReactJS.NET , ruby-babel-transpiler , php-babel-transpiler , etc.).