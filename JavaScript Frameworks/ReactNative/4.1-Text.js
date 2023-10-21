 			/********************
			*	Component Text	*
			********************/
			
/// La syntaxe:
renderItem={({item}) => <Text>{item.title}</Text>}  
//c'est équivalent à
renderItem={function ({item}) { return <Text>{item.title}</Text> }}
 
 // Définir sa taille : 
 /*
 C'est la taille de la police (  fontSize  ). Si vous ne définissez pas de  height  ni de  flex >= à 1 , votre Text va prendre la taille définie par le style  fontSize . 
 (En React Native, les Text ont une  fontSize  par défaut qui vaut 14)
 */