/*
FetchCSVV1.tsx
Directement du CSV
Le fichier est stocké ici :
https://pascalbuguet.alwaysdata.net/react/ressources/csv/villes.txt
cp;nom
https://reactnative.dev/docs/network
*/

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [texte, setText] = useState("");
  useEffect(() => {
    const url = "https://pascalbuguet.alwaysdata.net/react/ressources/csv/villes.txt";
    fetch(url)
      .then((response) => response.text())
      .then((textResponse) => {
        console.clear();
        console.log('response is ', textResponse);
        let d = new Date();
        setText(textResponse + "\n" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
        console.log('response is ', texte);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator size="large" color="#0F0" /> : (
        <Text>Data CSV : {"\n"}{texte}</Text>
      )}
    </View>
  ); /// render
}; /// App

export default App;
