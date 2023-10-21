/*
FetchCSVExo.tsx
Directement du CSV
Le fichier est stocké ici :
https://pascalbuguet.alwaysdata.net/react/ressources/csv/villes.txt
cp;nom
https://reactnative.dev/docs/network
*/

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, FlatList, Text } from 'react-native';
// On fait joujou avec le state

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://pascalbuguet.alwaysdata.net/react/ressources/csv/villes.txt";
    // Exécution de la requête
    fetch(url)
      // Récupération du flux de la réponse, une pure String
      .then((response) => response.text())
      // Traitement de de la String
      .then((textResponse) => {
        console.clear();
        console.log('response is ', textResponse);
        // Explosion de la String dans un tableau en fonction du saut de ligne
        // "\r\n" ou \n
        // r -> Carriage Return et n -> Line Feed
        let tab = textResponse.split("\n");
        // Création d'une chaîne de caractères à la "tête" JSON
        // Début du tableau JSON
        let texteJSON = "[";
        // Boucle sur le tableau de Strings à partir du 2e élément
        // On saute les entêtes
        for (let i = 1; i < tab.length; i++) {
          // On récupère les champs de l'enregistrement courant
          // par une explosion en fonction du séparateur CSV qui est le ; (FR oblige)
          // Si le champ 0 du ième élement du tab une fois nettoyé est de longeur > 0
          if (tab[i].split(";")[0].trim().length > 0) {
            console.log(tab[i]);
            // On récupère le nom de la ville qui est dans le champ 2
            let nom = tab[i].split(";")[1];
            // On crée par concaténation (quelle horreur !!!) un objet JSON de clé "nom"
            let objetJSON = '{"nom":"' + nom + '"}';
            console.log(objetJSON);
            texteJSON += '{"nom":"' + nom + '"},';
          } // fi
        } /// rof
        // La dernière virgule, on l'enlève
        texteJSON = texteJSON.substr(0, texteJSON.length - 1);
        // Le capitaine crochet de la fin du tableau de JASON
        texteJSON += "]";
        console.log(texteJSON);
        // Le STATE
        // Un VRAI tableau JSON dans la variable nommée "data"
        setData(JSON.parse(texteJSON));
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []); /// useEffect

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator size="large" color="#0F0" /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          // Il faut ajouter une KEY
          renderItem={
            ({ item }) => (<Text style={{ height: 20, borderTopWidth: 1, borderTopColor: 'gray' }}>
              {item.nom}
            </Text>)
          }
        />
      )}
    </View>
  ); /// retrun
}; /// App

export default App;
