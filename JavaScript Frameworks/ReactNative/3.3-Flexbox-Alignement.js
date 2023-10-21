			/************************
			*	FlexBox Alignement	*
			************************/

// Liste des Styles:
"https://github.com/vhpoet/react-native-styling-cheat-sheet#flexbox"

			/********************
			*	FlexDirection	*
			*********************/
			
//Détermine l'axe principal

// alignement vertical (par defaut)
flexDirection: 'column'

// alignement horizontal
flexDirection: 'row'

render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 2, backgroundColor: 'green' }}></View>
        <View style={{ flex: 3, backgroundColor: 'blue' }}></View>
      </View>
    )
}

			/************************************
			*	justifyContent (Axe Principal)	*
			************************************/
			
//center
"Aligner les éléments au centre"

//flex-start
"Aligner les éléments au début"

// flex-end
"Aligner les éléments à la fin"

// space-between
"Les éléments s'affichent sur tout l'axe et laissent de l'espace entre eux" 

// space-around
"Pareil que  space-between , sauf qu'ici, il y a de l'espace entre eux et entre les extrémités de la vue. L'espace aux extrémités est 2 fois inférieur à l'espace entre les éléments"

// space-evenly
"Petit dernier arrivé récemment. Pareil que  space-around , à la différence que l'espace aux extrémités est le même que celui entre les éléments"


			/************************************
			*	 alignItems (Axe Secondaire)	*
			************************************/

// center
"Aligner les éléments au centre "

// flex-start
"Aligner les éléments au début"

// flex-end
"Aligner les éléments à la fin"

// stretch
"Les éléments s'étirent sur tout l'axe. Attention, cette propriété fonctionne uniquement si vous ne définissez pas de dimension statique sur l'axe secondaire. Ici, il ne faut pas définir de width sur les components enfants"

/// Exemple
render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
        <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
        <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
        <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
      </View>
    )
}
 