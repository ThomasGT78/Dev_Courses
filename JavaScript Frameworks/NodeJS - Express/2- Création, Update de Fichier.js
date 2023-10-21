//Création d'un fichier.
///fs.write(filename, data[, options], callback)
// Écriture Asynchrone
const fs = require("fs");

fs.writeFile('asynchrone.txt', 'Si facile de créer un fichier en mode asynchrone !!!', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Données écrites !");
    console.log("Lecture des nouvelles données !");
    fs.readFile('asynchrone.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous write: " + data.toString());
    });
});


//ajoute un enregistrement dans un fichier existant
///fs.appendFile(filename, data, callback)
// Ajout Synchrone
const fs = require("fs");
const nouvelEnregistrement = "Tournesol\n";


fs.appendFile('bd.txt', nouvelEnregistrement, function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("Ajout avec succès !");
});




// FileWriteCopie.js 
// Copie d'un fichier 
const fs = require("fs"); 

fs.readFile('bd.txt', function(err, data) { 
    if (err) { 
        return console.error(err); 
    } 

    // Écriture Asynchrone
    fs.writeFile('bdCopie.txt', data, function(err) { 
        if (err) { 
            return console.error(err); 
        } 
        console.log("Données écrites !"); 
    }); 
}); 