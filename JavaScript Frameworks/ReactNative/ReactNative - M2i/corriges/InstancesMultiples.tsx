/*
InstancesMultiples.tsx => App.tsx
*/
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import {Paragraph, Input} from './composants/Components'

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


class Etiquette extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      texte: props.texte,
    };
  }

  render() {
    return (
      <Text style={{ height: 40 }}>
        {this.props.texte}
      </Text>
    );
  }
} /// Etiquette


class Saisie extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
      init: props.init,
    };
  }

  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder={this.props.init}
        autoFocus={true}
        onChangeText={(text) => this.setState({ text })}
      />
    );
  }
} /// Saisie

export default App;
