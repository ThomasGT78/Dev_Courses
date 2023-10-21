/*
MapV2.tsx in map-app
Une map + un marker
https://www.npmjs.com/package/react-native-maps

Connaître sa position
https://www.google.com/search?q=comment+connaitre+sa+geolocalisation&oq=comment+connaitre+sa+geolocalisation&aqs=chrome..69i57j0i13j0i22i30l3.8800j0j4&sourceid=chrome&ie=UTF-8
*/

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class App extends Component {

  // Méthode exécutée automatiquement à l’instanciation
  constructor(props: any) {
    // Exécution du constructeur du parent donc de Component
    super(props);
    // Création dans l’objet State
    this.state = {
      region: props.region,
      markers: [
        {
          latlng: { lat: 48.849194, lng: 2.391144 },
          title: 'Moi',
          description: 'Chez moi'
        }
      ]
    };
  } /// constructor

  // getInitialState() {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // } /// getInitialState

  // onRegionChange(region: any) {
  //   this.setState({ region });
  // } /// onRegionChange

  render() {
    return (

      // Paris 
      // lat : 48.8534 
      // lng : 2.3488

      // La place de la nation 
      // lat : 48.848333333333 
      // lng : 2.3958333333333

      // Moi
      // lat : 48.849194
      // lng : 2.391144
      <View>
        <MapView
          style={styles.map}
          initialRegion={
            {
              latitude: 48.849194,
              longitude: 2.391144,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
          }
        >
          <Marker
            style={styles.marker}
            coordinate={{ latitude: 48.849194, longitude: 2.391144 }}
            image={require('./assets/marker_red.jpg')}
          />
        </MapView>
      </View>
    ); /// return
  } /// render

} /// App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: 600,
    width: 300,
    borderColor: 'dimgray',
    borderWidth: 1,
  },
  marker: {
    height: 60,
    width: 30,
  }
}); /// styles
