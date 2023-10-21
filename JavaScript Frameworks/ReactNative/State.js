		/************************************
		*	Différence entre prop et state	*
		************************************/
"Pour contrôler un component, il y a deux types de données. Les props et le state."


/// PROPS
"Les props sont fixées par le component parent et ne peuvent pas être modifiées par le component qui les reçoit." 
"Les props d'un component peuvent aussi être changé; simplement, c'est le component parent qui va les changer."

"Si, dans notre exemple précédent, vous souhaitez changer le film affiché dans un component FilmItem, c'est bien le component parent, le component Search, qui va lui fournir les nouvelles props."

constructor(props) {
        super(props)
        this._films = []
    }

_loadFilms() {
	getFilmsFromApi("star").then(data => {
		this._films = data.results
		this.forceUpdate()

	})
}
// La méthode forceUpdate() permet de forcer un component à se rendre à nouveau. On va de nouveau passer dans la méthode render de notre component. Cette fois  _films  contient les films de l'API et notre liste de données va les afficher. Notez bien que la méthode  forceUpdate()  re-rend TOUT le component. Ici le TextInput, le Button et la FlatList sont re-rendus.


/// STATE
"Dès lors que vous souhaitez modifier votre component et ses données affichées, vous allez utiliser son state"
// setState  
"récupère les modifications de vos données et indique à React que le component a besoin d'être re-rendu avec ces  nouvelles données."

constructor(props) {
    super(props)
    this.state = { films: [] }
}

_loadFilms() {
	getFilmsFromApiWithSearchedText("star").then(data => {
		this.setState({ films: data.results })
	})
}

// Dans le state, on ne gère que des données qui, une fois modifiées, peuvent affecter le rendu de notre component.

class Authentification extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      textPseudo: "",
      textMdp: "",
    }
	
  _getInputPseudo(text) {
    this.setState({ textPseudo: text })
  }
	
  showInputPseudo() {
    if (this.state.textPseudo){
      return(
        <View style={styles.showInput}>
          <Text >
            Pseudo Écris: {this.state.textPseudo}
          </Text>
        </View>
      )
    }
  }
  
  render () {
    return (
      <View style={styles.mainContent}>
	  
        </View>
        <TextInput
          onChangeText={(text) => this._getInputPseudo(text)} 
          style={styles.inputText}
          placeholder="Saisissez votre pseudo"
        />
        </View>
		
        {this.showInputPseudo()}
		
      </View>
    );
  }
  
}