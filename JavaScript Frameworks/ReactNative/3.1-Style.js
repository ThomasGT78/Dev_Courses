			/************
			*	Style	*
			************/
		
/* le style ne peut être utiliser que sur les Components React Native, pas sur les Components Custom . 
Il faut appliquer le style sur le component React Native représentant la vue de votre component */

// Liste des Styles:
"https://github.com/vhpoet/react-native-styling-cheat-sheet"

// Inline Style

render() {
    return (
        <View style={{ marginTop: 20 }}>
            <TextInput style={{ marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 }} placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => {}}/>
        </View>
    )
 }
 
// 1 External Style 
<TextInput style={ styles.textinput } placeholder='Titre du film'/>

const styles = {
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
}

// 2 External Styles
<TextInput style={[styles.textinput, styles.textinput2]} placeholder='Titre du film'/>

const styles = {
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
  },
  textinput2: {
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
}

// Mix Inline and External Style

<TextInput style={[styles.textinput, { marginBottom: 10 }]} placeholder='Titre du film'/>

			/****************
			*	StyleSheet	*
			****************/

/* StyleSheet est une API React Native permettant d'augmenter les performances de vos styles dans votre application en associant votre style à un identifiant. Elle reste facultative mais il vaut mieux l'utiliser sur TOUS nos styles externalisés. */

// Comment ça marche ?

/* Sans StyleSheet, à chaque fois que votre application appelle un style, un nouvel objet avec votre style est créé. 
Avec StyleSheet, votre style est associé à un identifiant. Chaque fois que votre application appelle votre style, StyleSheet utilise l'identifiant pour récupérer l'objet avec votre style. */

// La première étape:  Importer
import { StyleSheet, View, TextInput, Button } from 'react-native'

// 2ème Étape: Modifier la déclaration de la constante «styles»

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    borderColor: '#000000',
    borderWidth: 1,
  }
})