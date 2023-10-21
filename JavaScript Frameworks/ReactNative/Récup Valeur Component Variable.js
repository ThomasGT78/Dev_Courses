class Search extends React.Component {
	
    constructor(props) {
        super(props)
        this.searchedText = ""  
    }

    __searchTextInputChanged(text){
        this.searchedText = text
    }
	
    _loadText() {
        if (this.searchedText.length > 0) {
            console.log(this.searchedText)
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput 
                    onChangeText={(text) => this.__searchTextInputChanged(text)} 
                    style={styles.textinput} 
                    placeholder='Titre du film'
                />
                <Button title='Rechercher' onPress={() => this._loadText()} />
                
            </View>
        )
    }
}