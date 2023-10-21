/*
FlatListV3MultiLinesSelectableEXO.tsx
Tableau : une KEY, un autre attribut, un autre attribut encore
Sur plusieurs lignes
Et un Toast lors de la sélection
*/
import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', prenom: 'VIRGINIE', pseudo: 'L\'alsacienne' },
  { id: '2', prenom: 'MAX', pseudo: 'La menace' },
  { id: '3', prenom: 'MICKAEL', pseudo: 'Le brun' },
  { id: '4', prenom: 'PAUL', pseudo: 'Le blond' },
  { id: '5', prenom: 'PIERRE', pseudo: 'Le roux' },
  { id: '6', prenom: 'REDWAN', pseudo: 'Le chauve' },
  { id: '7', prenom: 'THOMAS', pseudo: 'Le malin' },
  { id: '8', prenom: 'WILLY', pseudo: 'L\'ourson' },
  { id: '9', prenom: 'YOUSSEF', pseudo: 'Le russe' },
  { id: '10', prenom: 'ZAID', pseudo: 'Zorro' },
];  /// DATA

// Changement de Couleur
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.text}>
      {item.prenom}{"\n"}{item.pseudo}
    </Text>
  </TouchableOpacity>
);

/*
APP
*/
const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        // Affichage de l’item sélectionné
        onPress={() => {
          setSelectedId(item.id);
          //ToastAndroid.show("[" + item.id + "] " + item.prenom + " " + item.pseudo, 1000);
          //alert("[" + item.id + "] " + item.prenom + " " + item.pseudo);
          ToastAndroid.showWithGravityAndOffset(
            "[" + item.id + "] " + item.prenom + " " + item.pseudo,
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            10,
            200
          );
        }
        }
        style={{}}
      />
    );
  }; /// renderItem

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionnez</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
} /// FlatListBasics


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
  item: {
    height: 65,
    borderWidth: 1,
    borderColor: 'silver',
  },
  text: {
    padding: 3,
    fontSize: 18,
    color: 'silver',
  },
  title: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',
    backgroundColor: 'red',
    textAlign: 'center'
  },
}); /// styles

export default App;
