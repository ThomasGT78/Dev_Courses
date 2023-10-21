/*
AuthentificationFonctionEXO.tsx
Une Function
IHM statique : Text, TextInput, Button, Image
+ IHM Dynamique
*/

/*
IMPORTS
*/
import React from 'react';
import { useEffect, useState } from 'react';

import { StyleSheet, ScrollView, View, Text, TextInput, Button, Image, } from 'react-native';

/*
APP
*/
// const UselessTextInput = (props: any) => {
//   return (
//     <TextInput
//       {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//       editable
//       maxLength={40}
//     // multiline
//     // numberOfLines={4}
//     />
//   );
// } /// UselessTextInput

const App = () => {
  //const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // Gestion de l'état, en mode fonctionnel via des HOOKS
  // https://fr.reactjs.org/docs/hooks-state.html
  const [pseudo, setPseudo] = useState('');
  const [mdp, setMdp] = useState('');

  // Variables globales
  // var gPseudo = '';
  // var gMdp = '';

  // Le RETURN de la fonction App
  return (

    <ScrollView >

      <View style={styles.fieldSet}>

        <Text style={styles.legend}>Authentification</Text>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://pascalbuguet.alwaysdata.net/images/authentification.jpg',
            }}
            style={styles.imageAuthentification}
          />
        </View>

        <View style={styles.inputContainer}>
          {/* PSEUDO */}
          <TextInput
            style={styles.input}
            placeholder="Pseudo ?"
            // Gestion de la saisie avec gestion d'état
            onChangeText={
              (texte) => {
                console.log("Valeur : " + texte);
                // gPseudo = texte;
                setPseudo(texte);
              }
            }
          >
            {pseudo}
          </TextInput>
        </View>

        <View style={styles.inputContainer}>
          {/* MDP */}
          <TextInput
            style={styles.input}
            placeholder="Mot de passe ?"
            secureTextEntry={true}
            onChangeText={
              (texte) => {
                console.log("Valeur : " + texte);
                setMdp(texte);
              }
            }
          />
          {mdp}
        </View>

        <View style={styles.buttonsBlock}>
          <View style={[styles.buttonContainer]}>
            <Button
              title="Annuler"
              color={"red"}
              onPress={() => {
                //annuler();
                console.log("Annuler");
                setPseudo("");
                setMdp("");
              }}
            />
          </View>

          <View style={[styles.buttonContainer]}>
            <Button
              title="Valider"
              color={"green"}
              onPress={
                (e) => {
                  console.log("valider");
                }
              }
            />
          </View>
        </View>

        <View>
          <Text style={styles.label}>
            Message :
            {pseudo}{"/"}{mdp}
          </Text>
        </View>

      </View>

    </ScrollView >
  ); /// return

} /// App

/*
STYLES
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsBlock: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  imageContainer: {
    justifyContent: 'center', alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    margin: 5
  },
  inputContainer: {
    margin: 5,
  },
  fieldSet: {
    margin: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000'
  },
  legend: {
    position: 'absolute',
    top: -12,
    left: 10,
    fontSize: 18,
    backgroundColor: '#FFFFFF'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  label: {
    height: 40,
    marginLeft: 5
  },
  imageAuthentification: {
    width: 150, height: 102, marginTop: 20
  }
}); /// styles

/*
FUNCTIONS
*/
function setPseudo(param: string) { 
  console.log(param);
} /// setPseudo

function focus(param: string) {
  console.log(param);
} /// focus

// function valider(param: string) {
//   // alert("Valider");
//   console.log(param);
// } /// valider

function annuler() {
  // alert("Annuler");
  console.log("Annuler");
} /// annuler

export default App;
