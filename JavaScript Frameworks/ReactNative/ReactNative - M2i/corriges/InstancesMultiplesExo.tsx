/*
InstancesMultiples.tsx => App.tsx
*/
import React from 'react';
import { View } from 'react-native';
import {Etiquette, Saisie} from './composants/Components'

const App = () => {
  return (
    <View>
      <Etiquette texte="Prénom : " />
      <Saisie init="Votre prénom ?" />
      <Etiquette texte="Nom : " />
      <Saisie init="Votre nom ?" />
      <Etiquette texte="Pseudo : " />
      <Saisie init="Votre pseudo ?" />
    </View>
  );
} /// App




export default App;
