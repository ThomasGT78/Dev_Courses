/*
OrientationDetect.tsx => App.tsx
*/
import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
// import Orientation from 'react-native-orientation';

export default class App extends Component {

  constructor(props: any) {
    super(props);
  } /// constructor

  onLayout = (e) => {
    //alert("onLayout");
    //alert(e.nativeEvent.layout.width);
    // console.log("Largeur : " + e.nativeEvent.layout.width);
    // console.log("Hauteur : " + e.nativeEvent.layout.height);

    // let largeur = e.nativeEvent.layout.width;
    // let hauteur = e.nativeEvent.layout.height;

    let largeur = Math.round(Dimensions.get('window').width);
    let hauteur = Math.round(Dimensions.get('window').height);

    if (largeur > hauteur) {
      console.log("Paysage");
    } else {
      console.log("Portrait");
    }
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y
    })
  }

  render() {
    return (
      <View onLayout={this.onLayout.bind(this)}>
        <Text>Quelle orientation ?</Text>
      </View>
    );
  }
} /// App
