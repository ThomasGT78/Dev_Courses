/*
Components.tsx => App.tsx
*/
import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

/**
 * 
 */
export class Paragraph extends Component {

  constructor(props: any) {
    super(props);
  } /// constructor

  render() {
    return (
      <Text
        style={{ height: 40, fontSize: 16 }}
      >
        {this.props.text}
      </Text>
    );
  } /// render

} /// Paragraph

export class Input extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
      text: props.text,
    };
  } /// constructor

  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      >
        {this.state.text}
      </TextInput>
    );
  } /// render

} /// Input


export class Etiquette extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Text style={{ height: 40 }}>
        {this.props.texte}
      </Text>
    );
  }
} /// Etiquette


export class Saisie extends Component {
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
