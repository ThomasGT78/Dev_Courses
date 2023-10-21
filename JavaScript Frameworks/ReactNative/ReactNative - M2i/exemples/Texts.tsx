/*
Classe Texts.tsx
Classe avec constructeur, props et state
*/
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Texts extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      titleText: props.titleText,
      bodyText: props.bodyText
    };
  } /// constructor

  render() {
    return (
      <View>
        {/* Property 'titleText' does not exist on type 'Readonly<{}>'.ts(2339) */}
        <Text style={styles.titleText} onPress={alerte}>
          {this.state.titleText}
        </Text>
        <Text>
          {"\n"}
          {"\n"}
        </Text>
        <Text style={styles.bodyText} numberOfLines={5}>{this.state.bodyText}</Text>
      </View>
    );
  } /// render
} /// Texts

class App extends Component {
  render() {
    return (
      <Texts titleText="Message" bodyText="UN MESSAGE SPECIAL" />
    );
  }
} /// App

/*
*/
const styles = StyleSheet.create({
  titleText: {
    padding:5,
    height:40,
    fontSize: 20,
    fontWeight: "bold",
    borderColor: 'black',
    backgroundColor: 'dimgray',
    color: 'white',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderStyle: 'dotted',
    textAlign: 'center'
  },
  bodyText: {
    height: 100,
    fontSize: 20,
    fontWeight: "bold",
    borderColor: 'dimgray',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderStyle: 'dotted',
    textAlign: 'center'
  }
});


function alerte() {
  alert("Press");
} /// alerte

export default App;