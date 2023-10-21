/*
FetchV3ParamExo.tsx
On passe par un script PHP pour récupérer des données MySQL
Comme FetchV3 mais avec un TextInput et un Button
Le script est situé ici :
https://pascalbuguet.alwaysdata.net/reactPHP/php/GetFewClientsFromMySQL.php
Le paramètre est nommé cp
Le SELECT est le suivant : SELECT nom,prenom,cp FROM clients WHERE cp=?
https://reactnative.dev/docs/network
*/

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, FlatList, View, Text, TextInput, Button, StyleSheet, RefreshControl, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  const [texte, setText] = useState('75011');
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setLoading] = useState(true)

  return (
    <View style={styles.view} >
      <Text style={styles.text}>CP ?</Text>
      <TextInput
        style={styles.inputText}
        defaultValue="75011"
        placeholder="Code postal ?"
        onChangeText={
          (saisie) => {
            setText(saisie);
            console.log("Saisie : " + saisie);
            console.log("Texte : " + texte);
          } /// anonyme
        } /// onChangeText
        value={texte}
      >
      </TextInput>
      <Text style={styles.text}></Text>
      <Button title="Valider" onPress={
        () => valider(texte)
      }>
      </Button>
      <Text style={styles.text}></Text>
      {isLoading ? <ActivityIndicator size="large" color="#0F0" /> : (
        <FlatList
          style={styles.flatList}
          data={data}
          keyExtractor={({ id_client }, index) => id_client}
          renderItem={({ item }) => (<Text style={{ height: 20, borderTopWidth: 1, borderTopColor: 'gray' }}>{item.cp} - {item.nom}</Text>)}
          extraData={refresh}
        />
      )}
    </View>
  ); /// Return


  /**
   * 
   */
  function valider(pCP: string) {
    setLoading(true);
    setRefresh(false);
    console.log("Valider");
    let url = "http://pascalbuguet.alwaysdata.net/reactPHP/php/GetFewClientsFromMySQL.php?cp=" + pCP;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("json : ");
        console.log(json);
        setLoading(false);
        setData(json);
        setRefresh(true);
      })
      .catch((error) => console.error(error))
  } /// valider

}; /// App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    padding: 10,
  },
  text: {
    height: 20,
  },
  inputText: {
    borderColor: 'dimgray',
    borderWidth: 1,
    height: 40,
    color: 'black'
  },
  flatList: {
    borderWidth: 1,
    borderColor: 'dimgray',
    backgroundColor: '#FFF',
  },
}); /// styles

export default App;
