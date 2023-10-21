npm: NodeJs Package Manager

npm -v : 6.14.8 (version npm)
node -v: v14.15.1 (version Node)

npm init -y --save
(y: pour installer automatiquement les paramètres)

npm install express --save
npm install ejs --save

npm install body-parse --save

npm install mysql --save

npm install mongodb --save
npm install mongoose --save
npm install jshint --save

npm install jquery
npm install jsdom
(jsdom: pour créer un objet de fenêtre factice que jquery peut utiliser)

npm install oauth --save
(Api)

npm list
(affiche les modules installés)

netstat -a
voir les ports libres



const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const $ = require('jquery');

Lancer un projet:
cd cheminDuFichier
node nomDuFichier