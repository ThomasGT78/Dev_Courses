			/****************
			*	 FlexBox	*
			****************/

// Liste des Styles:
"https://github.com/vhpoet/react-native-styling-cheat-sheet#flexbox"
"https://reactnative.dev/docs/flexbox"

/// Fonctionement
/* Par défaut, TOUS les components React Native ont un style « flex » à 0. */

// flex: 0 => 
/* adapte sa taille en fonction de son style  height, s'il n'en a pas , il l'adapte en fonction de celle de ses Components enfants. */

// flex: 1 => 
/*
Prends toute la place disponible dans le Component parent, 
s'il y a plusieurs Components adjacents, partage la place disponible avec eux.
Fonctionne comme l'unité fr
*/


/// Exemples:
// 2 Boxes: 1/2 - 1/2 (2 parts égales)
/* 
La vue Jaune (Parent) prend la totalité de l'écran
La vue Rouge et Verte se partage l'espace disponibe dans la vue Jaune (soit tout l'écran)
*/
render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 1, backgroundColor: 'green' }}></View>
      </View>
    )
}
 
// 2 Boxes: 1/3 - 2/3
/* 
La vue Jaune (Parent) prend la totalité de l'écran
Dedans, le Rouge prend 1 partie et le Vert en prend 2, il y a donc 3 partie au total
Le Rouge prend 1/3
Le Vert prend 2/3
*/
render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 2, backgroundColor: 'green' }}></View>
      </View>
    )
}

// 2 Boxes: fix + flex
/* le Rouge prend 50dpi en hauteur et l'autre prend le reste (fonctionne comme l'unité fr) */
render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ height: 50, backgroundColor: 'red' }}></View>
        <View style={{ flex: 2, backgroundColor: 'green' }}></View>
      </View>
    )
}