
// en React Native, on appelle tout simplement les propriétés d'un component des props.

// On utilise ici 2 props: style et numberOfLines
<Text style={styles.description_text} numberOfLines={6}>Description</Text>

// Comparaison à un objet
class Text {
    var style;
    var numberOfLines;
}
// Et que l'on avait fait ceci :
var text = new Text();
text.style = styles.description_text;
text.numberOfLines = 6;

