/*
TextInputClasseBasicExo.tsx => App.tsx
*/
import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ height: 40, fontSize: 15, textAlign: 'center' }}>Citation de Rabelais,{"\n"} Abbaye de Thélème</Text>
      <BasicTextInput texte="Fay ce que vouldras" />
    </View>
  );
} /// App

class BasicTextInput extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
      texte: props.texte,
    };
  } /// constructor

  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      // placeholder="Saisissez votre pseudo !"
      // autoFocus={true}
      // onChangeText={(text) => this.setState({ text })}
      >
        {this.state.texte}
      </TextInput>
    );
  } /// render

} /// BasicTextInput


export default App;
