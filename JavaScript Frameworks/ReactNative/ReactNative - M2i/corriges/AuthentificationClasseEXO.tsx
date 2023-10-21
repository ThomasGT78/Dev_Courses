/*
AuthentificationClasseEXO.tsx
IHM statique : Text, TextInput, Button, Image
IHM dynamique : Focus, Clic Button, ...
*/

/*
IMPORTS
*/
import React, { Component } from 'react';

import { StyleSheet, ScrollView, View, Text, TextInput, Button, Image } from 'react-native';

/*
APP
*/
export default class App extends Component {

  /**
   * 
   * @param props CONSTRUCTOR
   */
  constructor(props: any) {
    super(props);
    this.state = {
      pseudo: '',
      mdp: ''
    }
  } /// constructor


  /**
   * RENDER
   */
  render() {
    return (

      //const [value, onFocus] = React.useState('');

      <ScrollView>

        <View style={styles.fieldSet}>

          <Text style={styles.legend}>Authentification</Text>

          {/* <Text style={{ padding: 10, textAlign: 'center', fontSize: 20 }}>Authentification</Text> */}

          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://pascalbuguet.alwaysdata.net/images/authentification.jpg',
              }}
              style={styles.imageAuthentification}
            />
          </View>

          <View style={styles.inputContainer}>
            {/* <Text>Pseudo : </Text> */}
            <TextInput
              style={styles.input}
              //defaultValue="Pascal"
              placeholder="Saisissez votre pseudo !"
              value={this.state.pseudo}
              onChangeText={
                (valeur) => {
                  // OK mais pas génial
                  //this.state.pseudo = valeur;
                  // C'est mieux mais peut mieux faire
                  //this.setState({ pseudo: valeur });
                  // Très bien
                  this.updatePseudoState(valeur);
                  console.log("Valeur : " + valeur);
                  console.log("State.pseudo : " + this.state.pseudo);
                }}
              onFocus={
                () => setEmpty('Vide')
              }
            />
          </View>

          <View style={styles.inputContainer}>
            {/* <Text>Mot de passe : </Text> */}
            <TextInput
              style={styles.input}
              //defaultValue="Mdp1789?"
              value={this.state.mdp}
              placeholder="Saisissez votre mot de passe !"
              onFocus={
                focus
              }
              onChangeText={
                (valeur) => {
                  // OK mais pas génial
                  //this.state.mdp = valeur;
                  // C'est mieux mais peut mieux faire
                  //this.setState({ mdp: valeur });
                  // Parfait
                  this.updateMdpState(valeur);
                  console.log("Valeur : " + valeur);
                  console.log("State.mdp : " + this.state.mdp);
                }}
            />
          </View>

          <View style={styles.container}>
            <View style={[styles.buttonContainer]}>
              <Button
                title="Annuler"
                color={"red"}
                onPress={
                  () => {
                    console.log("ANNULER");
                    // KO ou presque, les champs et le state ne changent pas, le label oui
                    // OK
                    this.updatePseudoState('');
                    this.updateMdpState('');
                    // KO, rien ne change, ni champs, ni label, ni state
                    // this.setState({pseudo:''});
                    // this.setState({mdp:''});
                    // KO à l'écran
                    // this.state.pseudo = '';
                    // this.state.mdp = '';
                    console.log("State.pseudo : " + this.state.pseudo);
                    console.log("State.mdp : " + this.state.mdp);
                  }
                } /// onPress
              />
            </View>

            <Text>{"   "}</Text>

            <View style={[styles.buttonContainer]}>
              <Button
                title="Valider"
                color={"green"}
                onPress={
                  () => {
                    console.log("VALIDER");
                    valider(this.state.pseudo + "/" + this.state.mdp);
                  }
                } /// onPress
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>{this.state.pseudo + "/" + this.state.mdp}</Text>
          </View>

        </View>

      </ScrollView>
    );
  } /// render

  updatePseudoState(valeur: string) {
    this.setState((state) => {
      // Important : lisez `state` au lieu de `this.state` lors de la mise à jour.
      console.log("Valeur pseudo dans updatePseudoState : " + valeur);
      console.log("State.pseudo dans updatePseudoState : " + this.state.pseudo);
      return { pseudo: valeur }
    });
  } /// updatePseudoState

  updateMdpState(valeur: string) {
    this.setState((state) => {
      // Important : lisez `state` au lieu de `this.state` lors de la mise à jour.
      console.log("Valeur mdp dans updateMdpState : " + valeur);
      console.log("State.mdp dans updateMdpState : " + this.state.mdp);
      return { mdp: valeur }
    });
  } /// updateMdpState

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
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000'
  },
  legend: {
    position: 'absolute',
    top: -10,
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

function focus() {
  //alert("Focus");
  console.log("focus");
} /// focus

/**
 * 
 * @param param 
 */
function setEmpty(param: any) {
  // alert(param);
  console.log(param);
} /// setEmpty

function valider(param: string) {
  // alert("Valider");
  console.log(param);
} /// valider

// function annuler() {
//   // alert("Annuler");
//   console.log("Annuler");
//   //updatePseudoState('');
// } /// annuler
