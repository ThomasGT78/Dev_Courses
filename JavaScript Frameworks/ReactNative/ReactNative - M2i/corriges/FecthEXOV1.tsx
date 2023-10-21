/*
FetchEXOV1.tsx
On récupère directement des données d'un fichier JSON distant (pays.json)
avec les clés suivantes iso2, nom, capitale
https://reactnative.dev/docs/network
https://pascalbuguet.alwaysdata.net/reactPHP/php/GetModulesFromJsonFile.php
*/

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var i = 0;
  useEffect(() => {

    const url = "https://pascalbuguet.alwaysdata.net/react/ressources/json/pays.json";
    //const url = "https://pascalbuguet.alwaysdata.net/react/ressources/json/pays.json";
    //const url = "http://127.0.0.1/reactPHP/php/GetModulesFromJsonFile.php";
    fetch(url)
      .then((response) => response.json())
      .then((json) => { setData(json); console.log(json); })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator size="large" color="#00F" /> : (
        <FlatList
          data={data}
          keyExtractor={({ iso2 }, index) => iso2}
          renderItem={({ item }) => (<Text style={{ height: 20, borderTopWidth: 1, borderTopColor: 'gray' }}>{item.nom}</Text>)}
        />
      )}
    </View>
  );
};

export default App;
